import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TabItem } from '../TabItem';
import './Tabs.sass';
import { TAB_PROPTYPES_SHAPE } from '../../propTypesShapes';

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
  };

  const getSizes = () => {
    const rootBounds = parentElement.current.getBoundingClientRect();

    const sizes = {};

    Object.values(tabItemsElements).forEach((item, i) => {
      const bounds = item.getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      const key = tabsList[i].value;
      sizes[key] = { left, right };
    });

    setSizes(sizes);
  };

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
      return {
        left: '0',
        right: '100%',
      };
    }

    const size = sizes[currentTab.value];

    return {
      left: `${size.left}px`,
      right: `${size.right}px`,
      transition: transitionStyle,
    };
  };

  return (
    <>
      <ul className="tabs" ref={parentElement}>
        {tabsList.map(tab => (
          <TabItem
            key={tab.value}
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
  tabsList: PropTypes.arrayOf(
    TAB_PROPTYPES_SHAPE
  ).isRequired,
  currentTab: TAB_PROPTYPES_SHAPE,
  handleSelectTab: PropTypes.func.isRequired,
  renderTabLabel: PropTypes.func.isRequired,
  renderDefaultTabLabel: PropTypes.func.isRequired,
};
