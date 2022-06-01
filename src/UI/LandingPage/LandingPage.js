import React from 'react';
import Header from "../../components/Layout/Header/Header";
import './_LandingPage.scss'
import Introduction from "../../components/introduction/Introduction";
const LandingPage = () => {
    return (
        <div className={'LandingPage'}>
           <Header/>
            <Introduction/>
        </div>
    );
};

export default LandingPage;