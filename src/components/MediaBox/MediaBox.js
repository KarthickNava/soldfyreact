import React from 'react';
import { PropTypes } from "prop-types";
import { Container, Box } from '../FlexContainer';
import Image from '../../common/Image/Image';
import Heading from '../Heading/Heading';
const MediaBox = (props) => {
    const { headingClass, src, alt, imageClass, headingProps, discriptionText } = props;
    return (  
        <Container align='top' alignBox='row'>
            <Box>
                <Image src={src} alt={alt} className={` ${imageClass} ${style.img}`} />
            </Box>
            <Box flexible className={style.content}>
                <Heading title={title} {...headingProps} className={` ${headingClass} ${style.head}`} tagName='h3' />
                <p className={style.para}>{discriptionText}</p>
            </Box>
        </Container>
    );
}

export default MediaBox;


MediaBox.propTypes = {
    headingClass: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    imageClass: PropTypes.string,
    title: PropTypes.string,
    discriptionText:PropTypes.string
    
}