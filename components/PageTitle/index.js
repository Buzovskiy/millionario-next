import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHome, FaAngleRight } from "react-icons/fa";
import Link from 'next/link';
import './style.scss'


const PageTitle = (props) => {
  return (
    <section className="gauto-breadcromb-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="breadcromb-box">
              <h3>{props.pageTitle}</h3>
              <ul>
                <li>
                  <FaHome />
                </li>
                <li>
                  <Link href="/">Додому</Link>
                </li>
                <li>
                  <FaAngleRight />
                </li>
                <li>{props.pagesub}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageTitle;
