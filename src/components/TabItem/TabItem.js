import React from 'react';
import PropTypes from 'prop-types';

export function TabItem({ tab, currentTab }) {
  return (
    <li key={tab.label}>
      <button type="button">
        {tab.label}
      </button>
    </li>
  )
}

TabItem.propTypes = {
  tab: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
}