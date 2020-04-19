import React from 'react';
import { Container, RandomListContainer, EventCard } from '../../components/RandomList/style'

const TrackListItem = (props) => {
    return (
      <Container>
        <RandomListContainer>
          {
            props.trackEvents.map(event => {
              return (
                <EventCard>
                  <p>{event.name}</p>
                  <img src={event.thumbnail} />
               
                </EventCard>
              )
            })
          }
        </RandomListContainer>
      </Container>
    );
};

export default TrackListItem;
