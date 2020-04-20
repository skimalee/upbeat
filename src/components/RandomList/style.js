import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const RandomListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
    flex-wrap: wrap;
    margin-left: -8px;
    margin-right: -8px;
`

export const EventContainer = styled.div`
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
    padding-left: 2rem;
    padding-right: 2rem;
    border: 1px solid black;
    margin: 10px;

`

export const EventLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    & > img {
        width: 100%;
        height: auto;
    }
`

export const NameDate = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -1rem;
    & > .eventName {
        width: 75%;
    }
    & > .date {
        font-weight: bold;
        font-size: 2rem;
    }
`