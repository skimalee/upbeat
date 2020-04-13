import React, { Component } from 'react'
import userService from '../../utils/userService'
import { Input } from './style'
import { withRouter } from 'react-router-dom'

class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    } 

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit = async(event) => {
        event.preventDefault();
        try {
            await userService.signup(this.state)
            this.props.handleSignupOrLogin()
            this.props.history.push('/');
        }
        catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input type='text' name='name' placeholder='name' onChange={this.handleChange}/>
                <Input type='email' name='email' placeholder='email' onChange={this.handleChange} />
                <Input type='password' name='password' placeholder='password' onChange={this.handleChange} />
                <input type='submit' />
            </form>
        )
    }
}

export default withRouter(SignupForm);