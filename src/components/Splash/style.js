import styled from 'styled-components'

export const SplashContainer = styled.div`
    background-image: no-repeat center/80% url('https://i.imgur.com/7Tg7kDg.jpg');
    background-size: cover;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const AppName = styled.h1`
    color: black;
    text-shadow: 2px 2px 4px #FFF;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    letter-spacing: 10px;

    margin-top: 5rem;
    font-family: 'Baloo Paaji 2', cursive;
    font-weight: bold;
    & > Link {
        font-size: 10rem;
    }
`