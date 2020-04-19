import React from 'react';
import TrackListItem from '../../components/TrackListItem/TrackListItem'

const TrackListPage = (props) => {
    return (
        <div>
            <TrackListItem getTrackList={props.getTrackList} trackEvents={props.trackEvents}/>
        </div>
    );
};

export default TrackListPage;