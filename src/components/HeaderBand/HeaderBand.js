import React from "react";
import PropTypes from "prop-types";
import { Container, Box } from "../FlexContainer";
import HeaderDropDown from "../HeaderDropDown/HeaderDropDown";
import Link from "../Link/Link";
import style from "./HeaderBand.module.css";
const HeaderBand = (props) => {
  const { className } = props;
  return (
    <Container
      alignBox="row"
      align="vertical "
      className={className ? className : style.Container}
    >
      <Box className={style.wrapper}>
        <Container alignBox="row" align="between">
          <Box className={style.leftBox}>
            <Container alignBox="row" align="vertical">
              <Box>
                <HeaderDropDown />
              </Box>
              <Box>
                <Link className={style.link}>download new the app</Link>
              </Box>
            </Container>
          </Box>
          <Box className={style.rightBox}>
            <Container alignBox="row">
              <Box>
                <Container align="vertical" alignBox="row">
                  <Box>
                    <Link className={style.link}>Customer Service</Link>
                  </Box>
                  <Box>
                    <Link className={style.link}>Track your order</Link>
                  </Box>
                </Container>
              </Box>
              <Box className={style.bandlastBox}>
                <Container align="vertical" alignBox="row">
                  <Box>
                    <Link className={`${style.link} ${style.personColor}`}>
                      Private Person
                    </Link>
                  </Box>
                  <Box>
                    <Link className={`${style.link} ${style.busineesColor}`}>
                      Business
                    </Link>
                  </Box>
                </Container>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default HeaderBand;

HeaderBand.propTypes = {
  className: PropTypes.string,
};
