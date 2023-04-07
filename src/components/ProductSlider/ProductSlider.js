import React, { useEffect } from "react";
import Slider from "react-slick";
import useObjectMap from "../../hooks/useObjectMap";
import { Container, Box } from "../FlexContainer";
import ProductSliderCard from "../ProductSliderCard/ProductSliderCard";
import style from "./ProductSlider.module.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "URL('https://soldfy.com/leftarrow-dKE.svg') no-repeat",
        height: "70px",
        width: "70px",
        backgroundSize: "cover",
        zIndex: "1",
        top: "50%",
        transform:' translateY(-50%)',
        right: "10px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "URL('https://soldfy.com/rightarrow-ffv.svg') no-repeat",
        height: "70px",
        width: "70px",
        backgroundSize: "cover",
        zIndex: "1",
        top: "50%",
        transform: 'translateY(-50%)',
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
    nextArrow: <NextArrow /> ,
  };
    return (
      
      <Slider {...settings} >

            <Box><ProductSliderCard needSpace /></Box>
            <Box><ProductSliderCard needSpace /></Box>
            <Box><ProductSliderCard needSpace/></Box>
            <Box><ProductSliderCard needSpace/></Box>
            <Box><ProductSliderCard needSpace/></Box>
              
    </Slider>
  );
};

export default ProductSlider;
