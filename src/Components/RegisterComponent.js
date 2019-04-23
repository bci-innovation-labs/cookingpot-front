import React, {Component} from 'react';


class RegisterComponent extends Component {
  render (){
    const {onRegisterClick,onChange}=this.props;
    return(
      <div>
      <h1>Register</h1>
      <form>
      username:<br />
        <input type="text" name="username" onChange={onChange} /><br />
      password:<br />
        <input type="text" name="password" onChange={onChange}/><br />

  First name:<br />
  <input type="text" name="firstname" onChange={onChange} /><br />
  Last name:<br />
  <input type="text" name="lastname" onChange={onChange}/>
</form>
      <button onClick={onRegisterClick}> ok </button>
      </div>
    )
  }
}

export default RegisterComponent;
