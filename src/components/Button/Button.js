import React from 'react';
import PropTypes from 'prop-types';

export function Button({ label, currentTab}) {
  return (
    <button type="button">
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  currentTab: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
}
