import React, {Component, Fragment} from "react";
import Link from 'next/link';
import {Row, Col} from "react-bootstrap";
import axios from "axios";


class ApplyForForm extends Component {

   constructor(props) {
      super(props);
      this.link = `${process.env.NEXT_PUBLIC_API_LINK}/api/messages/`
      this.state = {
         formFields: {},
         fields_errors: {},
         form_errors: [],
      };
   }

   handleSubmit = (e, item) => {
      e.preventDefault();
      let form_errors = [];
      this.setState({form_errors});
      axios
         .post(this.link, item)
         // .post(`${process.env.NEXT_PUBLIC_API_LINK}/api/messages/`, item)
         .then((res) => {
            this.props.router.push('/apply-for/?actions=success');
         })
         .catch((error) => { // error is handled in catch block
            if (error.response) { // status code out of the range of 2xx
               // console.log("Status :" + error.response.status);
               if (error.response.status === 400 && typeof (error.response.data) === 'object') {
                  let fields_errors = error.response.data;
                  this.setState({fields_errors});
                  if (error.response.data.hasOwnProperty('non_field_errors')) {
                     let form_errors = [...this.state.form_errors, ...error.response.data.non_field_errors];
                     this.setState({form_errors});
                  }
               } else {
                  let form_errors = [...this.state.form_errors, String(error.response.data)];
                  this.setState({form_errors});
               }
            } else if (error.request) { // The request was made but no response was received
               let form_errors = [...this.state.form_errors, error.request];
               this.setState({form_errors});
            } else {// Error on setting up the request
               let form_errors = [...this.state.form_errors, error.message];
               this.setState({form_errors});
            }
         });
   };

   /**
    * Check errors for form field
    * @param {Object} element - The object representing form field
    * @param {string} element.name - The name of the form field input
    * @param {string} element.value - The value of the form field input
    * @param {boolean} element.required - The required attribute of the form field input
    */
   checkFieldErrors = (element) => {
      let {name, value} = element;
      let fields_errors = {...this.state.fields_errors, [name]: []};
      if (element.required && !value) {
         fields_errors[name] = ['Це поле не повинно бути порожнім'];
      }
      this.setState({fields_errors})
   }

   handleChange = (e) => {
      let {name, value} = e.target;
      this.checkFieldErrors(e.target);
      if (e.target.type === "checkbox") {
         name = e.target.name;
         value = this.state.formFields.hasOwnProperty(name) ? this.state.formFields[name] : [];
         value = value.filter(item => item !== e.target.value);
         if (e.target.checked) value.push(e.target.value);
      }
      const formFields = {...this.state.formFields, [name]: value};
      this.setState({formFields});
   };

   onBlur = (e) => {
      this.checkFieldErrors(e.target);
   };

   renderFieldError = (field_name) => {
      let fields_errors = [];
      if (this.state.fields_errors.hasOwnProperty(field_name)) {
         fields_errors = this.state.fields_errors[field_name];
      }
      return fields_errors.map((item, id) => (
         <p key={id} className="error">{item}</p>
      ));
   }

   renderFormErrors = () => {
      let form_errors = this.state.form_errors;
      return form_errors.map((item, id) => (
         <p key={id} className="error">{item}</p>
      ))
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
                           <label htmlFor="email" className={"asterisk"}>Електронна пошта</label>
                           <input
                              type="text"
                              name="email"
                              value={this.state.formFields.email ? this.state.formFields.email : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="email"
                              required
                           />
                           {this.renderFieldError('email')}
                        </Col>
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
                     </Row>
                     <Row className="checkout-form">
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
                     </Row>
                     <Row className="checkout-form">
                        <Col md={12} className={"choices"}>
                           <label className={"asterisk"}>Були на наших заходах?</label>
                           <label htmlFor="events_visited_0"><input onChange={this.handleChange} type="radio"
                                                                    name="events_visited" id="events_visited_0"
                                                                    value='ні'/>ні
                           </label>
                           <label htmlFor="events_visited_1"><input onChange={this.handleChange} type="radio"
                                                                    name="events_visited" id="events_visited_1"
                                                                    value='так'/>так
                           </label>
                           {this.renderFieldError('events_visited')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
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
                     </Row>
                     <Row className="checkout-form">
                        <Col md={6}>
                           <label htmlFor="collegues_number"
                                  className={"asterisk"}>Кількість співробітників</label>
                           <input
                              type="text"
                              name="collegues_number"
                              value={this.state.formFields.collegues_number ? this.state.formFields.collegues_number : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="collegues_number"
                              required
                           />
                           {this.renderFieldError('collegues_number')}
                        </Col>
                        <Col md={6}>
                           <label htmlFor="year_turnover"
                                  className={"asterisk"}>Оборот на рік (євро)</label>
                           <input
                              type="text"
                              name="year_turnover"
                              value={this.state.formFields.year_turnover ? this.state.formFields.year_turnover : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="year_turnover"
                              required
                           />
                           {this.renderFieldError('year_turnover')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col md={6}>
                           <label htmlFor="other_experience"
                                  className={"asterisk"}>Досвід в інших нішах</label>
                           <input
                              type="text"
                              name="other_experience"
                              value={this.state.formFields.other_experience ? this.state.formFields.other_experience : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="other_experience"
                              required
                           />
                           {this.renderFieldError('other_experience')}
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
                        <Col md={6}>
                           <label htmlFor="business_goal"
                                  className={"asterisk"}>Ціль по бізнесу</label>
                           <input
                              type="text"
                              name="business_goal"
                              value={this.state.formFields.business_goal ? this.state.formFields.business_goal : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="business_goal"
                              required
                           />
                           {this.renderFieldError('business_goal')}
                        </Col>
                        <Col md={6}>
                           <label htmlFor="actual_problems">Актуальні проблеми</label>
                           <input
                              type="text"
                              name="actual_problems"
                              value={this.state.formFields.actual_problems ? this.state.formFields.actual_problems : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="actual_problems"
                           />
                           {this.renderFieldError('actual_problems')}
                        </Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col sm={12}>
                           <label htmlFor="request_for_mentor">Запит для ментора або сильнішого підприємця</label>
                           <input
                              type="text"
                              name="request_for_mentor"
                              value={this.state.formFields.request_for_mentor ? this.state.formFields.request_for_mentor : ''}
                              onChange={this.handleChange}
                              onBlur={this.onBlur}
                              id="request_for_mentor"
                           />
                           {this.renderFieldError('request_for_mentor')}
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



export default ApplyForForm
