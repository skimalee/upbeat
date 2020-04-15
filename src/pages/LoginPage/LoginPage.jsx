import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'


import {
  Background,
  Container,
  Form,
  LoginContainer,
  SignupContainer,
  OverlayContainer,
  FormContainer
} from './style'

class LoginPage extends Component {
  state = {
    isLoginForm: true
  }

  doHandleToggle = () => this.setState({ isLoginForm: !this.state.isLoginForm })

  render() {
    const { isLoginForm } = this.state
    // const isLoginForm = this.state.isLoginForm

    return (
      <Container>
        <FormContainer className="sign-up-container">
          <Form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </Form>
        </FormContainer>
        <FormContainer className="sign-in-container">
          <Form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </Form>
        </FormContainer>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button class="ghost" id="signIn">Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </Container>

    );
  }
}

export default LoginPage;