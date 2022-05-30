import React from 'react';
import {Form,Button} from "react-bootstrap";


const FormSection = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your phone number" />
            </Form.Group>
            <Button  >Callback</Button>
        </Form>
    );
};

export default FormSection;