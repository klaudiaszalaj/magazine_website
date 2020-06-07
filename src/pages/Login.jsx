import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../reusable/Input';
import Form from '../reusable/Form';

class Login extends Form {
    state = {
        data: { username: "", password: ""},
        errors: {}
    }

componentDidMount() {
  window.scrollTo(0, 0);
};


validate = () => {
    const errors = {};
    const { data } = this.state;
    //walidacja:
    if (data.username.trim() === '') 
        errors.username = 'Username is required.'
    if (data.password.trim() === '') 
        errors.password = 'Password is required.'

    return Object.keys(errors).length === 0 ? null : errors;
};


doSubmit = () => {
    console.log("Submitted");
}


render() {
    return(
        <div id="login-container" className="container-fluid">
            <div id="form-container" className="col-sm-12">
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        htmlFor="inputUser"
                        type="text"
                        name="username"
                        label="Username"
                        value={this.state.data.username}
                        onChange={this.handleChange}
                        error={this.state.errors.username}
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
                    <div id="form-button" className="row align-items-center">
                        <button 
                            type="submit" 
                            className="btn btn-dark">Submit</button>
                        <div id="not-a-member" className="ml-auto">
                            <p>Not a member yet?</p>
                            <Link to="/register">
                                <h5>Sign up</h5>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
}

export default Login