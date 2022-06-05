import React from 'react';
import {myComments} from "./commentsData";
import {A11y, Navigation, Pagination, Scrollbar} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Container} from "react-bootstrap";
import CommentCard from "./CommentCard";
import './Comments.scss'

const Comments = () => {
    return (
        <>
            <h2 className="text-center heading"><span>customer comments</span></h2>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    breakpoints={{
                        375: {slidesPerView: 1},
                        425: {slidesPerView: 1, spaceBetween: 45},
                        576: {slidesPerView: 1.3, spaceBetween: 15},
                        768: {slidesPerView: 1.4, spaceBetween: 45},
                        992: {slidesPerView: 1.5, spaceBetween: 45},
                        1200: {slidesPerView: 1.5, spaceBetween: 25},
                        1400: {slidesPerView: 1.7, spaceBetween: 15,centeredSlides:true}
                    }}
                    initialSlide={1}
                    pagination={true}

                >
                    {myComments.map(comment => <SwiperSlide key={comment.id}><CommentCard
                        comment={comment}/></SwiperSlide>)}
                </Swiper>
        </>
    );
};

export default Comments;