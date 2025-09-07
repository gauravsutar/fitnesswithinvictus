import React from 'react';
import './ServiceCard.css';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="service-card card">
      <div className="service-image">
        <img 
          src={service.image} 
          alt={`${service.title} service`}
          className="service-img"
        />
      </div>
      
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        
        <ul className="service-features">
          {service.features.map((feature, index) => (
            <li key={index} className="service-feature">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="feature-icon">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      
      </div>
    </div>
  );
};

export default ServiceCard;
