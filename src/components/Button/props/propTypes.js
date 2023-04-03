import { PropTypes } from "prop-types";
export const ButtonProps = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
    children: PropTypes.node,
    dataId: PropTypes.string,
    title: PropTypes.string,
    customClass: PropTypes.string,
    customProps: PropTypes.object,
  };