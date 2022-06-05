import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './Introduction.scss'

const Introduction = () => {
    return (
        <Container>
            <Row className='mt-5'>
                <Col xs={12} md={8} lg={6} className='introSection__intro'>
                    <h1>
                        Look <br/> M<span>o</span>re Beautiful With Us
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <a>shop now</a>
                </Col>
            </Row>
        </Container>
    );
};

export default Introduction;