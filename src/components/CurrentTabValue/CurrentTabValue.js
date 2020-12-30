import React from 'react';
import PropTypes from 'prop-types';

export function CurrentTabValue({ value }) {
  return (
    <div className="current-tab">
      {value}
    </div>
  )
}

CurrentTabValue.propTypes = {
  value: PropTypes.string.isRequired,
}
