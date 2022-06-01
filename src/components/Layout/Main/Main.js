import React from 'react';
import LandingPage from "../../../UI/LandingPage/LandingPage";
import CollectionPage from "../../../UI/CollectionPage/CollectionPage";
import ProductPage from "../../../UI/ProductPage/ProductPage";
import ConsultationPage from "../../../UI/ConsultationPage/ConsultationPage";
import CommentsPage from "../../../UI/CommentsPage/CommentsPage";
import LauraBeautyPage from "../../../UI/LauraBeautyPage/LauraBeautyPage";
import './Main.scss'

const Main = () => {
    return (
        <div>
            <LandingPage/>
            <div className={'graySectionCurveTop'}>
                <CollectionPage/>
                <div className={'graySectionSimple'}>
                    <ProductPage/>
                    <ConsultationPage/>
                </div>
            </div>

            <CommentsPage/>
            <LauraBeautyPage/>
        </div>
    );
};

export default Main;