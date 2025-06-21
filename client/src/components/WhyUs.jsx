import React, { useState } from 'react';
import { Calendar, ArrowRight, X, BarChart3, Zap, Code2, FileText } from 'lucide-react';

const WhyUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    <>
      <section id="why-us" className="relative bg-[#0F0F11] py-12 lg:py-16 px-4 overflow-hidden">
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
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Move at{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                Startup Speed
              </span>
            </h2>
            
            <h3 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
              We move fast, build lean and Validate.
            </h3>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Quote Section */}
            <div className="space-y-6">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 lg:p-8">
                <blockquote className="text-base md:text-lg text-gray-300 leading-relaxed font-light italic mb-6">
                  "I've seen too many founders burn months (and way too much money) just trying to get an MVP off the ground. We don't do that here. We move fast, build lean, and deliver a working MVP in under a month so you can start validating, not waiting."
                </blockquote>

                {/* Author Signature */}
                <div className="space-y-1">
                  <p className="text-gray-400 text-sm font-medium">
                    ~ Sartaj Hajam
                  </p>
                  <p className="text-gray-500 text-xs">
                    Founding Engineer, LaunchLayer 
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={openModal}
                  className="group relative inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-white/10"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Call
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-[#1a1a1a] backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 lg:p-5 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:bg-[#1f1f1f]"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-white leading-tight group-hover:text-blue-100 transition-colors duration-300">
                        {feature.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed pl-11 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default WhyUs;