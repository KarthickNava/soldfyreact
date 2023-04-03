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
        <Box flexible scroll="vertical" eleRef={contentRef}>
          <Container alignBox="column">
            <Box flexible style={{padding:'300px'}}>Slider implementation on process</Box>
            <Box className="footer">
              <Container
                alignBox="column"
                className="footerWrapper"
                cover={false}
              >
                <Box>
                  <Footer />
                </Box>
                <Box></Box>
              </Container>
            </Box>
          </Container>
        </Box>
      </Container>
      <BackToTopButton contentRef={contentRef}/>
    </div>
  );
}

export default App;
