import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import consulter from '../../assets/Consultation/woman.png'
const Consultation = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={consulter}/>
                </Col>
                <Col>
                    Get a free consultation.
                    Just leave a request below
                </Col>
            </Row>
        </Container>

    );
};

export default Consultation;