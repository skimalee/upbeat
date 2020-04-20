import React from 'react';
import { Container, RandomListContainer, EventCard, EventLink } from '../../components/RandomList/style'

const TrackListItem = (props) => {
    return (
      <Container>
        <RandomListContainer>
          {
            props.trackEvents.map(event => {
              return (
                <EventCard>
                  <EventLink to={{pathname: `/events/${event.id}`, state: {event}}}>
                    <p>{event.name}</p>
                    <img src={event.thumbnail} />
                  </EventLink>
                </EventCard>
              )
            })
          }
        </RandomListContainer>
      </Container>
    );
};

export default TrackListItem;
