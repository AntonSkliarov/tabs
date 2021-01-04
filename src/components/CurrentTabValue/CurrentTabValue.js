import React from 'react';
import PropTypes from 'prop-types';

export const CurrentTabValue = ({ renderTabValue }) => (
  <>
    {renderTabValue()}
  </>
)

CurrentTabValue.propTypes = {
  renderTabValue: PropTypes.func.isRequired,
}
