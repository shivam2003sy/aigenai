// src/App.js
import React from 'react';
import { Button } from 'daisyui';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="
    // background color
    bg-neutral
    ">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;