import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CourseCard from '../components/CourseCard';
import CourseModal from '../components/CourseModal';
import './VideoCourses.css';

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

const VideoCourses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');

  const courses: Course[] = [
    {
      id: 1,
      title: "Beginner's Fitness Foundation",
      description: "Perfect introduction to fitness with basic exercises and proper form techniques.",
      duration: "4 weeks",
      difficulty: "Beginner",
      category: "Strength Training",
      price: "$29.99",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3EBeginner Course%3C/text%3E%3C/svg%3E",
      instructor: "Riley Olson",
      rating: 4.8,
      students: 1250,
      features: ["Basic form techniques", "Equipment introduction", "Safety guidelines", "Progress tracking"]
    },
    {
      id: 2,
      title: "Advanced HIIT Training",
      description: "High-intensity interval training for experienced fitness enthusiasts.",
      duration: "6 weeks",
      difficulty: "Advanced",
      category: "Cardio",
      price: "$49.99",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3EAdvanced HIIT%3C/text%3E%3C/svg%3E",
      instructor: "Riley Olson",
      rating: 4.9,
      students: 890,
      features: ["Advanced techniques", "Customizable workouts", "Performance metrics", "Expert guidance"]
    },
    {
      id: 3,
      title: "Yoga & Flexibility",
      description: "Improve flexibility and mindfulness with our comprehensive yoga program.",
      duration: "8 weeks",
      difficulty: "Beginner",
      category: "Flexibility",
      price: "$39.99",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3EYoga Course%3C/text%3E%3C/svg%3E",
      instructor: "Riley Olson",
      rating: 4.7,
      students: 2100,
      features: ["Multiple yoga styles", "Breathing techniques", "Meditation practices", "Flexibility progress"]
    },
    {
      id: 4,
      title: "Strength Building Program",
      description: "Build muscle and increase strength with progressive resistance training.",
      duration: "12 weeks",
      difficulty: "Intermediate",
      category: "Strength Training",
      price: "$59.99",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3EStrength Training%3C/text%3E%3C/svg%3E",
      instructor: "Riley Olson",
      rating: 4.8,
      students: 1650,
      features: ["Progressive overload", "Muscle group focus", "Nutrition guidance", "Strength tracking"]
    },
    {
      id: 5,
      title: "Cardio Blast Workout",
      description: "High-energy cardio workouts to improve cardiovascular health and burn calories.",
      duration: "4 weeks",
      difficulty: "Intermediate",
      category: "Cardio",
      price: "$34.99",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3ECardio Blast%3C/text%3E%3C/svg%3E",
      instructor: "Riley Olson",
      rating: 4.6,
      students: 980,
      features: ["Variety of cardio styles", "Heart rate monitoring", "Calorie tracking", "Motivational coaching"]
    },
    {
      id: 6,
      title: "Core & Abs Mastery",
      description: "Target your core muscles with specialized exercises for a stronger midsection.",
      duration: "6 weeks",
      difficulty: "Intermediate",
      category: "Core Training",
      price: "$44.99",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='16'%3ECore Training%3C/text%3E%3C/svg%3E",
      instructor: "Riley Olson",
      rating: 4.7,
      students: 1420,
      features: ["Core strengthening", "Abdominal focus", "Stability training", "Posture improvement"]
    }
  ];

  const categories = ['All', 'Strength Training', 'Cardio', 'Flexibility', 'Core Training'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = filter === 'All' || course.category === filter;
    const difficultyMatch = difficultyFilter === 'All' || course.difficulty === difficultyFilter;
    return categoryMatch && difficultyMatch;
  });

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <>
      <Helmet>
        <title>Video Courses - Fitness with Invictus</title>
        <meta name="description" content="Access our comprehensive library of fitness video courses. From beginner to advanced levels, find the perfect workout program for your fitness journey." />
        <meta name="keywords" content="fitness videos, workout courses, online training, exercise programs, fitness tutorials" />
        <link rel="canonical" href="https://fitnesswithinvictus.com/video-courses" />
      </Helmet>

      <div className="video-courses-page">
        <section className="courses-hero section">
          <div className="container">
            <div className="courses-header">
              <h1 className="courses-title">VIDEO COURSES</h1>
              <p className="courses-subtitle">
                Access our comprehensive library of fitness video courses designed by expert trainers. 
                From beginner-friendly programs to advanced training techniques, find the perfect 
                workout program for your fitness journey.
              </p>
            </div>
          </div>
        </section>

        <section className="courses-filters section-sm">
          <div className="container">
            <div className="filters-container">
              <div className="filter-group">
                <label htmlFor="category-filter" className="filter-label">Category:</label>
                <select 
                  id="category-filter"
                  value={filter} 
                  onChange={(e) => setFilter(e.target.value)}
                  className="filter-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label htmlFor="difficulty-filter" className="filter-label">Difficulty:</label>
                <select 
                  id="difficulty-filter"
                  value={difficultyFilter} 
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="filter-select"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="courses-grid section">
          <div className="container">
            <div className="courses-container">
              {filteredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  onClick={() => handleCourseClick(course)}
                />
              ))}
            </div>
          </div>
        </section>

        {selectedCourse && (
          <CourseModal 
            course={selectedCourse} 
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
};

export default VideoCourses;
