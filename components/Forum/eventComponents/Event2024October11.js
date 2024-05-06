'use client';
import React, {useEffect} from "react";
import {initTicketForEvent} from "../ticketforevent";
import Image from "next/image";
import Link from "next/link";
import styles from "../Forum.module.css";


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
         <a className="epts-cb-green2 tfe-embed-popup btn-silver"
            data-alias="millionario-alicante-16-04-24"
            data-lang="ru"
            target="_blank"
            style={props.style}
            href="https://millionario-alicante-16-04-24.ticketforevent.com/ru/?noredirect">
            Купить билет
         </a>
      )
   }
}


const Event2024October11 = () => {

   useEffect(() => {
      initTicketForEvent();
   }, []);

   return (
      <>
         <div className="container-fluid">
            <div className={`row ${styles.desktop}`}>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/slice1.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/slice2_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  <ButtonForEvent style={{}}/>
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/slice3.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/slice4_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  <ButtonForEvent style={{}}/>
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/slice5.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/slice6_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  <ButtonForEvent style={{}}/>
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/slice7.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/slice8_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  <ButtonForEvent style={{}}/>
               </div>
            </div>

            <div className={`row ${styles.mobile}`}>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/mob/slice1mob.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/mob/slice2mob_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  <ButtonForEvent style={{}}/>
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/mob/slice3mob_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  <ButtonForEvent style={{bottom: '50px'}}/>
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/mob/slice4mob_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  <ButtonForEvent style={{bottom: '100px'}}/>
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/mob/slice5mob_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  <ButtonForEvent style={{bottom: '100px'}}/>
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-10-11/mob/slice6mob.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
            </div>
         </div>
         {/*<div className="container forum event-2 event-2024-02-09">*/}
         {/*   <div className="row py-5">*/}
         {/*      <div className="forum-invite-wrapper">*/}
         {/*         <img src="/img/forum/event-2024-10-11/img.png" alt=""/>*/}
         {/*      </div>*/}
         {/*      <div className="forum-invite-wrapper" style={{height: '300px'}}>*/}
         {/*         <ButtonForEvent/>*/}
         {/*      </div>*/}
         {/*   </div>*/}
         {/*</div>*/}
      </>
   );
};

export default Event2024October11;
