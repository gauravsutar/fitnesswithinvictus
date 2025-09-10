import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-background">
  <img src={process.env.PUBLIC_URL + '/home_page_background.png'} alt="Home Background" className="hero-bg-img" />
  <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-heading" className="hero-title">
              TRAIN WITH
            </h1>

          <div className="hero-image">
            <div className="hero-image-placeholder">
              <div className="fitness-icon">
                <img src={process.env.PUBLIC_URL + '/brand_logo.png'} alt="Brand Logo" className="brand-logo-img" style={{objectFit: 'contain'}} />
              </div>
            </div>
          </div>

            <p className="hero-subtitle">
              Transform your body with professional fitness training, personalized coaching, 
              and a comprehensive approach to health and wellness. Join hundreds of successful 
              transformations and start your fitness journey today.
            </p>
            <div className="hero-actions">
              {/* <Link to="/video-courses" className="btn btn-primary btn-large">
                WATCH NOW
              </Link> */}
              <Link to="/services" className="btn btn-secondary btn-large">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
