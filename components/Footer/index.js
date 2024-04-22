import Image from "next/image";
import Link from "next/link";
import React from "react";
import {PiFacebookLogoLight } from "react-icons/pi";
import {PiTelegramLogoLight} from "react-icons/pi";
import {PiInstagramLogoLight } from "react-icons/pi";
import styles from "./Footer.module.css"


const Footer = () => {
   return (
      <div className={`container ${styles.footer}`}>
         <div className={`row ${styles.footerRow}`}>
            <div className={`row-wrapper ${styles.RowWrapper}`}>
               <div className={styles.col1}>
                  <div className={styles.socialBlock}>
                     <p className={styles.light}>Долучайтесь до нас!</p>
                     <div className={styles.social}>
                        <Link href="https://t.me/MilliionarioChatBot">
                           <PiTelegramLogoLight/>
                        </Link>
                        <Link href="https://www.instagram.com/millionario.club?igsh=ZWZicnRiYnMyM3Bs">
                           <PiInstagramLogoLight/>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100095414140324">
                           <PiFacebookLogoLight />
                        </Link>
                     </div>
                  </div>
                  <div className={styles.workingHoursBlock}>
                     <p className={styles.time}>Пн-Пт 9:00-21:00</p>
                     <p className={styles.light}>Alicante, Torrevieja, Madrid, Spain</p>
                  </div>
                  <div className={styles.telephoneBlock}>
                     <Link href="tel:+34602452414">+34 60 24 52 414</Link>
                     <p className={styles.light}>Відповімо на всі ваші питання!</p>
                  </div>
               </div>
               <div className={styles.col2}>
                  <Image
                     src="/img/dnk.png"
                     width={0}
                     height={0}
                     alt="Millionario"
                     sizes="100vw"
                     className={styles.dnk}
                  />
               </div>
               <div className={styles.col3}>
                  <Image
                     src="/img/logo.png"
                     width={0}
                     height={0}
                     alt="Millionario"
                     sizes="100vw"
                     className={styles.logo}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer;