import React from 'react';
import { Container, RandomListContainer } from './style';

const RandomList = (props) => {
    return (
        <Container>
            <RandomListContainer>
                <h1>Concerts in your area</h1>
                {
                    props.randomList.map(event => {
                        return (
                            <p>{event.name}</p>
                        )
                    })
                }
            </RandomListContainer>
        </Container>
    );
};

export default RandomList;