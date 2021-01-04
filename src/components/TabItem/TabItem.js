import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TabItem.sass';

export function TabItem({ tab, currentTab, handleSelectTab }) {

  return (
    <li className="tab-item" key={tab.label}>
      <button className={classNames('tab-item__button', {
          'tab-item__button_active': currentTab.label === tab.label,
        })}
        type="button"
        onClick={() => handleSelectTab(tab)}
      >
        {tab.label}
      </button>
      <span className="tab-item__highlighter"></span>
    </li>
  )
}

TabItem.propTypes = {
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