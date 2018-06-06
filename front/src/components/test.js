import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const ContactForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="mt-100">
            <div>
                <Field name="email" component="input" type="email" />
            </div>
            <button type="submit">Bjud in</button>
        </form>
    )
};

const onSubmit = (values, dispatch) => {
    console.log(values)
};

export default connect()(reduxForm({
    form: 'addUser',
    onSubmit,
})(ContactForm));
