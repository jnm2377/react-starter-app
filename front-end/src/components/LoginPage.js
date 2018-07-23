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
    fields: {
      email: '',
      password: ''
    }
  };

  onFormSubmit = (event) => {
    const user = {
      email: this.state.fields.email,
      password: this.state.fields.password
    } 
    event.preventDefault();

    this.setState({
      fields: {
        email: '',
        password: ''
      }
    });

    this.props.handleClick(user);
  };

  onInputChange = ({name, value}) => {
    //making a copy of fields obj
    const fields = Object.assign({}, this.state.fields);

    //assigning value of value prop to field key with the name of name prop
    fields[name] = value;

    //updating state with our copy of fields obj
    this.setState({fields});
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor='email'>Email:</label>
        <Email
          id='email'
          name='email'
          value={this.state.fields.email}
          onChange={this.onInputChange}
          type='text'
        />
        <label htmlFor='password'>Password:</label>
        <Password
          id='password'
          name='password'
          value={this.state.fields.password}
          onChange={this.onInputChange}
          required
        />
        <input type='submit'/>
      </form>
    );
  }
}

class Email extends Component {
  render() {
    return (
      <input type='text' placeholder='email' required/>
    );
  }
}

class Password extends Component {
  render() {
    return (
      <input type='password' placeholder='password' required/>
    );
  }
}
export default LoginPage;
