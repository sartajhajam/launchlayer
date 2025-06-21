import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyUs from './components/WhyUs';
import ProcessTimeline from './components/ProcessTimeline';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <HeroSection />
      <WhyUs />
      
      <ProcessTimeline />
      <ClientLogos />
      <Testimonials />
      <FooterCTA />
    </div>
  );
}

export default App;