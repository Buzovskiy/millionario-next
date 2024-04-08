import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import './style.scss';

const Promo = () => {
   return (
      <>
         <section className="gauto-promo-area">
            <Container>
               <Row className="align-items-center">
                  <Col md="6">
                     <div className="promo-box-left">
                        <Image
                           src="/img/400x213.jpg"
                           width={0}
                           height={0}
                           sizes="100vw"
                           style={{width: '100%', height: 'auto'}}
                           alt="Business club"
                        />
                     </div>
                  </Col>
                  <Col md="6">
                     <div className="promo-box-right">
                        <h3>Хочете заробляти з нами?<br/>Умови для вступу в Millionario Business Club!</h3>
                        <ul>
                           <li>1 Ви власник бізнесу, який існує більше 1-го року</li>
                           <li>2 Ви шукайте друзів, хочете розвиватися та масштабуватись</li>
                           <li>3 Готовий ділитися досвідом</li>
                           <li>4 Сукупний оборот вашого бізнесу $500 000+ на рік</li>
                           <li>5 Ви поділяєте наші цінності: довіру, відкритість спільнодію</li>
                        </ul>
                        <Link href="/apply-for" className="mil-btn">
                           Вступити до клубу
                        </Link>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
};

export default Promo;
