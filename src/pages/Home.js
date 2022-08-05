import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Hire from '../components/Hire';
import Impact from '../components/Impact';
import Navbar from '../components/Navbar';
import Talents from '../components/Talents';

const Home = () => {
  return (
    <>
     <Navbar />
      <Hero />
      <Impact />
      <Talents />
      <Hire />
      <Footer />
    </>
  )
}

export default Home