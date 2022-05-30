import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import './Introduction.scss'

const Introduction = () => {
    return (
        <Container>
            <Row className='mt-5'>
                <Col xs={6} className='introSection__intro'>
                    <h1>
                        Look <br/> M<span>o</span>re Beautiful With Us
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <Button className={'btn-primary'}>shop now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Introduction;