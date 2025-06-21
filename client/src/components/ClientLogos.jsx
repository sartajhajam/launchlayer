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
    <section className="bg-[#0F0F11] py-3 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0F0F11] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0F0F11] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <div className="flex animate-scroll">
            {/* First Set of Logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6 md:mx-8"
              >
                <div className="group flex items-center justify-center h-8 md:h-10">
                  <span className="text-white/50 hover:text-white/80 font-medium text-sm md:text-base transition-colors duration-300 whitespace-nowrap">
                    {client}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 md:mx-8"
              >
                <div className="group flex items-center justify-center h-8 md:h-10">
                  <span className="text-white/50 hover:text-white/80 font-medium text-sm md:text-base transition-colors duration-300 whitespace-nowrap">
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
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;