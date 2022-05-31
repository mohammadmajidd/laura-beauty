import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../../assets/navBar icons/logo.svg'
import searchIcon from '../../../assets/navBar icons/search-interface-symbol.svg'
import userIcon from '../../../assets/navBar icons/ic user.svg'
import shoppingIcon from '../../../assets/navBar icons/shopping-bag-of-normal-design-outline.svg'
import './Header.scss'
const Header = () => {
    return (
        <>
            <Navbar>
                <Container className={'header'}>
                    <Navbar.Brand className={'header__logo'}>
                        <img alt={logo} src={logo}/>
                        <div>
                            <p>Laura</p>
                            <p>beauty</p>
                        </div>
                    </Navbar.Brand>

                    <Nav className={'header__nav'}>
                        <Nav.Link className={'me-4 ms-4'} href="#home">Brands</Nav.Link>
                        <Nav.Link className={'me-4 ms-4'} href="#features">Products</Nav.Link>
                        <Nav.Link className={'me-4 ms-4'} href="#pricing">Branches</Nav.Link>
                        <Nav.Link className={'me-4 ms-4'} href="#price">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav className={'me-2 ms-2'}><img alt={searchIcon} src={searchIcon}/></Nav>
                        <Nav className={'me-2 ms-2'}><img alt={userIcon} src={userIcon}/></Nav>
                        <Nav className={'me-2 ms-2'}><img alt={shoppingIcon} src={shoppingIcon}/></Nav>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;