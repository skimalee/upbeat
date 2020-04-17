import styled from 'styled-components'

export const Form = styled.form`
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
    text-align: center;
    & > p {
        margin: 0;
    }
    & > h1 {
        font-size: 2rem;
    }
`
export const FormInput = styled.input`
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
`

export const RegButton = styled.button`
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    .ghost {
        background-color: transparent;
        border-color: #FFFFFF;
    }
    :active {
        transform: scale(0.95);
    }
    :focus {
        outline: none;
    }
`
