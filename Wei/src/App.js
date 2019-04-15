import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import SideBar from "./sidebar";
import AboutPage from "./AboutPage.js";
import LoginPage from "./LoginPage.js";
import ContactPage from "./ContactPage.js";



function App() {
  return (
    <div id="App">
      <SideBar />

      <div id="page-wrap">
        <Router>
            <Route path="/" exact component={LoginPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/contact" exact component={ContactPage} />
        </Router>
      </div>
    </div>
  );
}

export default App;
