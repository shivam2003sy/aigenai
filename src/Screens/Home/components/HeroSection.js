// src/components/HeroSection.js
import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="bg-blue-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Unlock Your Placement Success
        </h1>
        <p className="text-lg mb-8">
          A one-stop solution for placement experiences, skill enhancement, and
          mentorship.
        </p>

        <Link
          to="/login"
          className="
        btn btn-primary
        // button border radius
        rounded-lg
        // button shadow
        shadow-lg
        // button hover effects
        hover:shadow-xl
        hover:bg-blue-700
        hover:text-white
        hover:border-transparent
        // button transition
        transition-all
        duration-200
        ease-in-out

        

        "
        >
          Get Started
        </Link>
        {/* Nav <Link >  for Try Out Our Interviwing platform */}
      </div>
      <div
        className="
      flex
      justify-center
      items-center
      mt-8
      "
      >
        <Link to="/platform" className="btn btn-secondary glass ">
          Try Out Our Interviwing platform
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
