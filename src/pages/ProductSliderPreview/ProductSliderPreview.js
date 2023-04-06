import React from 'react';
import { Container, Box } from '../../components/FlexContainer';
import SliderAutoPlay from '../../components/SliderAutoPlay/SliderAutoPlay';
import useObjectMap from '../../hooks/useObjectMap';
import Image from '../../common/Image/Image';
import style from './ProductSliderPreview.module.css';
const ProductSliderPreview = () => {
    const iconData = [
        { id: 1, src: "https://cdn.soldfy.se/media/restoreit/homebanner/h/o/home-page-smartklocka-banner--_280x251_.jpg" },
        { id: 2, src: "	https://cdn.soldfy.se/media/restoreit/homebanner/h/o/home-page-h_rlurar-banner--_280x251_--se.jpg" },
        { id: 3, src: "https://cdn.soldfy.se/media/restoreit/homebanner/h/o/home-page--smart-_vervakningskamera--banner-se--_280x251_.jpg" },
        { id: 4, src: "	https://cdn.soldfy.se/media/restoreit/homebanner/h/o/home-page--nettverk-banner--_280x251_--se.jpg" },
    ];
    const iconMap = (item) => ({
        ...item,
        displaySrc: item.src,
    });
    
    const mappedData = useObjectMap(iconData, iconMap);
    const displayIcon = mappedData.map((item) => (
        <Box key={item.id} className={style.iconWrapper}>
          <Image
            className={style.iconImg}
            src={item.displaySrc}
            alt="soldfyicons"
          />
        </Box>
      ));
    return ( 
        <Container alignBox='row' className={style.Container} isCover={false}>
            <Box className={style.firstBox}>
                <SliderAutoPlay/>
            </Box>
            <Box className={style.secondBox}>
                <Container  className={style.imageWrapper} alignBox='row' wrap='wrap' isCover={false}>
{displayIcon}
                </Container>
            </Box>
        </Container>
     );
}

export default ProductSliderPreview;