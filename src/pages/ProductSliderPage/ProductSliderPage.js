import React from "react";
import { Container, Box } from "../../components/FlexContainer";
import ProductSliderCard from "../../components/ProductSliderCard/ProductSliderCard";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import ArrowIcon from "./ArrowIcon";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import style from "./ProductSliderPage.module.css";
const ProductSliderPage = () => {
  return (
    <Container alignBox='column' isCover={false}>
      <Box className={style.headBox}>
      <Container alignBox="row" align="vertical" >
          <Heading tagName="h2" title="Påskrea" className={style.head} />
          <Button customClass={style.button}>
            <span>Visa Allt</span>
            <i>
              <ArrowIcon
                className={style.icon}
                svgClass={style.svg}
                height="15px"
                width="30px"
              />
            </i>
          </Button>
        </Container>
      </Box>
      <Box>
        <ProductSlider/>
      </Box>
    </Container>


  );
};

export default ProductSliderPage;
