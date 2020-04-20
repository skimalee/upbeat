import React from 'react';
import TrackListItem from '../../components/TrackListItem/TrackListItem'
import { TrackListContainer } from './style.js'
import { BackLink } from '../../components/EventDetail/style'

const TrackListPage = (props) => {
    return (
        <TrackListContainer>
            <BackLink to='/search' onClick={props.resetSearch}>Back to Search</BackLink>  
            <TrackListItem getTrackList={props.getTrackList} randomList={props.randomList} trackEvents={props.trackEvents}/> 
        </TrackListContainer>
    );
};

export default TrackListPage;