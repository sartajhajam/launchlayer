import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/sartajhajam', '_blank');
  };

  return (
    <section className="min-h-[80vh] bg-[#0F0F11] flex items-center justify-center px-4 pt-16 pb-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 lg:mb-4 leading-tight tracking-tight">
          Build Smart.{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
            Launch Fast.
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          We build full-stack web and mobile apps in just 21 days — helping startups and solo founders launch MVPs fast, test early, and grow ahead. 
        </p>
        
        {/* Call to Action Button */}
        <button
          onClick={handleBookCall}
          className="group relative inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          Book Discovery Call
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        
        {/* Subtle accent elements */}
        <div className="mt-6 lg:mt-8 flex justify-center space-x-8 opacity-40">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;