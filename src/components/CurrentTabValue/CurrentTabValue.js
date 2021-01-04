import React from 'react';
import PropTypes from 'prop-types';

export function CurrentTabValue({ renderTabValue }) {
  return (
    <>
      {renderTabValue()}
    </>
  )
}

CurrentTabValue.propTypes = {
  renderTabValue: PropTypes.func.isRequired,
}
