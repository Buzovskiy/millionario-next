'use client';

import React, {useRef, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './style.scss';

const Participants = () => {
   return (
      <div className="container participants">
         <div className="row py-lg-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  учасники клубу
               </div>
               <Swiper
                  grabCursor={true}
                  slidesPerView={3}
                  spaceBetween={10}
                  // centeredSlides={true}
                  // centeredSlides={true}
                  // slidesPerView={1}
                  // initialSlide={2}
                  // modules={[EffectCoverflow]}
                  // className="mySwiper"
                  // breakpoints={{
                  //    1200: {
                  //       slidesPerView: 'auto'
                  //    }
                  // }}
               >
                  <SwiperSlide>
                     <img src="/img/participants/img_1.png" alt="Participants"/>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/img/participants/img_1.png" alt="Participants"/>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/img/participants/img_1.png" alt="Participants"/>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/img/participants/img_1.png" alt="Participants"/>
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/img/participants/img_1.png" alt="Participants"/>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
   )
}

export default Participants;