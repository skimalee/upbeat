import React from 'react';
import { DetailHeader } from './style'

const EventDetail = (props) => {

    const event = props.location.location.state.event
    console.log(event)

    return (
        <DetailHeader>
            <h1>{event.name}</h1>
            <button onClick={() => props.handleTrackEvent(event)}>Track Event</button>
            
        </DetailHeader>
    );
};

export default EventDetail; 