import React from 'react';
import {Card, Container} from "react-bootstrap";
import './CommentCard.scss'
const CommentCard = ({comment}) => {
    return (
        <Container  className={'commentSection mt-5 mb-5'}>
            <Card className={'w-100 h-100 border-0 commentSection__card'}>
                <div className={'commentSection__imageContainer'}>
                    <Card.Img variant="top" src={comment.image}/>
                </div>
                <Card.Body as={'div'}>
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