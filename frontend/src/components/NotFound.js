import logo from '../logo.svg';
import React from 'react';
import '../App.css';

const NotFound = () => {
    return(
        <div className='App'>
            <header className='App-header'>
                <img 
                src={logo}
                className='App-logo'
                alt='logo'
                />
            <p>404 PAGE NOT FOUND</p>
            </header>
        </div>
    )
}

export default NotFound;