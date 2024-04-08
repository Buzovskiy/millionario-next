import ApplyForForm from "./ApplyForForm";
import React, {Fragment} from "react";
import {Col, Row} from "react-bootstrap";
import Link from 'next/link';


class ApplyForFormShort extends ApplyForForm {

   constructor(props) {
      super(props);
      this.link = `${process.env.NEXT_PUBLIC_API_LINK}/api/messages/short/`
   }

   render() {
      const {t} = this.props
      if (!this.props.show_form) return null;
      return (
         <Fragment>
            <Col sm={12}>
               <div className="checkout-left-box">
                  <h3>Анкета кандидата у бізнес-клуб</h3>
                  <p>Інформацію, яку ви надаєте, суворо конфіденційна!</p>
                  <form>
                     <Row className="checkout-form">
                        <Col>{this.renderFormErrors()}</Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col md={6}>
                           <label htmlFor="name23"
                                  className={"asterisk"}>Ім'я, прізвище</label>
                           <input
                              type="text"
                              name="name"
                              value={this.state.formFields.name ? this.state.formFields.name : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="name23"
                              required
                           />
                           {this.renderFieldError('name')}
                        </Col>
                        <Col md={6}>
                           <label htmlFor="phone" className={"asterisk"}>Ваш номер телефону</label>
                           <input
                              type="text"
                              name="phone_number"
                              value={this.state.formFields.phone_number ? this.state.formFields.phone_number : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="phone"
                              required
                           />
                           {this.renderFieldError('phone_number')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col md={6}>
                           <label htmlFor="where_you_live"
                                  className={"asterisk"}>Місце проживання (місто)</label>
                           <input
                              type="text"
                              name="where_you_live"
                              value={this.state.formFields.where_you_live ? this.state.formFields.where_you_live : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="where_you_live"
                              required
                           />
                           {this.renderFieldError('where_you_live')}
                        </Col>
                        <Col md={6}>
                           <label htmlFor="kind_of_business"
                                  className={"asterisk"}>Бізнес/ніша</label>
                           <input
                              type="text"
                              name="kind_of_business"
                              value={this.state.formFields.kind_of_business ? this.state.formFields.kind_of_business : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="kind_of_business"
                              required
                           />
                           {this.renderFieldError('kind_of_business')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col md={6}>
                           <label htmlFor="websites_reference">Посилання на сайт(и) компанії</label>
                           <input
                              type="text"
                              name="websites_reference"
                              value={this.state.formFields.websites_reference ? this.state.formFields.websites_reference : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="websites_reference"
                           />
                           {this.renderFieldError('websites_reference')}
                        </Col>
                        <Col md={6}>
                           <label htmlFor="hobby">Хобі</label>
                           <input
                              type="text"
                              name="hobby"
                              value={this.state.formFields.hobby ? this.state.formFields.hobby : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="hobby"
                           />
                           {this.renderFieldError('hobby')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col sm={12}>
                           <label htmlFor="expectations_from_club"
                                  className={"asterisk"}>Сподівання від клубу</label>
                           <input
                              type="text"
                              name="expectations_from_club"
                              value={this.state.formFields.expectations_from_club ? this.state.formFields.expectations_from_club : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="expectations_from_club"
                              required
                           />
                           {this.renderFieldError('expectations_from_club')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col sm={12}>
                           <label htmlFor="your_skills"
                                  className={"asterisk"}>Чим Ви можете бути корисним для одноклубників(ваші компетенції, навички, зв'язки)?</label>
                           <input
                              type="text"
                              name="your_skills"
                              value={this.state.formFields.your_skills ? this.state.formFields.your_skills : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="your_skills"
                              required
                           />
                           {this.renderFieldError('your_skills')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col md={12} className={"choices"}>
                           <label
                              className={"asterisk"}>Чи готові ви брати участь у спільних проектах (інвестиції, партнерство, позики)?</label>
                           <label htmlFor="part0"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part0"
                                                         value='0'/>ні</label>
                           <label htmlFor="part1"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part1"
                                                         value='1'/>так, в якості інвестора
                           </label>
                           <label htmlFor="part2"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part2"
                                                         value='2'/>так, в якості партнера
                           </label>
                           <label htmlFor="part3"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part3"
                                                         value='3'/>хочу залучити інвестиції, під відсоток чи частку у компанії
                           </label>
                           <label htmlFor="part4"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part4"
                                                         value='4'/>є стартап, шукаю інвесторів/партнерів</label>
                           <label htmlFor="part5">
                              <input onChange={this.handleChange} type="checkbox" name="participation"
                                     id="part5" value='5'/>інше:
                              <input
                                 onChange={this.handleChange}
                                 type="text"
                                 name="participation_other"
                                 value={this.state.formFields.participation_other ? this.state.formFields.participation_other : ''}/>
                           </label>
                           {this.renderFieldError('participation')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col sm={12} md={6}>
                           <label htmlFor="telegram_nick">Ваш нік у Телеграм</label>
                           <input
                              type="text"
                              name="telegram_nick"
                              value={this.state.formFields.telegram_nick ? this.state.formFields.telegram_nick : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="telegram_nick"
                           />
                           {this.renderFieldError('telegram_nick')}
                        </Col>
                        <Col sm={12} md={6}>
                           <label htmlFor="your_instagramm">Ваш обліковий запис в інстаграм</label>
                           <input
                              type="text"
                              name="your_instagramm"
                              value={this.state.formFields.your_instagramm ? this.state.formFields.your_instagramm : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="your_instagramm"
                           />
                           {this.renderFieldError('your_instagramm')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col sm={12} md={6}>
                           <label htmlFor="your_fb">Ваш обліковий запис у ФБ</label>
                           <input
                              type="text"
                              name="your_fb"
                              value={this.state.formFields.your_fb ? this.state.formFields.your_fb : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="your_fb"
                           />
                           {this.renderFieldError('your_fb')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col md={12} className={"choices"}>
                           <label
                              className={"asterisk"}>Згода на обробку даних</label>
                           <label htmlFor="personal_data_agreement">
                              <input onChange={this.handleChange}
                                     type="checkbox"
                                     name="personal_data_agreement"
                                     id="personal_data_agreement"
                                     value='0'/>
                              згоден</label>
                           {this.renderFieldError('personal_data_agreement')}
                        </Col>
                     </Row>
                  </form>
               </div>
            </Col>
            <Col sm={12}>
               <div className="booking-right">
                  <div className="action-btn">
                     <Link href="/" onClick={(e) => this.handleSubmit(e, this.state.formFields)}
                           className="mil-btn">
                        Відправити
                     </Link>
                  </div>
               </div>
            </Col>
         </Fragment>
      )
   }
}

export default ApplyForFormShort