import './sass/App.scss'
import React, {useEffect} from 'react';
import Main from "./components/Layout/Main/Main";
import Footer from "./components/Layout/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import Introduction from "./components/introduction/Introduction";
import Header from "./components/Layout/Header/Header";

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