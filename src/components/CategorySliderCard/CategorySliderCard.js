import React from 'react';
import { PropTypes } from "prop-types";
import { Container, Box } from '../FlexContainer';
import Image from '../../common/Image/Image';
import style from './CategorySliderCard.module.css'
const CategorySliderCard = (props) => {
    const { src, alt, text, tagName,imageClass, className } = props;
    return ( 
        <Container align='both' alignBox='column' isCover={false} className={style.container}>
            <Box>
                <Image src={src} alt={alt} className={`${imageClass} ${style.img}`} />
            </Box>
            <Box className={`${className} ${style.text}`} tagName={tagName}>{text}</Box>
        </Container>
     );
}

CategorySliderCard.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string,
    tagName:PropTypes.string
}

export default CategorySliderCard;

