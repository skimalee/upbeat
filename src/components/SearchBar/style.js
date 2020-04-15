import styled from 'styled-components'

export const SearchBarForm = styled.form`
    width: 80vw;
    border-style: solid;
    border: 1px solid black;
    & > input {
        border-radius: 10px;
        height: 2.5rem;
        width: 90%;
        font-size: 16px;
        padding-left: 2rem
    }
    & > button {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 10px;
        margin-left: 1rem;
    }
`