import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export function TabItem({ tab, currentTab, handleSelectTab }) {
  return (
    <li key={tab.label}>
      <Button
        tab={tab}
        currentTab={currentTab}
        handleSelectTab={handleSelectTab}
      />
    </li>
  )
}

TabItem.propTypes = {
  tab: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  currentTab: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  handleSelectTab: PropTypes.func.isRequired,
}