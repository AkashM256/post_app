import React, { Component } from "react";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginForm />
        <RegistrationForm />
        <Details />
      </React.Fragment>

      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
