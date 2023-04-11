import { useRef } from "react";
import { Container, Box } from "./components/FlexContainer";
import "./App.css";
// eslint-disable-line camelcase
import ColorVariable from "./variables/colorVariables.module.css";
import SizeVariable from "./variables/sizeVariables.module.css";
import HeaderBand from "./components/HeaderBand/HeaderBand";
import Header from "./components/Header/Header";
import Footer from "./pages/Footer/Footer";
import BackToTopButton from "./hooks/BackToTopButton";
import ProductSliderPreview from "./pages/ProductSliderPreview/ProductSliderPreview";
import CategorySlider from "./components/CategorySlider/CategorySlider";
import ProductSliderPage from "./pages/ProductSliderPage/ProductSliderPage";
import Banner from "./components/Banner/Banner";
import FirstBanner from "./pages/NewArrivalBanner/FirstBanner";
import SecondBanner from "./pages/NewArrivalBanner/SecondBanner";
import HeaderCommon from "./pages/HeaderCommon/HeaderCommon";
import BrandSlider from "./components/BrandSlider/BrandSlider";
function App() {
  const contentRef = useRef(null);
  return (
    <div className="App">
      <Container alignBox="column" tagName="main">
        <Box shrink>
          <HeaderBand />
        </Box>
        <Box shrink>
          <Container alignBox="column" isCover={false}>
            <Header />
          </Container>
        </Box>
        <Box
          flexible
          scroll="vertical"
          eleRef={contentRef}
          className="commonContainer"
        >
          <Container alignBox="column">
            <Box>
              <Container alignBox="column" className="middleWrapper">
                <Box>
                  <ProductSliderPreview />
                </Box>
                <Box className="categoryWrapper">
                  <CategorySlider />
                </Box>
                <Box className="slidrWrapper">
                  <ProductSliderPage title="Popular Products" />
                </Box>
                <Box className="slidrWrapper">
                  <ProductSliderPage title="UpComing Arrivals" />
                </Box>
                <Box className="slidrWrapper">
                  <Banner />
                </Box>
                <Box className="slidrWrapper">
                  <Container alignBox="column" isCover={false}>
                    <Box>
                      <HeaderCommon title="New Arrivals" />
                    </Box>
                    <Box>
                      <Container alignBox="column">
                        <Box>
                          <FirstBanner />
                        </Box>
                        <Box className="secondBoxWrapper slidrWrapper">
                          <SecondBanner />
                        </Box>
                        <Box className="slidrWrapper ">
                          <Banner
                            src="https://soldfy.com/pub/media/restoreit/homebanner/_/1/_1440x234_-website-home-page-kampanjer-banner-0.jpg"
                            alt="banner"
                          />
                        </Box>
                        <Box className="slidrWrapper brandSlider">
                          <BrandSlider />
                        </Box>
                      </Container>
                    </Box>
                  </Container>
                </Box>
              </Container>
            </Box>
            <Box className="footer">
              <Container
                alignBox="column"
                className="footerWrapper"
                cover={false}
              >
                <Box>
                  <Footer />
                </Box>
              </Container>
            </Box>
          </Container>
        </Box>
      </Container>
      <BackToTopButton contentRef={contentRef} />
    </div>
  );
}

export default App;
