import React from 'react';
import { Link } from 'react-router-dom'

import { 
    EventContainer,
    DateTimeLoc
} from './style'

const Events = (props) => {
    return (
        <div>
            <button onClick={props.resetSearch}>Go Back</button>
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
                : "No Events found"
            }
        </div>
    );
};

export default Events;