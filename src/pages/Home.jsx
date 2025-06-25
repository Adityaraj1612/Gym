import React from 'react';
import Navbar from '../components/HomePageComponent/Navbar';
import Hero from '../components/HomePageComponent/Hero';
import Facilities from '../components/HomePageComponent/Facilities';
import Trainers from '../components/HomePageComponent/Trainers';
import MembershipPlans from '../components/HomePageComponent/MembershipPlans';
import Testimonials from '../components/HomePageComponent/Testimonials';
import Contact from '../components/HomePageComponent/Contact';
import Footer from '../components/HomePageComponent/Footer';
import About from '../components/HomePageComponent/About';
function Home() {
  return (
    <div className=" text-white">
      <Navbar />
      <Hero />
      <About/>
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