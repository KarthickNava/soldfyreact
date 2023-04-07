import React, { useEffect } from "react";
import Slider from "react-slick";
import useObjectMap from "../../hooks/useObjectMap";
import CategorySliderCard from "../CategorySliderCard/CategorySliderCard";
import { Container, Box } from "../FlexContainer";
import "./CategorySlider.css";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className && className} ${'slick-next'}`}
      style={{
        ...style,
        display: "block",
        background: "URL('https://soldfy.com/leftarrow-dKE.svg') no-repeat",
        height:'70px',
        width:'70px',
        backgroundSize: "cover",
        zIndex: '1',
        top: '47px',
        right:'10px'
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
        height:'70px',
        width:'70px',
        backgroundSize: "cover",
        zIndex: '1',
        top: '47px',
        left:'-10px'
      }}
      onClick={onClick}
    />
  );
}

const CategorySlider = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow:<PrevArrow/>,
    nextArrow: <NextArrow/>
  };

  useEffect(() => {
    fetch(
      `${
        window.location.origin +
        "/graphql?query=query+getCategory%7BcategorySlider%7Bname+slider_image+url_key+url_path+__typename%7D%7D&operationName=getCategory&variables=%7B%7D"
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          store: "soldfy_se",
        },
        // body: JSON.stringify({
        //   operationName: "getCategory",
        //   query: `query getCategory {
        //     categorySlider {
        //         name
        //         slider_image
        //         url_key
        //         url_path
        //     }
        // }`,
        // }),
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res.data));
  }, []);
  const iconData = {
    categorySlider: [
      {
        name: "Reservdelar",
        slider_image: "/media/catalog/category/slider-Reservdelar_icon.svg",
        url_key: "reservdelar",
        url_path: "reservdelar",
        __typename: "items",
      },
      {
        name: "Tillbehör",
        slider_image: "/media/catalog/category/Accessories_1.svg",
        url_key: "tillbehor",
        url_path: "tillbehor",
        __typename: "items",
      },
      {
        name: "Telefoner och Surfplattor",
        slider_image: "/media/catalog/category/54-Telefoner___Surfplattor.svg",
        url_key: "telefoner-surfplattor",
        url_path: "telefoner-surfplattor",
        __typename: "items",
      },
      {
        name: "Datorer",
        slider_image: "/media/catalog/category/computer1_sidebar_2.svg",
        url_key: "datorer",
        url_path: "datorer",
        __typename: "items",
      },
      {
        name: "Elektrisk Scooter",
        slider_image: "/media/catalog/category/Electric_Scooter.svg",
        url_key: "hem-och-fritid/elektrisk-scooter",
        url_path: "hem-och-fritid/elektrisk-scooter",
        __typename: "items",
      },
      {
        name: "Router",
        slider_image: "/media/catalog/category/Router_1.svg",
        url_key: "natverk/routers",
        url_path: "natverk/routers",
        __typename: "items",
      },
      {
        name: "Kameror",
        slider_image: "/media/catalog/category/Security_Camera.svg",
        url_key: "larm-och-overvakning/kameror",
        url_path: "larm-och-overvakning/kameror",
        __typename: "items",
      },
      {
        name: "Verktyg",
        slider_image: "/media/catalog/category/Toolss_1.svg",
        url_key: "verktyg",
        url_path: "verktyg",
        __typename: "items",
      },
      {
        name: "Smarta Hem",
        slider_image: "/media/catalog/category/54-smart-home.svg",
        url_key: "smarta-hem",
        url_path: "smarta-hem",
        __typename: "items",
      },
      {
        name: "Larm och Övervakning",
        slider_image: "/media/catalog/category/54-Larm_och_Overvakning.svg",
        url_key: "larm-och-overvakning",
        url_path: "larm-och-overvakning",
        __typename: "items",
      },
      {
        name: "Retal",
        slider_image: "/media/catalog/category/54-Retal_icon.svg",
        url_key: "retal",
        url_path: "retal",
        __typename: "items",
      },
    ],
  };
  const iconMap = (item) => ({
    ...item,
    displaySrc: `${"https://cdn.soldfy.se" + item?.slider_image}`,
    displaytext: item?.name,
    displayAlt: item?.name,
  });

  const mappedData = useObjectMap(iconData?.categorySlider, iconMap);
  const displayIcon = mappedData?.map((item) => (
    <Box key={item?.url_key} style={{width:'180px'}}>
      <CategorySliderCard
        src={item?.displaySrc}
        text={item?.displaytext}
        alt={item?.displayAlt}
        tagName="h3"
      />
    </Box>
  ));
  return <Slider {...settings}>{displayIcon}</Slider>;
};

export default CategorySlider;
