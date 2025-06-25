/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // required for arrows

import { ChevronLeft, ChevronRight } from 'lucide-react'; // optional icon lib
import userImg from '../../assets/testimonial.png';

const testimonials = [
  {
    name: 'Anjali Mehta',
    role: 'Student',
    quote:
      '“Brahmastra The Gym is the best thing that happened to my health. The trainers are friendly yet push you hard enough to grow. The atmosphere is always motivating, and the results speak for themselves!”',
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="pt-28 pb-20 text-white"
      style={{ background: 'rgba(17, 21, 29, 1)' }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl italic font-bold mb-2">TESTIMONIALS</h2>
        <p className="text-gray-400 mb-10 text-sm md:text-base">What Our Members Say</p>

        <div className="relative">
          {/* Left Arrow */}
          <div className="swiper-button-prev z-10 absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-yellow-300 cursor-pointer">
            <ChevronLeft size={28} />
          </div>

          {/* Right Arrow */}
          <div className="swiper-button-next z-10 absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-yellow-300 cursor-pointer">
            <ChevronRight size={28} />
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            speed={2300}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            autoplay={{
              delay: 3,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {Array(6)
              .fill(testimonials[0])
              .map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="relative bg-[#11151D] pt-20 pb-6 px-6 rounded-xl border border-white/20 h-full">
                    <div className="absolute top-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <img
                        src={userImg}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full border-4 border-[#11151D] object-cover bg-white"
                      />
                    </div>

                    <div className="mt-12 text-center">
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400 mb-4">{testimonial.role}</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{testimonial.quote}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
