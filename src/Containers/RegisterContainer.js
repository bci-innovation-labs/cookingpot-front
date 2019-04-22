import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import RegisterComponent from "../Components/RegisterComponent";

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userName:'',
            userPassword:'',
            referrer: null
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onClick() {
        console.log(this.state);
        localStorage.setItem("userEmail", this.state.userEmail);
        localStorage.setItem("userName", this.state.userName);
        localStorage.setItem("userPassword", this.state.userPassword);

        this.setState({
            referrer: '/dashboard'
        })
    }

    render() {
        if (this.state.referrer !== null) {
            return <Redirect to="/dashboard" />
        }
        return (
            <RegisterComponent
                userEmail={this.state.userEmail}
                userName={this.state.userName}
                userPassword={this.state.userPassword}
                onClick={this.onClick}
                onChange={this.onChange} />
        )
    }
}

export default RegisterContainer
