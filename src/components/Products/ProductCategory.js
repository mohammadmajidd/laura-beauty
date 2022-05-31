import React from 'react';
import {Container, Nav} from "react-bootstrap";
import './ProductCategory.scss'
const ProductCategory = () => {
    return (
        <Container className={'productCategory '}>
            <Nav className={'w-100 d-flex justify-content-between  productCategory__navBar '}  variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link className={'text-black ps-5 pe-5'}  eventKey="link-Face"> Face </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-5 pe-5'} eventKey="link-Lip">Lip</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-5 pe-5'} eventKey="link-Eye">Eye</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-5 pe-5'} eventKey="link-Eyebrow">Eyebrow</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-5 pe-5'} eventKey="link-Fingernail">Fingernail</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-5 pe-5'}  eventKey="link-Cosmetic">Cosmetic tools</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default ProductCategory;