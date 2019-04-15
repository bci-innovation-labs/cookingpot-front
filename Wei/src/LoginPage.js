import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //STEP 2


class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>Please enter your email and password</p>
                <input placeholder = "email" />
                <input placeholder = "pawword" />

            </div>
        )
    }
}

export default LoginPage;
