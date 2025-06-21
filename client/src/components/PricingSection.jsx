import React, { useState } from 'react';
import { Calendar, ArrowRight, X, Check, Flame } from 'lucide-react';

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="pricing" className="bg-[#EDF0F2] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Pricing
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a range of pricing options to suit your needs.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Left Card - MVP Experience CTA */}
            <div className="group relative bg-gray-900 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl">
              {/* Top Badge */}
              <div className="absolute -top-3 right-6">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  1 Slot Left
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Join MVP Experience
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Don't Sleep on your Ideas, Build your MVP with us.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={openModal}
                    className="group/btn w-full bg-white hover:bg-gray-100 text-gray-900 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a 15 Minute Call
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  
                  <p className="text-gray-400 text-sm mt-3 text-center">
                    Let's Discuss Your Idea and how we can help you
                  </p>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Right Card - Pro Plan */}
            <div className="group relative bg-gray-900 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl">
              {/* Plan Tags */}
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                  Standard
                </span>
                <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Flame className="w-4 h-4" />
                  Pro
                </span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">$2997</span>
                </div>
                <p className="text-gray-400 text-base">
                  Recurring Payment for MVP Development
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <h4 className="text-white font-semibold text-lg mb-4">What's Included:</h4>
                
                {[
                  "Everything in Standard +",
                  "Min 90 Hours of Development time per month",
                  "Time Flexibility",
                  "Continuous Maintenance and Updates",
                  "Quick Emergency Support",
                  "Marketing Support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Reserve Button */}
              <div className="flex justify-end">
                <button className="group/btn bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                  Reserve
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Optional Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              Questions about pricing? Let's discuss your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Cal.com Modal */}
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
            
            {/* Cal.com Iframe */}
            <iframe
              src="https://cal.com/your-username/15min"
              className="w-full h-full border-0"
              title="Book 15 Minute Call"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingSection;