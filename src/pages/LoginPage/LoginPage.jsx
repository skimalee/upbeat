import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import {
  Container,
  SignupLoginContainer,
  FormContainer,
  OverlayContainer,
  Overlay,
  OverlayPanel,
  RegButton,
} from './style'


class LoginPage extends Component {
  state = {
    isLoginForm: true
  }
  doHandleToggle = () =>
    this.setState({ isLoginForm: !this.state.isLoginForm })

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { isLoginForm } = this.state

    return (
      <SignupLoginContainer>
        <Container className={`${isLoginForm ? "" : "right-panel-active "}`} >
          <FormContainer className="sign-up-container">
            <SignupForm handleSignupOrLogin={this.props.handleSignupOrLogin}/>
          </FormContainer>
          <FormContainer className="sign-in-container">
            <LoginForm handleSignupOrLogin={this.props.handleSignupOrLogin}/>
          </FormContainer>
          <OverlayContainer className="overlay-container">
            <Overlay className="overlay">
              <OverlayPanel className="overlay-left">
                <h1>Welcome! </h1>
                <br />
                <p>Can't wait to help you find</p>
                <p>the perfect event to vibe</p>
                <RegButton onClick={this.doHandleToggle} className="ghost" id="signIn">Sign In</RegButton>
              </OverlayPanel>
              <OverlayPanel className="overlay-right">
                <h1>Hello, Friend!</h1>
                <br />
                <p>If you don't already have an account,</p>
                <p>please click on the link below!</p>
                <RegButton onClick={this.doHandleToggle} className="ghost" id="signUp">Sign Up</RegButton>
              </OverlayPanel>
            </Overlay>
          </OverlayContainer>
        </Container>
      </SignupLoginContainer>
    );
  }
}
export default LoginPage;