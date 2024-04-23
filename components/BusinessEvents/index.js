'use client';

import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './style.scss';

const BusinessEvents = () => {
   return (
      <div className="container business-events">
         <div className="row py-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  Бізнес-заходи клубу
               </div>
               <Swiper
                  navigation={true}
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={1}
                  initialSlide={2}
                  coverflowEffect={{
                     rotate: 0,
                     stretch: 0,
                     depth: 300,
                     modifier: 1,
                     slideShadows: true,
                  }}
                  modules={[EffectCoverflow, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                     1200: {
                        slidesPerView: 2
                     }
                  }}
               >
                  <SwiperSlide>
                     <img src="/img/business-events/1.png"/>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/img/business-events/2.png"/>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/img/business-events/3.png"/>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/img/business-events/4.png"/>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
   )
}

export default BusinessEvents;