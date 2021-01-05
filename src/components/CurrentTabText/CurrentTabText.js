import React from 'react';
import PropTypes from 'prop-types';
import './CurrentTab.sass';

export const CurrentTabText = ({ renderTabText }) => (
  <>
    {renderTabText()}
  </>
);

CurrentTabText.propTypes = {
  renderTabText: PropTypes.func.isRequired,
};
