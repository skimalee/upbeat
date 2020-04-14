import React, { Component } from 'react';
import userService from '../../utils/userService'
import { withRouter } from 'react-router-dom'
import { Form } from '../../pages/LoginPage/style'

class LoginForm extends Component {
  state = {
    email: '',
    pw: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.setState({
        email: '',
        pw: ''
      })
      this.props.history.push('/dashboard')
    } catch (err) {

      alert('Invalid Credentials!');
      console.log(err)
    }
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit} >
          <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
          <input type="password"  placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            <div className="choiceContainer">
              <div style={{ alignSelf: 'center' }}>
                <div>Don't have an account?</div>
                <p style={{ margin: 0 }}>Sign Up <span onClick={this.props.doHandleToggle} style={{ color: 'dodgerblue', cursor: 'pointer' }}>Here</span></p>
              </div>
              <button color={'dodgerblue'} type='submit' style={{ display: 'block' }}>Submit</button>
            </div>
        </Form>
      </>
    );
  }
}

export default withRouter(LoginForm);