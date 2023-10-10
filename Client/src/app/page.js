import Features from '@/components/features/Features';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar';
import Hero from '@/components/hero/Hero';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import React from 'react';

const Home = () => {
  return (
    <>
      <header className='bg-center bg-no-repeat bg-cover bg-primary '>
        <Navbar />
        <Hero />
      </header>
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Home;
