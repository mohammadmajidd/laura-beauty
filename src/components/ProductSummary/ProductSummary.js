import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import brush from '../../assets/productSummary/left.png'
import palette from '../../assets/productSummary/img r.png'
import './ProductSummary.scss'

const ProductSummary = () => {
    return (
        <Container>
            <h2 className=" text-center fw-bold mt-5"><span>Various products</span></h2>

            <Row className={'productSummary'}>
                <Col  className={'productSummary__imageContainer p-0 d-none d-xl-block'}>
                    <img alt={brush} src={brush}/>
                </Col>
                <Col
                    className={'d-flex justify-content-center flex-column align-items-center productSummary__category'}>
                    <p>6</p>
                    <p>category</p>
                </Col>
                <Col className={'d-flex justify-content-center flex-column align-items-center productSummary'}>
                    <p>10</p>
                    <p>brands</p>
                </Col>
                <Col
                    className={'d-flex justify-content-center flex-column align-items-center productSummary__products'}>
                    <p>9<span>k</span></p>
                    <p>products</p>
                </Col>
                <Col className={'productSummary__imageContainer p-0 d-none d-xl-block'}>
                    <img alt={palette} src={palette}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductSummary;