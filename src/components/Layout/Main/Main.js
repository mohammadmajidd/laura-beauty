import React from 'react';
import LandingPage from "../../../UI/LandingPage/LandingPage";
import CollectionPage from "../../../UI/CollectionPage/CollectionPage";
import ProductPage from "../../../UI/ProductPage/ProductPage";
import ConsultationPage from "../../../UI/ConsultationPage/ConsultationPage";
import CommentsPage from "../../../UI/CommentsPage/CommentsPage";
import LauraBeautyPage from "../../../UI/LauraBeautyPage/LauraBeautyPage";

const Main = () => {
    return (
        <div>
            <LandingPage/>
            <CollectionPage/>
            <div style={{backgroundColor:'#f7f3f0'}}>
                <ProductPage/>
                <ConsultationPage/>
            </div>
            <CommentsPage/>
            <LauraBeautyPage/>
        </div>
    );
};

export default Main;