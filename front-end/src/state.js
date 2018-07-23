import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';

class State extends Component {
  state = {
    user: {
      email: '',
      id: '',
    },
    checklist: [],
    badges: []
  }
  
  render() {
    return (
      <App
        user={this.state.user}
        checklist={this.state.checklist}
        badges={this.state.badges}
      />
    )
  }
}

export default State;
