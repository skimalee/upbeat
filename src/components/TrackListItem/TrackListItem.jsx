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
               
                </EventCard>
              )
            })
          }
        </RandomListContainer>
      </Container>
    );
};

export default TrackListItem;
