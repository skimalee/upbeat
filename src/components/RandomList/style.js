import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > h1 {
        font-size: 2rem;
        color: red;
    }
`

export const RandomListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5rem;
    flex-wrap: wrap;
    margin-left: -8px;
    margin-right: -8px;
`

export const EventCard = styled.div`
    flex-basis: 25%;
    padding-left: 8px;
    padding-right: 8px;
    border: 1px solid black;
    margin: 10px;
    & > img {
        width: 100%;
        height: auto;
    }
`