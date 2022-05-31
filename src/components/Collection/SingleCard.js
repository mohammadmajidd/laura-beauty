import './SingleCard.scss'
import React from 'react';
import {Card} from "react-bootstrap";
import HoverImage from "react-hover-image/build";

const SingleCard = (props) => {
    return (
        <div className='cardContainer'>
            <Card className={'border-0 fw-bold w-100 h-100 shadow cardContainer__singleCard'}>
                <div className='cardContainer__singleCard__imageContainer'>
                    <HoverImage className={'singleCard__imageContainer__imageCard'} hoverSrc={props.hoverImage} src={props.image}/>
                </div>
                <Card.Body>
                    <Card.Title className={'text-center cardContainer__singleCard__brandCard'}>{props.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>

    );
};

export default SingleCard;