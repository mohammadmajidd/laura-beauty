import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {myCollection} from "./collectionData";
import SingleCard from "./SingleCard";
import './CardCollection.scss'
import CollectionResponsive from "./ResponsiveMode/CollectionResponsive";

const CardCollection = () => {
    return (
        <>
            <h2 className="text-center fw-bold collectionSection__title"><span>A collection of best</span></h2>
            <Container className='collectionSection mt-5 mb-5'>
                <Row className='justify-content-center mt-5 collectionSection__row gy-md-5 gy-xl-0 '>
                    {myCollection.map(el => <Col
                        className={(el.id <= 5 && el.id % 2 === 0) || (el.id >= 5 && el.id % 2 !== 0) ? 'align-self-start' : 'align-self-end'
                        } key={el.id}><SingleCard
                        name={el.name} image={el.image}/></Col>)}
                    {/*    el.id % 2 === 0 ? 'align-self-start' : 'align-self-end'*/}
                </Row>
            </Container>
            <Container className='collectionSection__responsiveMode'>
                <CollectionResponsive/>
            </Container>
        </>
    );
};

export default CardCollection;