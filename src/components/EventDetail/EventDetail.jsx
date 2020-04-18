import React from 'react';
import { DetailHeader } from './style'

const EventDetail = (props) => {

    const event = props.location.location.state.event
    console.log(event)

    return (
        <DetailHeader>
            <h1>{event.name}</h1>
            {
                props.trackList.some(trackEvent => trackEvent.eventId === event.id)
                ?
                <button onClick={() => props.handleUntrackEvent(event.id)}>Untrack</button>
                :
                <button onClick={() => props.handleTrackEvent({
                        name: event.name,
                        eventId: event.id,
                        thumbnail: event.images[0].url,
                        venue: event._embedded.venues[0].name,
                        time: event.dates.start.localDate,
                        date: event.dates.start.localTime,
                    })}>Track Event
                </button>
            }
        </DetailHeader>
    );
};

export default EventDetail; 