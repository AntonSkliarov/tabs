import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.sass'

export function Button({ tab, handleSelectTab, currentTab}) {
  return (
    <>
      <button
        className="tab-button"
        // className={classNames('tab-button', {
        //   'tab-button_active': currentTab.label === tab.label,
        // })}
        type="button"
        onClick={() => handleSelectTab(tab)}
      >
        {tab.label}
      </button>
      <span className={classNames('highlighter', {
          'highlighter_active': currentTab.label === tab.label,
        })}></span>
    </>
  )
}

Button.propTypes = {
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
