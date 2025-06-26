/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import trainerImg from '../../assets/trainer.png';

const trainers = Array(6).fill({
  name: 'Reuben Etomet',
  title: 'PERSONAL TRAINER',
  image: trainerImg,
});

const Trainer = () => {
  const navigate = useNavigate();

  return (
    <section
      id="trainers"
      className="py-16 text-white text-center"
      style={{
        background: 'radial-gradient(44.41% 50% at 50% 50%, #5E5B30 0%, #12151D 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold italic mb-2">MEET OUR TRAINERS</h2>
        <p className="text-sm md:text-base mb-10 text-gray-300">
          Certified. Motivating. Results-Driven.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              onClick={() => navigate(`/trainer/${index}`)}
              className="cursor-pointer bg-[#1b1c1f] rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-auto object-contain mb-4"
              />
              <h3 className="text-lg font-bold">{trainer.name}</h3>
              <p className="text-sm text-gray-300">{trainer.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainer;
