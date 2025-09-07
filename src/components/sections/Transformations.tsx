import React, { useState } from 'react';
import './Transformations.css';

const Transformations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformations = [
    {
      id: 1,
      before: {
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='%236b7280' font-size='16'%3EBefore Photo%3C/text%3E%3C/svg%3E",
        label: "Before"
      },
      after: {
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23e5e7eb'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='%23374151' font-size='16'%3EAfter Photo%3C/text%3E%3C/svg%3E",
        label: "After"
      },
      name: "Sarah M.",
      duration: "12 weeks"
    },
    {
      id: 2,
      before: {
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='%236b7280' font-size='16'%3EBefore Photo%3C/text%3E%3C/svg%3E",
        label: "Before"
      },
      after: {
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23e5e7eb'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='%23374151' font-size='16'%3EAfter Photo%3C/text%3E%3C/svg%3E",
        label: "After"
      },
      name: "Mike R.",
      duration: "8 weeks"
    },
    {
      id: 3,
      before: {
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='%236b7280' font-size='16'%3EBefore Photo%3C/text%3E%3C/svg%3E",
        label: "Before"
      },
      after: {
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23e5e7eb'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='%23374151' font-size='16'%3EAfter Photo%3C/text%3E%3C/svg%3E",
        label: "After"
      },
      name: "Jessica L.",
      duration: "16 weeks"
    }
  ];

  const nextTransformation = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevTransformation = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const currentTransformation = transformations[currentIndex];

  return (
    <section className="transformations section" aria-labelledby="transformations-heading">
      <div className="container">
        <div className="transformations-header">
          <h2 id="transformations-heading" className="transformations-title">
            TRANSFORMATIONS
          </h2>
          <p className="transformations-subtitle">
            Get Inspired by Real People
          </p>
        </div>

        <div className="transformations-carousel">
          <button 
            className="carousel-btn carousel-btn-prev"
            onClick={prevTransformation}
            aria-label="Previous transformation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          <div className="transformation-card">
            <div className="transformation-images">
              <div className="transformation-image">
                <img 
                  src={currentTransformation.before.image} 
                  alt={`${currentTransformation.name} before transformation`}
                  className="transformation-img"
                />
                <div className="transformation-label before-label">
                  {currentTransformation.before.label}
                </div>
              </div>
              <div className="transformation-image">
                <img 
                  src={currentTransformation.after.image} 
                  alt={`${currentTransformation.name} after transformation`}
                  className="transformation-img"
                />
                <div className="transformation-label after-label">
                  {currentTransformation.after.label}
                </div>
              </div>
            </div>
            <div className="transformation-info">
              <h3 className="transformation-name">{currentTransformation.name}</h3>
              <p className="transformation-duration">{currentTransformation.duration} Program</p>
            </div>
          </div>

          <button 
            className="carousel-btn carousel-btn-next"
            onClick={nextTransformation}
            aria-label="Next transformation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>

        <div className="carousel-indicators">
          {transformations.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to transformation ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
