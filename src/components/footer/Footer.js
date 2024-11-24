import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__about">
                    <h2 className="footer__title">About Us</h2>
                    <p className="footer__text">
                        Building dreams with quality and precision. Our team ensures the highest standards of construction services for our valued clients.
                    </p>
                </div>
                <div className="footer__nav">
                    <h2 className="footer__title">Quick Links</h2>
                    <ul className="footer__menu">
                        <li className="footer__menu-item"><a href="#projects">Projects</a></li>
                        <li className="footer__menu-item"><a href="#services">Services</a></li>
                        <li className="footer__menu-item"><a href="#team">Our Team</a></li>
                        <li className="footer__menu-item"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <h2 className="footer__title">Contact Us</h2>
                    <p className="footer__text">
                        <strong>Email:</strong> info@construction.com<br />
                        <strong>Phone:</strong> +123-456-7890
                    </p>
                    <div className="footer__social">
                        <a href="https://facebook.com" className="footer__social-icon" aria-label="Facebook">🔗</a>
                        <a href="https://instagram.com" className="footer__social-icon" aria-label="Instagram">🔗</a>
                        <a href="https://linkedin.com" className="footer__social-icon" aria-label="LinkedIn">🔗</a>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                © 2024 My Construction Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
