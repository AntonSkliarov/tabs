import React from 'react';
import PropTypes from 'prop-types';

export function Tabs({ tabsList, currentTab }) {
  return (
    <ul className="tabs__list">
      {tabsList.map(tab => (
        <li key={tab.label}>
          <button type="button">
            {tab.label}
        </button>
        </li>
      ))}
    </ul>
  )
}

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  )
}
