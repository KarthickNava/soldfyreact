import React from 'react';
import { defaultProps } from './props/defaultProps';
import { propTypes } from './props/propTypes';
import style from './Image.module.css';
export default class Image extends React.Component {
  render() {
    let {
      alt,
      src,
      className,
      isCover,
      title,
      onClick,
      dataId,
      htmlId,
      eleRef,
      original
    } = this.props;
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      "data-title": title,
      "data-id": dataId,
      className: ` ${className} ${isCover ? style.imgFullSize : style.imgMaxFullSize} `,
      onClick: onClick,
      id: htmlId,
      ref: eleRef,
      "data-original": original
    });
  }
}
Image.propTypes = propTypes;
Image.defaultProps = defaultProps;