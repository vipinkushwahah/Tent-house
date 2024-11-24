import React from 'react';
import './header.css'
import { useState } from 'react';

import { Link } from 'react-router-dom';

const HeaderMain = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <div>
            <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="/home">MyBrand</a>
                </div>
                <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__menu">
                        <li className="header__menu-item"><Link to="/home">Home</Link></li>
                        <li className="header__menu-item"><Link to="/about">About</Link></li>
                        <li className="header__menu-item"><Link to="/services">Services</Link></li>
                        <li className="header__menu-item"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <button
                    className="header__toggle"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            </div>
        </header>
        </div>
    );
};
export default HeaderMain;
