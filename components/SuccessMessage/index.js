import React from "react";
import {Col} from "react-bootstrap";


function SuccessMessage({show_success}){
    if (show_success){
        return (
            <Col className={'form-success'}>Форма відправлена. Ми з вами зв'яжемось</Col>
        )
    }
    return null;
}

export default SuccessMessage;
