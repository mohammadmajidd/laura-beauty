import React from 'react';
import {Nav} from "react-bootstrap";
import logo from '../../../assets/Footer/footerLogo.svg'
import '../Footer/Footer.scss'
import facebook from '../../../assets/Footer/FooterIcons/face.svg'
import tweeter from '../../../assets/Footer/FooterIcons/tweet.svg'

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
            <Nav className={'d-flex justify-content-center border-bottom'}>
                <Nav.Item>
                    <Nav.Link className={'text-black p-1'}><img alt={facebook} src={facebook}/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black p-1'}><img alt={tweeter} src={tweeter}/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={'text-black p-1'}><img alt={facebook} src={facebook}/></Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Footer;