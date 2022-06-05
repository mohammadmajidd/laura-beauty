import './SingleCard.scss'
import React from 'react';
import {Card} from "react-bootstrap";


const SingleCard = (props) => {
    return (
        <Card className={'border-0 fw-bold shadow singleCard'}>
            <div className={'singleCard__cardContent'}>
                <div className='singleCard__imageContainer'>
                    {props.image}
                </div>
                <Card.Body>
                    <Card.Title as={'h5'} className={'text-center singleCard__brandCard'}>{props.name}</Card.Title>
                </Card.Body>
            </div>
        </Card>

    );
};

export default SingleCard;