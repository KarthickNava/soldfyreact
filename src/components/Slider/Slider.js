// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import './Slider.css'; 

// const Slider = () => {
    
//         const params = {
//           autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//           },
//         };
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={0}
//       slidesPerView={1}
//           navigation={true} 
//           autoplay={{
//             "delay": 2500,
//             "disableOnInteraction": false
//           }}
//       pagination={{ clickable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       style={{ height: '500px', width: '800px' }} // add height and width
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

// export default Slider;

// Slider.propTypes = {
    
// }