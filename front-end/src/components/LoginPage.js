import React, { Component } from 'react';
import axios from 'axios';


class LoginPage extends Component {
  render() {
    return (
      <Form handleClick={this.props.handleClick}/>
    );
  }
}

class Form extends Component {
  state = {
    email: '',
    password: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const user = Object.assign({}, this.state);

    this.setState({
      email: '',
      password: ''
    });
    
    this.props.handleClick(user);
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          name='email'
          value={this.state.email}
          onChange={this.onInputChange}
          type='text'
        />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          name='password'
          value={this.state.password}
          onChange={this.onInputChange}
        />
        <input type='submit'/>
      </form>
    );
  }
}

export default LoginPage;
