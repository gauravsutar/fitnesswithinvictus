import React from 'react';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  activeAccordion: number | null;
  setActiveAccordion: (id: number | null) => void;
}

const FAQ: React.FC<FAQProps> = ({ faqs, activeAccordion, setActiveAccordion }) => {
  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq) => (
        <div key={faq.id} className="accordion-item">
          <button
            className={`accordion-header ${activeAccordion === faq.id ? 'active' : ''}`}
            onClick={() => toggleAccordion(faq.id)}
            aria-expanded={activeAccordion === faq.id}
            aria-controls={`faq-content-${faq.id}`}
          >
            <h3 className="accordion-title">{faq.question}</h3>
            <svg 
              className={`accordion-icon ${activeAccordion === faq.id ? 'rotated' : ''}`}
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
          <div 
            id={`faq-content-${faq.id}`}
            className={`accordion-content ${activeAccordion === faq.id ? 'active' : ''}`}
            aria-hidden={activeAccordion !== faq.id}
          >
            <p className="accordion-answer">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
