import React from "react";
import PropTypes from "prop-types";
import Image from "../../common/Image/Image";
import Link from "../Link/Link";
import style from "./Banner.module.css";
const Banner = (props) => {
  const { src, alt, href, target, className, imageClass } = props;
  return (
    <Link href={href} target={target} className={className && className}>
      <Image
        src={src}
        alt={alt}
        className={`${imageClass && imageClass} ${style.image}`}
      />
    </Link>
  );
};

Banner.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  imageClass: PropTypes.string,
};

Banner.defaultProps = {
  src: 'https://cdn.soldfy.se/pub/media/restoreit/homebanner/_/1/_1440x234_-home-page-gamming-category-banner.jpg',
  alt: "banner",
  href: "#",
};

export default Banner;
