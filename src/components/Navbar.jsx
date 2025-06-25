import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Brahmastra</div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 font-medium text-sm">
          <li><a href="#home" className="hover:text-yellow-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
          <li><a href="#facilities" className="hover:text-yellow-300 transition">Facilities</a></li>
          <li><a href="#trainers" className="hover:text-yellow-300 transition">Trainers</a></li>
          <li><a href="#membership" className="hover:text-yellow-300 transition">Membership Plans</a></li>
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-yellow-300 hover:bg-yellow-200 text-black font-semibold px-4 py-2 rounded-md transition"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
