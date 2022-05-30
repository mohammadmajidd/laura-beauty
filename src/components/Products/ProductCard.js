import React from 'react';
import {Card} from "react-bootstrap";
import './ProductCard.scss'

const ProductCard = ({product}) => {
    return (
        <Card style={{width: '18rem'}} className={'productCard border-0 shadow p-3 rounded-3'}>
            <div className={'d-flex justify-content-between align-items-center productCard__cardHeader'}>
                <img alt='icon' src={product.icon}/>
                <div>new</div>
            </div>
            <div className={'productCard__imageContainer'}>
                <Card.Img variant="top" src={product.image}/>
            </div>

            <Card.Body>
                <div className={'productCard__cardTitle'}>
                    <Card.Title>{product.name}</Card.Title>
                </div>

                <div className={'d-flex justify-content-between productCard__productInfo'}>
                    <p>View details</p>
                    <div className={'productCard__productInfo__action'}>
                        <p>${product.price}</p>
                        <button>+</button>
                    </div>

                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;