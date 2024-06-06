'use client';
import React, {useEffect} from "react";
import {initTicketForEvent} from "../ticketforevent";
import Image from "next/image";
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


const Event2024September20 = () => {

   useEffect(() => {
      initTicketForEvent();
   }, []);

   return (
      <>
         <div className="container-fluid">
            <div className={`row ${styles.desktop}`}>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/slice1.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/slice2_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  {/*<ButtonForEvent style={{}}/>*/}
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/slice3.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/slice4_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  {/*<ButtonForEvent style={{}}/>*/}
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/slice5.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/slice6_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  {/*<ButtonForEvent style={{}}/>*/}
               </div>
            </div>

            <div className={`row ${styles.mobile}`}>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/mob/slice1_mob.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/mob/slice2_mob_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  {/*<ButtonForEvent style={{}}/>*/}
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/mob/slice3_mob.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/mob/slice4_mob_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
                  {/*<ButtonForEvent style={{bottom: '100px'}}/>*/}
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/mob/slice5_mob.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
               <div className={styles.block}>
                  <Image
                     src="/img/forum/event-2024-09-20/mob/slice6_mob_btn.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: '100%', height: 'auto'}}
                     alt="forum"
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Event2024September20;
