'use client';

import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {FaCheck, FaPhoneAlt} from "react-icons/fa";

// import img1 from "../../img/about-page.jpg";
// import img2 from "../../img/cars.png";
import Image from "next/image";
import './style.scss'

const AboutUs = () => {
   return (
      <>
         <section className="about-page-area section_70">
            <Container>
               <Row>
                  <Col lg={6}>
                     <div className="about-page-left">
                        <h4>Про нас</h4>
                        <h3>Millionario: іспанська ДНК для українського бізнесу</h3>
                        <div className="about-list">
                           <ul>
                              <li>
                                <span>
                                  <FaCheck/>
                                </span>
                                 Millionario - це не просто дiаспора підприємців, але й місце, де кожен може знайти
                                 своїх наставників, партнерів та друзів. Ми віримо, що успіх приходить до тих, хто
                                 оточує себе правильними людьми та має надійну підтримку.
                              </li>
                              <li>
                                <span>
                                  <FaCheck/>
                                </span>
                                 Наша мета полягає не лише в тому, щоб допомогти людям заробити гроші, але й знайти своє
                                 призначення та розвивати свої таланти. Кожен з нас має щось особливе та унікальне, що
                                 може стати ключем до успіху.
                              </li>
                              <li>
                                <span>
                                  <FaCheck/>
                                </span>
                                 Ми віримо у те, що бізнес може бути етичним та соціально відповідальним. Тому ми
                                 пропагуємо нову культуру бізнесу, де успіх вимірюється не лише грошима, але й впливом
                                 на людей та навколишнє середовище.
                              </li>
                              <li>
                                <span>
                                  <FaCheck/>
                                </span>
                                 Наша спільнота відкрита до співпраці з будь-якими підприємцями, незалежно від їхнього
                                 досвіду та масштабу бізнесу. Ми віримо, що кожен може навчитися чомусь новому та
                                 зробити свій бізнес кращим.
                              </li>
                              <li>
                                <span>
                                  <FaCheck/>
                                </span>
                                 Ми створили бiзнес клуб, де кожен може бути собою та відчувати підтримку. Ми завжди
                                 відкриті до ідей та пропозицій наших учасників, готові допомогти та підтримати вас на
                                 шляху до успіху.
                              </li>
                           </ul>
                        </div>
                        <div className="about-page-call">
                           <div className="page-call-icon">
                              <FaPhoneAlt/>
                           </div>
                           <div className="call-info">
                              <p>Потрібна допомога?</p>
                              <h4>
                                 <a href="tel:+34613705442">+34 613 705 442</a>
                              </h4>
                           </div>
                        </div>
                     </div>
                  </Col>
                  <Col lg={6}>
                     <div className="about-page-right">
                        <Image
                           src="/img/about-page.jpg"
                           width={0}
                           height={0}
                           sizes="100vw"
                           style={{width: '100%', height: 'auto'}}
                           alt="About Millionario"
                        />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
};

export default AboutUs;
