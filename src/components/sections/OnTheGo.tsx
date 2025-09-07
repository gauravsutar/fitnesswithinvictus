import React from 'react';
import './OnTheGo.css';

const OnTheGo: React.FC = () => {
  return (
    <section className="on-the-go section" aria-labelledby="on-the-go-heading">
      <div className="container">
        <div className="on-the-go-content">
          <div className="on-the-go-text">
            <h2 id="on-the-go-heading" className="on-the-go-title">
              ON THE GO
            </h2>
            <p className="on-the-go-subtitle">
              Workout anywhere, anytime
            </p>
            <p className="on-the-go-description">
              Access your fitness journey from any device, anywhere in the world. 
              Our mobile-optimized platform ensures you never miss a workout, whether 
              you're at home, traveling, or at the gym. Download our app or use the 
              web platform for seamless fitness experiences.
            </p>
          </div>
          
          <div className="on-the-go-visual">
            <div className="devices-container">
              <div className="device laptop">
                <div className="device-screen">
                  <div className="play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="device phone">
                <div className="device-screen">
                  <div className="play-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnTheGo;
