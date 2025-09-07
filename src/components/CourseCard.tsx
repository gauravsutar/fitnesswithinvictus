import React from 'react';
import './CourseCard.css';

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

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
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
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="star">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="star">
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
        <svg key={`empty-${i}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="star empty">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="course-card card" onClick={onClick}>
      <div className="course-thumbnail">
        <img 
          src={course.thumbnail} 
          alt={`${course.title} course thumbnail`}
          className="course-img"
        />
        <div className="course-overlay">
          <div className="play-button">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div className="course-difficulty" style={{ backgroundColor: getDifficultyColor(course.difficulty) }}>
          {course.difficulty}
        </div>
      </div>
      
      <div className="course-content">
        <div className="course-header">
          <h3 className="course-title">{course.title}</h3>
          <div className="course-price">{course.price}</div>
        </div>
        
        <p className="course-description">{course.description}</p>
        
        <div className="course-meta">
          <div className="course-instructor">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span>{course.instructor}</span>
          </div>
          
          <div className="course-duration">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
            </svg>
            <span>{course.duration}</span>
          </div>
        </div>
        
        <div className="course-rating">
          <div className="rating-stars">
            {renderStars(course.rating)}
          </div>
          <span className="rating-value">{course.rating}</span>
          <span className="rating-count">({course.students} students)</span>
        </div>
        
        <div className="course-actions">
          <button className="btn btn-primary course-btn">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
