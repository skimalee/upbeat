
import React from 'react';
import {SplashContainer, AppName } from './style'
import { Link } from 'react-router-dom'

const Splash = () => {
    return (
        <SplashContainer className='splash'>
            <AppName>
                <Link to='/login' className='NavBar-link'>upbeat</Link>
            </AppName>
        </SplashContainer>
    )
}

export default Splash