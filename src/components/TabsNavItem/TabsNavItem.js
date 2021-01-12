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
  <li className="tabs-nav-item">
    <button
      className={classNames('tabs-nav-item__button', {
        'tabs-nav-item__button_active': currentTab.value === tab.value,
      })}
      type="button"
      onClick={() => handleSelectTab(tab)}
    >
      {render(tab)}
    </button>
  </li>
);

TabsNavItem.propTypes = {
  tab: TAB_PROPTYPES_SHAPE,
  currentTab: TAB_PROPTYPES_SHAPE,
  handleSelectTab: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};
