/* eslint-disable no-irregular-whitespace */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import trainerImage from "../assets/trainer.png";
import Footer from '../components/HomePageComponent/Footer';
import Navbar from '../components/HomePageComponent/Navbar';


const trainers = Array(6).fill({
  name: "Reuben Etomet",
  experience: "9+ Years",
  sports: "BodyBuilding, Rugby",
  hobbies: "Training",
  skills:"Body Building, Competition Preparation, Stretching & Flexibility, Weight Gain, Weight Loss",
  bioTitle:
    "International Strength & Conditioning Coach | Contest Prep Specialist | Transformation Expert",
  biography:
    "With Over A Decade Of International Coaching Experience, Mustapha Has Become A Trusted Name In The World Of Elite Fitness, Specializing In Strength & Conditioning And Contest Preparation. From Competitive Athletes To High-Fashion Runway Models, Mustapha Brings A Results-Driven Approach Tailored To Diverse Performance And Aesthetic Goals.",
  image: trainerImage,
});

const TrainerPage = () => {
  const { id } = useParams();
  const initialTrainer = trainers[id] || trainers[0];
  const [selectedTrainer, setSelectedTrainer] = useState(initialTrainer);

  return (
    <>
        <Navbar />
      <section
        className="min-h-screen px-4 py-10 text-white"
        style={{
          background:
            "radial-gradient(59.08% 59.08% at 50% 40.92%, #424028 0%, #192136 100%)",
        }}
      >
        <h1 className="text-center text-4xl font-bold mb-10">TRAINER</h1>

        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {/* Left Info */}
          <div className="min-h-[300px] w-full rounded-2xl p-6 border border-white/20 backdrop-blur-sm bg-white/5 shadow-sm flex flex-col justify-between">
            <div className="space-y-4 text-sm leading-relaxed">
              <div className="flex justify-between border-b border-white/30 pb-1">
                <span className="text-white font-medium">Experience:</span>
                <span className="text-white/80">{selectedTrainer.experience}</span>
              </div>
              <div className="flex justify-between border-b border-white/30 pb-1">
                <span className="text-white font-medium">Sports:</span>
                <span className="text-white/80">{selectedTrainer.sports}</span>
              </div>
              <div className="flex justify-between border-b border-white/30 pb-1">
                <span className="text-white font-medium">Hobbies:</span>
                <span className="text-white/80">{selectedTrainer.hobbies}</span>
              </div>
              <div className="border-b flex border-white/30 pb-1">
                <span className="text-white font-medium mb-1">Skills:</span>
                <span className="text-white/80 grid grid-cols- gap-x-2 text-sm  ml-25">
                <span className="text-white/80">{selectedTrainer.skills}</span>
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="border-t border-white/30 pt-3 mt-4 flex justify-center gap-6 text-white/80 text-lg">
              <i className="fab fa-instagram hover:text-white transition cursor-pointer"></i>
              <i className="fab fa-facebook hover:text-white transition cursor-pointer"></i>
              <i className="fas fa-times hover:text-white transition cursor-pointer"></i>
            </div>
          </div>

          {/* Center Trainer */}
          <div className="flex flex-col items-center justify-start">
            <img
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
              className="w-[200px] h-[200px] object-cover"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedTrainer.name}</h2>
            <p className="text-sm text-white/70">PERSONAL TRAINER</p>
          </div>

          {/* Right Biography */}
          <div className="min-h-[300px] w-full rounded-2xl p-6 border border-white/20 backdrop-blur-sm bg-white/5 shadow-sm">
            <h3 className="text-lg font-bold mb-2 border-b border-white/30 pb-1">Biography</h3>
            <p className="text-sm font-semibold mb-2">{selectedTrainer.bioTitle}</p>
            <p className="text-sm text-white/80">{selectedTrainer.biography}</p>
          </div>
        </div>

        {/* Bottom Trainer Cards */}
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              onClick={() => setSelectedTrainer(trainer)}
              className="cursor-pointer rounded-2xl text-center bg-[#1b1c1f] p-4 shadow-md hover:scale-105 transition"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-[150px] object-contain rounded-xl"
              />
              <p className="mt-2 font-semibold text-white">{trainer.name}</p>
            </div>
          ))}
        </div>
      </section>
 <Navbar />
      <Footer />
    </>
  );
};

export default TrainerPage;
