import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './i/logo.png';
import './App.css';
//import Login from './containers/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Yummigo !!
          </p>
          <NavLink to="/OutletList" className="buttonLogIn">Sign In</NavLink>
        </header>
      </div>
    );
  }
}

export default App;
