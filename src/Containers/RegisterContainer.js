import React, {Component} from 'react'
import RegisterComponent from '../Components/RegisterComponent'
import {Redirect} from 'react-router-dom'

class RegisterContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      firstname:'',
      lastname:'',
      wasRegistered:false
    }

this.onRegisterClick = this.onRegisterClick.bind(this);
this.onChange = this.onChange.bind(this);
}

onChange(event){
  this.setState({
    [event.target.name]: event.target.value,
  })
}
onRegisterClick(){
  this.setState({
    wasRegistered:true
  })
}

  render(){
    if (this.state.wasRegistered){
      return <Redirect to="/registersuccess" />
    }
    return(
  <RegisterComponent
  email={this.state.email}
  password={this.state.password}
  firstname={this.state.firstname}
  lastname={this.state.lastname}
  onChange={this.onChange}
  onRegisterClick={this.onRegisterClick}
  />

    )
  }
}

export default RegisterContainer;
