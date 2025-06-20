import React from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      caption: "Understanding your vision and requirements"
    },
    {
      icon: Palette,
      title: "Design",
      caption: "Creating intuitive user experiences"
    },
    {
      icon: Code,
      title: "Build",
      caption: "Developing your MVP with precision"
    },
    {
      icon: Rocket,
      title: "Launch",
      caption: "Deploying and scaling your product"
    }
  ];

  return (
    <section className="bg-[#0F0F11] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/30 via-blue-500/50 to-blue-600/30 hidden md:block"></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-6">
                    {/* Background Circle */}
                    <div className="w-16 h-16 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-300 relative z-10">
                      <IconComponent className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-48 group-hover:text-gray-300 transition-colors duration-300">
                      {step.caption}
                    </p>
                  </div>

                  {/* Mobile Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-blue-600/30 mt-8"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ProcessTimeline;