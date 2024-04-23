'use client';
import React, {useEffect} from "react";
import {initTicketForEvent} from "../ticketforevent";
import Image from "next/image";
import Link from "next/link";


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
         <a className="mil-btn epts-cb-green2 tfe-embed-popup"
            data-alias="millionario-alicante-16-04-24"
            data-lang="ru"
            target="_blank"
            href="https://millionario-alicante-16-04-24.ticketforevent.com/ru/?noredirect">
            Выбрать билеты
         </a>
      )
   }
}


const Event2024May16 = () => {

   useEffect(() => {
      initTicketForEvent();
   }, []);

   return (
      <>
         <div className="container forum event-2 event-2024-02-09">
            <div className="row py-5">
               <div className="forum-invite-wrapper">
                  <img src="/img/forum/event-2024-05-16/img.png" alt=""/>
               </div>
               <div className="forum-invite-wrapper" style={{height: '300px'}}>
                  <ButtonForEvent/>
               </div>
            </div>
         </div>
      </>
   );
};

export default Event2024May16;
