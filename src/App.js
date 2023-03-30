import {Container, Box} from './components/FlexContainer';
import './App.css';
// eslint-disable-line camelcase
import ColorVariable from './variables/colorVariables.module.css';
import SizeVariable from './variables/sizeVariables.module.css';
import HeaderBand from './components/HeaderBand/HeaderBand';

function App() {
  return (
    <div className="App">

       <Container alignBox='column' tagName='main'>
        <Box shrink>
          <Container alignBox='column'>
            <Box>
              <HeaderBand/>
            </Box>
          </Container>
        </Box> 
        <Box flexible overflow-y='scroll'>Section</Box>
       </Container>

    </div>
  );
}

export default App;