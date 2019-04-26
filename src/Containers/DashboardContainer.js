import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getFoodRecipies } from "../API/FoodRecipeAPI";

import Dashboard from "../Components/Dashboard";


class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        const userProfileString = localStorage.getItem('user');
        const userProfileDictionary = JSON.parse(userProfileString);

        this.state={
            userEmail: localStorage.getItem("userEmail"),
            userName:localStorage.getItem("userName"),
            menuStatus:false,
            foodRecipesData:[]
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

    componentDidMount(){
        getFoodRecipies(
          null,
          {},
          (data) =>{
            this.setState({
              foodRecipesData:data
            })
          },
          (error)=>{
          }
        )
    }

    render() {
        if (this.state.menuStatus) {
            return <Redirect to='/topmenu' />
        }

        return (
            <Dashboard
            state={this.state}
            onMenuClick={this.onMenuClick}
            data={this.state.foodRecipesData}
             />
        )
    }
}


export default DashboardContainer;
