import React from 'react';

const Input = props => {

    const { htmlFor, type, name, label, value, onChange, error } = props


    return(
        <div className="form-group">
            <label htmlFor={htmlFor}>{label}</label>
            <input 
                type={type} 
                className="form-control" 
                id={htmlFor}
                value={value}
                name={name}
                onChange={onChange} />
            {error && <div className="alert alert-warning">{error}</div>}
        </div>
    )
};

export default Input