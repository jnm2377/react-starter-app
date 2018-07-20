import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from 'react-router-dom';
import Navigation from './components/Navigation.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Navigation/>
      </main>
    );
  }
}

export default App;
