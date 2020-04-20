import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const EventContainer = styled.div`
    position: relative;
    margin: 2rem auto;
    width: 80%;
    border: 1px solid gray;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    & > img {
        height: 8rem;
    }
    & > button {
        border-radius: 20px;
        height: 3rem;
        border: 1px solid #FF4B2B;
        background-color: #FF4B2B;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        position: absolute;
    }
`
export const DateTime = styled.div`
    display: flex;
    flex-direction: column;
`
export const NoEvents = styled.div`
    font-size: 3rem;
    text-align: center;
    padding: 3rem;
`
export const EventName = styled.div`
    display: flex;
    flex-direction: column;
    & > img {
        height: 7rem;
        width: auto;
    }
`

export const Location = styled.div`
    /* display: flex;
    flex-direction: column;
    text-align: center; */
`

export const InfoLink = styled(Link)`
    & > button {
        border-style: none;
        background: #FF4B2B;
        color: white;
        height: 3.5rem;
        width: 7rem;
        border-radius: 10px;
        margin-left: 1rem;
        transition: transform 80ms ease-in;
    }
`