import React, { useState } from 'react';
import { Calendar, ArrowRight, X, Check, Flame } from 'lucide-react';

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro'); // Default to Pro plan

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Plan data
  const planData = {
    standard: {
      type: "One Time Payment",
      price: "$1997",
      description: "One time payment for MVP Development",
      features: [
        "MVP Development in 1 Month",
        "Founder Led Development", 
        "Free Maintenance for Next Month",
        "Scalable Tech Stack Nextjs, Supabase",
        "Regular Updates"
      ]
    },
    pro: {
      type: "Recurring Payment",
      price: "$2997",
      description: "Recurring Payment for MVP Development",
      features: [
        "Everything in Standard +",
        "Min 90 Hours of Development time per month",
        "Time Flexibility",
        "Continuous Maintenance and Updates",
        "Quick Emergency Support",
        "Marketing Support"
      ]
    }
  };

  const currentPlan = planData[selectedPlan];

  return (
    <>
      <section id="pricing" className="bg-[#EDF0F2] py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
              Pricing
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a range of pricing options to suit your needs.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Left Card - MVP Experience CTA */}
            <div className="group relative bg-gray-900 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
              {/* Top Badge */}
              <div className="absolute -top-2 right-4">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  1 Slot Left
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Join MVP Experience
                  </h3>
                  <p className="text-gray-300 text-base">
                    Don't Sleep on your Ideas, Build your MVP with us.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={openModal}
                    className="group/btn w-full bg-white hover:bg-gray-100 text-gray-900 px-5 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a 15 Minute Call
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  
                  <p className="text-gray-400 text-xs mt-2 text-center">
                    Let's Discuss Your Idea and how we can help you
                  </p>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Right Card - Dynamic Plan */}
            <div className="group relative bg-gray-900 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
              {/* Plan Toggle Buttons */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setSelectedPlan('standard')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    selectedPlan === 'standard'
                      ? 'bg-yellow-500 text-gray-900 font-bold'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Standard
                </button>
                <button
                  onClick={() => setSelectedPlan('pro')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1 ${
                    selectedPlan === 'pro'
                      ? 'bg-yellow-500 text-gray-900 font-bold'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {selectedPlan === 'pro' && <Flame className="w-3 h-3" />}
                  Pro
                  {selectedPlan !== 'pro' && <Flame className="w-3 h-3" />}
                </button>
              </div>

              {/* Payment Type */}
              <div className="mb-3">
                <p className="text-gray-400 text-sm font-medium">
                  {currentPlan.type}
                </p>
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {currentPlan.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  {currentPlan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2 mb-5">
                <h4 className="text-white font-semibold text-base mb-3">What's Included:</h4>
                
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Reserve Button */}
              <div className="flex justify-end">
                <button className="group/btn bg-white hover:bg-gray-100 text-gray-900 px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                  Reserve
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Optional Bottom Text */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-base">
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