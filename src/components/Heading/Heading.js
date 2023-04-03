import React from 'react';
import PropTypes from 'prop-types';
import { HeadingProps as propTypes } from './props/propTypes';
import { HadingDefaultProps as defaultProps } from './props/defaultProps';
import style from './Heading.module.css';

function Heading(props) {
  const {
    tagName,
    className,
    onClick,
    onDoubleClick,
    title,
    dataTitle,
    dataId,
    a11y
  } = props;

  return React.createElement(tagName, {
    className: `${style.reset} ${className}`,
    onClick,
    onDoubleClick,
    'data-title': dataTitle || title,
    'data-id': dataId,
    ...a11y
  }, title);
}

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
