import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-content">

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                aria-current={isActive('/services') ? 'page' : undefined}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link 
                to="/video-courses" 
                className={`nav-link ${isActive('/video-courses') ? 'active' : ''}`}
                aria-current={isActive('/video-courses') ? 'page' : undefined}
              >
                VIDEO COURSES
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                CONTACT US
              </Link>
            </li>
          </ul>



          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Social Media Icons Container - Full Width */}
        <div className="social-icons-container">
          <a 
            href="https://youtube.com/@fitnesswithinvictus" 
            className="social-icon"
            aria-label="Follow us on YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/fitnesswithinvictus/" 
            className="social-icon"
            aria-label="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://facebook.com/fitnesswithinvictus" 
            className="social-icon"
            aria-label="Follow us on Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a 
            href="https://x.com/fitnesswithinvictus" 
            className="social-icon"
            aria-label="Follow us on X (Twitter)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu" 
        className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
          <ul className="mobile-nav-links">
            <li>
              <Link 
                to="/" 
                className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={closeMenu}
                aria-current={isActive('/services') ? 'page' : undefined}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/video-courses" 
                className={`mobile-nav-link ${isActive('/video-courses') ? 'active' : ''}`}
                onClick={closeMenu}
                aria-current={isActive('/video-courses') ? 'page' : undefined}
              >
                Video Courses
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
          {/* Mobile Social Media Icons */}
          <div className="mobile-social-icons">
            <a 
              href="https://youtube.com/@fitnesswithinvictus" 
              className="mobile-social-icon"
              aria-label="Follow us on YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/youtube-icon.svg" alt="YouTube" />
            </a>
            <a 
              href="https://instagram.com/fitnesswithinvictus" 
              className="mobile-social-icon"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram-icon.svg" alt="Instagram" />
            </a>
            <a 
              href="https://www.facebook.com/61553448415582" 
              className="mobile-social-icon"
              aria-label="Follow us on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook-icon.svg" alt="Facebook" />
            </a>
            <a 
              href="https://x.com/fitnesswithinvictus" 
              className="mobile-social-icon"
              aria-label="Follow us on X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter-icon.svg" alt="X (Twitter)" />
            </a>
          </div>
        </div>
    </header>
  );
};

export default Header;
