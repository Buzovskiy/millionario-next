import {Container, Row, Col} from "react-bootstrap";
import Image from "next/image";

import './style.scss';


const Team = () => {
   return (
      <section className="gauto-driver-area section_70">
         <Container>
            <Row>
               <Col md={12}>
                  <div className="site-heading">
                     <h4>засновники та учасники</h4>
                     <h2>клубу Millionario</h2>
                  </div>
               </Col>
            </Row>
            <Row>
               {/*<Col lg={3} sm={6}>*/}
               {/*   <div className="single-driver">*/}
               {/*      <div className="driver-image">*/}
               {/*         <Image*/}
               {/*            src="/img/members/member3.jpg"*/}
               {/*            width={0}*/}
               {/*            height={0}*/}
               {/*            sizes="100vw"*/}
               {/*            style={{width: '100%', height: 'auto'}}*/}
               {/*            alt="Member"*/}
               {/*         />*/}
               {/*      </div>*/}
               {/*      <div className="driver-text">*/}
               {/*         <div className="driver-name">*/}
               {/*            <h3>Любомир</h3>*/}
               {/*            <p className='heading'>General Manager</p>*/}
               {/*            <p className='description'>*/}
               {/*               Філософія життя: якщо не пробувати зробити більше ніж можливо, то й ніколи не зробиш все*/}
               {/*               те, на що здатен.*/}
               {/*               11 років в банківській сфері в сегменті малого, середнього та корпоративнорго бізнесу,*/}
               {/*               керівником відділень.*/}
               {/*               Співвласник равликової ферми "Ukrainian Snail Farm"*/}
               {/*               Засновник стартапу Benidorm.info*/}
               {/*            </p>*/}
               {/*         </div>*/}
               {/*      </div>*/}
               {/*   </div>*/}
               {/*</Col>*/}
               <Col lg={4} sm={6}>
                  <div className="single-driver">
                     <div className="driver-image">
                        <img src="/img/members/member2.jpg" alt="Member"/>
                     </div>
                     <div className="driver-text">
                        <div className="driver-name">
                           <h3>Руслан</h3>
                           <p className='heading'>Учасник клубу</p>
                           <p className='description'>
                              Засновник бренду дитячого взуття Weestep. (Виробництво та дистриб'юція) 25 років досвіду у
                              створенні кращих команд, досвiд у міжнародній b2b торгівлі. Філософія життя: Хобі- це те,
                              що приносить задоволення, а задоволення, приносить допомогу іншим)
                           </p>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col lg={4} sm={6}>
                  <div className="single-driver">
                     <div className="driver-image">
                        <img src="/img/members/member7.jpg" alt="driver 1"/>
                     </div>
                     <div className="driver-text">
                        <div className="driver-name">
                           <h3>Олексій</h3>
                           <p className='heading'>Учасник клубу</p>
                           <p className='description'>
                              Засновник: FeelWood - виробництво та дистрибуція дитячих іграшок з дерева, RennetProdukt -
                              виробництво молокозгортальних ферментів. 20-річний досвід у В2В продажах власної
                              продукції, мережа роздрібних магазинів. В Іспанії засновник компанії з Е-коммерс торгівлі
                           </p>
                        </div>
                     </div>
                  </div>
               </Col>
               <Col lg={4} sm={6}>
                  <div className="single-driver">
                     <div className="driver-image">
                        <img src="/img/members/member8.jpg" alt="driver 1"/>
                     </div>
                     <div className="driver-text">
                        <div className="driver-name">
                           <h3>Олександр</h3>
                           <p className='heading'>Учасник клубу</p>
                           <p className='description'>
                              Відкриваю двері до сервісу мрії з обслуговування автомобілів від дітейлінгу до
                              поглибленого технічного ремонту. 20-річний досвід в автомобільному бізнесі, від світової
                              логістики автомобілів та запчастин, до автоматичних мийок
                           </p>
                        </div>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default Team;
