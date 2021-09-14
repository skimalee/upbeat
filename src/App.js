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
    page: 0,
    randomList: [],
    events: [],
    trackEvents: [],
    isLoading: true
  };

  async componentDidMount() {
    await window.navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      this.setState({
        location: {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        },
        isLoading: false
      }, async () => await this.getRandomList());
    });
  }

  getRandomList = async () => {
    try {
      const randomList = await ticketService.randomList(this.state.location, this.state.page)
      this.setState({
        randomList: randomList.data._embedded.events,
      })

    } catch(err) {
      console.log(err)
    }
  }

  handleNextPage = () => {
    this.setState({page: this.state.page + 1})
  }

  handlePrevPage = () => {
    this.setState({page: this.state.page - 1})
  }

  handleTrackEvent = async trackEventData => {
    const trackEvent = await ticketService.create(trackEventData)
    console.log(trackEvent)
    this.setState(state => ({
      trackEvents: [...state.trackEvents, trackEvent.event]
    })); 

  }
  
  handleUntrackEvent = async eventId => {
    const trackList = await ticketService.untrack(eventId);
    this.setState({trackEvents: trackList})
  }

  getTrackList = async () => {
    const trackList = await ticketService.getTrackList()
    console.log(trackList)
    this.setState({trackEvents: trackList})
  }

  setEvents = (events) => {
    this.setState({events: events})
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
        {console.log('app.js page', this.state.page)}
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route path="/" exact render={() => <Splash />} />
          <Route path="/login" exact render={() => (<LoginPage handleSignupOrLogin={this.handleSignupOrLogin} />)}/>
          <Route path="/events/:id" exact render={(location) => <EventDetail randomList={this.state.randomList} handleUntrackEvent={this.handleUntrackEvent} trackEvents={this.state.trackEvents} location={location} handleTrackEvent={this.handleTrackEvent}/>} />
          <Route path="/search" render={() => <SearchBar isLoading={this.state.isLoading} setEvents={this.setEvents} randomList={this.state.randomList} page={this.state.page} handleNextPage={this.handleNextPage} getRandomList={this.getRandomList}/>}/>
          <Route path="/events" render={() => <Events events={this.state.events} resetSearch={this.resetSearch}/>}/>
          <Route path="/track" render={() => <TrackListPage getTrackList={this.getTrackList} randomList={this.state.randomList} trackEvents={this.state.trackEvents} />}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
