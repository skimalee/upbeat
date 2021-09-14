
import React from 'react';
import {SplashContainer, AppName, UpbeatLink } from './style'

const Splash = () => {
    return (
        <SplashContainer className='splash'>
            <AppName>
                <UpbeatLink to='/login' className='NavBar-link'>click to enter</UpbeatLink>
            </AppName>
        </SplashContainer>
    )
}

export default Splash