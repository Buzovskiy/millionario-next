import Link from 'next/link';
import './style.scss';

const Advantages = () => {
   return (
      <div className="container advantages">
         <div className="row py-lg-5">
            <div className="row-wrapper">
               <div className="section-heading">
                  якi переваги отримують члени бiзнес-клубу
               </div>
               <div className="advantages__wrapper">
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_10.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">Бізнес-івенти</div>
                        <div className="description">
                           Тренінги, конференції та неймовірні експіріанси з сильними світу цього. Кожен місяць, 20+
                           можливостей для розвитку вашого бізнесу
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_1.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">неформальні тусовки в оточенні однодумців</div>
                        <div className="description">
                           Особливі події та святкування ключових моментів життя разом з учасниками
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_2.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">ВНУТРІШНІ КЛУБИ</div>
                        <div className="description">
                           Місце, де ти зможеш об'єднатися з експертами в галузях міжнародної торгівлі, ІТ, маркетингу,
                           логістики, інвестицій, юриспруденції та будівництва
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_3.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">постійна підтримка на шляху до успіху</div>
                        <div className="description">
                           Групові розмови та спеціалізовані підгрупи спрямовані на вашу галузь
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_4.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">карта клубу “Millionario”</div>
                        <div className="description">
                           Знижки на готелі, ресторани, магазини та послуги
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_5.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">розбори ваших персональних бізнес-задач</div>
                        <div className="description">
                           Зустрічі, орієнтовані на вирішення складних ситуацій та розробку стратегій для подальшого
                           руху вперед, за участю досвідчених підприємців
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_6.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">Family days</div>
                        <div className="description">
                           Моменти для створення незабутніх спогадів, поновлення енергії та насолоди життям разом з
                           рідними! Шанс поєднати приємне з корисним
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_7.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">Перспективи для нового етапу у розвитку вашого бізнесу</div>
                        <div className="description">
                           Резиденти клубу охоплюють широкий спектр сфер діяльності, що відкриває нові можливості для
                           інновацій. Крім того, 90% запитів учасників успішно розв'язуються в рамках клубу
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_8.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">Розваги та спортова активність</div>
                        <div className="description">
                           Завжди можна вибрати свою активність: гольф, шахи, покер, біг, теніс, падл та багато іншого
                        </div>
                     </div>
                  </div>
                  <div className="item">
                     <div className="icon"><img src="/img/advantages/img_9.png" alt=""/></div>
                     <div className="information">
                        <div className="heading">Корпоративні подорожі</div>
                        <div className="description">
                           Дізнайтеся більше про внутрішні процеси та ефективні стратегії компаній під час приватних корпоративних подорожей Іспанією та Європою
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Advantages;