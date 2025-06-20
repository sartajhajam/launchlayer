import React, { useState } from 'react';
import { Calendar, ArrowRight, Linkedin, Twitter, X } from 'lucide-react';

const FooterCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <footer className="bg-[#0F0F11] py-20 px-4 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
            Let's Build Your MVP —{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
              Together.
            </span>
          </h2>
          
          {/* Supporting Text */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to turn your idea into reality? Let's discuss your project and create something amazing.
          </p>
          
          {/* CTA Button */}
          <button
            onClick={openModal}
            className="group relative inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-semibold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 mb-16"
          >
            <Calendar className="w-6 h-6" />
            Book Discovery Call
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm">
              © 2025 MVP Launch Platform. Built with passion for innovation.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-8 opacity-30">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 h-[80vh] max-h-[800px] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Calendly Iframe */}
            <iframe
              src="https://calendly.com/your-username/discovery-call"
              className="w-full h-full border-0"
              title="Book Discovery Call"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterCTA;