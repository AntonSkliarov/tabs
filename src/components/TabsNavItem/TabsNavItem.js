import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TabsNavItem.sass';
import { TAB_PROPTYPES_SHAPE } from '../../propTypesShapes';

export const TabsNavItem = ({
  tab,
  currentTab,
  handleSelectTab,
  render,
}) => (
  <li className={classNames('tabs-nav-item', {
    'tabs-nav-item_active': currentTab.value === tab.value,
  })}
    onClick={() => handleSelectTab(tab)}
  >

    {render(tab)}
  </li>
);

TabsNavItem.propTypes = {
  tab: TAB_PROPTYPES_SHAPE,
  currentTab: TAB_PROPTYPES_SHAPE,
  handleSelectTab: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};
