import styled from 'styled-components'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export const DetailHeader = styled.div`
    background: purple;
    position: relative;
    display: flex;
    align-items: center;
    & > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        background: white;
        border: none;
        color: purple;
        padding: .5rem;
        letter-spacing: .1rem;
        width: 127px;
        border-radius: 5px;
        transition: transform 80ms ease-in;
    }
    & > button:focus {
        outline: none;
    }
    & > button:active {
        transform: scale(0.95);
    }

    & > h1 {
        font-size: 6rem;
        width: 70%;
        padding-left: 2rem;
        color: #FBF5F4;
    }
`

export const DetailContent = styled.div`
    & > img {
        height: 20px;
        width: auto;
    }

` 

export const DetailContentTernary = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > img {
        padding: 3rem;
        width: 40%;
        height: auto;
    }
    .info {
        font-size: 3rem;
        padding: 3rem;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    width: 40%;
    & > .dateTime {
        font-size: 3rem;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
    }
    & > .dateTime > .time {
        font-size: 2rem;
    }
    & > .time {
        padding-left: 3rem;
    }
    & > button {
        margin-left: 3rem;
        margin-top: 3rem;
        width: 10rem;
        height: 3rem;
        border-style: none;
        background: #FF4B2B;
        color: white;
        height: 3.5rem;
        width: 7rem;
        border-radius: 10px;
        transition: transform 80ms ease-in;
        /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                    0 10px 10px rgba(0,0,0,0.22);   */
    }
    & > button:focus {
        outline: none;
    }
    & > button:active {
        transform: scale(0.95);
    }
    & > img {
        width: 40%;
        margin: 3rem;
        height: auto;
    }
`

export const DateMoment = styled(Moment)`
    font-size: 2rem;
    padding: 3rem;
`

export const Address = styled.div`
    padding-left: 3rem;
    margin: 0;
    & > .venue {
        font-size: 2rem;
        margin: 0;
    }
`

export const BackLink = styled(Link)`
    color: purple;
    margin: 3rem;
    padding-top: 1rem;
`