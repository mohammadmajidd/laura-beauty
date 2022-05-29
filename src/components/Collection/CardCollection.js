import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {myCollectionFirstRow, myCollectionSecondRow} from "./collectionData";
import SingleCard from "./SingleCard";

// row row-cols-sm-2  row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-5
const CardCollection = () => {
    return (
        <Container>
            <h2 className={'text-center'}>A collection of best</h2>
            <Row className='justify-content-center mt-5'>
                {myCollectionFirstRow.map(el => <Col><SingleCard key={el.id} name={el.name} image={el.image}/></Col>)}
            </Row>
            <Row className='justify-content-center mt-5'>
                {myCollectionSecondRow.map(el => <Col><SingleCard key={el.id} name={el.name} image={el.image}/></Col>)}
            </Row>
        </Container>
    );
};

export default CardCollection;