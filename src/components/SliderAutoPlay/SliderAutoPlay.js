import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./SliderAutoPlay.module.css";
import BannerImage from "../../JsonData/BannerImage.json";

const SliderAutoPlay = () => {
  const [sliderImage, setSliderImage] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // appendDots: (dots) => (
    //   <div className={`custom-dots-class ${style.customDotsClass}`}>
    //     {dots}
    //   </div>
    // ),
    // customPaging: (i) => {
    //   if (i > 1) return null; // hide dots after index 1
    //   return (
    //     <span className={style.customdot} >
    //       {i + 1}
    //     </span>
    //   );
    // },
  };

  useEffect(() => {
    setSliderImage(
      BannerImage?.banners?.filter((item) => item?.bannertype === "slider")
    );
  }, []);

  const items = sliderImage?.map((item) => {
    return (
      <div key={item?.homebanner_id}>
        <img
          src={`${"https://cdn.soldfy.se/media/" + item?.image}`}
          alt={item?.title}
          fetchpriority="high"
          width="850"
          height="520"
        />
      </div>
    );
  });
  // const items = [
  //   <div key={1}>
  //     <img
  //       src="https://cdn.soldfy.se/media/restoreit/homebanner/8/4/840x510_home_page_banner.jpg"
  //       alt="Poskrea Homapage Soldfy.se"
  //       fetchpriority="high"
  //       width="850"
  //       height="510"
  //     />
  //   </div>,
  //   <div key={2}>
  //     <img
  //       src="https://cdn.soldfy.se/media/restoreit/homebanner/8/4/840x510_home_page_banner.jpg"
  //       alt="Poskrea Homapage Soldfy.se"
  //       fetchpriority="high"
  //       width="850"
  //       height="510"
  //     />
  //   </div>,
  // ];

  return (
    <div className={style.slickSlide}>
      <Slider {...settings}>{items}</Slider>
    </div>
  );
};

export default SliderAutoPlay;
