'use client';
import React, {useEffect} from "react";
import {initTicketForEvent} from "../ticketforevent";
import Image from "next/image";


const ButtonForEvent = (props) => {
   if (props.admin_telegram_link === true) {
      const tel_link = `${process.env.REACT_APP_ADMIN_TELEGRAM_LINK}`
      return (
         <a className="gauto-btn gauto-btn__event-3"
            target='_blank'
            href={tel_link}>
            Стати партнером
         </a>
      )
   } else {
      return (
         <a className="gauto-btn epts-cb-green2 tfe-embed-popup gauto-btn__event-3"
            data-alias="forum-millionario-09-02-24"
            data-lang="uk"
            target="_blank"
            href="https://forum-millionario-09-02-24.ticketforevent.com/uk/">
            Купити квиток
         </a>
      )
   }
}


const Event2023November21 = () => {

   useEffect(() => {
      initTicketForEvent();
   }, []);

   return (
      <>
         <section className="section_70 forum event-2 event-2024-02-09">
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/slice1.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/slice2btn.png"
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
                  src="/img/forum/event-2024-02-09/slice3.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/slice4video.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
               <video controls>
                  <source src="/img/forum/event-2024-02-09/video.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
               </video>
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/slice5.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/slice6btn.png"
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
                  src="/img/forum/event-2024-02-09/slice7.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/slice8btn.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
               <ButtonForEvent admin_telegram_link={false}/>
            </div>
         </section>
         <section className="section_70 forum mobile event-2 event-2024-02-09-mob">
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/mob/slice1mob.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/mob/slice2mob_btn.png"
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
                  src="/img/forum/event-2024-02-09/mob/slice3mob.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/mob/slice4mob_video.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
               <video controls>
                  <source src="/img/forum/event-2024-02-09/video.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
               </video>
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/mob/slice5mob.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/mob/slice6mob_btn.png"
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
                  src="/img/forum/event-2024-02-09/mob/slice7mob.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/mob/slice8mob_btn.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '100%', height: 'auto'}}
                  alt="forum"
               />
               <ButtonForEvent admin_telegram_link={false}/>
            </div>
            <div className="forum-invite-wrapper">
               <Image
                  src="/img/forum/event-2024-02-09/mob/slice9mob.png"
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

export default Event2023November21;
