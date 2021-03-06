import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../../assets/NavBarIcons/logo.svg'
import searchIcon from '../../../assets/NavBarIcons/search-interface-symbol.svg'
import userIcon from '../../../assets/NavBarIcons/ic user.svg'
import shoppingIcon from '../../../assets/NavBarIcons/shopping-bag-of-normal-design-outline.svg'
import './Header.scss'

const Header = () => {
    return (
        <>
            <Navbar expand={"lg"}>
                <Container className={'header'}>
                    <Navbar.Brand className={'header__logo'}>
                        <img alt={logo} src={logo}/>
                        <div className={'header__textLogo'}>
                            <p>Laura</p>
                            <p>beauty</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className={'text-center'} id="basic-navbar-nav">
                        <Nav className={'header__nav'}>
                            <Nav.Link className={'me-4 ms-4'} href="#home">Brands</Nav.Link>
                            <Nav.Link className={'me-4 ms-4'} href="#features">Products</Nav.Link>
                            <Nav.Link className={'me-4 ms-4'} href="#pricing">Branches</Nav.Link>
                            <Nav.Link className={'me-4 ms-4'} href="#price">About Us</Nav.Link>
                        </Nav>
                        <Nav className={'header__navIcon justify-content-center'}>
                            <Nav className={'me-2 ms-2 header__navIcon__iconContainer'}><img alt={searchIcon} src={searchIcon}/></Nav>
                            <Nav className={'me-2 ms-2 header__navIcon__iconContainer'}><img alt={userIcon}
                                                                                    src={userIcon}/></Nav>
                            <Nav className={'me-2 ms-2 header__navIcon__iconContainer'}><img alt={shoppingIcon}
                                                                                    src={shoppingIcon}/></Nav>
                        </Nav >
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;