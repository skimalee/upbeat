import React from 'react';
import { Container, RandomListContainer, EventCard } from './style';

const RandomList = (props) => {
    return (
        <Container>
            <h1>Concerts</h1>
            <RandomListContainer>
                {
                    props.randomList.map(event => {
                        return (
                            <EventCard>
                                <p>{event.name}</p>
                                <img src={event.images[1].url}/>
                            </EventCard>
                        )
                    })
                }
            </RandomListContainer>
        </Container>
    );
};

export default RandomList;