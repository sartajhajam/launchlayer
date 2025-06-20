import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessTimeline from './components/ProcessTimeline';
import ClientLogos from './components/ClientLogos';

function App() {
  return (
    <div className="font-inter">
      <HeroSection />
      <ServicesSection />
      <ProcessTimeline />
      <ClientLogos />
    </div>
  );
}

export default App;