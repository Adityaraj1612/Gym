import React from "react";
import gymImage from "../../assets/about-image.png";

const About = () => {
  return (
    <section
      id='about'
      className="w-full py-16 px-6 md:px-20"
      style={{
        background: "linear-gradient(to top right, #323F1D 13%, #181F30 20%, #181F30 100%)",
      }}      
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */} 
        <div className="flex-1 text-white">
          <span className="bg-[#EDDB1C] text-black text-sm px-4 py-1 rounded-md font-semibold">
            ABOUT US
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
            BUILT FOR EVERY BODY
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-lg">
            Brahmastra The Gym isn’t just a fitness center — it’s a lifestyle
            hub for every age, every goal, and every strength level. Whether
            you’re stepping into a gym for the first time or pushing your
            limits as an athlete, our community and coaches are here to support
            your journey.
          </p>

          <button className="mt-8 border border-[#FCF910] text-yellow-400 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
            READ MORE
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={gymImage}
            alt="Training Ground"
            className="w-full rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
