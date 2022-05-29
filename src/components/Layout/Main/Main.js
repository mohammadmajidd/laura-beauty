import React from 'react';
import LandingPage from "../../../UI/LandingPage/LandingPage";
import CollectionPage from "../../../UI/CollectionPage/CollectionPage";
import ProductPage from "../../../UI/ProductPage/ProductPage";
import ConsultationPage from "../../../UI/ConsultationPage/ConsultationPage";
import CommentsPage from "../../../UI/CommentsPage/CommentsPage";
import LauraBeautyPage from "../../../UI/LauraBeautyPage/LauraBeautyPage";

const Main = () => {
    return (
        <>
            <LandingPage/>
            <CollectionPage/>
            <ProductPage/>
            <ConsultationPage/>
            <CommentsPage/>
            <LauraBeautyPage/>
        </>
    );
};

export default Main;