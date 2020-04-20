import React from 'react';
import { SearchBarForm, SearchBarContainer, SearchBarGroup, ConcertContainer } from './style';
import ticketService from '../../utils/ticketService';
import RandomList from '../../components/RandomList/RandomList';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const searchResults = await ticketService.routeToTM(searchTerm);
    console.log('this is the results', searchResults)
    this.props.setEvents(searchResults)
    this.props.history.push('/events')
  };

  render() {
    return (
      <>
        <SearchBarContainer>
          <SearchBarGroup>
          <h1>Who would you like to vibe with next?</h1>
            <SearchBarForm onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Search for an artist..."
                onChange={this.handleChange}
              />
              <button type="submit">GO</button>
            </SearchBarForm>
          </SearchBarGroup>
        </SearchBarContainer>
        {
          this.props.isLoading ?
          <h1>Loading concerts in the area</h1>
          :
          <ConcertContainer>
            <h1>Concerts in your area</h1>
            <RandomList randomList={this.props.randomList}/>
          </ConcertContainer>
        }
      </>
    );
  }
}

export default withRouter(SearchBar);
