import React, { useEffect } from "react";
import Slider from "react-slick";
import { Container, Box } from "../FlexContainer";
import Image from "../../common/Image/Image";
import Link from "../Link/Link";
import useObjectMap from "../../hooks/useObjectMap";
import data from "./data.json";
import style from "./BrandSlider.module.css";
const BrandSlider = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };
  const iconMap = (item) => ({
    ...item,
    displayLabel: item?.label,
    displayUrl: item?.url,
    displayImg: item?.img,
    displayAlt: item?.alt,
  });
  const mappedData = useObjectMap(data?.data?.ambrandslider?.items, iconMap);
  const displayBrands = mappedData?.map((item, i) => {
    return (
      <Box key={item?.i} className={style.wrapper}>
        <Link href={item?.displayUrl} className={style.link}>
          {item?.displayImg ? (
            <Image src={item?.displayImg} alt={item?.displayAlt} className={style.img}></Image>
          ) : (
            <span>{item?.displayLabel}</span>
          )}
        </Link>
      </Box>
    );
  });
  return <Slider {...settings}>{displayBrands}</Slider>;
};

export default BrandSlider;
