import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../assets/navBar icons/logo.svg'
import searchIcon from '../assets/navBar icons/search-interface-symbol.svg'
import userIcon from '../assets/navBar icons/ic user.svg'
import shoppingIcon from '../assets/navBar icons/shopping-bag-of-normal-design-outline.svg'
const Header = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img alt={logo} src={logo}/>
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
                        <Nav><img alt={searchIcon} src={searchIcon}/></Nav>
                        <Nav><img alt={userIcon} src={userIcon}/></Nav>
                        <Nav><img alt={shoppingIcon} src={shoppingIcon}/></Nav>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;