import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export function TabItem({ tab, currentTab }) {
  return (
    <li key={tab.label}>
      <Button label={tab.label} currentTab={currentTab} />
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
}