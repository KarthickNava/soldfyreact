import PropTypes from 'prop-types';
export const BoxProps = {
  adjust: PropTypes.bool,
  align: PropTypes.oneOf(['start', 'end', 'center']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  column: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  dataId: PropTypes.string,
  dataSelectorId: PropTypes.string,
  eleRef: PropTypes.func,
  flexible: PropTypes.bool,
  hidden: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
    if (['xs', 'sm', 'md', 'lg', 'xl'].indexOf(propValue[key]) === -1) {
      return new Error(`Invalid prop \`${propFullName}\` supplied to` + ` \`${componentName}\`. Validation failed.`);
    }
  }),
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  isScrollAttribute: PropTypes.bool,
  scroll: PropTypes.oneOf(['vertical', 'horizontal', 'both', 'none']),
  shrink: PropTypes.bool,
  tagName: PropTypes.string,
  tourId: PropTypes.string,
  preventParentScroll: PropTypes.oneOf(['vertical', 'horizontal', 'both'])
};
export const ContainerProps = {
  align: PropTypes.oneOf(['vertical', 'horizontal', 'both', 'top', 'right', 'bottom', 'left', 'between', 'around', 'baseline']),
  alignBox: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  alignContent: PropTypes.oneOf(['start', 'end', 'center', 'around', 'between']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  dataId: PropTypes.string,
  dataSelectorId: PropTypes.string,
  eleRef: PropTypes.func,
  hidden: PropTypes.array,
  isCover: PropTypes.bool,
  isInline: PropTypes.bool,
  isScrollAttribute: PropTypes.bool,
  scroll: PropTypes.oneOf(['vertical', 'horizontal', 'both', 'none']),
  tagName: PropTypes.string,
  tourId: PropTypes.string,
  wrap: PropTypes.oneOf(['wrap', 'wrap-reverse', 'nowrap']),
  preventParentScroll: PropTypes.oneOf(['vertical', 'horizontal', 'both'])
};