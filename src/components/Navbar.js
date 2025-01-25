import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <h1 className="navbar-logo">
                    <Link to="/">EcoSmart</Link>
                </h1>

                {/* Navigation Links */}
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                {/* Auth Links */}
                <div className="auth-links">
                    <Link to="/login" className="auth-link">Login</Link>
                    <Link to="/register" className="auth-link">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
