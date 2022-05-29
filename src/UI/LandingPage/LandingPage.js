import React from 'react';
import Header from "../../components/Header";
import './_LandingPage.scss'
import Introduction from "../../components/introduction/Introduction";
const LandingPage = () => {
    return (
        <div className={'main'}>
           <Header/>
            <Introduction/>
        </div>
    );
};

export default LandingPage;