import React from 'react';
import {Form,Button} from "react-bootstrap";
import './FormSection.scss'

const FormSection = () => {
    return (
        <div className={'FormSection'}>
            <input placeholder={'Your phone number'}/>
            <Button>Callback</Button>
        </div>
    );
};

export default FormSection;