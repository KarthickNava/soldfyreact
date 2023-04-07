import React from "react";
import { PropTypes } from "prop-types";
import { Container, Box } from "../FlexContainer";
import style from "./ProductSliderCard.module.css";
import Image from "../../common/Image/Image";
import Link from "../Link/Link";
import HeartSvg from "./HeartSvg";
import Button from "../Button/Button";
import CartSvg from "./CartSvg";
const ProductSliderCard = (props) => {
  const {
    productimageSrc,
    productimageAlt,
    imageClass,
    productLeftedProps,
    productText,
    productLeftedtext,
    DiscriptionHref,
    DiscriptionAlt,
    OfferStrikeText,
    PriceText,
    DiscriptionText,
    ratingCount,
    soldtext,
    DateText,
    discount,
    needSpace,
  } = props;
  return (
    <Container
      className={`${style.Container} ${needSpace ? style.space : ""}`}
      alignBox="column"
      isCover={false}
    >
      <span className={style.tagone}>Påskrea</span>
      <span className={style.tagtwo}>Försäljning</span>
      <span className={style.rating}>{discount}</span>
      <Box className={style.image}>
        <Container align="both">
          <Image
            src={productimageSrc}
            alt={productimageAlt}
            className={`${imageClass} ${style.proImage}`}
          />
        </Container>
      </Box>
      <Box>
        <Container alignBox="column">
          <Box>
            <Container align="vertical" alignBox="row">
              <Box flexible>{productText}</Box>
              <Box className={style.stockyesBox}>
                <Container alignBox="row" align="vertical">
                  <Image
                    className={style.stockyes}
                    src="	https://soldfy.com/stockyes-p2e.svg"
                    {...productLeftedProps}
                  />
                  <span>{productLeftedtext}</span>
                </Container>
              </Box>
            </Container>
          </Box>

          <Box>
            <Link
              href={DiscriptionHref}
              alt={DiscriptionAlt}
              className={style.link}
            >
              {DiscriptionText}
            </Link>
          </Box>

          <Box>
            <Image
              src="	https://soldfy.com/grey-star-gHq.svg"
              alt="rating"
            ></Image>
            <span>{ratingCount}</span>
          </Box>
          <Box className={style.space}>
            <Container align="vertical" alignBox="row">
              <Image
                src="https://soldfy.com/Vector-hot-tuB.svg"
                alt="vectot-hot"
              />
              <span className={style.updatetxt}>{soldtext}</span>
            </Container>
          </Box>
          <Box className={style.space}>
            <Container align="vertical" alignBox="row">
              <Box flexible>
                <Container align="vertical" alignBox="row">
                  <Image
                    src="	https://soldfy.com/Vector-del-9QV.svg"
                    alt="vector"
                  />
                  <span className={style.updatetxt}>{DateText}</span>
                </Container>
              </Box>
              <Box className={style.reContanier}>
                <span className={style.suffle}>
                  <Image
                    src="https://soldfy.com/shuffle-55s.svg"
                    alt="shuffle"
                  />
                </span>
                <span>
                  <HeartSvg />
                </span>
              </Box>
            </Container>
          </Box>

          <Box className={style.bottom}>
            <Container align="vertical" alignBox="row">
              <Box flexible>
                <span className={style.priceHide}>{OfferStrikeText}</span>
                <div className={style.specialPrice}>{PriceText}</div>
              </Box>
              <Box>
                <Button customClass={style.button}>
                  <span className={style.cart}></span>
                  <span>Add</span>
                </Button>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

ProductSliderCard.defaultProps = {
  // productimageSrc:
  //   "https://cdn.soldfy.com/media/catalog/product/cache/cb1ade73e5419e241f9fbeab0570842b/a/p/apa270-apple-airpods-pro-with-magsafe-case-_2021__1.jpeg",
  // productimageAlt: "product",
  // productText: "Apple",
  // productLeftedtext: "30 + Left",
  // OfferStrikeText: "€299.00",
  // PriceText: "€149.00",
  // DiscriptionText: "Apple AirPods Pro with Magsafe Case (2021)",
  // ratingCount: "0",
  // soldtext: "0  Sold Today",
  // DateText: "Wednesday, 12 Apr to Wednesday, 12 Apr",
  // needSpace:false
};
export default ProductSliderCard;
