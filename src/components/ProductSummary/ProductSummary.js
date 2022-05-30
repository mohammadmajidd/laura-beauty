import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import brush from '../../assets/productSummary/left.png'
import palette from '../../assets/productSummary/img r.png'
import './ProductSummary.scss'
const ProductSummary = () => {
    return (
        <div>
            <Container className={'productSummary'}>
                <h2 className={'text-center'}>Various products</h2>
                <Row>
                    <Col><img src={brush}/></Col>
                    <Col className={'d-flex justify-content-center flex-column align-items-center productSummary__category'}>
                        <p>6</p>
                        <p>category</p>
                    </Col>
                    <Col className={'d-flex justify-content-center flex-column align-items-center productSummary__brands'}>
                        <p>10</p>
                        <p>brands</p>
                    </Col>
                    <Col className={'d-flex justify-content-center flex-column align-items-center productSummary__products'}>
                        <p>9<span>k</span></p>
                        <p>products</p>
                    </Col>
                    <Col><img src={palette}/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductSummary;