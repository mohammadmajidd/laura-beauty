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
                        1024: {slidesPerView: 1.2, spaceBetween: 65},
                        1440: {slidesPerView: 1.8, spaceBetween: 15}
                    }}
                    initialSlide={1}
                    centeredSlides={true}
                    pagination={true}

                >
                    {myComments.map(comment => <SwiperSlide key={comment.id}><CommentCard
                        comment={comment}/></SwiperSlide>)}
                </Swiper>
        </>
    );
};

export default Comments;