import React from "react";
import { Container, Box } from "../FlexContainer";
import { PropTypes } from "prop-types";
import commonStyle from "../../common/common.module.css";
import Image from "../../common/Image/Image";
import useObjectMap from "../../hooks/useObjectMap";
import AutoComplete from "../../components/AutoComplete";
import style from "./Header.module.css";
import headerValue from "../../JsonData/headerValue.json";

const Header = (props) => {
  const iconData = [
    { id: 14, src: "https://soldfy.se/newheart-srR.svg" },
    { id: 24, src: "https://soldfy.se/shuffle-55s.svg" },
    { id: 34, src: "https://soldfy.se/newuser-9j4.svg" },
    { id: 44, src: "https://soldfy.se/newcart-gTP.svg" },
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
  const menuMapData = useObjectMap(headerValue?.categoryList, menuMap);

  const displayIcon = mappedData.map((item) => (
    <Box key={item.id} className={style.iconWrapper}>
      <Image
        className={style.iconImg}
        src={item.displaySrc}
        alt="soldfyicons"
      />
    </Box>
  ));

  const displayMenu = menuMapData?.map((item) => {
    return item?.children?.map((childItem) => {
      return childItem?.is_visible_in_header == 1 ? (
        <Box
          key={childItem?.id}
          className={style.menuWrapper}
          tagName="a"
          href="#"
        >
          <Container align="vertical" alignBox="row">
            <Image
              className={style.menuImg}
              src={`${"https://cdn.soldfy.se" + childItem?.icon_image}`}
              alt="soldfyicons"
            />
            <span>{childItem?.name}</span>
          </Container>
        </Box>
      ) : (
        ""
      );
    });
  });

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
            <AutoComplete />
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
            <Container align="vertical" alignBox="row">
              <Box>
                <Container
                  alignBox="row"
                  align="vertical"
                  className={style.moreIocnWrapper}
                >
                  <span className={style.moreIconImg}>
                    <Image src="https://soldfy.se/bars-e2X.svg" alt="Menu" />
                  </span>
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
