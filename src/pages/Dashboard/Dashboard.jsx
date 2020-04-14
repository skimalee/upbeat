import React, { Component } from 'react';
import { SearchBarContainer } from './style';
import SearchField from "react-search-field";



class Dashboard extends Component {
    state = {

    }

    onChange

    render() {
        return (
            <SearchBarContainer>
                <SearchField
                    placeholder="Search for an artist"
                    // onChange={onChange}
                />
            </SearchBarContainer>
        );
    }
};

export default Dashboard;