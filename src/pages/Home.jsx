import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Facilities from '../components/Facilities';
import Trainers from '../components/Trainers';
import MembershipPlans from '../components/MembershipPlans';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
function Home() {
  return (
    <div className=" text-white">
      <Navbar />
      <Hero />
      <Facilities />
      <Trainers />
      <MembershipPlans />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;