import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


import Dashboard from "../Components/Dashboard";


class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        const userProfileString = localStorage.getItem('user');
        const userProfileDictionary = JSON.parse(userProfileString);




        this.state={
            userEmail: localStorage.getItem("userEmail"),
            userName:localStorage.getItem("userName"),
            menuStatus:false
        }
        this.onMenuClick=this.onMenuClick.bind(this);
    }
    onMenuClick(){
      this.setState({
        userEmail: localStorage.getItem("userEmail"),
        userName: localStorage.getItem("userName"),
        menuStatus:true
      })

    }
    render() {
        if (this.state.menuStatus) {
            return <Redirect to='/topmenu' />
        }

        return (
            <Dashboard
            state={this.state}
            onMenuClick={this.onMenuClick}
             />
        )
    }
}


export default DashboardContainer;
