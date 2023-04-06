import React from 'react';
import { PropTypes } from "prop-types";
import { Container } from '../FlexContainer';
import Link from '../Link/Link';
import Image from '../../common/Image/Image';
import style from './CustomerTag.module.css'
const CustomerTag = (props) => {
    const { src, target, href, alt, className } = props;
    return ( 
        <Container align='both' className={style.Container}>
            <Link href={href} target={target}>
                <Image src={src} alt={alt} className={`${className} ${style.img}`}></Image>
            </Link>
        </Container>
     );
}

export default CustomerTag;

CustomerTag.propTypes = {
    src: PropTypes.string,
    target: PropTypes.string,
    href: PropTypes.string,
    alt: PropTypes.string,
    className:PropTypes.string
}