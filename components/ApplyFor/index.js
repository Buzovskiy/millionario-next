'use client'

import React, {Component, Fragment} from "react";
import {Container, Row} from "react-bootstrap";
import SuccessMessage from "@/components/SuccessMessage";
import ApplyForFormLong from "./ApplyForFormLong";
import ApplyForFormShort from "./ApplyForFormShort";
import './style.scss';

import {useSearchParams, useRouter} from 'next/navigation'


const Components = {
   ApplyForFormLong: ApplyForFormLong,
   ApplyForFormShort: ApplyForFormShort
}


const ApplyFor = (props) => {
   const searchParams = useSearchParams()
   const show_success = searchParams.get('actions') === 'success';
   const ApplyForForm = Components[props.component]
   return (
      <section className="checkout-page-area section_70 apply-for">
         <Container>
            <Row>
               <SuccessMessage show_success={show_success}/>
               <ApplyForForm
                   show_form={!show_success}
                   searchParams={searchParams}
                   router = {useRouter()}
               />
            </Row>
         </Container>
      </section>
   )
}


export default ApplyFor
