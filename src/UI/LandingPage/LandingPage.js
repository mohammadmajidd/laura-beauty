import React from 'react';
import Header from "../../components/Layout/Header/Header";
import './_LandingPage.scss'
import Introduction from "../../components/introduction/Introduction";
import {Container} from "react-bootstrap";
const LandingPage = () => {
    return (
        <Container fluid={true} className={'LandingPage'}>
           <Header/>
            <Introduction/>
        </Container>
    );
};

export default LandingPage;