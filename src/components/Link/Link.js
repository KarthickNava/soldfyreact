
import React from 'react';
import { defaultProps } from './props/defaultProps';
import { propTypes } from './props/propTypes';
import style from './Link.module.css';
import LinkContext from './LinkContext';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) { 
    for (var i = 1; i < arguments.length; i++) { 
      var source = arguments[i]; 
      for (var key in source) { 
        if (Object.prototype.hasOwnProperty.call(source, key)) { 
          target[key] = source[key]; 
        } 
      } 
    } 
    return target; 
  }; 
  return _extends.apply(this, arguments); 
}


export default class Link extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onCallBack = this.onCallBack.bind(this);
  }
  onCallBack(urlOutput, href, e) {
    let {
      onClick,
      hasReload,
      target
    } = this.props;
    let {
      onCallBack
    } = this.context.options;
    if (e && (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
      e && e.stopPropagation();
      return;
    }
    onClick && onClick(e);
    if (!hasReload && target != '_blank') {
      e && e.preventDefault();
    }
    e && e.stopPropagation();
    !onClick && onCallBack && onCallBack(urlOutput, href, e);
  }
  addHttp(url) {
    /* eslint-disable */
    if (!/^(f|ht)tps?:\/\//i.test(url)) {
      url = 'http://' + url;
    }
    /* eslint-enable */
    return url;
  }
  render() {
    let {
      children,
      href,
      target,
      urlData,
      urlName,
      className,
      title,
      download,
      rel,
      dataId,
      customProps,
      ariaLabel
    } = this.props;
    let {
      isLink,
      constructURL
    } = this.context.options;
    let urlOutput = href ? href : constructURL(urlName, urlData);
    let option = {};
    if (download) {
      option.download = true;
    }
    let ignoreKeys = ['children', 'href', 'target', 'urlData', 'urlName', 'className', 'title', 'download', 'rel', 'dataId', 'hasReload', 'customProps', 'option', 'ariaLabel'];
    let others = Object.keys(this.props).filter(key => ignoreKeys.indexOf(key) == -1).reduce((res, key) => {
      res[key] = this.props[key];
      return res;
    }, {});

    //urlOutput = this.addHttp(urlOutput);
    return /*#__PURE__*/React.createElement("a", _extends({
      href: isLink && urlOutput ? urlOutput : 'javascript:void(0);',
      target: target,
      "data-title": title,
      className: `${style.container}  ${className ? className : ''}`
    }, option, {
      rel: rel,
      "data-id": dataId
    }, others, {
      onClick: this.onCallBack.bind(this, urlOutput, href)
    }, customProps, {
      "aria-label": ariaLabel
    }), children);
  }
}
Link.contextType = LinkContext;
Link.defaultProps = defaultProps;
Link.propTypes = propTypes;