import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TabItem.sass';
import { TAB_PROPTYPES_SHAPE } from '../../propTypesShapes';

export const TabItem = ({
  tab,
  currentTab,
  handleSelectTab,
  getHighlighterStyle,
  renderDefaultTabLabel,
  renderTabLabel,
}) => (
  <li className="tab-item">
    <button className={classNames('tab-item__button', {
      'tab-item__button_active': currentTab.value === tab.value,
    })}
      type="button"
      onClick={() => handleSelectTab(tab)}
    >
      {renderTabLabel(tab) || renderDefaultTabLabel(tab)}
    </button>

    <span className="tab-item__highlighter" style={getHighlighterStyle()}></span>
  </li>
);

TabItem.propTypes = {
  tab: TAB_PROPTYPES_SHAPE,
  currentTab: TAB_PROPTYPES_SHAPE,
  handleSelectTab: PropTypes.func.isRequired,
  renderTabLabel: PropTypes.func.isRequired,
  renderDefaultTabLabel: PropTypes.func.isRequired,
  getHighlighterStyle: PropTypes.func.isRequired,
};
