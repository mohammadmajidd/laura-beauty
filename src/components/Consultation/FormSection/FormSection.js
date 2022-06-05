import React from 'react';
import {Form, Button, Container} from "react-bootstrap";
import './FormSection.scss'

const FormSection = () => {
    return (
        <Container className={'FormSection'}>
            <input placeholder={'Your phone number'}/>
            <Button>Callback</Button>
        </Container>
    );
};

export default FormSection;