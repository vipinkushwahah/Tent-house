import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../assates/logo.jpeg';

const HeaderMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[location])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false)
    }
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
        <div className='header__main-container-div'>
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
                            <li className="header__menu-item"><Link to="/" onClick={closeMenu}>Home</Link></li>
                            <li className="header__menu-item"><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                            <li className="header__menu-item"><Link to="/gellery" onClick={closeMenu}>Gallery</Link></li>
                            <li className="header__menu-item"><Link to="/services" onClick={closeMenu}>Services</Link></li>
                            <li className="header__menu-item"><Link to="/whatwedo" onClick={closeMenu}>What We Do</Link></li>
                            <li className="header__menu-item"><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
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
                <div className='header__Sub-logo-slogen'>Unforgettable Gatherings Under One Roof</div>
            </header>
            <div>

                <div className="cover-text">
                    <Link to="/home"></Link>
                    {generateBreadcrumb()}
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
