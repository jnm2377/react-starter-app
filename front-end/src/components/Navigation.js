import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

class Navigation extends Component {
  render() {
    const login = (
      <li>
        <NavLink to='/login'>
          <code>Log In</code>
        </NavLink>
      </li>
    );

    const logout = (
      <li>
        <NavLink to='/logout'>
          <code>Log Out</code>
        </NavLink>
      </li>
    );

    return (
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <code>Home</code>
            </NavLink>
          </li>
          <li>
            <NavLink to='/business-case'>
              <code>Business Case</code>
            </NavLink>
          </li>
          <li>
            <NavLink to='/checklist'>
              <code>A11y Checklist</code>
            </NavLink>
          </li>
          <li>
            <NavLink to='/my-medals'>
              <code>My Medals</code>
            </NavLink>
          </li>
          {this.props.isLoggedOut ? login : logout}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
