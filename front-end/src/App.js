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
    badges: []
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
      const user = {
        email: res.data.email,
        id: res.data._id
      }
      this.setState({user});
      this.testing();
    }).catch(err => console.error(err));
  };

  testing = () => {
    console.log('new state:', this.state);
  }

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
