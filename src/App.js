import React from "react";
import "./App.css";
import userService from "./utils/userService";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage/LoginPage";
import Splash from "./components/Splash/Splash";
import Dashboard from "./pages/Dashboard/Dashboard";
import EventDetail from "./components/EventDetail/EventDetail"
import SearchBar from './components/SearchBar/SearchBar'
import Events from './components/Events/Events'


class App extends React.Component {
  state = {
    user: userService.getUser(),
    lat: null,
    long: null,
    events: []
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }

  setEvents = (events) => {
    this.setState({
      events: events
    })
  }

  resetSearch = () => {
    this.setState({
      events: []
    })
    this.props.history.push("/search")
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route path="/" exact render={() => <Splash />} />
          <Route path="/login" exact render={() => (<LoginPage handleSignupOrLogin={this.handleSignupOrLogin} />)}/>
          <Route path="/dashboard" exact render={() => (<Dashboard user={this.state.user} searchTM={this.searchTM} getCurrentPosition={this.ge} />)}/>
          <Route path="/events/:id" exact render={() => <EventDetail />} />
          <Route path="/search" render={() => <SearchBar setEvents={this.setEvents}/>}/>
          <Route path="/events" render={() => <Events events={this.state.events} resetSearch={this.resetSearch}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
