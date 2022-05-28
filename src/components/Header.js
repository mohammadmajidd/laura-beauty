import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../assets/navBar icons/logo.svg'
const Header = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo}/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Brands</Nav.Link>
                        <Nav.Link href="#features">Products</Nav.Link>
                        <Nav.Link href="#pricing">Branches</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Brands</Nav.Link>
                        <Nav.Link href="#features">Products</Nav.Link>
                        <Nav.Link href="#pricing">Branches</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;