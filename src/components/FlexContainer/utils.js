import PropTypes from 'prop-types';
export const ColumnSizeType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
export const ViewportSizeType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
export function getClass(styles, className) {
  return styles && styles[className] ? styles[className] : className;
}
export function createProps(propTypes, props, classNames) {
  const newProps = {};
  Object.keys(props).filter(key => key === 'children' || !propTypes[key]).forEach(key => newProps[key] = props[key]);
  const className = classNames.filter(cn => cn).join(' ').trim();
  return Object.assign({}, newProps, {
    className
  });
}
export function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
export function setProps(childProps, props) {
  let values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.keys(values).map(value => {
    if (props[value]) {
      childProps[values[value]] = props[value];
    }
  });
  return childProps;
}