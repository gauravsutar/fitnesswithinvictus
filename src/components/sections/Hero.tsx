import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-heading" className="hero-title">
              TRAIN WITH INVICTUS
            </h1>
            <p className="hero-subtitle">
              Transform your body with professional fitness training, personalized coaching, 
              and a comprehensive approach to health and wellness. Join thousands of successful 
              transformations and start your fitness journey today.
            </p>
            <div className="hero-actions">
              <Link to="/video-courses" className="btn btn-primary btn-large">
                WATCH NOW
              </Link>
              <Link to="/services" className="btn btn-secondary btn-large">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-placeholder">
              <div className="fitness-icon">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43 2.14-2.14 1.43 1.43L3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43-1.43 1.43L22 16.29l-1.43-1.43 2.14-2.14L20.57 14.86z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
