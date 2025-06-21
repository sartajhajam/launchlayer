import React, { useState } from "react";
import { X, Calendar, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="min-h-screen bg-[#0F0F11] flex items-center justify-center px-4 pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-4 lg:mb-6 leading-tight tracking-tight">
            Build Smart.{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
              Launch Fast.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            We build full-stack web and mobile apps in just 21 days — helping
            startups and solo founders launch MVPs fast, test early, and grow
            ahead.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={openModal}
            className="group relative inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-semibold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <Calendar className="w-4 h-4" />
            Book Discovery Call
            <ArrowRight className="w-4 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Subtle accent elements */}
          <div className="mt-8 lg:mt-10 flex justify-center space-x-8 opacity-40">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </section>

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

export default HeroSection;
