import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginContainer from "./LoginContainer";
import DashboardContainer from "./DashboardContainer";
import RegisterContainer from "./RegisterContainer";
import TopMenuContainer from "./TopMenuContainer";
import FoodSearchContainer from "./FoodSearchContainer";
import SideBarCollapse from "./SideBarCollapse"

class AppContainer extends Component {
  render() {
    return (
       <Router>
       <SideBarCollapse></SideBarCollapse>
           <Route path="/" exact component={LoginContainer} />
           <Route path="/dashboard" exact component={DashboardContainer} />
           <Route path="/register" exact component={RegisterContainer} />
           <Route path="/topmenu" exact component={TopMenuContainer} />
           <Route path="/food-search" exact component={FoodSearchContainer} />
            <Route path="/registersuccess" exact component={RegisterSuccessContainer} />
       </Router>
    );
  }
}

export default AppContainer;
