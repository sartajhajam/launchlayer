import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyUs from './components/WhyUs';
import ClientLogos from './components/ClientLogos';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <WhyUs />         
      <PricingSection />
      <Testimonials />
      <FaqSection/>
      <FooterCTA />
    </div>
  );
}

export default App;