import React from 'react'
import { Link } from 'react-router-dom'
import {
    Logo,
    NavContainer,
} from './style'

const NavBar = (props) => {

    let nav = props.user ?
        <div>
            <span className='NavBar-welcome'><Link to='/track'> WELCOME, {(props.user.name).toUpperCase()}</Link></span>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
        </div>
        :
        <div></div>;

    return (
        <NavContainer>
           <Link to={props.user ? '/search' : '/'}><Logo>upbeat</Logo></Link>
            {nav}
        </NavContainer>
    );
};

export default NavBar