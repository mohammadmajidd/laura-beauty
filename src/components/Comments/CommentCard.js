import React from 'react';
import {Card, Container} from "react-bootstrap";

const CommentCard = ({comment}) => {
    return (
        <Container>
            <Card className={'w-100'}>
                <Card.Img variant="top" src={comment.image}/>
                <Card.Body>
                    <Card.Title>{comment.name} </Card.Title>
                    <Card.Text>
                        {comment.comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CommentCard;