import React from 'react';
import { Link } from 'react-router-dom'
import { BackLink } from '../../components/EventDetail/style'

import { 
    EventContainer,
    DateTimeLoc,
    NoEvents
} from './style'

const Events = (props) => {
    return (
        <div>
            <BackLink to='/search' onClick={props.resetSearch}>Back to Search</BackLink>  
            {   
                props.events ? 
                props.events.map(event => {
                    return (
                        <EventContainer key={event}>
                            <DateTimeLoc>
                                <p className="date">{event.dates.start.localDate}</p>
                                <p className="time">{event.dates.start.localTime}</p>
                                <p className="venue">{event._embedded.venues[0].name}</p>
                            </DateTimeLoc>
                            <Link to={{pathname: `/events/${event.id}`, state: {event}}}>
                                <button>GET INFO</button>
                            </Link>
                            <img src={event.images[1].url}></img>
                        </EventContainer>
                    )
                })
                : <NoEvents>No Events found</NoEvents>

            }
        </div>
    );
};

export default Events;