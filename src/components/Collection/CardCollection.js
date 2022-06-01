import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {myCollectionFirstRow, myCollectionSecondRow} from "./collectionData";
import SingleCard from "./SingleCard";
import './CardCollection.scss'
import CollectionResponsive from "./ResponsiveMode/CollectionResponsive";

const CardCollection = () => {
    return (
        <>
            <h2 className="text-center fw-bold collectionSection__title"><span>A collection of best</span></h2>
            <Container className='collectionSection mt-5 mb-5'>

                <Row className='justify-content-center mt-5 collectionSection__row'>
                    {myCollectionFirstRow.map(el => <Col
                        className={el.id % 2 === 0 ? 'align-self-start' : 'align-self-end'} key={el.id}><SingleCard
                        name={el.name} image={el.image}/></Col>)}
                </Row>
                <Row className='justify-content-center collectionSection__row'>
                    {myCollectionSecondRow.map(el => <Col
                        className={el.id % 2 !== 0 ? 'align-self-start' : 'align-self-end'} key={el.id}><SingleCard
                        name={el.name} image={el.image}/></Col>)}
                </Row>

            </Container>
            <Container className='collectionSection__responsiveMode'>
                <CollectionResponsive/>
            </Container>
        </>
    );
};

export default CardCollection;