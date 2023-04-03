import React from "react";
import { Container, Box } from "../FlexContainer";
import { PropTypes } from "prop-types";
import commonStyle from "../../common/common.module.css";
import Image from "../../common/Image/Image";
import useObjectMap from "../../hooks/useObjectMap";
import AutoComplete from '../../components/AutoComplete'
import style from "./Header.module.css";

const Header = (props) => {
  const iconData = [
    { id: 1, src: "https://soldfy.se/newheart-srR.svg" },
    { id: 2, src: "https://soldfy.se/shuffle-55s.svg" },
    { id: 3, src: "https://soldfy.se/newuser-9j4.svg" },
    { id: 4, src: "https://soldfy.se/newcart-gTP.svg" },
  ];

  const menuData = [
    {
      id: 1,
      text: "Spare Parts",
      src: "https://cdn.soldfy.se/media/catalog/category/_20x20_Reservdelar_White_icon.svg",
    },
    {
      id: 2,
      text: "Accessories",
      src: "https://cdn.soldfy.se/media/catalog/category/accessories_main_category_1.svg",
    },
    {
      id: 3,
      text: "Phone and  Tablets",
      src: "https://cdn.soldfy.se/media/catalog/category/Phone_and_Tablet_1_1.svg",
    },
    {
      id: 4,
      text: "Computers",
      src: "https://cdn.soldfy.se/media/catalog/category/computer_1_main_category_3.svg",
    },
    {
      id: 3,
      text: "gaming",
      src: "https://cdn.soldfy.se/media/catalog/category/Gaming_2.svg",
    },
    {
      id: 4,
      text: "Home and leisure",
      src: "https://cdn.soldfy.se/media/catalog/category/Home_electronics_1.svg",
    },
  ];

  const iconMap = (item) => ({
    ...item,
    displaySrc: item.src,
  });

  const menuMap = (item) => ({
    ...item,
    displaySrc: item.src,
    displayText: item.text,
  });

  const mappedData = useObjectMap(iconData, iconMap);
  const menuMapData = useObjectMap(menuData, menuMap);

  const displayIcon = mappedData.map((item) => (
    <Box key={item.id} className={style.iconWrapper}>
      <Image
        className={style.iconImg}
        src={item.displaySrc}
        alt="soldfyicons"
      />
    </Box>
  ));

  const displayMenu = menuMapData.map((item) => (
    <Box key={item.id} className={style.menuWrapper} tagName="a" href="#">
      <Container align="vertical" alignBox="row">
        <Image
          className={style.menuImg}
          src={item.displaySrc}
          alt="soldfyicons"
        />
        <span>{item.displayText}</span>
      </Container>
    </Box>
  ));

  return (
    <Container alignBox="column" className={style.Container} tagName="header">
      <Box className={style.imgWrapper}>
        <Container
          align="vertical"
          alignBox="row"
          className={commonStyle.wrapper}
          cover
        >
          <Box shrink>
            <Image
              className={style.img}
              src="https://cdn.soldfy.se/media/logo/stores/16/Soldfy-Logo-ecommerce.png"
              alt="soldfy"
            />
          </Box>
          <Box flexible>
            <AutoComplete/>
          </Box>

          <Box shrink>
            <Container
              alignBox="row"
              align="vertical"
              className={style.iconBox}
            >
              {displayIcon}
            </Container>
          </Box>
        </Container>
      </Box>
      <Box className={style.bottomHeaderContainer}>
        <Container
          alignBox="row"
          align="vertical"
          className={` ${commonStyle.wrapper}`}
        >
          <Box className={style.headerLeft}>
            <Container align='vertical' alignBox='row' >
              <Box>
                <Container alignBox='row' align='vertical' className={style.moreIocnWrapper}>
                  <span className={style.moreIconImg}><Image src='https://soldfy.se/bars-e2X.svg' alt='Menu'/></span>
                  <span className={style.moretext}>Alla Produkter</span>
                </Container>
              </Box>
              <Box className={style.moreRghtText}>Varumärken</Box>
            </Container>
          </Box>
          <Box flexible>
            <Container align="right" alignBox="row" className={style.menuBox}>
              {displayMenu}
            </Container>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Header;

Header.propTypes = {};
