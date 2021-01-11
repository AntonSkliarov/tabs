import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TabsNavItem } from '../TabsNavItem';
import './TabsNav.sass';
import { TAB_PROPTYPES_SHAPE } from '../../propTypesShapes';

export function TabsNav({
  tabsList,
  currentTab,
  handleSelectTab,
  render,
}) {
  const parentElement = useRef(null);
  const [tabItemsElements, setTabItemsElements] = useState(null);
  const [sizes, setSizes] = useState(null);

  const getTabItemsElements = () => {
    const tabItems = parentElement.current.querySelectorAll('li');

    setTabItemsElements(tabItems);
  };

  const getSizes = () => {
    const rootBounds = parentElement.current.getBoundingClientRect();

    const sizes = {};

    Object.values(tabItemsElements).forEach((item, i) => {
      const itemBounds = item.getBoundingClientRect();

      const left = itemBounds.left - rootBounds.left;
      const right = rootBounds.right - itemBounds.right;

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

  return (
      <ul className="tabs-nav" ref={parentElement}>
        {tabsList.map(tab => (
          <TabsNavItem
            key={tab.value}
            tab={tab}
            currentTab={currentTab}
            handleSelectTab={handleSelectTab}
            sizes={sizes}
            render={render}
          />
        ))}
      </ul>
  );
}

TabsNav.propTypes = {
  tabsList: PropTypes.arrayOf(
    TAB_PROPTYPES_SHAPE
  ).isRequired,
  currentTab: TAB_PROPTYPES_SHAPE,
  handleSelectTab: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};
