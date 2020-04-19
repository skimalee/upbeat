import styled from 'styled-components'


export const EventContainer = styled.div`
    position: relative;
    margin: auto;
    width: 80%;
    border: 1px solid gray;
    display: flex;
    flex-direction: row;
    padding: 2rem;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    border-bottom: none;
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
        right: 10px;
    }
`
export const DateTimeLoc = styled.div`
    display: flex;
    flex-direction: column;
`
