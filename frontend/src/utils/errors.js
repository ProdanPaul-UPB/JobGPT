import React from 'react';
import {Form} from 'react-bootstrap';

const ErrorField = ({enabled = 0, error = undefined, specialCase = {}}) => {
    return (<>
        <Form.Text
            className="text-danger">{enabled ? (error === undefined ? 'Câmpul este invalid sau necompletat.' : error) : specialCase?.enabled ? specialCase?.error : ''}
        </Form.Text>
    </>);
};


export const validateForm = (initialState = {}, form = {}, regexTest = {}) => {
    const errors = {};

    for (const [key, value] of Object.entries(form)) {
        if (initialState[key] === value) {
            errors[key] = 1;
        }
        if (regexTest[key] && !regexTest[key]?.test(value)) {
            errors[key] = 1;
        }
    }

    return errors;
};

export default ErrorField;
