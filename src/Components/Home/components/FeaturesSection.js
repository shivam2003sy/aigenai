// src/components/FeaturesSection.js
import React from 'react';
import Feature from './Feature';

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature title="Experience Sharing" description="Submit placement experiences anonymously. Categorized, tagged, and indexed for easy retrieval." />
          <Feature title="Skill Enhancement" description="Contribute to the question bank, practice aptitude and technical questions, and track your progress." />
          <Feature title="Senior Interaction" description="Connect with seniors through messaging or forums. Attend webinars for direct interaction." />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
