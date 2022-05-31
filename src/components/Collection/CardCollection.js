import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {myCollectionFirstRow, myCollectionSecondRow} from "./collectionData";
import SingleCard from "./SingleCard";

// row row-cols-sm-2  row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-5
const CardCollection = () => {
    return (
        <Container className='collectionSection mt-5'>
            <h2 className="text-center fw-bold"><span>A collection of best</span></h2>
            <Row className='justify-content-center mt-5'>
                {myCollectionFirstRow.map(el => <Col key={el.id}><SingleCard key={el.id} name={el.name} image={el.image}/></Col>)}
            </Row>
            <Row className='justify-content-center mt-5'>
                {myCollectionSecondRow.map(el => <Col key={el.id}><SingleCard  name={el.name} image={el.image}/></Col>)}
            </Row>
        </Container>
    );
};

export default CardCollection;