import React, { useEffect } from 'react';
import './CourseModal.css';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  price: string;
  thumbnail: string;
  instructor: string;
  rating: number;
  students: number;
  features: string[];
}

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return '#10b981';
      case 'Intermediate':
        return '#f59e0b';
      case 'Advanced':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="star">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="star">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half-star)"/>
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="star empty">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content course-modal">
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className="modal-header">
          <div className="course-thumbnail-large">
            <img 
              src={course.thumbnail} 
              alt={`${course.title} course thumbnail`}
              className="course-img-large"
            />
            <div className="course-difficulty-large" style={{ backgroundColor: getDifficultyColor(course.difficulty) }}>
              {course.difficulty}
            </div>
          </div>
          
          <div className="course-info">
            <h2 id="modal-title" className="course-title-large">{course.title}</h2>
            <p className="course-description-large">{course.description}</p>
            
            <div className="course-meta-large">
              <div className="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span>Instructor: {course.instructor}</span>
              </div>
              
              <div className="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                </svg>
                <span>Duration: {course.duration}</span>
              </div>
              
              <div className="meta-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Category: {course.category}</span>
              </div>
            </div>
            
            <div className="course-rating-large">
              <div className="rating-stars-large">
                {renderStars(course.rating)}
              </div>
              <span className="rating-value-large">{course.rating}</span>
              <span className="rating-count-large">({course.students} students)</span>
            </div>
          </div>
        </div>
        
        <div className="modal-body">
          <div className="course-features">
            <h3 className="features-title">What You'll Learn</h3>
            <ul className="features-list">
              {course.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="feature-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="modal-footer">
          <div className="course-price-large">{course.price}</div>
          <div className="modal-actions">
            <button className="btn btn-secondary">
              Watch Preview
            </button>
            <button className="btn btn-primary">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
