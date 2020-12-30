import React from 'react';
import PropTypes from 'prop-types';
import './Button.sass'

export function Button({ tab, handleSelectTab, currentTab}) {
  return (
    <button
      className="tab-button"
      type="button"
      onClick={() => handleSelectTab(tab)}
    >
      {tab.label}
    </button>
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
