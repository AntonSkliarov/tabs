import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TabItem.sass';

export function TabItem({
  tab,
  currentTab,
  handleSelectTab,
  getHighlighterStyle,
  renderDefaultTabLabel,
  renderTabLabel,
}) {

  return (
    <li className="tab-item">
      <button className={classNames('tab-item__button', {
          'tab-item__button_active': currentTab.label === tab.label,
        })}
        type="button"
        onClick={() => handleSelectTab(tab)}
      >
        {renderTabLabel(tab) || renderDefaultTabLabel(tab)}
      </button>
      <span className="tab-item__highlighter" style={getHighlighterStyle()}></span>
    </li>
  )
}

TabItem.propTypes = {
  renderTabLabel: PropTypes.func.isRequired,
  renderDefaultTabLabel: PropTypes.func.isRequired,
  getHighlighterStyle: PropTypes.func.isRequired,
  tab: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  currentTab: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  handleSelectTab: PropTypes.func.isRequired,
}