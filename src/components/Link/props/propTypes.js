import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  dataId: PropTypes.string,
  hasReload: PropTypes.bool,
  href: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self']),
  title: PropTypes.string,
  urlData: PropTypes.object,
  urlName: PropTypes.string,
  customProps: PropTypes.object
};