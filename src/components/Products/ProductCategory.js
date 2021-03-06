import React from 'react';
import {Container, Nav} from "react-bootstrap";
import './ProductCategory.scss'
const ProductCategory = () => {
    return (
        <Container className={'productCategory'}>
            <Nav className={'w-100  d-flex flex-column flex-md-row justify-content-md-between  ps-md-0 pe-md-0 productCategory__navBar'}  variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link className={'text-black ps-sm-1 pe-sm-1 ps-md-3 pe-md-3 ps-lg-4 pe-lg-4'}  eventKey="link-Face"> Face </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-sm-1 pe-sm-1 ps-md-3 pe-md-3 ps-lg-4 pe-lg-4'} eventKey="link-Lip">Lip</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-sm-1 pe-sm-1 ps-md-3 pe-md-3 ps-lg-4 pe-lg-4'} eventKey="link-Eye">Eye</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-sm-1 pe-sm-1 ps-md-3 pe-md-3 ps-lg-4 pe-lg-4'} eventKey="link-Eyebrow">Eyebrow</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-sm-1 pe-sm-1 ps-md-3 pe-md-3 ps-lg-4 pe-lg-4'} eventKey="link-Fingernail">Fingernail</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black ps-sm-1 pe-sm-1 ps-md-3 pe-md-3 ps-lg-4 pe-lg-4'}  eventKey="link-Cosmetic">Cosmetic tools</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default ProductCategory;