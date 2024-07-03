
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './aboutswipper.css';
import { EffectCoverflow, Pagination, } from 'swiper/modules';
import coffeeInfo1 from "../../../assets/cafe-outt.png"
import coffeeInfo2 from "../../../assets/cafe-in.jpeg"
import coffeeInfo3 from "../../../assets/catering.png"
import coffeeInfo4 from "../../../assets/ice-latte-in.jpeg"
import coffeeInfo5 from "../../../assets/woman.png"
import coffeeInfo6 from "../../../assets/mango-fresh.png"
import coffeeInfo7 from "../../../assets/responsive.jpeg"


function SwipperAbout() {
  return (
    <div  className='about' >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='img-fluid' src={coffeeInfo7} alt='espressolove' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={coffeeInfo2} alt='espressolovebar' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={coffeeInfo4} alt='espressoloveicelatte' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={coffeeInfo3} alt='espressoloveinside' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={coffeeInfo5} alt='espressolovelatte' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={coffeeInfo1} alt='espressoloveoutside' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={coffeeInfo6} alt='espressolovecolddrink' />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}

export default SwipperAbout;