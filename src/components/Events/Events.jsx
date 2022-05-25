import React from 'react';
import { Link } from 'react-router-dom'
import { BackLink } from '../../components/EventDetail/style'
import { InfoLink } from './style'
import Moment from 'react-moment'

import { 
    EventContainer,
    DateTime,
    NoEvents,
    EventName,
    Location,
} from './style'

const Events = (props) => {
    
    
    return (
        <div>
            <BackLink to='/search' onClick={props.resetSearch}>Back to Search</BackLink>
            <NoEvents>Search Results</NoEvents>
            {   
                props.events ? 
                props.events.map(event => {
                    const dateToFormat = `${event.dates.start.localDate}`
                    return (
                        <EventContainer key={event}>
                            <EventName>
                                {/* <p><em>{event.name}</em></p> */}
                                <img src={event.images[1].url} />
                            </EventName>
                            <DateTime>
                                <span><p className="date"><Moment format='MMM D, YYYY'>{event.dates.start.localDate}</Moment></p>
                                <p className="time">{event.dates.start.localTime}</p></span>
                            </DateTime>
                            <Location>
                                <p className="venue">{event._embedded.venues[0].name}</p>
                                <p className="venue">{event._embedded.venues[0].city.name}</p>
                            </Location>
                            <InfoLink to={{pathname: `/events/${event.id}`, state: {event}}}>
                                <button>GET INFO</button>
                            </InfoLink> 
                        </EventContainer>
                    )
                })
              : <NoEvents>No Events found</NoEvents>

            }
        </div>
    );
};

export default Events;