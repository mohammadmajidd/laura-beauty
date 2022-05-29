import React from 'react';
import {Container, Nav} from "react-bootstrap";

const ProductCategory = () => {
    return (
        <Container>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-Face"> Face </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-Lip">Lip</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-Eye">Eye</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-Eyebrow">Eyebrow</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-Fingernail">Fingernail</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="link-Cosmetic">Cosmetic tools</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default ProductCategory;