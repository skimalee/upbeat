import React from 'react';
import { BackLink } from './style'

import { 
    DetailHeader,
    DetailContent,
    DetailContentTernary,
    Info,
    DateMoment,
    Address
} from './style'

const EventDetail = (props) => {

    const event = props.location.location.state.event
    const dateToFormat = event._id ? `${event.date}` : `${event.dates.start.dateTime}`

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
                                address: event._embedded.venues[0].address.line1,
                                city: event._embedded.venues[0].city.name,
                                state: event._embedded.venues[0].state.name,
                                date: event.dates.start.dateTime,
                                time: event.dates.start.localTime,
                                seatMap: event.seatmap.staticUrl,
                                buyTickets: event.url

                            })}>Track Event
                        </button>
                }
            </DetailHeader>
            <DetailContent> 
                <BackLink to='/search' onClick={props.resetSearch}>Back to Search</BackLink>  
                {event._id ? 
                <DetailContentTernary>
                    <Info>
                        <div className='dateTime'>
                            <DateMoment format='dddd, MMM D, YYYY'>{dateToFormat}</DateMoment>
                            <p className='time'>{event.time}</p>
                        </div>
                        <Address>
                            <p className='venue'>{event.venue}</p> 
                            <p className='address'>{event.address}</p>
                            <p className='city'>{event.city}, {event.state}</p>
                        </Address>
                        <button><a href={`${event.buyTickets}`} target='_blank'>Buy Tickets</a></button>
                    </Info>
                    <img src={event.thumbnail}/> 
                </DetailContentTernary>
                  :
                 <DetailContentTernary>
                     <Info>
                         <div className='dateTime'>
                            <DateMoment format='dddd, MMM D, YYYY'>{dateToFormat}</DateMoment>
                            <p className='time'>{event.dates.start.localTime}</p>
                        </div>
                        <Address>
                            <p className='venue'>{event._embedded.venues[0].name}</p>
                            <p className='address'>{event._embedded.venues[0].address.line1}</p>
                            <p className='city'>{event._embedded.venues[0].city.name}, {event._embedded.venues[0].state.name}</p>
                        </Address>
                        <button><a href={event.url} target='_blank'>Buy Tickets</a></button>
                     </Info>
                     <img src={event.images[1].url}/> 
                 </DetailContentTernary>}
             </DetailContent> 
        </>
    );
};

export default EventDetail; 