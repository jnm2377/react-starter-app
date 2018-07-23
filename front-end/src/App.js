import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
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
    badges: [],
    isLoggedOut: true
  }

  handleClick = (user) => {
    console.log('form data:', user);
    axios({
      method: 'post',
      url: 'http://localhost:3000/sessions/login',
      data: {
        email: user.email,
        password: user.password
      }
    }).then(res => {
      console.log('response:', res.data);
      const copyState = Object.assign({}, this.state);
      copyState.user.email = res.data.email,
      copyState.user.id = res.data._id,
      copyState.isLoggedOut = false;
      this.setState(copyState);
      this.testing(); //delete this after development
    }).catch(err => console.error(err));
  };

  //DELETE THIS FUNC AFTER DEVELOPMENT
  testing = () => {
    console.log('new state:', this.state);
  }

  render() {
    return (
      <Router>
        <section>
          <Navigation isLoggedOut={this.state.isLoggedOut}/>

          <Switch>
            <Route exact path='/business-case' component={BusinessCasePage}/>
            <Route exact path='/checklist' component={ChecklistPage}/>
            <Route exact path='/my-medals' component={MedalsPage}/>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/logout' render={()=>( <h2>Need to build logout functionality</h2>)}/>
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
