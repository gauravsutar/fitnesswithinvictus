import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Personal Training",
      description: "One-on-one training sessions tailored to your specific goals and fitness level.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='18'%3EPersonal Training%3C/text%3E%3C/svg%3E",
      features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"]
    },
    {
      id: 2,
      title: "Group Classes",
      description: "High-energy group fitness classes for all levels in a supportive environment.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='18'%3EGroup Classes%3C/text%3E%3C/svg%3E",
      features: ["Variety of class types", "Motivating atmosphere", "Social connection", "Beginner friendly"]
    },
    {
      id: 3,
      title: "Nutrition Coaching",
      description: "Personalized nutrition plans and coaching to support your fitness goals.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='18'%3ENutrition Coaching%3C/text%3E%3C/svg%3E",
      features: ["Meal planning", "Macro tracking", "Recipe ideas", "Lifestyle coaching"]
    },
    {
      id: 4,
      title: "Online Training",
      description: "Virtual training sessions and programs accessible from anywhere.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='18'%3EOnline Training%3C/text%3E%3C/svg%3E",
      features: ["Live video sessions", "Recorded workouts", "Global access", "Over-call instructions for guidance"]
    },
    {
      id: 5,
      title: "Fitness Challenges",
      description: "Structured fitness challenges to keep you motivated and on track.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='18'%3EFitness Challenges%3C/text%3E%3C/svg%3E",
      features: ["Goal-oriented programs", "Community support", "Progress rewards", "Expert guidance"]
    },
    {
      id: 6,
      title: "Reward Recognitions",
      description: "Workplace wellness programs designed for teams and organizations.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='18'%3EReward Recognitions%3C/text%3E%3C/svg%3E",
      features: ["Exclusive discounts on fitness products","Highlights for top performers","Special shoutouts in community groups", "Personalized milestone rewards"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Fitness with Invictus</title>
        <meta name="description" content="Discover our comprehensive fitness services including personal training, group classes, nutrition coaching, and more. Transform your fitness journey with expert guidance." />
        <meta name="keywords" content="personal training, group fitness classes, nutrition coaching, online training, fitness challenges, reward recognitions" />
        <link rel="canonical" href="https://fitnesswithinvictus.com/services" />
      </Helmet>

      <div className="services-page">
        <section className="services-hero section">
          <div className="container">
            <div className="services-header">
              <h1 className="services-title">OUR SERVICES</h1>
              <p className="services-subtitle">
                Comprehensive fitness solutions tailored to your needs and goals. 
                From personal training to group classes, we offer everything you need 
                to transform your fitness journey.
              </p>
            </div>
          </div>
        </section>

        <section className="services-grid section">
          <div className="container">
            <div className="services-container">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="services-cta section bg-primary">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Personalized Fitness Journey?</h2>
              <p className="cta-subtitle">
                Contact us today to discuss your goals and find the perfect service for you.
              </p>
              <div className="cta-actions">
                <a href="/contact" className="btn btn-primary btn-large">
                  Get Started
                </a>
                <a href="/video-courses" className="btn btn-primary btn-large">
                  View Courses
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
