import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img src="/assets/logo.png" alt="img 1" />
        <div className="nav-links">
          <a
            href="#"
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
          <a
            href="#"
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About us
          </a>
          <a
            href="#"
            className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
            onClick={() => handleLinkClick('services')}
          >
            Services
          </a>
          <a
            href="#"
            className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`}
            onClick={() => handleLinkClick('blog')}
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
