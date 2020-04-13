import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService'
import { Input } from './style'

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
      this.props.history.push('/')
    } catch (err) {

      alert('Invalid Credentials!');
      console.log(err)
    }
  }

  render() {
    return (
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <Input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            <Input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            <br />
            <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </form>
    );
  }
}

export default LoginForm;