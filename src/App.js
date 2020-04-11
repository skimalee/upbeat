import React from 'react';
import './App.css';
import SignupForm from './components/SignupForm/SignupForm'
import userService from './utils/userService'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LoginPage from './pages/LoginPage/LoginPage'

class App extends React.Component {
  state = {
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <SignupForm handleSignupOrLogin={this.handleSignupOrLogin}/>
        <LoginPage handleSignupOrLogin={this.handleSignupOrLogin} />
      </div>
    );
  }
}

export default App;
