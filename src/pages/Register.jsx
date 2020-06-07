import React from 'react';
import Joi from 'joi-browser';
import Input from '../reusable/Input';
import Form from '../reusable/Form';

class Register extends Form {
    state = {
        data: {username: "", email: "", password: ""},
        errors: {}
    }

schema = {
    username: Joi.string().required().label('Username'),
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().min(5).required().label('Password')

};


doSubmit = () => {
    //call the server
    console.log("Submitted!");
}


render() {
    return(
        <div id="login-container" className="container-fluid">
            <div id="form-container" className="col-sm-12">
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        htmlfor="inputUsername"
                        type="text"
                        name="username"
                        label="Username"
                        value={this.state.data.username}
                        onChange={this.handleChange}
                        error={this.state.errors.username}
                        />  
                    <Input 
                        htmlFor="inputEmail"
                        type="text"
                        name="email"
                        label="Email"
                        value={this.state.data.email}
                        onChange={this.handleChange}
                        error={this.state.errors.email}
                        />
                    <Input 
                        htmlfor="inputPassword"
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.data.password}
                        onChange={this.handleChange}
                        error={this.state.errors.password}
                        />                            
                    <button id="signup-button"
                        type="submit" 
                        className="btn btn-dark">Sign up</button>
                </form>
            </div>
        </div>
    )
}
}

export default Register