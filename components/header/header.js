import "./style.css";
import Image from 'next/image';
import Link from 'next/link';

import Button from "react-bootstrap/Button";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
   return (
      <div className="container header">
         <div className="row py-5">
            <div className="menu-mobile-wrapper">
               <MobileMenu/>
               <div className="logo-wrapper">
                  <Link href='/'>
                     <Image
                        src="/img/logo.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                        alt="logo"
                     />
                  </Link>
               </div>
            </div>
            <div className="menu">
               <div className="logo-wrapper">
                  <Link href='/'>
                     <Image
                        src="/img/logo.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width: '100%', height: 'auto'}}
                        alt="logo"
                     />
                  </Link>
               </div>
               <ul className="mainmenu">
                  <li><Link href="/about-us">Про нас</Link></li>
                  <li>
                     <Link href="#">Заходи</Link>
                     <ul>
                        <li><Link href="/forum/2023-october-01">01 жовтня 2023 р.</Link></li>
                        <li><Link href="/forum/2023-november-01">01 листопада 2023 р.</Link></li>
                        <li><Link href="/forum/2023-november-21">21 листопада 2023 р.</Link></li>
                        <li><Link href="/forum/2024-february-09">9 лютого 2024 р.</Link></li>
                        <li><Link href="/forum/2024-september-20">20 вересня 2024 р.</Link></li>
                        <li><Link href="/forum/2024-october-11">11 жовтня 2024 р.</Link></li>
                     </ul>
                  </li>
                  <li><Link href="/residents">Резиденти</Link></li>
                  <li><Link href="/">Клубна карта</Link></li>
                  <li><Link href="/apply-for">Анкета</Link></li>
                  <li><Link href="/contacts">Контакти</Link></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Header;