import React from "react";
import PropTypes from "prop-types";
import { Container, Box } from "../../components/FlexContainer";
import ProductSliderCard from "../../components/ProductSliderCard/ProductSliderCard";
import Image from "../../common/Image/Image";
import Link from "../../components/Link/Link";
import commonStyle from '../ProductSliderPage/ProductSliderPage.module.css'
const FirstBanner = (props) => {
  const { src, alt, href, target, imageClass } = props;
  return (

        <Container alignBox="row">
          <Box className={commonStyle.firstBox}>
            <Link href={href} alt={alt} target={target}>
              <Image className={imageClass} src={src} />
            </Link>
          </Box>
          <Box className={commonStyle.cardWidth}>
            <ProductSliderCard
              productimageSrc="https://cdn.soldfy.com/media/catalog/product/cache/cb1ade73e5419e241f9fbeab0570842b/a/p/apa270-apple-airpods-pro-with-magsafe-case-_2021__1.jpeg"
              productimageAlt="product"
              productText="Apple"
              productLeftedtext="30 + Left"
              OfferStrikeText="€299.00"
              PriceText="€149.00"
              DiscriptionText="Apple AirPods Pro with Magsafe Case (2021)"
              soldtext="0  Sold Today"
              DateText="Wednesday, 12 Apr to Wednesday, 12 Apr"
            />
          </Box>
          <Box className={commonStyle.cardWidth}>
            <ProductSliderCard
              productimageSrc="https://cdn.soldfy.com/media/catalog/product/cache/cb1ade73e5419e241f9fbeab0570842b/a/p/apa270-apple-airpods-pro-with-magsafe-case-_2021__1.jpeg"
              productimageAlt="product"
              productText="Apple"
              productLeftedtext="30 + Left"
              OfferStrikeText="€299.00"
              PriceText="€149.00"
              DiscriptionText="Apple AirPods Pro with Magsafe Case (2021)"
              soldtext="0  Sold Today"
          DateText="Wednesday, 12 Apr to Wednesday, 12 Apr"
          needSpace
            />
          </Box>
        </Container>

  );
};
FirstBanner.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  imageClass: PropTypes.string,
};

FirstBanner.defaultProps = {
  src: 'https://cdn.soldfy.com/media/restoreit/homebanner/_/7/_708x658.55_-soldfy-website-home-page-banner.jpg',
  alt: "banner",
  href: "#",
};

export default FirstBanner;
