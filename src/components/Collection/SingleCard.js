import './SingleCard.scss'
import React from 'react';
import {Card} from "react-bootstrap";


const SingleCard = (props) => {
    return (
        <Card className='border-0 fw-bold w-100 h-100 shadow singleCard'>
            <Card.Img className={'singleCard__cardImage m-auto'} variant="top" src={props.image}
                      style={{width: props.name === 'clinque' ? '50px' : '80px'}}/>
            <Card.Body>
                <Card.Title className={'text-center singleCard__brandCard'}>{props.name}</Card.Title>
            </Card.Body>
        </Card>

    );
};

export default SingleCard;