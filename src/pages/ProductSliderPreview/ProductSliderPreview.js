import React, { useState, useEffect } from "react";
import { Container, Box } from "../../components/FlexContainer";
import SliderAutoPlay from "../../components/SliderAutoPlay/SliderAutoPlay";
import useObjectMap from "../../hooks/useObjectMap";
import Image from "../../common/Image/Image";
import style from "./ProductSliderPreview.module.css";
import BannerImage from "../../JsonData/BannerImage.json";

const ProductSliderPreview = () => {
  const [bannerSideImage, setbannerSideImage] = useState([]);
  useEffect(() => {
    setbannerSideImage(
      BannerImage?.banners?.filter((item) => item?.bannertype === "promotional")
    );
  }, []);
  const iconData = [
    {
      id: 1,
      src: "https://cdn.soldfy.se/media/restoreit/homebanner/h/o/home-page-smartklocka-banner--_280x251_.jpg",
    },
    {
      id: 2,
      src: "	https://cdn.soldfy.se/media/restoreit/homebanner/h/o/home-page-h_rlurar-banner--_280x251_--se.jpg",
    },
    {
      id: 3,
      src: "https://cdn.soldfy.se/media/restoreit/homebanner/h/o/home-page--smart-_vervakningskamera--banner-se--_280x251_.jpg",
    },
    {
      id: 4,
      src: "	https://cdn.soldfy.se/media/restoreit/homebanner/h/o/home-page--nettverk-banner--_280x251_--se.jpg",
    },
  ];
  const iconMap = (item) => ({
    ...item,
    displaySrc: item.src,
  });

  const mappedData = useObjectMap(bannerSideImage, iconMap);
  const displayIcon = mappedData?.map((item) => (
    <Box key={item?.homebanner_id} className={style.iconWrapper}>
      <Image
        className={style.iconImg}
        src={`${"https://cdn.soldfy.se/media/" + item?.image}`}
        alt={item?.title}
      />
    </Box>
  ));
  return (
    <Container alignBox="row" className={style.Container} isCover={false}>
      <Box className={style.firstBox}>
        <SliderAutoPlay />
      </Box>
      <Box className={style.secondBox}>
        <Container
          className={style.imageWrapper}
          alignBox="row"
          wrap="wrap"
          isCover={false}
        >
          {displayIcon}
        </Container>
      </Box>
    </Container>
  );
};

export default ProductSliderPreview;
