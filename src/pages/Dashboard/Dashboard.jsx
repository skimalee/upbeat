import React, { Component } from "react";
import { SearchBarContainer } from "./style";
import SearchBar from "../../components/SearchBar/SearchBar";

const Dashboard = (props) => {
  return (
    <SearchBarContainer>
      <SearchBar searchTM={props.searchTM} />
    </SearchBarContainer>
  );
};

export default Dashboard;
