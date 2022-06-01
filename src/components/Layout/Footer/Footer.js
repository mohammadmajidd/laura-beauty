import React from 'react';
import {Container, Nav} from "react-bootstrap";
import logo from '../../../assets/Footer/footerLogo.svg'
import '../Footer/Footer.scss'
const Footer = () => {
    return (
        <div className={'footerSection'}>
            <div className={'footerSection__imageContainer'}>
                <img alt={logo} src={logo}/>
            </div>
            <Nav className={'d-flex justify-content-center'}>
                <Nav.Item>
                    <Nav.Link className={'text-black'}>Brands</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black'}>Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black'}>Branches</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black'}>Contact US</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black'}>About</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Footer;