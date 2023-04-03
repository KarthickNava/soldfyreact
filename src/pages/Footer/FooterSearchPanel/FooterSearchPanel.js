import React from 'react';
import { Container, Box } from '../../../components/FlexContainer';
import Heading from '../../../components/Heading/Heading';
import Button from "../../../components/Button/Button";
import Input from "../../../common/Input/Input";
import style from '../Footer.module.css'
const FooterSearchPanel = () => {
    return ( 
        <Container alignBox="row" align="vertical" className={style.searchBox}>
          <Box>
                <Heading tagName="h2" title="Prenumerera" className={style.head} />
          </Box>
          <Box flexible>
                      <Input placeholder="Ange epost här" className={style.input } />
          </Box>
          <Box>
                <Button text="Prenumerera" size="large" customClass={style.button } />
          </Box>
        </Container>
     );
}

export default FooterSearchPanel;