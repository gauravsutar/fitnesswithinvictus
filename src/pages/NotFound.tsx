import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Fitness with Invictus</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to continue your fitness journey." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="not-found-page">
        <section className="not-found-hero section">
          <div className="container">
            <div className="not-found-content">
              <div className="error-code">
                <h1 className="error-number">404</h1>
                <div className="error-icon">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              
              <div className="error-message">
                <h2 className="error-title">Page Not Found</h2>
                <p className="error-description">
                  Oops! The page you're looking for doesn't exist. It might have been moved, 
                  deleted, or you entered the wrong URL. Don't worry though - let's get you 
                  back on track with your fitness journey!
                </p>
                
                <div className="error-actions">
                  <Link to="/" className="btn btn-primary btn-large">
                    Go Home
                  </Link>
                  <Link to="/services" className="btn btn-secondary btn-large">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="helpful-links section bg-secondary">
          <div className="container">
            <div className="helpful-links-content">
              <h3 className="helpful-links-title">Looking for something specific?</h3>
              <div className="helpful-links-grid">
                <Link to="/services" className="helpful-link">
                  <div className="helpful-link-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="helpful-link-content">
                    <h4 className="helpful-link-title">Our Services</h4>
                    <p className="helpful-link-description">Explore our fitness programs and training options</p>
                  </div>
                </Link>
                
                <Link to="/video-courses" className="helpful-link">
                  <div className="helpful-link-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="helpful-link-content">
                    <h4 className="helpful-link-title">Video Courses</h4>
                    <p className="helpful-link-description">Access our library of fitness video courses</p>
                  </div>
                </Link>
                
                <Link to="/about" className="helpful-link">
                  <div className="helpful-link-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="helpful-link-content">
                    <h4 className="helpful-link-title">About Us</h4>
                    <p className="helpful-link-description">Learn about our trainers and mission</p>
                  </div>
                </Link>
                
                <Link to="/contact" className="helpful-link">
                  <div className="helpful-link-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="helpful-link-content">
                    <h4 className="helpful-link-title">Contact Us</h4>
                    <p className="helpful-link-description">Get in touch with our team</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;
