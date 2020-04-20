import React from 'react';
import Moment from 'react-moment'
import { 
  Container, 
  RandomListContainer, 
  EventCard, 
  EventLink, 
  NameDate 
} from '../../components/RandomList/style'

const TrackListItem = (props) => {
    return (
      <Container>
        <RandomListContainer>
          {
            props.trackEvents.length > 0 ? 
            props.trackEvents.map(event => {
              const dateToFormat = `${event.date}`;
              return (
                <EventCard>
                  <EventLink to={{pathname: `/events/${event.eventId}`, state: {event} }}>
                    <NameDate>
                      <p className="eventName">{event.name}</p>
                      <p className="date"><Moment format="MMM D">{dateToFormat}</Moment></p>
                    </NameDate>
                    <img src={event.thumbnail}/>
                  </EventLink>
                </EventCard>
              )
            })
            : <h1>No events are being tracked</h1>
          }
        </RandomListContainer>
      </Container>
    );
};

export default TrackListItem;
