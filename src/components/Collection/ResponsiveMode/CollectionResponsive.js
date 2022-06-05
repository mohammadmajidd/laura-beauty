import React from 'react';
import {Container} from "react-bootstrap";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import './CollectionResponsive.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {myCollectionResponsiveMode} from "./ResponsiveCollectionData";
import SingleCard from "../SingleCard";

const CollectionResponsive = () => {
    return (
        <Container className={'CollectionResponsive mb-5'}>
            <Swiper
                className={'slide'}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                breakpoints={{
                    0: {slidesPerView: 1},
                    375: {slidesPerView: 1.2, centeredSlides: true},
                    576: {slidesPerView: 2, centeredSlides: false},
                    768: {slidesPerView: 3, spaceBetween: 140},
                    992: {slidesPerView: 3, spaceBetween: 60},
                    1200: {slidesPerView: 4},
                    1400: {slidesPerView: 5}
                }}
                pagination={true}

            >
                {myCollectionResponsiveMode.map(el => <SwiperSlide key={el.id}><SingleCard
                    name={el.name}
                    image={el.image}/></SwiperSlide>)}
            </Swiper>
        </Container>
    );
};

export default CollectionResponsive;