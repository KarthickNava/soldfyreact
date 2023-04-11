import React, { useEffect } from "react";
import Slider from "react-slick";
import useObjectMap from "../../hooks/useObjectMap";
import { Container, Box } from "../FlexContainer";
import ProductSliderCard from "../ProductSliderCard/ProductSliderCard";
import "./ProductSlider.css";
import ProductCartData from "../../JsonData/productCartData.json";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className && className} ${'slick-next'}`}
      style={{
        ...style,
        display: "block",
        background: "URL('https://soldfy.com/leftarrow-dKE.svg') no-repeat",
        height: "70px",
        width: "70px",
        backgroundSize: "cover",
        zIndex: "1",
        top: "50%",
        transform: " translateY(-50%)",
        right: "0",
      
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
       className={`${className && className} ${'slick-prev'}`}
      style={{
        ...style,
        display: "block",
        background: "URL('https://soldfy.com/rightarrow-ffv.svg') no-repeat",
        height: "70px",
        width: "70px",
        backgroundSize: "cover",
        zIndex: "1",
        top: "50%",
        transform: "translateY(-50%)",
        left: "-10px",
      }}
      onClick={onClick}
    />
  );
}



const ProductSlider = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const iconMap = (item) => ({
    ...item,
    displaySrc: item?.image?.url,
    displaytext: item?.name,
    displayAlt: item?.name,
    displaySpecialPrice: item?.special_price,
    displayStockStatus: item?.stock_status,
    displayRatingSummary: item?.rating_summary,
    displayReviewCount: item?.review_count,
    displayPriceRange: item?.price_range,
    displayAdditionalFields: item?.additionalFields,
    displayProductText: item?.additionalFields?.brand,
    displayProductLeftText: `${item?.additionalFields?.qty_left}+ Kvar`,
    displayPrice: `${
      item?.special_price
        ? item?.special_price
        : item?.special_price
        ? item?.special_price
        : item?.price_range?.minimum_price?.regular_price?.value
    } kr`,
    displayOfferStrikeText: `${item?.price_range?.minimum_price?.regular_price?.value} kr`,
    displaySoldyToday: `${item?.additionalFields?.qty_sold_today} Sålda idag`,
    displayDiscount: Math.round(
      ((item?.price_range?.minimum_price?.regular_price?.value -
        item?.special_price) /
        item?.price_range?.minimum_price?.regular_price?.value) *
        100
    ),
    displayRatingCount: item?.review_count,
    displayDateText:
      item?.additionalFields?.delivery_date_max == "No Date Available" &&
      item?.additionalFields?.delivery_date_min == "No Date Available"
        ? "No Date Available"
        : item?.additionalFields?.delivery_date_max ===
          item?.additionalFields?.delivery_date_min
        ? item?.additionalFields?.delivery_date_max
        : `${item?.additionalFields?.delivery_date_max} to ${item?.additionalFields?.delivery_date_max}`,
  });

  const mappedData = useObjectMap(ProductCartData?.products?.items, iconMap);
  const displayIcon = mappedData?.map((item) => (
    <div key={item?.url_key} style={{ display:'flex' }}>
      <ProductSliderCard
        productimageSrc={item?.displaySrc}
        productimageAlt={item?.displayProductText}
        productText={item?.displayProductText}
        productLeftedtext={item?.displayProductLeftText}
        OfferStrikeText={item?.displayOfferStrikeText}
        PriceText={item?.displayPrice}
        DiscriptionText={item?.displaytext}
        ratingCount={item?.displayRatingCount}
        soldtext={item?.displaySoldyToday}
        discount={`${item?.displayDiscount}%`}
        DateText={item?.displayDateText}
        needSpace
      />
    </div>
  ));
  return <Slider {...settings}>
    {displayIcon}
  </Slider>;
};

export default ProductSlider;
