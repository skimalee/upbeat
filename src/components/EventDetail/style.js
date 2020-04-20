import styled from 'styled-components'

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
    }
    & > h1 {
        font-size: 6rem;
        width: 70%;
        padding-left: 2rem;
        color: #FBF5F4;
    }
`

export const DetailContent = styled.div`

`   