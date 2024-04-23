'use client';

import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './style.scss';
import TeamMember from "@/components/Team/teamMember";

const Participants = () => {
   const [team, setTeam] = useState([]);

   useEffect(() => {
      const fetchMembers = async () => {
         const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/api/members/list?active=1`);
         const members = await response.json();
         setTeam(members);
      }
      fetchMembers().catch(console.error)
   }, []);

   return (
      <div className="container participants">
         <div className="row py-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  учасники клубу
               </div>
               <Swiper
                  grabCursor={true}
                  slidesPerView={1}
                  spaceBetween={10}
                  breakpoints={{
                     992: {
                        slidesPerView: 3
                     }
                  }}
               >
                  {team.map((member) => (
                     <SwiperSlide key={member.id}>
                        <Image
                           alt="Members"
                           src={member.image_url}
                           width={0}
                           height={0}
                           sizes="100vw"
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   )
}

export default Participants;