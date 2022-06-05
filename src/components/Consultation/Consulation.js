import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import consulter from '../../assets/Consultation/woman.png'
import './Consultation.scss'
import FormSection from "./FormSection/FormSection";
import Image from 'react-bootstrap/Image'

const Consultation = () => {
    return (
        <Container className={'consultationSection mt-5 pb-5'}>
            <Row>
                <Col xs={12} md={5} className={'consultationSection__imageContainer'}>
                    <Image className={'img-fluid w-100 h-100'} alt={consulter} src={consulter}/>
                </Col>
                <Col xs={12} md={7}
                     className={'consultationSection__textContainer d-flex justify-content-center flex-column'}>
                    <h2> Get a free consultation.</h2>
                    <h2> Just leave a request below</h2>
                    <FormSection/>
                </Col>
            </Row>
        </Container>

    );
};

export default Consultation;