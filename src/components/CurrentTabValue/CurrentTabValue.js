import React from 'react';
import PropTypes from 'prop-types';

export function CurrentTabValue({ value }) {
  return (
    <div className="current-tab">
      <p>
        {value}
      </p>
    </div>
  )
}

CurrentTabValue.propTypes = {
  value: PropTypes.string.isRequired,
}
