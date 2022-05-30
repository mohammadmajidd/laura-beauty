import './sass/App.scss'
import React, {useEffect} from 'react';
import Main from "./components/Layout/Main/Main";
import Footer from "./components/Layout/Footer/Footer";
import {Button} from "react-bootstrap";

const App = () => {
    useEffect(() => {
        document.title = 'Laura-Beauty'
    })
    return (
        <div>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;