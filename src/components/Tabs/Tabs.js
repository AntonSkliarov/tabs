import React from 'react';
import PropTypes from 'prop-types';
import { TabItem } from '../TabItem'

export function Tabs({ tabsList, currentTab, handleSelectTab }) {
  return (
    <ul className="tabs__list">
      {tabsList.map(tab => (
        <TabItem
          key={tab.label}
          tab={tab}
          currentTab={currentTab}
          handleSelectTab={handleSelectTab}
        />
      ))}
    </ul>
  )
}

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentTab: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  handleSelectTab: PropTypes.func.isRequired,
}
