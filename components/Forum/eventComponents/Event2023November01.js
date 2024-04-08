'use client';


import Image from "next/image";
import React from "react";

const ButtonForEvent = () => {
   return (
      <a className="gauto-btn"
         href="https://secure.wayforpay.com/qr/qcb1a7c959064">
         Купити квиток
      </a>
   )
}

const Event2023November01 = () => {


   return (
      <>
         <section className="section_70 forum event-2">
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/slice_1.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/slice_5.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
               <ButtonForEvent/>
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/slice_2.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/slice_4.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
               <ButtonForEvent/>
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/slice_3.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
         </section>
         <section className="section_70 forum mobile event-2">
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/mob/slice_1_mob.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/mob/slice_2_mob.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
               <ButtonForEvent/>
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/mob/slice_3_mob.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/mob/slice_4_mob.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
               <ButtonForEvent/>
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-11-01/mob/slice_5_mob.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
         </section>
      </>
   );
};

export default Event2023November01;
