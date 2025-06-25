import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Trainers from './components/Trainers';
import MembershipPlans from './components/MembershipPlans';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Trainers />
      <MembershipPlans />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
