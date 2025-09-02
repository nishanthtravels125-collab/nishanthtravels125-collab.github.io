import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  const packageItems = [
    { name: 'Arunachalam Taxi Package', path: '/arunachalam' },
    { name: 'Tirumala Taxi Packages', path: '/tirumala' },
    { name: 'Tirupati Taxi Packages', path: '/tirupati' },
    { name: 'Sri Kalahasti Packages', path: '/srikalahasti' },
    { name: 'Kanipakam Packages', path: '/kanipakam' },
    { name: 'Golden Temple Packages', path: '/golden-temple' },
    { name: 'Kanchipuram Packages', path: '/kanchipuram' }
  ];

  const handleWhatsAppClick = () => {
    const message = `🙏 Hello! I'm interested in Nishanth Travels services. Please provide me with package details and pricing information.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919704123338?text=${encodedMessage}`, '_blank');
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setIsPackagesOpen(false);
  };

  return (
    <>
      {/* Quick Contact Bar */}
      <div className="bg-gray-800 text-white py-2 px-4 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
          <a
            href="tel:+919704123338"
            className="flex items-center text-sm hover:text-orange-400 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            Quick Contact: +91 9704123338
          </a>
          <span className="text-sm text-gray-300">
            <a
              href="mailto:nishanthtravels700@gmail.com"
              className="hover:text-orange-400 transition-colors underline"
            >
              nishanthtravels700@gmail.com
            </a>
          </span>
        </div>
      </div>

      <header className="bg-gradient-to-r from-orange-500 to-red-600 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center">
              {/* Logo */}
              <div className="p-0 rounded-lg border-0 shadow-none flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/BvjmH1gG/Chat-GPT-Image-Aug-3-2025-06-58-56-PM.png"
                  alt="Nishanth Travels Logo"
                  className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
                />
              </div>
              <div className="ml-2 sm:ml-3">
                <h1 className="text-lg sm:text-2xl font-bold text-white">NISHANTH</h1>
                <p className="text-xs sm:text-sm text-white font-semibold">— TRAVELS —</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link to="/" className="text-white hover:text-orange-200 font-medium transition-colors">Home</Link>

              {/* Packages Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsPackagesOpen(true)}
                  onMouseLeave={() => setIsPackagesOpen(false)}
                  className="text-white hover:text-orange-200 font-medium transition-colors flex items-center"
                >
                  Packages
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {isPackagesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                    onMouseEnter={() => setIsPackagesOpen(true)}
                    onMouseLeave={() => setIsPackagesOpen(false)}
                  >
                    {packageItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Us Link */}
              <Link to="/about-us" className="text-white hover:text-orange-200 font-medium transition-colors">About Us</Link>

              <Link to="/rentals" className="text-white hover:text-orange-200 font-medium transition-colors">Car Rentals</Link>
              <Link to="/pickup-drop" className="text-white hover:text-orange-200 font-medium transition-colors">Pickup & Drop</Link>
              <Link to="/blogs" className="text-white hover:text-orange-200 font-medium transition-colors">Blogs</Link>
              <Link to="/reviews" className="text-white hover:text-orange-200 font-medium transition-colors">Reviews</Link>
              <Link to="/contact" className="text-white hover:text-orange-200 font-medium transition-colors">Contact</Link>
            </nav>

            {/* Contact Buttons */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <a
                href="tel:+919704123338"
                className="bg-white text-orange-600 px-3 lg:px-4 py-2 rounded-full flex items-center hover:bg-orange-50 transition-colors text-sm lg:text-base font-semibold"
              >
                <Phone className="w-4 h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Call</span>
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 text-white px-3 lg:px-4 py-2 rounded-full flex items-center hover:bg-green-700 transition-colors text-sm lg:text-base font-semibold"
              >
                <MessageCircle className="w-4 h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">WhatsApp</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-orange-400 mt-2 pt-4">
              <nav className="flex flex-col space-y-3">
                <Link to="/" onClick={handleMenuItemClick} className="text-white hover:text-orange-200 font-medium py-2 transition-colors">Home</Link>

                {/* Packages Dropdown */}
                <div>
                  <button
                    onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                    className="text-white hover:text-orange-200 font-medium py-2 transition-colors flex items-center w-full"
                  >
                    Packages
                    <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform ${isPackagesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isPackagesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {packageItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={handleMenuItemClick}
                          className="block text-orange-200 hover:text-white py-1 text-sm transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* About Us Link Mobile */}
                <Link to="/about-us" onClick={handleMenuItemClick} className="text-white hover:text-orange-200 font-medium py-2 transition-colors">About Us</Link>

                <Link to="/rentals" onClick={handleMenuItemClick} className="text-white hover:text-orange-200 font-medium py-2 transition-colors">Car Rentals</Link>
                <Link to="/pickup-drop" onClick={handleMenuItemClick} className="text-white hover:text-orange-200 font-medium py-2 transition-colors">Pickup & Drop</Link>
                <Link to="/blogs" onClick={handleMenuItemClick} className="text-white hover:text-orange-200 font-medium py-2 transition-colors">Blogs</Link>
                <Link to="/reviews" onClick={handleMenuItemClick} className="text-white hover:text-orange-200 font-medium py-2 transition-colors">Reviews</Link>
                <Link to="/contact" onClick={handleMenuItemClick} className="text-white hover:text-orange-200 font-medium py-2 transition-colors">Contact</Link>

                {/* Mobile Contact Buttons */}
                <div className="flex space-x-2 pt-4">
                  <a
                    href="tel:+919704123338"
                    className="flex-1 bg-white text-orange-600 px-4 py-3 rounded-full flex items-center justify-center hover:bg-orange-50 transition-colors font-semibold"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-green-600 text-white px-4 py-3 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;