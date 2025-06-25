import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F1A] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Brahmastra</h2>
          <p className="text-sm text-gray-400">
            Dehradun biggest and most trusted fitness center,<br />
            helping people of all ages unlock their true strength.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#D7FC00] font-semibold mb-4">QUICK LINK</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#facilities" className="hover:text-white transition">Facilities</a></li>
            <li><a href="#trainers" className="hover:text-white transition">Trainer</a></li>
            <li><a href="#membership" className="hover:text-white transition">Plans</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-[#D7FC00] font-semibold mb-4">SOCIAL LINK</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition">Pinterest</a></li>
            <li><a href="#" className="hover:text-white transition">X</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-[#D7FC00] font-semibold mb-4">LEGAL</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
