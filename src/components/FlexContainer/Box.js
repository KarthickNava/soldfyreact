import React from 'react';
import { BoxProps as propTypes } from './props/propTypes';
import { BoxDefaultProps as defaultProps } from './props/defaultProps';

import { createProps, getClass, setProps } from './utils';
import style from './Layout.module.css';

function getBoxClassNames(props) {
  const {
    hidden,
    className,
    flexible,
    adjust,
    isFirst,
    isLast,
    shrink,
    column,
    align,
    scroll,
    preventParentScroll
  } = props;
  const modificators = [className];
  if (flexible && !adjust) {
    modificators.push(getClass(style, 'grow'));
    modificators.push(getClass(style, 'basis'));
  } else if (flexible && adjust) {
    modificators.push(getClass(style, 'grow'));
  }
  if (isFirst) {
    modificators.push(getClass(style, 'first'));
  }
  if (isLast) {
    modificators.push(getClass(style, 'last'));
  }
  if (adjust) {
    modificators.push(getClass(style, 'basisAuto'));
  }
  if (shrink) {
    modificators.push(getClass(style, 'shrinkOn'));
  } else {
    modificators.push(getClass(style, 'shrinkOff'));
  }
  if (hidden) {
    hidden.forEach(key => {
      modificators.push(getClass(style, `hidden-screen-${key}`));
    });
  }
  if (column) {
    modificators.push(getClass(style, `col-${column}`));
  }
  if (align) {
    let alignClassMapping = {
      start: 'selfStart',
      end: 'selfEnd',
      center: 'selfCenter'
    };
    let alignClass = alignClassMapping[align];
    modificators.push(getClass(style, alignClass));
  }
  if (scroll) {
    let scrollClassMapping = {
      horizontal: 'scrollx',
      vertical: 'scrolly',
      both: 'scrollboth',
      none: 'scrollnone'
    };
    let scrollClass = scrollClassMapping[scroll];
    modificators.push(getClass(style, scrollClass));
  }
  if (preventParentScroll) {
    let ParentScrollClassMapping = {
      horizontal: 'preventScrollBubbleX',
      vertical: 'preventScrollBubbleY',
      both: 'preventScrollBubbleBoth'
    };
    let parentScrollClass = ParentScrollClassMapping[preventParentScroll];
    modificators.push(getClass(style, parentScrollClass));
  }
  return modificators;
}
export function getBoxProps(props) {
  return createProps(propTypes, props, getBoxClassNames(props));
}
export default function Box(props) {
  let childProps = getBoxProps(props);
  let {
    tagName
  } = props;
  setProps(childProps, props, {
    isScrollAttribute: 'data-scroll',
    eleRef: 'ref',
    dataId: 'data-id',
    tourId: 'data-tour',
    dataSelectorId: 'data-selector-id'
  });
  return /*#__PURE__*/React.createElement(tagName, childProps);
}
Box.propTypes = propTypes;
Box.defaultProps = defaultProps;