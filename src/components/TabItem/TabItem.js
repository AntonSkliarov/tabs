import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TabItem.sass';
import { TAB_PROPTYPES_SHAPE, SIZES_PROPTYPES_SHAPE } from '../../propTypesShapes';
import { TRANSITION_STYLE } from '../../helpers/_constants';

export function TabItem({
  tab,
  currentTab,
  handleSelectTab,
  sizes,
  render,
}) {
  const getHighlighterStyle = () => {
    if (!sizes) {
      return {
        left: '0',
        right: '100%',
      };
    }

    const size = sizes[currentTab.value];

    return {
      left: `${size.left}px`,
      right: `${size.right}px`,
      transition: TRANSITION_STYLE,
    };
  };

  return (
    <li className="tab-item">
      <button
        className={classNames('tab-item__button', {
          'tab-item__button_active': currentTab.value === tab.value,
        })}
        type="button"
        onClick={() => handleSelectTab(tab)}
      >
        {render(tab)}
      </button>

      <span className="tab-item__highlighter" style={getHighlighterStyle()}></span>
    </li>
  );
}

TabItem.propTypes = {
  tab: TAB_PROPTYPES_SHAPE,
  currentTab: TAB_PROPTYPES_SHAPE,
  handleSelectTab: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  sizes: SIZES_PROPTYPES_SHAPE,
};
