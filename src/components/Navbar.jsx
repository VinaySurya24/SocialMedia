import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>SocialConnect</h1>
      </div>
      
      <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#messages">Messages</a>
        <a href="#notifications">Notifications</a>
      </div>

      <div className="nav-user">
        <div className="swastik-logo">卐</div>
      </div>
    </nav>
  );
};

export default Navbar;
