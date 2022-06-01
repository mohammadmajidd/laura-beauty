import './SingleCard.scss'
import React from 'react';
import {Card} from "react-bootstrap";


const SingleCard = (props) => {
    return (
            <Card className={'border-0 fw-bold w-100 h-100 shadow singleCard'}>
                <div className='singleCard__imageContainer'>
                    {props.image}
                </div>
                <Card.Body>
                    <Card.Title as={'h5'} className={'text-center singleCard__brandCard'}>{props.name}</Card.Title>
                </Card.Body>
            </Card>

    );
};

export default SingleCard;