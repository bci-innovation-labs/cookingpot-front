import React, {Component} from 'react'
import ProfileComponent from '../Components/ProfileComponent'
import {Redirect} from 'react-router-dom'

class ProfileContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      firstname:'',
      lastname:'',
      wasProfile:false
    }

this.onProfileClick = this.onProfileClick.bind(this);
this.onChange = this.onChange.bind(this);
}

onChange(event){
  this.setState({
    [event.target.name]: event.target.value,
  })
}
onProfileClick(){
  this.setState({
    wasProfile:true
  })
}

  render(){
    if (this.state.wasProfiled){
      return <Redirect to="/resgistersuccess" />
    }
    return(
  <ProfileComponent
  email={this.state.email}
  password={this.state.password}
  firstname={this.state.firstname}
  lastname={this.state.lastname}
  onChange={this.onChange}
  onProfileClick={this.onProfileClick}
  />

    )
  }
}

export default ProfileContainer;
