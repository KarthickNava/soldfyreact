import React from 'react';
import { ContainerProps as propTypes } from './props/propTypes';
import { ContainerDefaultProps as defaultProps } from './props/defaultProps';

import { createProps, getClass, setProps } from './utils';
import style from './Layout.module.css';

function getContainerClassNames(props) {
  const {
    hidden,
    className,
    isInline,
    isCover,
    alignBox,
    alignContent,
    wrap,
    align,
    scroll,
    preventParentScroll
  } = props;
  const modificators = [className];
  if (hidden) {
    hidden.forEach(key => {
      modificators.push(getClass(style, `hidden-screen-${key}`));
    });
  }
  if (isInline) {
    modificators.push(getClass(style, 'inflex'));
  } else {
    modificators.push(getClass(style, 'flex'));
  }
  if (isCover) {
    modificators.push(getClass(style, 'cover'));
  }
  let alignBoxClassMapping = {
    row: 'rowdir',
    column: 'coldir',
    'row-reverse': 'rowReverse',
    'column-reverse': 'colReverse'
  };
  let alignClass = alignBoxClassMapping[alignBox];
  modificators.push(getClass(style, alignClass));
  if (alignContent) {
    let alignContentClassMapping = {
      start: 'alignStart',
      end: 'alignEnd',
      center: 'alignCenter',
      around: 'alignAround',
      between: 'alignBetween'
    };
    let alignContentClass = alignContentClassMapping[alignContent];
    modificators.push(getClass(style, alignContentClass));
  }
  if (wrap) {
    let wrapClassMapping = {
      wrap: 'wrap',
      'wrap-reverse': 'wrapReverse'
    };
    let wrapClass = wrapClassMapping[wrap];
    modificators.push(getClass(style, wrapClass));
  }
  if (align) {
    let alignClassMapping = {
      horizontal: 'hCenter',
      vertical: 'vCenter',
      both: 'both',
      between: 'between',
      around: 'around',
      right: 'right',
      left: 'left',
      top: 'top',
      bottom: 'bottom',
      baseline: 'baseline'
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
export function getContainerProps(props) {
  return createProps(propTypes, props, getContainerClassNames(props));
}
export default function Container(props) {
  let childProps = getContainerProps(props);
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
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;