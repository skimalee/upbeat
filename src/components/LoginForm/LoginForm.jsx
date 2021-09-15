import React, { Component } from 'react';
import userService from '../../utils/userService'
import { withRouter } from 'react-router-dom'
import { Form, FormInput, RegButton } from './style'

class LoginForm extends Component {
  state = {
    email: '',
    pw: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.setState({
        email: '',
        pw: ''
      })
      this.props.history.push('/search')
    } catch (err) {

      alert('Invalid Credentials!');
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
            <h1>Log In</h1>
            <FormInput type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
            <FormInput type="password" placeholder="Password" name="pw" value={this.state.pw} onChange={this.handleChange}/>
            <RegButton type="submit">Sign In</RegButton>
        </Form>
      </>
    );
  }
}

export default withRouter(LoginForm);