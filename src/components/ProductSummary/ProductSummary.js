import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import brush from '../../assets/productSummary/left.png'
import palette from '../../assets/productSummary/img r.png'
import './ProductSummary.scss'

const ProductSummary = () => {
    return (
        <div className={'pt-5'}>
            <h2 className=" text-center fw-bold mt-5 productSummary__title"><span>Various products</span></h2>
            <Container>
                <Row className={'productSummary'}>
                    <Col className={'productSummary__imageContainer p-0 d-none d-md-block'}>
                        <img className={'img-fluid h-100'} alt={brush} src={brush}/>
                    </Col>

                    <Col
                        className={'d-flex flex-column justify-content-center align-items-center productSummary__category'}>
                        <p>6</p>
                        <span>category</span>
                    </Col>
                    <Col className={'d-flex flex-column justify-content-center  align-items-center productSummary'}>
                        <p>10</p>
                        <span>brands</span>
                    </Col>
                    <Col
                        className={'d-flex flex-column justify-content-center  align-items-center productSummary__products'}>
                        <p>9<span>k</span></p>
                        <span>products</span>
                    </Col>
                    <Col className={'productSummary__imageContainer  p-0 d-none d-md-block'}>
                        <img className={'img-fluid  h-100'} alt={palette} src={palette}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductSummary;