import React from 'react';
import { 
    DetailHeader,
    DetailContent 
} from './style'

const EventDetail = (props) => {

    const event = props.location.location.state.event
    if (event._id) {
        console.log('this is a mongoose object')
    } else {
        console.log('this is from the api')
    }

    return (
        <>
            <DetailHeader>
                <h1 style={event.name.length > 16 ? {fontSize: '3rem'} : {fontSize: '5rem'}}>{event.name}</h1>
                {
                    event._id ?
                        props.trackEvents.some(trackEvent => trackEvent.eventId === event.eventId)
                        ?
                        <button onClick={() => props.handleUntrackEvent(event.eventId)}>Untrack</button>
                        :
                        <button onClick={() => props.handleTrackEvent({eventId: event.eventId})}>Track Event</button>
                    :
                        props.trackEvents.some(trackEvent => trackEvent.eventId === event.id)
                        ?
                        <button onClick={() => props.handleUntrackEvent(event.id)}>Untrack</button>
                        :
                        <button onClick={() => props.handleTrackEvent({
                                name: event.name,
                                eventId: event.id,
                                thumbnail: event.images[1].url,
                                venue: event._embedded.venues[0].name,
                                dateTime: event.dates.start.dateTime
                            })}>Track Event
                        </button>
                }
            </DetailHeader>
            <DetailContent>
                { event._id ? <h1>{event.venue}</h1> : <h1>{event._embedded.venues[0].name}</h1> }
            </DetailContent>
        </>
    );
};

export default EventDetail; 