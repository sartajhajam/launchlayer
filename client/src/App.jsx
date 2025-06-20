import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessTimeline from './components/ProcessTimeline';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="font-inter">
      <HeroSection />
      <ServicesSection />
      <ProcessTimeline />
      <ClientLogos />
      <Testimonials />
      <FooterCTA />
    </div>
  );
}

export default App;