import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import brush from '../../assets/productSummary/left.png'
import palette from '../../assets/productSummary/img r.png'
const ProductSummary = () => {
    return (
        <div>
            <Container>
                <h2 className={'text-center'}>Various products</h2>
                <Row>
                    <Col><img src={brush}/></Col>
                    <Col className={'justify-content-center'}>6</Col>
                    <Col>10</Col>
                    <Col>9</Col>
                    <Col><img src={palette}/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductSummary;