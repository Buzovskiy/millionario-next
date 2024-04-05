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
                  <h3>{t("apply_for_page.anketa_of_cadidate")}</h3>
                  <p>{t("apply_for_page.the_information_is_confidential")}</p>
                  <form>
                     <Row className="checkout-form">
                        <Col>{this.renderFormErrors()}</Col>
                     </Row>
                     <Row className="checkout-form">
                        <Col md={6}>
                           <label htmlFor="name23"
                                  className={"asterisk"}>{t("apply_for_page.name_and_surname")}</label>
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
                           <label htmlFor="phone" className={"asterisk"}>{t("car_booking.phn")}</label>
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
                                  className={"asterisk"}>{t("apply_for_page.where_you_live")}</label>
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
                                  className={"asterisk"}>{t("apply_for_page.kind_of_business")}</label>
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
                           <label htmlFor="websites_reference">{t("apply_for_page.websites_reference")}</label>
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
                           <label htmlFor="hobby">{t("apply_for_page.hobby")}</label>
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
                                  className={"asterisk"}>{t("apply_for_page.expectations_from_club")}</label>
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
                                  className={"asterisk"}>{t("apply_for_page.your_skills")}</label>
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
                              className={"asterisk"}>{t("apply_for_page.participation_in_common_projects")}</label>
                           <label htmlFor="part0"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part0"
                                                         value='0'/>{t('apply_for_page.no')}</label>
                           <label htmlFor="part1"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part1"
                                                         value='1'/>{t('apply_for_page.yes_as_investor')}
                           </label>
                           <label htmlFor="part2"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part2"
                                                         value='2'/>{t('apply_for_page.yes_as_partner')}
                           </label>
                           <label htmlFor="part3"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part3"
                                                         value='3'/>{t('apply_for_page.want_investments')}
                           </label>
                           <label htmlFor="part4"><input onChange={this.handleChange} type="checkbox"
                                                         name="participation" id="part4"
                                                         value='4'/>{t('apply_for_page.have_startup')}</label>
                           <label htmlFor="part5">
                              <input onChange={this.handleChange} type="checkbox" name="participation"
                                     id="part5" value='5'/>{t('apply_for_page.other')}
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
                           <label htmlFor="telegram_nick">{t("apply_for_page.telegram_nick")}</label>
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
                           <label htmlFor="your_instagramm">{t("apply_for_page.your_instagramm")}</label>
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
                           <label htmlFor="your_fb">{t("apply_for_page.your_fb")}</label>
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
                              className={"asterisk"}>{t("apply_for_page.personal_data_agreement")}</label>
                           <label htmlFor="personal_data_agreement">
                              <input onChange={this.handleChange}
                                     type="checkbox"
                                     name="personal_data_agreement"
                                     id="personal_data_agreement"
                                     value='0'/>
                              {t('apply_for_page.agree')}</label>
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
                           className="gauto-btn">
                        {t("send")}
                     </Link>
                  </div>
               </div>
            </Col>
         </Fragment>
      )
   }
}

export default ApplyForFormShort