import "./style.css";
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
   return (
      <div className="container hero">
         <div className="row py-lg-5">
            <div className="row-wrapper">
               <div className="description">
                  <div>Ласкаво просимо до бізнес-клубу Millionario</div>
                  <div className="tagline">Iспанська ДНК <br/>для бiзнесу</div>
                  <Link href="/apply-for-short" className="mil-btn">подати заявку</Link>
                  <div className="hero__contacts">
                     <p>Ваш успiх — у вашому оточеннi!</p>
                     <p><a className="phone" href="tel:+34613705442">+34 602 45 24 14</a></p>
                     <p>Alicante, Torrevieja, Madrid</p>
                  </div>
               </div>
               <Image
                  src="/img/body.png"
                  width={643}
                  height={0}
                  style={{height: 'auto'}}
                  alt="logo"
                  className="hero__man"
               />
            </div>
         </div>
      </div>
   )
}

export default Hero;