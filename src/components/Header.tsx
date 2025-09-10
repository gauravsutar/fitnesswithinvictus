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
            <img src="/youtube-icon.svg" alt="YouTube" />
          </a>
          <a 
            href="https://www.instagram.com/fitnesswithinvictus/" 
            className="social-icon"
            aria-label="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram-icon.svg" alt="Instagram" />
          </a>
          <a 
            href="https://facebook.com/fitnesswithinvictus" 
            className="social-icon"
            aria-label="Follow us on Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook-icon.svg" alt="Facebook" />
          </a>
          <a 
            href="https://x.com/fitnesswithinvictus" 
            className="social-icon"
            aria-label="Follow us on X (Twitter)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter-icon.svg" alt="X (Twitter)" />
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
