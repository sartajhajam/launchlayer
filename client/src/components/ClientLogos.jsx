import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "Stripe",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&crop=center"
    },
    {
      name: "Shopify",
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=200&h=80&fit=crop&crop=center"
    },
    {
      name: "Notion",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&crop=center"
    },
    {
      name: "Discord",
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=200&h=80&fit=crop&crop=center"
    },
    {
      name: "Figma",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&crop=center"
    },
    {
      name: "Linear",
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=200&h=80&fit=crop&crop=center"
    }
  ];

  return (
    <section className="bg-[#0F0F11] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by fast-moving startups
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[140px] h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
              {/* Logo Container */}
              <div className="relative w-full h-full flex items-center justify-center bg-white/5 rounded-lg border border-gray-800/50 group-hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm">
                {/* Company Name as Logo Placeholder */}
                <div className="text-white/80 font-semibold text-lg group-hover:text-blue-100 transition-colors duration-300 filter grayscale group-hover:grayscale-0">
                  {client.name}
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Hover Shadow */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Optional Subtitle */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join the growing community of successful startups who chose us to bring their ideas to life
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;