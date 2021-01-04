import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TabItem } from '../TabItem';
import './Tabs.sass';

export function Tabs({ tabsList, currentTab, handleSelectTab }) {
  const parentElement = useRef(null);
  const [tabItemsElements, setTabItemsElements] = useState(null);
  const [sizes, setSizes] = useState(null);
  const transitionTime = 500;
  const transitionStyle = `left ${transitionTime}ms, right ${transitionTime}ms`;

  const getTabItemsElements = () => {
    const listItems = parentElement.current.querySelectorAll('li');

    setTabItemsElements(listItems);
  }

  const getSizes = () => {
    const rootBounds = parentElement.current.getBoundingClientRect();

    const sizes = {};

    Object.values(tabItemsElements).forEach((item, i) => {
      const bounds = item.getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      const key = tabsList[i].label;
      sizes[key] = { left, right };
    });

    setSizes(sizes);
  }

  useEffect(() => {
    getTabItemsElements();
  }, []);

  useEffect(() => {
    if (!tabItemsElements) {
      return;
    }

    getSizes();
  }, [tabItemsElements]);

  // // to delete
  // useEffect(() => {
  //   getHighlighterStyle();
  // }, [sizes, currentTab]);

  // props validation
  const getHighlighterStyle = () => {
    if (!sizes) {
      return {left: '0', right: '100%'}
    }

    const size = sizes[currentTab.label];
    console.log(size)
    return {
      left: `${size.left}px`,
      right: `${size.right}px`,
      transition: transitionStyle,
    }
  }

  return (
    <>
      <ul className="tabs" ref={parentElement}>
        {tabsList.map(tab => (
          <TabItem
            key={tab.label}
            tab={tab}
            currentTab={currentTab}
            handleSelectTab={handleSelectTab}
            getHighlighterStyle={getHighlighterStyle}
          />
        ))}
      </ul>
    </>
  );
  }

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentTab: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  handleSelectTab: PropTypes.func.isRequired,
};
