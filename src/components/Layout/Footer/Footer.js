import React from 'react';
import {Container, Nav} from "react-bootstrap";
import logo from '../../../assets/Footer/footerLogo.svg'

const Footer = () => {
    return (
        <Container>
            <img src={logo}/>
            <Nav>
                <Nav.Item>
                    <Nav.Link>Brands</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Branches</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Contact US</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>About</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default Footer;