import PropTypes from 'prop-types';
export const propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  dataId: PropTypes.string,
  eleRef: PropTypes.func,
  htmlId: PropTypes.string,
  isCover: PropTypes.bool,
  onClick: PropTypes.func,
  original: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string
};