import React, { Component } from 'react'
import userService from '../../utils/userService'
import { Form } from '../../pages/LoginPage/style'
import { withRouter } from 'react-router-dom'

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
        try {
            await userService.signup(this.state)
            this.props.handleSignupOrLogin()
            this.props.history.push('/dashboard');
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <input type='text' name='name' placeholder='name' onChange={this.handleChange} />
                    <input type='email' name='email' placeholder='email' onChange={this.handleChange} />
                    <input type='password' name='password' placeholder='password' onChange={this.handleChange} />
                    <div className="choiceContainer">
                        <div style={{ alignSelf: 'center' }}>
                            <div>Already have an account?</div>
                            <p style={{ margin: 0 }}>Sign In <span onClick={this.props.doHandleToggle} style={{ color: 'dodgerblue', cursor: 'pointer' }}>Here</span></p>
                        </div>
                        <button type='submit' style={{ display: 'block' }}>Submit</button>
                    </div>
                </Form>
            </>
        )
    }
}

export default withRouter(SignupForm);