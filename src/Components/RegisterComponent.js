import React, { Component } from 'react';

class RegisterComponent extends Component {
    render() {
        const { onClick, onChange, userEmail, userName, userPassword } = this.props;
        return (
            <div>
               <h1>Register</h1>
               <br />
               <p>Create your name here</p>
               <input name="userName" type="text" value={userName} placeholder="here is your username" onchange={onChange}/><br />
               <p>Create your Email here</p>
               <input name="userEmail" type="email" value={userEmail} placeholder="here is your e-mail" onChange={onChange}/><br />
               <p>Create your Password here</p>
               <input name="userPassword" type="password" value={userPassword} placeholder="here is your password" onchange={onChange}/><br />
               <br />
               <button onClick={onClick}>Submit</button>

            </div>
        )
    }
}

export default RegisterComponent;
