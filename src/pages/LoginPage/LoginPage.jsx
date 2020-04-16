import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import userService from '../../utils/userService'
import { withRouter } from 'react-router-dom'
import {
  Background,
  Container,
  Form,
  FormInput,
  FormButton,
  LoginContainer,
  SignupContainer,
  OverlayContainer,
  FormContainer,
  Overlay,
  OverlayPanel
} from './style'

class LoginPage extends Component {
  state = {
    isLoginForm: true,
    email: '',
    pw: ''
  }

  handleLoginChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.setState({
        email: '',
        pw: ''
      })
      this.props.history.push('/dashboard')
    } catch (err) {

      alert('Invalid Credentials!');
      console.log(err)
    }
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
            <FormInput type="text" placeholder="Name" />
            <FormInput type="email" placeholder="Email" />
            <FormInput type="password" placeholder="Password" />
            <FormButton>Sign Up</FormButton>
          </Form>
        </FormContainer>
        <FormContainer className="sign-in-container">
          <Form action="#" onSubmit={this.handleLoginSubmit}>
            <h1>Sign in</h1>
            <FormInput type="email" placeholder="Email" onChange={this.handleLoginChange}/>
            <FormInput type="password" placeholder="Password" onChange={this.handleLoginChange} />
            <a href="#">Forgot your password?</a>
            <FormButton>Sign In</FormButton>
          </Form>
        </FormContainer>
        <OverlayContainer>
          <Overlay>
            <OverlayPanel className="overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button class="ghost" id="signIn">Sign In</button>
            </OverlayPanel>
            <OverlayPanel className="overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp">Sign Up</button>
            </OverlayPanel>
          </Overlay>
        </OverlayContainer>
        {/* <LoginForm handleSignupOrLogin={this.props.handleSignupOrLogin}/>
        <SignupForm handleSignupOrLogin={this.props.handleSignupOrLogin}/> */}
      </Container>

    );
  }
}

export default withRouter(LoginPage);