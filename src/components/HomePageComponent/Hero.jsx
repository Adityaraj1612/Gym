/* eslint-disable no-irregular-whitespace */
import React from 'react';
import heroimg from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden">
     
      {/* Responsive Image */}
      <img
        src={heroimg}
        alt="Hero"
        className="w-full h-100 object-cover md:h-screen"
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0  bg-opacity-50" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-6xl font-extrabold uppercase leading-tight mb-4">
            Unlock Your Inner Strength
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Train With Purpose. Sweat With Pride. Welcome To Brahmastra — Where Legends Train.
          </p>
          <a
            href="#contact"
            className="text-black font-semibold px-6 py-3 rounded-md transition"
            style={{ backgroundColor: '#D7FC00' }}
          >
            Explore Our GYM
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
