import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "How fast will I receive my requests?",
      answer: "I strive to deliver requests as quickly as possible, typically within a few business days after our Inital Disucssion and after recieving the downpayment I will start giving you updates on the progress of the project. But if you need it faster, you can always contact me and I will try to deliver it as soon as possible"
    },
    {
      question: "How does onboarding work?",
      answer: "Onboarding process is streamlined and user-friendly. First Step is doing a meeting to see If I can help you, then we start building the MVP together as soon as I get the first downpayment, We Will continue discussing and iterating over the MVP until we have reached your satisfaction point."
    },
    {
      question: "Who are the Developers?",
      answer: "There are no external Devlopers, I am the only one who will be communicating with you and doing all the work. We might sometime hire external designer's to help with designs But the development of project will be done by me, I will be solely accountable for the MVP"
    },
    {
      question: "If I want to add something new after the Initial Discussion?",
      answer: "The number of changes you can make depends on your subscription plan. We offer various tiers to suit different needs and volumes. If you want to add something new, you can do so but if it extends the timeline,you might have to pay more for the extra time. If you belive that you might need to add something new constantly, you might consider buying Pro Plan."
    },
    {
      question: "How do you handle larger requests?",
      answer: "For larger requests, I assess the scope and may break it down into smaller, manageable tasks. We'll communicate with you throughout the process to ensure your needs are met."
    },
    {
      question: "What if I don't like the work that is done?",
      answer: "I offer revisions to ensure your satisfaction. Moreover the continous Discussion and Iteration won't let you feel suddenly that you are not liking the work, Including you in every step of work will let us work more efficiently and avoud such situations. If you're not happy with the work, we'll work with you to make necessary adjustments."
    }
  ];

  return (
    <section id="faq" className="relative bg-[#0F0F11] py-6 lg:py-8 px-4 overflow-hidden">
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

      <div className="relative max-w-4xl mx-auto">
        {/* Left-aligned Header Section */}
        <div className="text-left mb-6 lg:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
            Doubts
          </h2>
          <p className="text-sm md:text-base text-gray-300 font-medium">
            We are here to help you with your doubts.
          </p>
        </div>

        {/* FAQ Accordion - Left Aligned */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border-b border-gray-800/30 last:border-b-0"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-start justify-between py-3 text-left transition-all duration-300 hover:text-blue-100 gap-3"
              >
                <h3 className="text-xs font-medium text-white leading-tight flex-1">
                  {faq.question}
                </h3>
                
                {/* Toggle Icon - Fixed Position */}
                <div className="flex-shrink-0 w-5 h-5 bg-gray-800/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 mt-0.5">
                  {openItems[index] ? (
                    <Minus className="w-3 h-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  ) : (
                    <Plus className="w-3 h-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems[index] 
                    ? 'max-h-96 opacity-100 pb-3' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pr-8">
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Decorative Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-600/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FAQSection;