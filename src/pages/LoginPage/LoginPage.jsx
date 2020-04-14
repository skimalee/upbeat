import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'

import {
  Background,
  Container,
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
      <Background>
        <Container>
          {
            isLoginForm
              ? <FormContainer>
                <LoginForm
                  handleSignupOrLogin={this.props.handleSignupOrLogin}
                  doHandleToggle={this.doHandleToggle}
                />
              </FormContainer>
              : <SignupContainer>
                <SignupForm
                  handleSignupOrLogin={this.props.handleSignupOrLogin}
                  doHandleToggle={this.doHandleToggle}
                />
              </SignupContainer>
          }
        </Container>
      </Background>
    );
  }
}

export default LoginPage;