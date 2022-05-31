import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import consulter from '../../assets/Consultation/woman.png'
import './Consultation.scss'
import FormSection from "./FormSection/FormSection";

const Consultation = () => {
    return (
        <Container className={'consultationSection mt-5 pb-3'}>
            <Row>
                <Col className={'consultationSection__imageContainer'}>
                    <img alt={consulter} src={consulter}/>
                </Col>
                <Col className={'consultationSection__textContainer d-flex justify-content-center flex-column'}>
                    <h2> Get a free consultation.</h2>
                    <h2> Just leave a request below</h2>
                    <FormSection/>
                </Col>
            </Row>
        </Container>

    );
};

export default Consultation;