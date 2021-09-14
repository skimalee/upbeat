import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SplashContainer = styled.div`
    background: no-repeat center/80% url('https://i.imgur.com/kK5NDEU.jpg');
    background-size: cover;
    height: 84vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const AppName = styled.h1`
    display: flex;
    align-self: center;
    padding-bottom: 100px;
`

export const UpbeatLink = styled(Link)`
    font-family: 'Baloo Paaji 2', cursive;
    font-size: 2rem;
`