// src/components/CTASection.js
import React from 'react';

import { Link } from 'react-router-dom';
const CTASection = () => {
  return (
    <section className="bg-blue-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Excel in Placements?</h2>
        <p className="text-lg mb-8">Join our platform today and take the first step towards a successful career.</p>
        {/* Link Button to /login */}
        <Link to="/login" className="btn btn-primary">Get Started</Link>
      </div>
    </section>
  );
};

export default CTASection;
