'use client';

import React, {useEffect} from "react";
import Image from "next/image";
import ButtonForEvent from "../button";
import {initTicketForEvent} from "../ticketforevent";


const Event2023October01 = () => {

   useEffect(() => {
      initTicketForEvent();
   }, []);

   return (
      <>
         <section className="section_70 forum">
            <div className="banner-wrapper">
               <Image
                  src="/img/forum/event-2023-10-01/forum.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="btn-wrapper">
               <div className="btn-wrapper__contacts">
                  Відповімо<br/> на всі ваші запитання<br/><strong>+34 613 705 442</strong>
               </div>
               <ButtonForEvent/>
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-10-01/forum-invite-1.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
         </section>
         <section className="section_70 forum mobile">
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2023-10-01/mob/Slice1.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="btn-wrapper-mobile">
               <Image
                  src="/img/forum/event-2023-10-01/mob/Slice2-button.jpg"
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
                  src="/img/forum/event-2023-10-01/mob/Slice3.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="btn-wrapper-mobile">
               <Image
                  src="/img/forum/event-2023-10-01/mob/Slice4-button.jpg"
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
                  src="/img/forum/event-2023-10-01/mob/Slice5.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="btn-wrapper-mobile">
               <Image
                  src="/img/forum/event-2023-10-01/mob/Slice6-button.jpg"
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
                  src="/img/forum/event-2023-10-01/mob/Slice7.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="btn-wrapper-mobile">
               <Image
                  src="/img/forum/event-2023-10-01/mob/Slice8-button.jpg"
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
                  src="/img/forum/event-2023-10-01/mob/Slice9.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
         </section>
      </>
   )
};

export default Event2023October01;
