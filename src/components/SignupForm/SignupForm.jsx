import React, { Component } from 'react'
import userService from '../../utils/userService'
import { withRouter } from 'react-router-dom'
import { Form, FormInput, RegButton } from './style'


class SignupForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        debugger
        try {
            await userService.signup(this.state)
            this.props.handleSignupOrLogin()
            this.props.history.push('/search');
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Create Account</h1>
                <FormInput type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <FormInput type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                <FormInput type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <RegButton>Sign Up</RegButton>
          </Form>
        )
    }
}

export default withRouter(SignupForm);