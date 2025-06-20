import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Founder, TechFlow",
      quote: "They transformed our idea into a fully functional MVP in just 6 weeks. The attention to detail and speed of delivery exceeded all expectations.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      title: "CEO, DataSync",
      quote: "Working with this team was a game-changer. They understood our vision immediately and delivered a product that our users absolutely love.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      title: "Co-founder, GreenSpace",
      quote: "The perfect balance of technical expertise and creative design. They helped us launch faster than we ever thought possible.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="bg-[#0F0F11] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <Quote className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-700 group-hover:border-blue-500/50 transition-all duration-300"
                  />
                  {/* Subtle glow around image */}
                  <div className="absolute inset-0 w-14 h-14 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>

                {/* Name and Title */}
                <div>
                  <h4 className="text-white font-semibold text-lg group-hover:text-blue-100 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Soft Shadow */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Ready to join our success stories?
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;