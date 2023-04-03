import React from "react";
import { Container, Box } from "../../components/FlexContainer";
import FooterSearchPanel from "./FooterSearchPanel/FooterSearchPanel";
import Heading from "../../components/Heading/Heading";
import useObjectMap from "../../hooks/useObjectMap";
import Link from "../../components/Link/Link";
import Image from "../../common/Image/Image";
import style from "./Footer.module.css";
const Footer = () => {
  const brandData = [
    { id: 1, text: "Apple Hörlurar" },
    { id: 2, text: "Laddare och Kablar" },
    { id: 3, text: "Powerbank" },
    { id: 4, text: "In-Ear Hörlurar" },
    { id: 1, text: "Sony PlayStation" },
    { id: 2, text: "Smartklocka" },
    { id: 3, text: "Högtalare" },
    { id: 4, text: "Fjärrkontroll" },
    { id: 4, text: "Smart Röstassistent" },
  ];
  const solfyData = [
    { id: 1, text: "Apple Hörlurar" },
    { id: 2, text: "Laddare och Kablar" },
    { id: 3, text: "Powerbank" },
    { id: 4, text: "In-Ear Hörlurar" },
  ];
  const httpData = [
    { id: 1, text: "Apple Hörlurar" },
    { id: 2, text: "Laddare och Kablar" },
    { id: 3, text: "Powerbank" },
    { id: 4, text: "In-Ear Hörlurar" },
    { id: 1, text: "Sony PlayStation" },
    { id: 2, text: "Smartklocka" },
  ];
  const iconData = [
    {
      id: 1,
      src: "https://cdn.soldfy.se/media/wysiwyg/facebook.svg",
      link: "https://www.facebook.com/soldfy.se",
    },
    {
      id: 2,
      src: "https://cdn.soldfy.se/media/wysiwyg/instagram.svg",
      link: "https://www.instagram.com/soldfy.se/",
    },
    {
      id: 3,
      src: "https://cdn.soldfy.se/media/logo/twitter_icon_25x26_.svg",
      link: "https://twitter.com/Soldfy1",
    },
    {
      id: 4,
      src: "https://cdn.soldfy.se/media/logo/Linkedin_icon_25x26_.svg",
      link: "https://www.linkedin.com/company/soldfy-se/",
    },
    {
      id: 5,
      src: "https://cdn.soldfy.se/media/wysiwyg/youtube.svg",
      link: "https://www.youtube.com/channel/UCNQ1MhW328VQmHRsVzzjMmg",
    },
  ];
  const brandMap = (item) => ({
    ...item,
    displaytext: item.text,
  });

  const soldfyMap = (item) => ({
    ...item,
    displaytext: item.text,
  });
  const httpMap = (item) => ({
    ...item,
    displaytext: item.text,
  });
  const iconMap = (item) => ({
    ...item,
    displayicon: item.src,
    displaylink: item.link,
  });

  const mappedBrandData = useObjectMap(brandData, brandMap);
  const mappedSoldfyData = useObjectMap(solfyData, soldfyMap);
  const mappedImgData = useObjectMap(iconData, iconMap);
  const mappedHttpData = useObjectMap(httpData, httpMap);

  const displayImg = mappedImgData.map((item) => (
    <Box key={item.id} className={style.iconWrapper}>
      <Link href={item.link} target="_blank">
        <Image
          className={style.iconImg}
          src={item.displayicon}
          alt="soldfyicons"
        />
      </Link>
    </Box>
  ));

  const displayBrandData = mappedBrandData.map((item) => (
    <li key={item.id} className={style.brandWrapper}>
      <Link href="#">
        <span>{item.displaytext}</span>
      </Link>
    </li>
  ));
  const displaySoldfyData = mappedSoldfyData.map((item) => (
    <li key={item.id} className={style.brandWrapper}>
      <Link href="#">
        <span>{item.displaytext}</span>
      </Link>
    </li>
  ));
  const displayHttpData = mappedHttpData.map((item) => (
    <li key={item.id} className={style.brandWrapper}>
      <Link href="#">
        <span>{item.displaytext}</span>
      </Link>
    </li>
  ));

  return (
    <Container alignBox="column" tagName="footer">
      <Box>
        <FooterSearchPanel />
      </Box>
      <Box className={style.brandBox}>
        <Container align="top" alignBox="row">
          <Box className={style.firstBox}>
            <Container align="top" alignBox="row">
              <Box className={style.box}>
                <Heading
                  tagName="h4"
                  title="Populära kategorier"
                  className={style.commonHead}
                ></Heading>
                <ul className={style.ulList}>{displayBrandData}</ul>
              </Box>
              <Box className={style.box}>
                <Heading
                  tagName="h4"
                  title="Soldfy.se"
                  className={style.commonHead}
                ></Heading>
                <ul className={style.ulList}>{displaySoldfyData}</ul>
              </Box>
              <Box className={style.box}>
                <Heading
                  tagName="h4"
                  title="Hjälp"
                  className={style.commonHead}
                ></Heading>
                <ul className={style.ulList}>{displayHttpData}</ul>
              </Box>
            </Container>
          </Box>

          <Box className={style.secondBox}>
            <Container align="top" alignBox="column">
              <Image
                src="https://cdn.soldfy.se/media/wysiwyg/payment-Logo_banner_for_.se.svg"
                alt="BrandImage"
              />
              <Box className={style.imgSection}>
                <Container align="vertical" alignBox="row">
                  <Image
                    src="https://cdn.soldfy.se/media/artes_certification.svg"
                    alt="BrandImage"
                  />
                  <Image
                    src="https://cdn.soldfy.se/media/pricerunner_certification.svg"
                    alt="BrandImage"
                    className={style.middleImg}
                  />
                  <Image
                    src="https://cdn.soldfy.se/media/trygg_certification.svg"
                    alt="BrandImage"
                  />
                </Container>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
      <Box className={style.rightSection}>
        <Container align="vertical" alignBox="row">
          <Box flexible>
            <Container alignBox="row" align="vertical">
              <Image
                className={style.productImg}
                alt="soldfy"
                src="	https://cdn.soldfy.se/media/logo/soldfy/Soldfy_logo_White.svg"
              />
              <span className="copyTxt">
                Copyright © 2023 Soldfy.se Med ensamrätt
              </span>
            </Container>
          </Box>
          <Box>
            <Container alignBox="row" align="vertical">
              {displayImg}
            </Container>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Footer;
