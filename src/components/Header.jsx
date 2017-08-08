import React from 'react';

import Toolbar from './Toolbar';
import Logo from './Logo';

function Header() {
    return (
        <header className="header">
            <Logo />
            <Toolbar />
        </header>
    );
}

export default Header;