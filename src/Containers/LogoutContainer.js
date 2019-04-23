import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class LogoutContainer extends Component{
  render(){
        localStorage.clear();
    return <Redirect to="/" />
  }
}

export default LogoutContainer;
