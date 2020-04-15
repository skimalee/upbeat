import React from "react";
import { SearchBarForm } from "./style";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const searchTermSubmit = this.props.searchTM;
    searchTermSubmit(searchTerm);
  };

  render() {
    return (
      <div className="searchBarFormContainer">
        <SearchBarForm onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for an artist..."
            onChange={this.handleChange}
          />
          <button type="submit">GO</button>
        </SearchBarForm>
      </div>
    );
  }
}

export default SearchBar;
