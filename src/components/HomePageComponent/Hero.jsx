import React from 'react';
import heroimg from '../../assets/hero.png'; // ✅ adjust if your structure is different

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url("${heroimg}")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-60 z-0"></div>

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
  className="text-black font-semibold px-6 py-3 rounded-md transition"
  style={{ backgroundColor: '#D7FC00' }}
>
  Explore Our GYM
</a>

      </div>
    </section>
  );
};

export default Hero;
