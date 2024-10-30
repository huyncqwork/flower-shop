import React from'react';
import logoHeader from '../../../asset/logo/logo-header.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper-header flex justify-between items-center">
                <div className="logo">
                    <img src={logoHeader} alt="logo" />
                </div>
                <div className="menu">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </header>
    )};

export default Header;