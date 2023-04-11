import React from "react";
import { Container, Box } from "../../components/FlexContainer";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import ArrowIcon from "../ProductSliderPage/ArrowIcon";
import style from "../ProductSliderPage/ProductSliderPage.module.css";
const HeaderCommon = (props) => {
  const { title } = props;
  
  return (
    <Container alignBox='row' align='vertical' isCover={false} className={style.headBox}>
          <Heading tagName="h2" title={title} className={style.head} />
          <Button customClass={style.button}>
            <span>See All</span>
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


  );
};

export default HeaderCommon;