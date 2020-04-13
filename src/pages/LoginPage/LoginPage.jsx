import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import SignupForm from '../../components/SignupForm/SignupForm'

import {
        Background, 
        Container, 
        LoginContainer,
        SignupContainer, 
        OverlayContainer
        } from './style'

const LoginPage = (props) =>{

  return (
    <Background>
      <Container>
        <LoginContainer>
          <LoginForm handleSignupOrLogin={props.handleSignupOrLogin}/>
        </LoginContainer>
        <SignupContainer>
          <SignupForm handleSignupOrLogin={props.handleSignupOrLogin}/>
        </SignupContainer>
        <OverlayContainer>

        </OverlayContainer>
      </Container>
    </Background>
  );
}

export default LoginPage;