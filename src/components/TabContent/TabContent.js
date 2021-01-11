import React from 'react';
import PropTypes from 'prop-types';
import './TabContent.sass';

export function TabContent({ isSelected, children }) {
  if (isSelected) {
    return (
      <>
        {children}
      </>
    );
  }

  return null;
}

TabContent.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  children: PropTypes.object,
};
