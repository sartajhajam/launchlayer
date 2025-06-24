import React from 'react';
import { Calendar, ArrowRight, Linkedin, Twitter } from 'lucide-react';

const FooterCTA = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/sartajhajam', '_blank');
  };

  return (
    <footer className="bg-[#0F0F11] py-8 px-4 border-t border-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
          Let's Build Your MVP —{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
            Together.
          </span>
        </h2>
        
        {/* Supporting Text */}
        <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed font-light">
          Ready to turn your idea into reality? Let's discuss your project and create something amazing.
        </p>
        
        {/* CTA Button */}
        <button
          onClick={handleBookCall}
          className="group relative inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 mb-6 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          Book Discovery Call
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-8 h-8 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-8 h-8 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <Twitter className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 border-t border-gray-800/50">
          <p className="text-gray-500 text-xs">
            © 2025 MVP LaunchLayer Platform. Built with passion for innovation.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-4 flex justify-center space-x-4 opacity-30">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;