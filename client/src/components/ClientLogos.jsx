import React from 'react';

const ClientLogos = () => {
  const clients = [
    "Norric",
    "Medconnect", 
    "Jobby",
    "Artise",
    "TechFlow",
    "DataSync",
    "GreenSpace",
    "BuildFast"
  ];

  return (
    <section className="bg-[#0F0F11] py-6 px-4 border-b border-gray-800/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Optional Section Label */}
        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
            Trusted by fast-moving startups
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F0F11] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F0F11] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <div className="flex animate-scroll">
            {/* First Set of Logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16"
              >
                <div className="group flex items-center justify-center h-12 md:h-14">
                  <span className="text-white/70 hover:text-white font-medium text-lg md:text-xl lg:text-2xl transition-colors duration-300 whitespace-nowrap">
                    {client}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16"
              >
                <div className="group flex items-center justify-center h-12 md:h-14">
                  <span className="text-white/70 hover:text-white font-medium text-lg md:text-xl lg:text-2xl transition-colors duration-300 whitespace-nowrap">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;