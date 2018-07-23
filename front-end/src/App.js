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
import BusinessCasePage from './components/BusinessCasePage.js';
import LandingPage from './components/LandingPage.js';
import ChecklistPage from './components/ChecklistPage.js';
import MedalsPage from './components/MedalsPage.js';
import LoginPage from './components/LoginPage.js';
import logo from './logo.svg';
import './App.css';

//APP COMPONENT
const App = () => (


  <Router>
    <section>
      <Navigation/>


      <Switch>
        <Route path='/business-case' component={BusinessCasePage}/>
        <Route path='/checklist' component={ChecklistPage}/>
        <Route path='/my-medals' component={MedalsPage}/>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route render={({location}) => (
          <div>
            <h3>Error! No matches for <code>{location.pathname}</code></h3>
          </div>
        )}/>
      </Switch>
    </section>
   </Router>

);

export default App;
