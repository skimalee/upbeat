import React from 'react';
import { Link } from 'react-router-dom'
import { Container, RandomListContainer, EventCard } from './style';

const RandomList = (props) => {
    return (
        <Container>
            <h1>Concerts</h1>
            <RandomListContainer>
                {
                    props.randomList.map(event => {
                        return (
                            <Link to={{pathname: `/events/${event.id}`, state: {event}}}>
                                <EventCard>
                                    <p>{event.name}</p>
                                    <img src={event.images[1].url}/>
                                </EventCard>
                            </Link>
                        )
                    })
                }
            </RandomListContainer>
        </Container>
    );
};

export default RandomList;