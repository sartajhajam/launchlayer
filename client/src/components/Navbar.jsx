import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Why Us?', href: '#why-us' },
    { name: 'Our Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: "FAQ's", href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0F0F11]/95 backdrop-blur-md border-b border-gray-800/50' : 'bg-[#0F0F11]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            {/* Custom SVG Logo */}
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            
            {/* Brand Name */}
            <span className="text-white font-bold text-xl lg:text-2xl tracking-tight">
              LaunchLayer
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium text-sm xl:text-base transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button className="group relative inline-flex items-center gap-2 bg-[#4A90E2] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm xl:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <Calendar className="w-4 h-4" />
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-800/50">
            {/* Mobile Navigation Links */}
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={closeMenu}
                className="block text-gray-300 hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4 px-4">
              <button 
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#4A90E2] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;