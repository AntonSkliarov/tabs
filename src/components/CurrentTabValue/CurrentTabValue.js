import React from 'react';
import PropTypes from 'prop-types';

export function CurrentTabValue({ defaultRenderTab }) {
  return (
    <>
      {defaultRenderTab()}
    </>
  )
}

CurrentTabValue.propTypes = {
  defaultRenderTab: PropTypes.func.isRequired,
}
