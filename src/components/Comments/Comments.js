import React from 'react';
import {myComments} from "./commentsData";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Container} from "react-bootstrap";
import CommentCard from "./CommentCard";

const Comments = () => {
    return (
        <Container>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
            >
                {myComments.map(comment=><SwiperSlide><CommentCard comment={comment}/></SwiperSlide>)}
            </Swiper>
        </Container>

    );
};

export default Comments;