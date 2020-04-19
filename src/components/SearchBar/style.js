import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    background: linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 133, 0.5)), no-repeat center/80% url('https://i.imgur.com/kK5NDEU.jpg');
    background-size: cover;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const SearchBarForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80vw;
    & > input {
        border-radius: 10px;
        border-style: none;
        height: 3.5rem;
        width: 50vw;
        font-size: 16px;
        padding-left: 2rem;
        outline: none;
    }
    & > input:focus {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                    0 10px 10px rgba(0,0,0,0.22);
    }
    & > button {
        border-style: none;
        background: #FF4B2B;
        color: white;
        font-weight: bold;
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 10px;
        margin-left: 1rem;
        transition: transform 80ms ease-in;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                    0 10px 10px rgba(0,0,0,0.22);  
    }
    & > button:focus {
        outline: none;
    }
    & > button:active {
        transform: scale(0.95);
    }
`

export const SearchBarGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: -6rem;
    & > h1 {
        font-size: 2rem;
        color: #FBF5F4;
        margin-bottom: 5rem;
        text-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                    0 10px 10px rgba(0,0,0,0.22);  
        
    }
`
