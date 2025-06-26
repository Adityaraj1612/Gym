/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 shadow-md text-white bg-[rgba(24,31,48,0.1)] backdrop-blur-[9px]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold">Brahmastra</div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 font-medium text-lg">
          <li><a href="#home" className="hover:text-yellow-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
          <li><a href="#facilities" className="hover:text-yellow-300 transition">Facilities</a></li>
          
          {/* ✅ Trainer detail page route */}
          <li>
            <Link to="/trainer/0" className="hover:text-yellow-300 transition">
              Trainers
            </Link>
          </li>

          <li><a href="#membership" className="hover:text-yellow-300 transition">Membership Plans</a></li>
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="text-black font-semibold px-6 py-3 rounded-md transition"
          style={{ backgroundColor: '#D7FC00' }}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
