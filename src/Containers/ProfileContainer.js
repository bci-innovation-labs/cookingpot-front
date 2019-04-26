import React, {Component} from 'react'
import ProfileComponent from '../Components/ProfileComponent'
import {Redirect} from 'react-router-dom'

class ProfileContainer extends Component {
  constructor(props){
    super(props)

    let userProfileString = localStorage.getItem('user');
    let userProfileDictionary = JSON.parse(userProfileString);

    this.state = {
      email:userProfileDictionary.email,
      password:'',
      firstname:userProfileDictionary.firstName,
      lastname:userProfileDictionary.lastName,
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
  const userProfile = {
    firstName:this.state.firstname,
    lastName:this.state.lastname,
    email:this.state.email,
    password:this.state.password
  }


  localStorage.setItem("user", JSON.stringify(userProfile));
  this.setState({
    wasProfile:true
  })
}

  render(){
    if (this.state.wasProfile){
      return <Redirect to="/dashboard" />
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
