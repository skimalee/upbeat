import React from "react";
import "./App.css";
import userService from "./utils/userService";
import { Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage/LoginPage";
import Splash from "./components/Splash/Splash";
import EventDetail from "./components/EventDetail/EventDetail"
import SearchBar from './components/SearchBar/SearchBar'
import Events from './components/Events/Events'
import TrackListPage from './pages/TrackListPage/TrackListPage'
import ticketService from './utils/ticketService'


class App extends React.Component {
  state = {
    user: userService.getUser(),
    location: {
      lat: null,
      long: null,
    },
    randomList: [],
    events: [],
    trackEvents: []
  };

  async componentDidMount() {
    await window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }
      }, async () => await this.getRandomList());
    });
  }

  getRandomList = async () => {
    try {
      const randomList = await ticketService.randomList(this.state.location)
      console.log(randomList.data)
      this.setState({
        randomList: randomList.data._embedded.events
      })
    } catch(err) {
      console.log(err)
    }
  }

  handleTrackEvent = async trackEventData => {
    const trackEvent = await ticketService.create(trackEventData)
    console.log(trackEvent)
    this.setState(state => ({
      trackEvents: [...state.trackEvents, trackEvent]
    }))
  }

  getTrackList = async () => {
    const trackList = await ticketService.getTrackList()
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

  handleSignupOrLogin = async () => {
    this.getRandomList();
    this.getTrackList();
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">

        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route path="/" exact render={() => <Splash />} />
          <Route path="/login" exact render={() => (<LoginPage handleSignupOrLogin={this.handleSignupOrLogin} />)}/>
          <Route path="/events/:id" exact render={(location) => <EventDetail location={location} handleTrackEvent={this.handleTrackEvent}/>} />
          <Route path="/search" render={() => <SearchBar setEvents={this.setEvents} randomList={this.state.randomList}/>}/>
          <Route path="/events" render={() => <Events events={this.state.events} resetSearch={this.resetSearch}/>}/>
          <Route path="/track" render={() => <TrackListPage />}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
