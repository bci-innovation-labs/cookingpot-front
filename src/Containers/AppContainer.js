import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutUsContainer from "./AboutUsContainer";
import ContactUsContainer from "./ContactUsContainer";
import TermsContainer from "./TermsContainer";
import PrivacyContainer from "./PrivacyContainer";
import LoginContainer from "./LoginContainer";
import DashboardContainer from "./DashboardContainer";
import RegisterContainer from "./RegisterContainer";
import SideBarCollapse from "./SideBarCollapse";
import RegisterSuccessContainer from "./RegisterSuccessContainer";
import LogoutContainer from "./LogoutContainer";
import ProfileContainer from "./ProfileContainer";
import FoodDetailContainer from "./FoodDetailContainer";

class AppContainer extends Component {
  render() {
    return (
       <Router>
       <SideBarCollapse></SideBarCollapse>
           <Route path="/" exact component={LoginContainer} />
           <Route path="/login" exact component={LoginContainer} />
           <Route path="/dashboard" exact component={DashboardContainer} />
           <Route path="/register" exact component={RegisterContainer} />
           <Route path="/about" exact component={AboutUsContainer} />
           <Route path="/contact" exact component={ContactUsContainer} />
           <Route path="/privacy" exact component={PrivacyContainer} />
           <Route path="/terms" exact component={TermsContainer} />
           <Route path="/registersuccess" exact component={RegisterSuccessContainer} />
           <Route path="/Logout" exact component={LogoutContainer} />
           <Route path="/profile" exact component={ProfileContainer} />
           <Route path="/food/:foodId" exact component={FoodDetailContainer} />
       </Router>
    );
  }
}

export default AppContainer;
