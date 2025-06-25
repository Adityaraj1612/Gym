import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1594737625785-c0a1fdd853f2?auto=format&fit=crop&w=1650&q=80')`, // placeholder image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase leading-tight">
          Unlock Your Inner Strength
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Train With Purpose. Sweat With Pride. Welcome To Brahmastra — Where Legends Train.
        </p>
        <a
          href="#contact"
          className="bg-yellow-300 hover:bg-yellow-200 text-black font-semibold px-6 py-3 rounded-md transition"
        >
          Explore Our GYM
        </a>
      </div>
    </section>
  );
};

export default Hero;
