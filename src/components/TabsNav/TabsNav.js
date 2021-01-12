import React from 'react';
import PropTypes from 'prop-types';
import { TabsNavItem } from '../TabsNavItem';
import './TabsNav.sass';
import { TAB_PROPTYPES_SHAPE } from '../../propTypesShapes';
import { FUNC } from '../../helpers/_functions';

export const TabsNav = ({
  tabsList,
  currentTab,
  handleSelectTab,
  render,
}) => (
  <div className="tabs-nav">
    <ul className="tabs-nav__list">
      {tabsList.map(tab => (
        <TabsNavItem
          key={tab.value}
          tab={tab}
          currentTab={currentTab}
          handleSelectTab={handleSelectTab}
          render={render}
        />
      ))}
    </ul>

    <span className="tabs-nav__highlighter"
      style={FUNC.calcHighlighterStyle(tabsList, currentTab)}
    />
  </div>
);

TabsNav.propTypes = {
  tabsList: PropTypes.arrayOf(
    TAB_PROPTYPES_SHAPE
  ).isRequired,
  currentTab: TAB_PROPTYPES_SHAPE,
  handleSelectTab: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};
