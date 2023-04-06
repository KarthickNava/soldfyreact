import React from 'react';
import PropTypes from 'prop-types';
import { ButtonProps as propTypes } from './props/propTypes';
import { ButtonDefaultProps as defaultProps } from './props/defaultProps';
import style from './Button.module.css';


const Button = React.forwardRef((props, ref) => {
  const {
    text,
    disabled,
    size,
    onClick,
    children,
    dataId,
    title,
    customClass,
    customProps,
    needBlackHover
  } = props;

  const buttonProps = {
    className: `${style.Button} ${size ? `${style[`Button--${size}`]}` : ''} ${customClass}`,
    'aria-label': title || text || children,
    role: 'button',
    onClick,
    disabled,
    'data-id': dataId,
    ...customProps,
    ref,
  };

  return React.createElement('button', buttonProps, text || children);
});



export default Button;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;