import React from 'react';
import { Calendar, ArrowRight, BarChart3, Zap, Code2, FileText } from 'lucide-react';

const WhyUs = () => {
  const handleBookCall = () => {
    window.open('https://cal.com/sartajhajam', '_blank');
  };

  const features = [
    {
      icon: BarChart3,
      title: "Core Features & Market Validation",
      description: "We focus on building Core Features and getting started with Market Validation, then iterate and build over user feedback to create scalable products."
    },
    {
      icon: Zap,
      title: "From Idea to MVP – Fast & Scalable",
      description: "Turn your concepts into functional MVPs, ensuring market validation and seamless scalability for rapid growth."
    },
    {
      icon: Code2,
      title: "Modern Technology Stack",
      description: "Leverage the best modern technologies like Next.js, Tailwind CSS, Shadcn UI, and Postgres for high-performance development."
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      description: "Proper documentation ensures project scalability and smooth developer collaboration. We provide clear API docs, tech stack guides, and ERDs."
    }
  ];

  return (
    <section id="why-us" className="relative bg-[#0F0F11] py-6 lg:py-8 px-4 overflow-hidden">
      {/* Subtle Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/50 to-transparent"></div>
      
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Centered Header Section */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
            Move at{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
              Startup Speed
            </span>
          </h2>
          
          <h3 className="text-base md:text-lg lg:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            We move fast, build lean and Validate.
          </h3>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left Column - Quote Section */}
          <div className="flex flex-col items-center justify-center space-y-4 h-full">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 lg:p-5 max-w-md">
              <blockquote className="text-sm md:text-base text-gray-300 leading-relaxed font-light italic mb-2 mt-2">
                "I've seen too many founders burn months (and way too much money) just trying to get an MVP off the ground. We don't do that here. We move fast, build lean, and deliver a working MVP in under a month so you can start validating, not waiting."
              </blockquote>

              {/* Author Signature */}
              <div className="space-y-1">
                <p className="text-gray-400 text-xs font-medium">
                  ~ Sartaj Hajam
                </p>
                <p className="text-gray-500 text-xs">
                  Founding Engineer, LaunchLayer
                </p>
              </div>
            </div>

            {/* CTA Button - Right Aligned */}
            <div className="w-full max-w-md flex justify-end">
              <button
                onClick={handleBookCall}
                className="group relative inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/10 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Call
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-2">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-[#1a1a1a] backdrop-blur-sm border border-gray-800/50 rounded-lg p-3 transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 hover:bg-[#1f1f1f]"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-2.5 mb-1.5">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-md flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300 flex-shrink-0">
                      <IconComponent className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    <h4 className="text-sm font-semibold text-white leading-tight group-hover:text-blue-100 transition-colors duration-300">
                      {feature.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed pl-9 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-600/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default WhyUs;