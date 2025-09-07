import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import ProgramHighlights from '../components/sections/ProgramHighlights';
import Transformations from '../components/sections/Transformations';
import OnTheGo from '../components/sections/OnTheGo';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Fitness with Invictus - Transform Your Body</title>
        <meta name="description" content="Transform your body with professional fitness training, video courses, and personalized coaching. Join thousands of successful transformations with Fitness with Invictus." />
        <meta name="keywords" content="fitness training, personal trainer, workout videos, fitness transformation, health coaching" />
        <link rel="canonical" href="https://fitnesswithinvictus.com/" />
      </Helmet>

      <div className="home-page">
        {/* Hero Section */}
        <Hero />

        {/* Program Highlights Section */}
        <ProgramHighlights />

        {/* Transformations Section */}
        <Transformations />

        {/* On The Go Section */}
        <OnTheGo />
      </div>
    </>
  );
};

export default Home;
