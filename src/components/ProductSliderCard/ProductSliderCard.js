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
    <div className={`${style.scale} ${needSpace ? style.Cardspace : ""}`}>
      <Container
        className={`${style.Container}`}
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

            <Box className={style.ratingBox}>
              <Image
                src="	https://soldfy.com/grey-star-gHq.svg"
                alt="rating"
              ></Image>
              <span className={style.ratingtxt}>{ratingCount}</span>
            </Box>
            <Box className={style.Card}>
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
                  <Container isCover={false} alignBox="row" align="vertical">
                    <span className={style.suffle}>
                      <Image
                        src="https://soldfy.com/shuffle-55s.svg"
                        alt="shuffle"
                      />
                    </span>
                    <span>
                      <HeartSvg />
                    </span>
                  </Container>
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
                      <CartSvg className={style.cart} />
                    <span>Add</span>
                  </Button>
                </Box>
              </Container>
            </Box>
          </Container>
        </Box>
      </Container>
    </div>
  );
};

ProductSliderCard.defaultProps = {

  needSpace:true
};
export default ProductSliderCard;
