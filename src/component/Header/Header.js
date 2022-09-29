import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo' src={logo} alt="" />        
            </div>
            
            <div>
                <h1 className='font'>GamingRidge</h1>
            </div>
        </div>
    );
};

export default Header;