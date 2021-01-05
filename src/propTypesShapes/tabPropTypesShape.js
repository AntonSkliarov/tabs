import PropTypes from 'prop-types';

export const TAB_PROPTYPES_SHAPE = PropTypes.shape({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}).isRequired;
