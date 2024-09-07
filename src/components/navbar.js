import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  // State for the toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the menu open/close
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>My Portfolio</h1>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <span>&#9776;</span>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;