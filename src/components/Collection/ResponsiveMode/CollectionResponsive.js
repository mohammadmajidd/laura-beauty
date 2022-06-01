import React from 'react';
import {Container} from "react-bootstrap";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import './CollectionResponsive.scss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {myCollectionResponsiveMode} from "./ResponsiveCollectionData";
import SingleCard from "../SingleCard";

const CollectionResponsive = () => {
    return (
        <Container className={'CollectionResponsive'}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={{
                    305: {slidesPerView: 1, spaceBetween: 65},
                    576: {slidesPerView: 1.5, spaceBetween: 15},
                    768: {slidesPerView: 2, spaceBetween: 15},
                    992: {slidesPerView: 1.2, spaceBetween: 65},
                    1200: {slidesPerView: 5, spaceBetween: 15},
                    1400: {slidesPerView: 5, spaceBetween: 15}
                }}

            >
                {myCollectionResponsiveMode.map(el => <SwiperSlide key={el.id}><SingleCard name={el.name}
                                                                                           image={el.image}/></SwiperSlide>)}
            </Swiper>
        </Container>
    );
};

export default CollectionResponsive;