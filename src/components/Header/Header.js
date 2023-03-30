import React from 'react';
import { Container,Box } from '../FlexContainer';
import { PropTypes } from 'prop-types';
import commonStyle from '../../common/common.module.css';
import style from './Header.module.css'

const Header = (props) => {

    return(
        <Container alignBox='column'>
            <Box>
                <Container align='vertical' alignBox='row'>
                    <Box shrink>img</Box>
                    <Box flexible>input</Box>
                    <Box shrink>rigjtcon</Box>
                </Container>
            </Box>
            <Box></Box>
        </Container>
    )
}

export default Header;

Header.propTypes={

}