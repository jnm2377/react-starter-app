import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navigation from './components/Navigation.js';
import BusinessCasePage from './components/BusinessCasePage.js';
import LandingPage from './components/LandingPage.js';
import ChecklistPage from './components/ChecklistPage.js';
import MedalsPage from './components/MedalsPage.js';
import LoginPage from './components/LoginPage.js';
import './App.css';

//APP COMPONENT
class App extends Component {
  state = {
    user: {
      email: '',
      id: '',
    },
    checklist: [],
    badges: []
  }

  handleClick = (user) => {
    console.log('handling click');
    console.log('form data:', user);
  };

  render() {
    return (
      <Router>
        <section>
          <Navigation/>

          <Switch>
            <Route path='/business-case' component={BusinessCasePage}/>
            <Route path='/checklist' component={ChecklistPage}/>
            <Route path='/my-medals' component={MedalsPage}/>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/login' render={props => <LoginPage {...props} handleClick={this.handleClick}/>}/>
            <Route render={({location}) => (
              <div>
                <h3>Error! No matches for <code>{location.pathname}</code></h3>
              </div>
            )}/>
          </Switch>
        </section>
       </Router>
     )
   }
 }


export default App;
