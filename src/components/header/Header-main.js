import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../assates/logo.jpeg';

const HeaderMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    // Generate breadcrumb from the current path
    const generateBreadcrumb = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        return pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;

            return isLast ? (
                <span key={path} className="breadcrumb__current">
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </span>
            ) : (
                <span key={path}>
                    <Link to={path}>{segment.charAt(0).toUpperCase() + segment.slice(1)}</Link> /
                </span>
            );
        });
    };

    return (
        <div>
            <header className={`header ${darkMode ? 'header--dark' : ''}`}>
                <div className="header__container">
                    <div className="header__logo">
                        <a href="/home">
                            <div>
                                <img src={logo} alt="logo" className="header__logo-image" />
                            </div>
                            <div>
                                <div>MAA BHAWANI</div>
                                <div className="header__Sub-logo">TENT HOUSE</div>
                            </div>
                        </a>
                    </div>
                    <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                        <ul className="header__menu">
                            <li className="header__menu-item"><Link to="/">Home</Link></li>
                            <li className="header__menu-item"><Link to="/about">About Us</Link></li>
                            <li className="header__menu-item"><Link to="/gellery">Gallery</Link></li>
                            <li className="header__menu-item"><Link to="/services">Services</Link></li>
                            <li className="header__menu-item"><Link to="/whatwedo">What We Do</Link></li>
                            <li className="header__menu-item"><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <button
                        className="header__dark-mode-toggle"
                        aria-label="Toggle dark mode"
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? '🌙' : '☀️'}
                    </button>
                    <button
                        className="header__toggle"
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>
                </div>
            </header>
            <div>
                <img
                    className="main_image"
                    src="https://5.imimg.com/data5/HM/LW/MY-32304676/building-design-500x500.jpg"
                    alt="main"
                />
                <div className="cover-text">
                    <Link to="/home">Home</Link> /
                    {generateBreadcrumb()}
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
