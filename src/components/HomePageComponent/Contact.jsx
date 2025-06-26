import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#11151D] text-white py-16 px-4 sm:px-8 md:px-20">
      
      <h2 className="text-center text-3xl sm:text-5xl font-semibold italic mb-4">
        READY TO TRANSFORM?
      </h2>
      <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12 text-sm sm:text-base">
        Your Fitness Journey Begins Now. Get Stronger, Healthier, And More Confident With Brahmastra The Gym.
      </p>

      {/* Contact Details and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div>
          <h3 className="text-2xl font-semibold mb-6">Our Contact Detail</h3>
          <div className="space-y-6">
            {/* Phone */}
      <div className="flex items-start gap-[10px]">
        <img
          src="/icons/phone.png"
          alt="Phone"
          className="w-[48px] h-[48px] rounded-[8px] bg-[#252c3a]"
        />
        <div>
          <p className="text-sm text-[#C7D300]">Call Us</p>
          <p className="text-lg font-medium">+91 79064 10142</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-[10px]">
        <img
          src="/icons/email.png"
          alt="Email"
          className="w-[48px] h-[48px] rounded-[8px]  bg-[#252c3a]"
        />
        <div>
          <p className="text-sm text-[#C7D300]">Email Us</p>
          <p className="text-lg font-medium">Brahmastrathegym@gmail.com</p>
        </div>
      </div>

      {/* Hours */}
      <div className="flex items-start gap-[10px]">
        <img
          src="/icons/clock.png"
          alt="Working Hours"
          className="w-[48px] h-[48px] rounded-[8px]  bg-[#252c3a]"
        />
        <div>
          <p className="text-sm text-[#C7D300]">Working Hours</p>
          <p className="text-lg font-medium">Mon-Sat 09:00AM - 10:00PM</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-[10px]">
        <img
          src="/icons/location.png"
          alt="Location"
          className="w-[48px] h-[48px] rounded-[8px]  bg-[#252c3a]"
        />
        <div>
          <p className="text-sm text-[#C7D300]">Location</p>
          <p className="text-lg font-medium">
            153-C Rajpur Road, opposite Pacific Mall, Dehra Dun, India 248001
          </p>
        </div>
      </div>
    </div>

          {/* Map */}
          <div className="mt-8">
            <iframe
              title="gym-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.4901894623163!2d78.0706249!3d30.365435599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7d4decfd45d%3A0xcd79ff5281222c6b!2sBrahmastra%20The%20Gym!5e0!3m2!1sen!2sin!4v1750930379399!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-[#000000] rounded-xl p-6 sm:p-8 border border-gray-700 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-[#C7D300]">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 bg-[#333333] text-white rounded outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
            <div>
              <label className="block text-sm text-[#C7D300]">Contact</label>
              <input
                type="text"
                placeholder="Enter your contact number"
                className="w-full mt-1 px-4 py-2 bg-[#333333] text-white rounded outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
            <div>
              <label className="block text-sm text-[#C7D300]">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 bg-[#333333] text-white rounded outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
            <div>
              <label className="block text-sm text-[#C7D300]">Subject</label>
              <input
                type="text"
                placeholder="Enter subject eg: Feedback, Query, etc."
                className="w-full mt-1 px-4 py-2 bg-[#333333] text-white rounded outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
            <div>
              <label className="block text-sm text-[#C7D300]">Message</label>
              <textarea
                rows="3"
                placeholder="Enter your message"
                className="w-full mt-1 px-4 py-2 bg-[#333333] text-white rounded outline-none focus:ring-2 focus:ring-lime-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-lime-400 text-black font-bold py-2 px-6 rounded hover:bg-[#C0FF01] transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

