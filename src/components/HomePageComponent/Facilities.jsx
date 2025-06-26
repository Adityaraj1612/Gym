/* eslint-disable no-irregular-whitespace */
import React from "react";
import zumbaYogaImage from "../../assets/zumbayoga-image.png";
import funcZoneImage from "../../assets/funcTZone-image.png";
import advCardioImage from "../../assets/advCardio-image.png";
import hittImage from "../../assets/HITT-image.png";
import boxingImage from "../../assets/boxin-image.png";

const Facilities = () => (
  <section
    id="facilities"
    className="w-full py-16"
    style={{
      background: "linear-gradient(127.06deg, #33401D 3.98%, #181F30 97.69%)",
    }}
  >
    {/* Main Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
      FACILITIES SECTION
    </h2>
    {/* Subheading */}
    <p className="text-center text-white/80 mt-2 mb-12">
      Modern, hygienic, and built for performance
    </p>

    <div className="max-w-[1280px] mx-auto grid grid-cols-4 grid-rows-4 gap-6">
      {/* Zumba & Yoga Studio */}
      <a
        href="/zumba"
        className="relative rounded-[24px] overflow-hidden row-start-1 col-start-1 col-span-2 row-span-1"
      >
        <img
          src={zumbaYogaImage}
          alt="Zumba & Yoga Studio"
          className="w-full h-[291.75px] object-cover rounded-[24px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[24px]" />
        <div className="absolute bottom-6 left-6">
          <h3
            className="text-white italic uppercase"
            style={{
              fontFamily: 'SF Pro',
              fontWeight: 590,
              fontSize: '40px',
              lineHeight: '48px',
            }}
          >
            ZUMBA & YOGA STUDIO
          </h3>
        </div>
      </a>

      {/* Functional Training Zone */}
      <a
        href="/functional-zone"
        className="relative rounded-[24px] overflow-hidden row-start-1 col-start-3 col-span-2 row-span-2"
      >
        <img
          src={funcZoneImage}
          alt="Functional Training Zone"
          className="w-full h-[607.5px] object-cover rounded-[24px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[24px]" />
        <div className="absolute bottom-6 left-6">
          <h3
            className="text-white italic uppercase"
            style={{
              fontFamily: 'SF Pro',
              fontWeight: 590,
              fontSize: '40px',
              lineHeight: '48px',
            }}
          >
            FUNCTIONAL TRAINING ZONE
          </h3>
        </div>
      </a>

      {/* Advanced Cardio & Strength Equipment */}
      <a
        href="/advanced-cardio"
        className="relative rounded-[24px] overflow-hidden row-start-2 col-start-1 col-span-2 row-span-2"
      >
        <img
          src={advCardioImage}
          alt="Advanced Cardio & Strength Equipment"
          className="w-full h-[607.5px] object-cover rounded-[24px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[24px]" />
        <div className="absolute bottom-6 left-6">
          <h3
            className="text-white italic uppercase"
            style={{
              fontFamily: 'SF Pro',
              fontWeight: 590,
              fontSize: '40px',
              lineHeight: '48px',
            }}
          >
            ADVANCED CARDIO & STRENGTH EQUIPMENT
          </h3>
        </div>
      </a>

      {/* CrossFit & HIIT Arena */}
      <a
        href="/crossfit-hiit"
        className="relative rounded-[24px] overflow-hidden row-start-3 col-start-3 col-span-2 row-span-2"
      >
        <img
          src={hittImage}
          alt="CrossFit & HIIT Arena"
          className="w-full h-[607.5px] object-cover rounded-[24px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[24px]" />
        <div className="absolute bottom-6 left-6">
          <h3
            className="text-white italic uppercase"
            style={{
              fontFamily: 'SF Pro',
              fontWeight: 590,
              fontSize: '40px',
              lineHeight: '48px',
            }}
          >
            CROSSFIT & HIIT ARENA
          </h3>
        </div>
      </a>

      {/* Boxing */}
      <a
        href="/boxing"
        className="relative rounded-[24px] overflow-hidden row-start-4 col-start-1 col-span-2 row-span-1"
      >
        <img
          src={boxingImage}
          alt="Boxing"
          className="w-full h-[291.75px] object-cover rounded-[24px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[24px]" />
        <div className="absolute bottom-6 left-6">
          <h3
            className="text-white italic uppercase"
            style={{
              fontFamily: 'SF Pro',
              fontWeight: 590,
              fontSize: '40px',
              lineHeight: '48px',
            }}
          >
            BOXING
          </h3>
        </div>
      </a>
    </div>
  </section>
);

export default Facilities;
