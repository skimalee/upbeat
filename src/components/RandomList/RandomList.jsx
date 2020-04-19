import React from 'react';
import { Link } from 'react-router-dom'
import { Container, RandomListContainer, EventCard, EventLink } from './style';

const RandomList = (props) => {

    return (
        <Container>
            <RandomListContainer>
                {
                    props.randomList ?
    
                    props.randomList.map(event => {
                        return (
                            <EventCard>
                                <EventLink to={{pathname: `/events/${event.id}`, state: {event}}}>
                                        <p>{event.name}</p>
                                        <img src={event.images[1].url}/>
                                </EventLink>
                            </EventCard>
                        )
                    })
                    : "none"
                }
            </RandomListContainer>
        </Container>
    );
};

export default RandomList;