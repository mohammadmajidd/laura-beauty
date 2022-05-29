import React from 'react';
import {Card} from "react-bootstrap";

const ProductCard = ({product}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <div className={'d-flex justify-content-around'}>
                <div><img alt='icon' src={product.icon}/></div>
                <div>new</div>
            </div>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <div>
                    <span>{product.price}</span>
                    <button>+</button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;