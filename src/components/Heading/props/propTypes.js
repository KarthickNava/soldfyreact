import PropTypes from 'prop-types';
export const HeadingProps = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  dataId: PropTypes.string,
  dataTitle: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  a11y: PropTypes.object
};