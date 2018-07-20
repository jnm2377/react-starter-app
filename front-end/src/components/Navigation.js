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

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <code>Home</code>
            </Link>
          </li>
          <li>
            <Link to='/business-case'>
              <code>Business Case</code>
            </Link>
          </li>
          <li>
            <Link to='/checklist'>
              <code>A11y Checklist</code>
            </Link>
          </li>
          <li>
            <Link to='/my-medals'>
              <code>My Medals</code>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <code>Log In</code>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
