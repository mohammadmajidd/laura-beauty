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
                spaceBetween={250}
                slidesPerView={5}
                navigation
            >
                {myProducts.map(product => <SwiperSlide> <ProductCard product={product}/></SwiperSlide>)}
            </Swiper>
        </Container>
    );
};

export default Products;