import './sass/App.scss'
import React, {useEffect} from 'react';
import LandingPage from "./UI/LandingPage/LandingPage";
import CollectionPage from "./UI/CollectionPage/CollectionPage";
import ProductPage from "./UI/ProductPage/ProductPage";

const App = () => {
    useEffect(() => {
        document.title = 'Laura-Beauty'
    })
    return (
        <div className={'test'}>
            <LandingPage/>
            <CollectionPage/>
            <ProductPage/>
        </div>
    );
};

export default App;