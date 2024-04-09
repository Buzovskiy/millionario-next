import Link from 'next/link';
import './style.scss';

const Activities = () => {
   return (
      <div className="container activities">
         <div className="row py-lg-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  Перша МIждународна бiзнес-дiаспора в iспанii
               </div>
               <ul className="activities-list">
                  <li>майстер-класи в готелі в горах</li>
                  <li>нетворкінг на яхті</li>
                  <li>бізнес-ігри, мозкові штурми</li>
                  <li>стратегічні сесії</li>
                  <li>круїзи, походи в гори</li>
                  <li>гольф, покер, мафія, баня</li>
                  <li>Загальний чат</li>
                  <li>групи за сферами бізнесу та інтересами</li>
                  <li>Спільні інвестиційні проекти</li>
                  <li>Підклуби:
                     <span>інвестиції, миротворення, астрологія, мистецтво ораторства, наука систематизації бізнесу, упаковка стартапів, маркетинг, розвитку медіа, продажі, мотивації</span>
                  </li>
                  <li>Тренінги на острові</li>
               </ul>
               <div className="sub-heading">20+ бізнес-івентів та зустрічей щомісяця</div>
               <div className="video-wrapper">
                  <video autoPlay muted loop className='promo-video'>
                     <source src="/video/promo-video.mp4" type="video/mp4"/>
                  </video>
                  <Link style={{position: 'absolute'}} href="/apply-for-short" className="gauto-btn">Подати
                     заявку</Link>
               </div>
               Block video
            </div>
         </div>
      </div>
   )
}

export default Activities;