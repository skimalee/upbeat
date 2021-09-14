import React from 'react';
import { Container, RandomListContainer, EventCard, EventLink, NameDate } from './style';
import Moment from 'react-moment';

const RandomList = (props) => {
    return (
        <Container>
            <RandomListContainer>
                {
                    props.randomList.map(event => {
                    const dateToFormat = `${event.dates.start.localDate}`;

                        return (
                            <EventCard key={event.id}>
                                <EventLink to={{pathname: `/events/${event.id}`, state: {event}}}>
                                    <NameDate>
                                        <p className="eventName">{event.name}</p>
                                        <p className="date"><Moment format="MMM D">{dateToFormat}</Moment></p>
                                    </NameDate>
                                    <img src={event.images[1].url}/>
                                </EventLink>
                            </EventCard>
                        )
                    })
                }
            </RandomListContainer>
        </Container>
    );
};

export default RandomList;