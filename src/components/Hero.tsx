import React from 'react';
import { Phone, MessageCircle, MapPin, Star, Clock, Users, Award } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = `🙏 Namaste`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919704123338?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="home" className="bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 py-8 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
                Your Spiritual Journey Begins with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 block mt-2">
                  Nishanth Travels
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
               Tirupati Taxi: A local taxi service offering various packages for local sightseeing, airport transfers, and more.
Tirumala Taxi Service: Specializes in trips to Tirumala and surrounding areas.

Tour Packages: Tailored trips to temple towns like Arunachalam, Sri Kalahasti, Kanipakam, Golden Temple (Vellore), Kanchipuram & More
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12 justify-center lg:justify-start">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full flex items-center justify-center hover:from-green-700 hover:to-green-800 transition-all duration-300 text-base lg:text-lg font-semibold shadow-lg transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 mr-3" />
                  Book via WhatsApp
                </button>
                <a
                  href="tel:+919704123338"
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full flex items-center justify-center hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-base lg:text-lg font-semibold shadow-lg transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 mr-3" />
                  Call: 9704123338
                </a>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 lg:w-8 lg:h-8 text-orange-600 mr-2" />
                    <div className="text-2xl lg:text-3xl font-bold text-orange-600">500+</div>
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 lg:w-8 lg:h-8 text-orange-600 mr-2" />
                    <div className="text-2xl lg:text-3xl font-bold text-orange-600">50+</div>
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">Tour Packages</div>
                </div>
                <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-500 mr-2" />
                    <div className="text-2xl lg:text-3xl font-bold text-orange-600">4.9</div>
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">Star Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Lord Venkateswara Image */}
              <div className="aspect-w-16 aspect-h-12 lg:aspect-h-16">
                <img 
                  src="https://live.staticflickr.com/4268/33907921364_cf58d5f412_b.jpg"
                  alt="Lord Venkateswara Temple - Tirupati"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Sri Venkateswara Temple</h3>
                <p className="text-sm lg:text-base opacity-90">Experience divine blessings at the sacred hills of Tirumala</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Star className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg animate-pulse">
              <MessageCircle className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 lg:mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Find Us Here</h2>
            <p className="text-base lg:text-lg text-gray-600">Visit our office for personalized travel consultations</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7754.93694842216!2d79.41922199867899!3d13.629242747525815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sm%20prasanthi%2022-8-207%2F1%2Fc%20upadyaya%20nagar%20revenue%20ward%20no%2022%20tirupati%20517507!5e0!3m2!1sen!2sin!4v1756387053285!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 sm:h-80 lg:h-96"
                title="Nishanth Travels Location"
              ></iframe>
            </div>
            
            <div className="p-4 lg:p-6 bg-gradient-to-r from-orange-50 to-red-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <MapPin className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-sm text-gray-600">
                    M Prasanthi<br />
                    22-8-207/1/C, Upadyaya Nagar,<br />
                    Revenue Ward No 22,<br />
                    Tirupati, 517507
                  </p>
                </div>
                <div>
                  <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Business Hours</p>
                  <p className="text-sm text-gray-600">Opens 24 hours</p>
                </div>
                <div>
                  <Phone className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Contact</p>
                  <p className="text-sm text-gray-600">+91 9704123338</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;