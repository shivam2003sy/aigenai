// src/components/Feature.js
import React from 'react';

const Feature = ({ title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
