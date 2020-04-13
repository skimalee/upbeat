import React from 'react';
import './App.css';
import userService from './utils/userService'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LoginPage from './pages/LoginPage/LoginPage'
import Splash from './components/Splash/Splash'

class App extends React.Component {
  state = {
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Switch>
          <Route path='/' exact render={() => (<Splash/>)} />
          <Route path='/login' exact render={(props) => (<LoginPage {...props} handleSignupOrLogin={this.handleSignupOrLogin}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
