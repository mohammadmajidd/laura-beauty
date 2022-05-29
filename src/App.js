import './sass/App.scss'
import React, {useEffect} from 'react';
import LandingPage from "./UI/LandingPage/LandingPage";
import CollectionPage from "./UI/CollectionPage/CollectionPage";
import ProductPage from "./UI/ProductPage/ProductPage";
import ConsultationPage from "./UI/ConsultationPage/ConsultationPage";
import CommentsPage from "./UI/CommentsPage/CommentsPage";
import LauraBeautyPage from "./UI/LauraBeautyPage/LauraBeautyPage";
import Main from "./components/Layout/Main/Main";
import Footer from "./components/Layout/Footer/Footer";

const App = () => {
    useEffect(() => {
        document.title = 'Laura-Beauty'
    })
    return (
        <div className={'test'}>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;