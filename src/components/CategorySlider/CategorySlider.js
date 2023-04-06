import React from 'react';
import Slider from 'react-slick';
import useObjectMap from '../../hooks/useObjectMap';
import CategorySliderCard from '../CategorySliderCard/CategorySliderCard';
import { Container, Box } from '../FlexContainer';
import style from './CategorySlider.module.css';
const CategorySlider = () => {

    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: <button className={`${style.slickArrow} ${style.slickPrev}`}>Previous</button>,
        nextArrow: <button className={`${style.slickArrow} ${style.slickNext}`}>Next</button>
      };
      

  const iconData = [
      { id: 1, text: 'Reservdelar', src: "https://cdn.soldfy.se/media/catalog/category/slider-Reservdelar_icon.svg" },
      { id: 2, text: 'Tillbehör', src: "	https://cdn.soldfy.se/media/catalog/category/Accessories_1.svg" },
      { id: 3, text: 'Telefoner och Surfplattor', src: "	https://cdn.soldfy.se/media/catalog/category/54-Telefoner___Surfplattor.svg" },
      { id: 4, text: 'Datorer', src: "https://cdn.soldfy.se/media/catalog/category/computer1_sidebar_2.svg" },
      { id: 5, text: 'Elektrisk Scooter', src: "https://cdn.soldfy.se/media/catalog/category/Electric_Scooter.svg" },
      { id: 6, text: 'Router', src: "https://cdn.soldfy.se/media/catalog/category/Router_1.svg" },
      { id: 7, text: 'Kameror', src: "https://cdn.soldfy.se/media/catalog/category/Security_Camera.svg" },
      { id: 8, text: 'Verktyg', src: "https://cdn.soldfy.se/media/catalog/category/Toolss_1.svg" },
      { id: 9, text: 'Smarta Hem', src: "https://cdn.soldfy.se/media/catalog/category/54-smart-home.svg" },
      { id: 10, text: 'Larm och Övervakning', src: "https://cdn.soldfy.se/media/catalog/category/54-Larm_och_Overvakning.svg" }
  ]
const iconMap = (item) => ({
    ...item,
    displaySrc: item.src,
    displaytext: item.text
});

const mappedData = useObjectMap(iconData, iconMap);
const displayIcon = mappedData.map((item) => (
    <Box key={item.id}><CategorySliderCard src={item.displaySrc} text={item.displaytext} alt='category' tagName='h3' /></Box>
  ));
  return (
    <Slider {...settings}>
          
              {displayIcon}
    </Slider>
  );
};

export default CategorySlider;
