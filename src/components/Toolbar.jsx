import React from 'react';
import { NavLink } from 'react-router-dom';

function Toolbar() {
    return (
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <NavLink to="/about" className="header__nav-link" activeClassName="header__nav-link--active">Обо мне</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink to="/blog" className="header__nav-link" activeClassName="header__nav-link--active">Блог</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink to="/login" className="header__nav-link" activeClassName="header__nav-link--active">Войти</NavLink>
                    </li>
                </ul>
            </nav>
    );
}

export default Toolbar;