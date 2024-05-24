import Link from 'next/link';
import './style.scss';

const Chair = () => {
   return (
      <div className="container-fluid chair">
         <div className="row py-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  а ТИ ВЖЕ СЕРЕД УСПIШНИХ?
               </div>
               <div className="chair__wrapper">
                  <img className="desktop" src="/img/chair.png" alt=""/>
                  <img className="mobile" src="/img/chair-mobile.png" alt=""/>
                  <Link href="/apply-for-short" className="mil-btn">подати заявку</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Chair;