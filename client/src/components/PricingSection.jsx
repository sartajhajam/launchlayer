import React, { useState } from 'react';
import { Calendar, ArrowRight, Check, Flame } from 'lucide-react';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro'); // Default to Pro plan

  const handleBookCall = () => {
    window.open('https://cal.com/sartajhajam', '_blank');
  };

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
    <section id="pricing" className="bg-[#EDF0F2] py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Pricing
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            We offer a range of pricing options to suit your needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-4 max-w-3xl mx-auto">
          
          {/* Left Card - MVP Experience CTA */}
          <div className="group relative bg-gray-900 rounded-xl p-5 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg">
            {/* Top Badge */}
            <div className="absolute -top-1.5 right-3">
              <div className="bg-green-500 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-lg">
                1 Slot Left
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">
                  Join MVP Experience
                </h3>
                <p className="text-gray-300 text-sm">
                  Don't Sleep on your Ideas, Build your MVP with us.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-1">
                <button
                  onClick={handleBookCall}
                  className="group/btn w-full bg-white hover:bg-gray-100 text-gray-900 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book a 15 Minute Call
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
                
                <p className="text-gray-400 text-xs mt-1.5 text-center">
                  Let's Discuss Your Idea and how we can help you
                </p>
              </div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Right Card - Dynamic Plan - Fixed Height */}
          <div className="group relative bg-gray-900 rounded-xl p-5 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg h-[280px] flex flex-col">
            {/* Plan Toggle Buttons */}
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={() => setSelectedPlan('standard')}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  selectedPlan === 'standard'
                    ? 'bg-yellow-500 text-gray-900 font-bold'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlan('pro')}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                  selectedPlan === 'pro'
                    ? 'bg-yellow-500 text-gray-900 font-bold'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {selectedPlan === 'pro' && <Flame className="w-2.5 h-2.5" />}
                Pro
                {selectedPlan !== 'pro' && <Flame className="w-2.5 h-2.5" />}
              </button>
            </div>

            {/* Payment Type */}
            <div className="mb-2">
              <p className="text-gray-400 text-xs font-medium">
                {currentPlan.type}
              </p>
            </div>

            {/* Price */}
            <div className="mb-3">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {currentPlan.price}
                </span>
              </div>
              <p className="text-gray-400 text-xs">
                {currentPlan.description}
              </p>
            </div>

            {/* Features List - Fixed Height Container */}
            <div className="flex-1 mb-3">
              <h4 className="text-white font-semibold text-sm mb-2">What's Included:</h4>
              
              <div className="space-y-1.5 h-[120px] overflow-hidden">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-3.5 h-3.5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2 h-2 text-white" />
                    </div>
                    <span className="text-gray-300 text-xs leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reserve Button - Fixed at Bottom */}
            <div className="flex justify-end mt-auto">
              <button 
                onClick={handleBookCall}
                className="group/btn bg-white hover:bg-gray-100 text-gray-900 px-4 py-1.5 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
              >
                Reserve
                <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Optional Bottom Text */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Questions about pricing? Let's discuss your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;