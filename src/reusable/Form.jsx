import React from 'react';
import Joi from 'joi-browser';

class Form extends React.Component {
    state = {
        data: {},
        errors: {}
    };


handleSubmit = e => {
    e.preventDefault();

    //walidacja
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
};



validate = () => {
    const result = Joi.validate(this.state.data, this.schema, { abortEarly: false });
    //walidacja Joi: pierwsze to dane ktore poddajemy walidacji, drugie to schema
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details)
        errors[item.path[0]] = item.message;
    return errors;
};


handleChange = e => {
    const data = {...this.state.data}; 
    data[e.currentTarget.name] = e.currentTarget.value; 
    this.setState({ data });

};


}

export default Form;