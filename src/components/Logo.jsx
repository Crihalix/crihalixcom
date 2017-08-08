import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div className="header__logo">
            <Link to="/">
                <img src="img/logo.svg" className="header__logo-img" alt="logo"/>
            </Link>
        </div>
    );
}

export default Logo;

