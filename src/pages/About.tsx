import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';
import './About.css';

const About: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What makes Fitness with Invictus different?",
      answer: "We provide personalized fitness solutions with a focus on sustainable lifestyle changes. Our approach combines expert training, nutrition guidance, and community support to help you achieve lasting results."
    },
    {
      id: 2,
      question: "Do I need to be in shape to start?",
      answer: "Not at all! Our programs are designed for all fitness levels, from complete beginners to advanced athletes. We'll help you start where you are and progress at your own pace."
    },
    {
      id: 3,
      question: "What equipment do I need for the video courses?",
      answer: "Most of our video courses require minimal equipment. Many workouts can be done with just your body weight, and we provide alternatives for exercises that require equipment."
    },
    {
      id: 4,
      question: "How often should I work out?",
      answer: "We recommend starting with 3-4 workouts per week and gradually increasing based on your goals and schedule. Our trainers will help you create a sustainable routine that fits your lifestyle."
    },
    {
      id: 5,
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. We believe in earning your business every day, so there are no long-term contracts or cancellation fees."
    },
    {
      id: 6,
      question: "Do you offer nutrition guidance?",
      answer: "Absolutely! Nutrition is a key component of fitness success. Our certified nutrition coaches provide personalized meal plans, macro tracking guidance, and lifestyle coaching."
    }
  ];

  const certifications = [
    "Certified Personal Trainer (CPT)",
    "Certified Strength and Conditioning Specialist (CSCS)",
    "Precision Nutrition Level 1 Coach",
    "Functional Movement Screen (FMS) Certified",
    "TRX Suspension Training Certified",
    "Kettlebell Training Certified"
  ];

  return (
    <>
      <Helmet>
        <title>About - Fitness with Invictus</title>
        <meta name="description" content="Learn about Kumar Bhalekar, founder of Fitness with Invictus. Discover our mission, certifications, and commitment to helping you transform your fitness journey." />
        <meta name="keywords" content="about fitness trainer, Kumar Bhaler, personal trainer bio, fitness certifications, fitness mission" />
        <link rel="canonical" href="https://fitnesswithinvictus.com/about" />
      </Helmet>

      <div className="about-page">
        <section className="about-hero section">
          <div className="container">
            <div className="about-header">
              <h1 className="about-title">ABOUT</h1>
              <p className="about-subtitle">
                Meet the team behind Fitness with Invictus and learn about our mission 
                to help you transform your fitness journey with expert guidance and support.
              </p>
            </div>
          </div>
        </section>

        <section className="trainer-profile section">
          <div className="container">
            <div className="profile-content">
              <div className="profile-image">
                <div className="trainer-photo">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f3f4f6'/%3E%3Ctext x='200' y='250' text-anchor='middle' fill='%236b7280' font-size='18'%3ETrainer Photo%3C/text%3E%3C/svg%3E"
                    alt="Kumar Bhaleker, Fitness Trainer"
                    className="trainer-img"
                  />
                </div>
              </div>
              
              <div className="profile-info">
                <h2 className="trainer-name">KUMAR BHALEKAR</h2>
                <p className="trainer-title">Fitness Trainer, Founder</p>
                
                <div className="trainer-bio">
                  <p>
                    With over 8 years of experience in the fitness industry, Kumar Bhalekar founded 
                    Fitness with Invictus with a simple mission: to make professional fitness 
                    training accessible to everyone, regardless of their starting point.
                  </p>
                  <p>
                    Kumar's approach combines evidence-based training methods with personalized 
                    nutrition guidance to help clients achieve sustainable, long-term results. 
                    Having transformed hundreds of lives, Kumar understands that fitness is not 
                    just about physical transformation, but about building confidence, discipline, 
                    and a healthier relationship with your body.
                  </p>
                  <p>
                    As a certified personal trainer and nutrition coach, Kumar stays current with 
                    the latest research and training techniques to ensure clients receive the 
                    most effective and safe guidance possible.
                  </p>
                </div>
                
                <div className="certifications">
                  <h3 className="certifications-title">Certifications & Qualifications</h3>
                  <ul className="certifications-list">
                    {certifications.map((cert, index) => (
                      <li key={index} className="certification-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="cert-icon">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-section section bg-secondary">
          <div className="container">
            <div className="mission-content">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-text">
                At Fitness with Invictus, we believe that everyone deserves access to professional 
                fitness guidance and support. Our mission is to empower individuals to transform 
                their lives through sustainable fitness practices, expert coaching, and a supportive 
                community that celebrates every step of the journey.
              </p>
              <div className="mission-values">
                <div className="value-item">
                  <div className="value-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="value-title">Excellence</h3>
                  <p className="value-description">We strive for excellence in every program, workout, and interaction.</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="value-title">Accessibility</h3>
                  <p className="value-description">Fitness should be accessible to everyone, regardless of experience or background.</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12.5V22h2v-6h2.5l2.54-7.63A1.5 1.5 0 0 1 9.46 8H12c.8 0 1.54.37 2.01.99L16 11l1.99-2.01A2.5 2.5 0 0 1 20 8h2.54c.8 0 1.54.37 2.01.99L27 12.5V22h-7z"/>
                    </svg>
                  </div>
                  <h3 className="value-title">Community</h3>
                  <p className="value-description">We build a supportive community that motivates and inspires each other.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section">
          <div className="container">
            <div className="faq-header">
              <h2 className="faq-title">Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Have questions? We've got answers. Here are some of the most common 
                questions we receive about our programs and services.
              </p>
            </div>
            
            <FAQ 
              faqs={faqs}
              activeAccordion={activeAccordion}
              setActiveAccordion={setActiveAccordion}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
