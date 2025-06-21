import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyUs from './components/WhyUs';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <WhyUs />         
      <Testimonials />
      <PricingSection />
      <FooterCTA />
    </div>
  );
}

export default App;