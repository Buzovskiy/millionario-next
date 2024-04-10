import Link from 'next/link';
import './style.scss';

const Chair = () => {
   return (
      <div className="container chair">
         <div className="row py-lg-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  а ТИ ВЖЕ СЕРЕД УСПIШНИХ?
               </div>
               <div className="chair__wrapper">
                  <img src="/img/chair.png" alt=""/>
                  <Link href="/apply-for-short" className="mil-btn">подати заявку</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Chair;