import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import './Contact.css';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact - Fitness with Invictus</title>
        <meta name="description" content="Get in touch with Fitness with Invictus. Contact us for questions about our services, programs, or to start your fitness journey today." />
        <meta name="keywords" content="contact fitness trainer, fitness consultation, personal training inquiry, fitness questions" />
        <link rel="canonical" href="https://fitnesswithinvictus.com/contact" />
      </Helmet>

      <div className="contact-page">
        <section className="contact-hero section">
          <div className="container">
            <div className="contact-header">
              <h1 className="contact-title">CONTACT US</h1>
              <p className="contact-subtitle">
                Welcome to our fitness center! Get to know more about us and what we offer.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-content section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-image">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f3f4f6'/%3E%3Ctext x='200' y='250' text-anchor='middle' fill='%236b7280' font-size='18'%3EContact Image%3C/text%3E%3C/svg%3E"
                    alt="Contact us for fitness training"
                    className="contact-img"
                  />
                </div>
                
                <div className="contact-details">
                  <h2 className="contact-details-title">Get In Touch</h2>
                  <p className="contact-details-text">
                    We're here to help you achieve your fitness goals. Whether you're a beginner 
                    looking to start your fitness journey or an experienced athlete wanting to 
                    take your training to the next level, we have the expertise and programs 
                    to support you.
                  </p>
                  
                  <div className="contact-methods">
                    <div className="contact-method">
                      <div className="contact-method-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div className="contact-method-info">
                        <h3 className="contact-method-title">Email</h3>
                        <p className="contact-method-value">info@fitnesswithinvictus.com</p>
                      </div>
                    </div>
                    
                    <div className="contact-method">
                      <div className="contact-method-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <div className="contact-method-info">
                        <h3 className="contact-method-title">Phone</h3>
                        <p className="contact-method-value">(+91) 9503370272</p>
                      </div>
                    </div>
                    
                    <div className="contact-method">
                      <div className="contact-method-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div className="contact-method-info">
                        <h3 className="contact-method-title">Location</h3>
                        <p className="contact-method-value">SR. No. 21, P-Building, Sangria Commercial,<br/>Shop No 218, 22, Mohammed Wadi,<br/>Pune, Maharashtra,<br/>Pincode - 411060</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-container">
                <div className="contact-form-header">
                  <h2 className="contact-form-title">Send Us a Message</h2>
                  <p className="contact-form-subtitle">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className={`form-input ${errors.firstName ? 'error' : ''}`}
                        {...register('firstName', { 
                          required: 'First name is required',
                          minLength: {
                            value: 2,
                            message: 'First name must be at least 2 characters'
                          }
                        })}
                        aria-invalid={errors.firstName ? 'true' : 'false'}
                      />
                      {errors.firstName && (
                        <span className="form-error" role="alert">
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className={`form-input ${errors.lastName ? 'error' : ''}`}
                        {...register('lastName', { 
                          required: 'Last name is required',
                          minLength: {
                            value: 2,
                            message: 'Last name must be at least 2 characters'
                          }
                        })}
                        aria-invalid={errors.lastName ? 'true' : 'false'}
                      />
                      {errors.lastName && (
                        <span className="form-error" role="alert">
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <span className="form-error" role="alert">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-input"
                      {...register('phone')}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters'
                        }
                      })}
                      aria-invalid={errors.message ? 'true' : 'false'}
                    />
                    {errors.message && (
                      <span className="form-error" role="alert">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="form-success" role="alert">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="form-error-message" role="alert">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="btn btn-primary btn-large form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="map-section section-sm bg-secondary">
          <div className="container">
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <h3 className="map-title">Find Us</h3>
                  <p className="map-description">
                    Visit our fitness studio located in the heart of Health City. 
                    We're easily accessible by public transportation and have ample parking available.
                  </p>
                  <p className="map-address">
                    123 Fitness Street, Health City, HC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
