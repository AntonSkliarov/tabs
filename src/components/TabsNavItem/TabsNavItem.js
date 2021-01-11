import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TabsNavItem.sass';
import { TAB_PROPTYPES_SHAPE, SIZES_PROPTYPES_SHAPE } from '../../propTypesShapes';
import { TRANSITION_STYLE } from '../../helpers/_constants';

export function TabsNavItem({
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
    <li className="tabs-nav-item">
      <button
        className={classNames('tabs-nav-item__button', {
          'tabs-nav-item__button_active': currentTab.value === tab.value,
        })}
        type="button"
        onClick={() => handleSelectTab(tab)}
      >
        {render(tab)}
      </button>

      <span className="tabs-nav-item__highlighter" style={getHighlighterStyle()}></span>
    </li>
  );
}

TabsNavItem.propTypes = {
  tab: TAB_PROPTYPES_SHAPE,
  currentTab: TAB_PROPTYPES_SHAPE,
  handleSelectTab: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  sizes: SIZES_PROPTYPES_SHAPE,
};
