import React from 'react';
import './Header.css';
import logo from '../Images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/manage">Manage Order</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;