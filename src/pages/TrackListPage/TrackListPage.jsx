import React from 'react';
import TrackListItem from '../../components/TrackListItem/TrackListItem'
import { TrackListContainer } from './style.js'

const TrackListPage = (props) => {
    return (
        <TrackListContainer>
            <TrackListItem getTrackList={props.getTrackList} randomList={props.randomList} trackEvents={props.trackEvents}/> 
        </TrackListContainer>
    );
};

export default TrackListPage;