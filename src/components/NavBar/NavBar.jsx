import React from 'react'
import { Link } from 'react-router-dom'
import {
    Logo,
    NavContainer
} from './style'

const NavBar = (props) => {

    let nav = props.user ?
        <div>
            <span className='NavBar-welcome'>WELCOME, {(props.user.name).toUpperCase()}</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
        </div>
        :
        <div><Link to='/login' className='NavBar-link'>LOG IN</Link></div>;

    return (
        <NavContainer>
            <Logo>upbeat</Logo>
            {nav}
        </NavContainer>
    );
};

export default NavBar