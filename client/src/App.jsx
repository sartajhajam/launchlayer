import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessTimeline from './components/ProcessTimeline';

function App() {
  return (
    <div className="font-inter">
      <HeroSection />
      <ServicesSection />
      <ProcessTimeline/>
    </div>
  );
}

export default App;