import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TabItem } from '../TabItem';
import './Tabs.sass';

export function Tabs({
  tabsList,
  currentTab,
  handleSelectTab,
  renderDefaultTabLabel,
  renderTabLabel,
}) {
  const parentElement = useRef(null);
  const [tabItemsElements, setTabItemsElements] = useState(null);
  const [sizes, setSizes] = useState(null);
  const transitionTime = 500;
  const transitionStyle = `left ${transitionTime}ms, right ${transitionTime}ms`;

  const getTabItemsElements = () => {
    const tabItems = parentElement.current.querySelectorAll('li');

    setTabItemsElements(tabItems);
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

  const getHighlighterStyle = () => {
    if (!sizes) {
      return {left: '0', right: '100%'}
    }

    const size = sizes[currentTab.label];

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
            renderDefaultTabLabel={renderDefaultTabLabel}
            renderTabLabel={renderTabLabel}
          />
        ))}
      </ul>
    </>
  );
  }

Tabs.propTypes = {
  renderTabLabel: PropTypes.func.isRequired,
  renderDefaultTabLabel: PropTypes.func.isRequired,
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
