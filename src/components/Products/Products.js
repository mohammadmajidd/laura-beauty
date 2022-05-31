import React from 'react';
import ProductCard from "./ProductCard";
import {Container} from "react-bootstrap";
import {myProducts} from "./productData";
import {A11y, Navigation, Pagination, Scrollbar} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Products = () => {
    return (
        <Container>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={{
                    320: {slidesPerView: 1},
                    375: {slidesPerView: 1.2},
                    425: {slidesPerView: 1.5, spaceBetween: 45},
                    768: {slidesPerView: 3},
                    1024: {slidesPerView: 4, spaceBetween: 65},
                    1440: {slidesPerView: 4.5,spaceBetween: 45}
                }}
            >
                {myProducts.map(product => <SwiperSlide> <ProductCard product={product}/></SwiperSlide>)}
            </Swiper>
        </Container>
    );
};

export default Products;