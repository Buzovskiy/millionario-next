import Link from 'next/link';
import './style.scss';

const Partners = () => {
   return (
      <div className="container partners">
         <div className="row py-lg-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  Партнери
               </div>
               <div className="partners__wrapper">
                  <div className="partner-item">
                     <div className="image-wrapper">
                        <img src="/img/partners/weestep.png" alt=""/>
                     </div>
                     <div className="description">
                        Найкращий бренд дитячого взуття
                     </div>
                  </div>
                  <div className="partner-item">
                     <div className="image-wrapper">
                        <img src="/img/partners/clanrent.png" alt=""/>
                     </div>
                     <div className="description">
                        Прокат автомобілів преміум класу в Іспанії clanrent.es
                     </div>
                  </div>
                  <div className="partner-item">
                     <div className="image-wrapper">
                        <img src="/img/partners/bigbu.png" alt=""/>
                     </div>
                     <div className="description">
                        Технічний партнер Звук Світло Сцена
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Partners;