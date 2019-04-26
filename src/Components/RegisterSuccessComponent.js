import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class RegisterSuccessComponent extends Component{
  render(){
    return(
      <div>
      <h1>RegisterSuccess</h1>
      <p> Success! you should go dashboard</p>
      <Link to="/dashboard">here is dashboard</Link>
      </div>
    )
  }
}

export default RegisterSuccessComponent;
