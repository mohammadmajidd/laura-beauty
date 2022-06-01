import React from 'react';
import {Card, Container} from "react-bootstrap";
import './CommentCard.scss'

const CommentCard = ({comment}) => {
    return (
        <Container className={'commentSection mt-5 mb-5'}>
            <Card className={comment.id % 2 !== 0 ? 'border-0 commentSection__card' : 'border-0 commentSection__centerCard'}>
                <div className={'commentSection__imageContainer'}>
                    <Card.Img variant="top" src={comment.image}/>
                </div>
                <Card.Body>
                    <Card.Title as={"h5"}>{comment.name} </Card.Title>
                    <Card.Text as={'p'}>
                        {comment.comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CommentCard;