import React, { Component } from 'react';


class LoginPage extends Component {
  render() {
    return (
      <Form/>
    );
  }
}

class Form extends Component {
  state = {
    fields: {
      email: '',
      password: ''
    },
    user: {
      email: '',
      password: ''
    }
  };

  onFormSubmit = (event) => {
    const user = Object.assign({}, this.state.fields);
    event.preventDefault();

    this.setState({
      user: user,
      fields: {
        email: '',
        password: ''
      }
    })
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
        <Field
          placeholder='email'
          name='email'
          value={this.state.fields.email}
          onChange={this.onInputChange}
          required
        />
        <Field
          placeholder='password'
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

class Field extends Component {
  render() {
    return (
      <input/>
    );
  }
}

export default LoginPage;
