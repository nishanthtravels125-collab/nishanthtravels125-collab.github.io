import React, { useState } from 'react';
import { Phone, MessageCircle, Car, Users, Clock, MapPin, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const TirumalaPackages = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const packages = [
    {
      id: 'TML0001',
      title: 'Tirupati to Tirumala Temple (5 Hours Package)',
      description: 'Experience divine blessings at Lord Venkateswara Temple with comfortable transportation.',
      image: 'https://vishnu-travels.com/wp-content/uploads/2024/01/tirumala-padmavati-temple-1.jpg',
      pricing: [
        { vehicle: 'Dzire, Etios 4 Seater', price: 'Rs.3000' },
        { vehicle: 'Ertiga 6 Seater', price: 'Rs.3550' },
        { vehicle: 'Innova / Tavera 7 Seater', price: 'Rs.4050' },
        { vehicle: 'Innova Crysta 6,7 Seater', price: 'Rs.5050' },
        { vehicle: 'Tempo Traveler 12 Seater', price: 'Rs.6050' }
      ]
    },
    {
      id: 'TML0002',
      title: 'Tirumala Temple - Tirumala Local Package Tour',
      description: 'Complete local sightseeing around Tirumala with temple darshan and nearby attractions.',
      image: 'https://vishnu-travels.com/wp-content/uploads/2024/01/tirumala-tirumala-local-1.jpg',
      pricing: [
        { vehicle: 'Dzire, Etios 4 Seater', price: 'Rs.4500' },
        { vehicle: 'Ertiga 6 Seater', price: 'Rs.5050' },
        { vehicle: 'Innova / Tavera 7 Seater', price: 'Rs.5550' },
        { vehicle: 'Innova Crysta 6,7 Seater', price: 'Rs.6550' },
        { vehicle: 'Tempo Traveler 12 Seater', price: 'Rs.8050' }
      ]
    },
    {
      id: 'TML0003',
      title: 'Tirumala - Padmavati Temple (8 Hours Package)',
      description: 'Visit both Tirumala and Padmavati Temple with extended sightseeing time.',
      image: 'https://vishnu-travels.com/wp-content/uploads/2024/01/tirumala-padmavati-temple-1.jpg',
      pricing: [
        { vehicle: 'Dzire, Etios 4 Seater', price: 'Rs.4000' },
        { vehicle: 'Ertiga 6 Seater', price: 'Rs.4550' },
        { vehicle: 'Innova / Tavera 7 Seater', price: 'Rs.5050' },
        { vehicle: 'Innova Crysta 6,7 Seater', price: 'Rs.6050' },
        { vehicle: 'Tempo Traveler 12 Seater', price: 'Rs.7650' }
      ]
    },
    {
      id: 'TML0004',
      title: 'Tirumala Temple - Tirupati Local Temples',
      description: 'Combined tour of Tirumala temple and local Tirupati temples in one day.',
      image: 'https://vishnu-travels.com/wp-content/uploads/2024/01/tirumala-tirupati-local-1.jpg',
      pricing: [
        { vehicle: 'Dzire, Etios 4 Seater', price: 'Rs.4500' },
        { vehicle: 'Ertiga 6 Seater', price: 'Rs.5050' },
        { vehicle: 'Innova / Tavera 7 Seater', price: 'Rs.5550' },
        { vehicle: 'Innova Crysta 6,7 Seater', price: 'Rs.6550' },
        { vehicle: 'Tempo Traveler 12 Seater', price: 'Rs.8050' }
      ]
    },
    {
      id: 'TML0005',
      title: 'Tirumala Temple - Local Temple - Tirupati Local Temple (6Am - 10 Pm One day)',
      description: 'Full day comprehensive tour covering all major temples from early morning to evening.',
      image: 'https://vishnu-travels.com/wp-content/uploads/2024/01/tirumala-tirupati-local-1.jpg',
      pricing: [
        { vehicle: 'Dzire, Etios 4 Seater', price: 'Rs.6000' },
        { vehicle: 'Ertiga 6 Seater', price: 'Rs.7000' },
        { vehicle: 'Innova / Tavera 7 Seater', price: 'Rs.8000' },
        { vehicle: 'Innova Crysta 7 Seater', price: 'Rs.9000' },
        { vehicle: 'Tempo Traveler 12 Seater', price: 'Rs.11000' }
      ]
    }
  ];

  type Package = {
    id: string;
    title: string;
    description: string;
    image: string;
    pricing: { vehicle: string; price: string }[];
  };

  const handleWhatsAppBooking = (pkg: Package) => {
    const message = `🙏 *TIRUMALA TAXI PACKAGE BOOKING*

📦 *PACKAGE DETAILS:*
Package Code: ${pkg.id}
Package: ${pkg.title}
Description: ${pkg.description}

💰 *VEHICLE PRICING:*
${pkg.pricing.map(item => `• ${item.vehicle}: ${item.price}`).join('\n')}

👥 *MY REQUIREMENTS:*
• Number of travelers: ___
• Preferred vehicle: ___
• Travel date: ___
• Pickup location: ___
• Pickup time: ___
• Special requirements: ___

📞 Contact: +91 9704123338

Please confirm availability and provide final quotation. Thank you! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919704123338?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Tirumala Taxi Packages</h1>
            <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Book your Tirupati to Tirumala taxi and get the best deals on your cab booking. Hire a taxi for a full day or half day from Tirupati to Tirumala. Explore our best Tirupati to Tirumala car packages and customized tour packages to Tirumala.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 md:py-12">
        {/* Service Description */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 lg:p-8 mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Our Fleet & Services</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our fleet includes all types of cabs: AC, Non-AC, Economical, SUV, Sedan, and Tempo Traveler. 
              Enjoy a comfortable and hassle-free journey with our Tirupati to Tirumala taxi service.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 md:p-6 text-center">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Great News!</h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              We also provide taxi service from any city, including Hyderabad, Bangalore, Chennai, and other top cities in India, to Tirumala. 
              Discover our Tirumala tour packages from Hyderabad, offering the best deals and customized options.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919704123338"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-semibold flex items-center justify-center text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                To Book Call Us +91 9704123338
              </a>
            </div>
          </div>
        </div>

        {/* Package Cards */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-[180px] md:w-[200px]"
              style={{ minHeight: 0 }}
            >
              <div className="relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-28 md:h-32 object-cover" // Increased height for better visibility
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {pkg.id}
                  </span>
                </div>
              </div>

              <div className="p-2 md:p-3 flex flex-col h-full">
                <h3 className="text-xs md:text-sm font-bold text-gray-800 mb-1 leading-tight">{pkg.title}</h3>
                <p className="text-xs text-gray-600 mb-2 leading-relaxed">{pkg.description}</p>

                <button
                  onClick={() => toggleCard(pkg.id)}
                  className="w-full bg-gray-100 text-gray-700 py-1 px-2 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center mb-2 text-xs"
                >
                  {expandedCards[pkg.id] ? (
                    <>Show Less <ChevronUp className="w-4 h-4 ml-1" /></>
                  ) : (
                    <>View Pricing <ChevronDown className="w-4 h-4 ml-1" /></>
                  )}
                </button>

                {expandedCards[pkg.id] && (
                  <div className="mb-2">
                    <h4 className="font-semibold text-gray-800 mb-1 text-xs">Vehicle Pricing:</h4>
                    <div className="space-y-1">
                      {pkg.pricing.map((item, index) => (
                        <div key={index} className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-red-50 p-1 rounded-lg">
                          <div className="flex items-center">
                            <Car className="w-3 h-3 text-orange-600 mr-1 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{item.vehicle}</span>
                          </div>
                          <span className="font-bold text-orange-600 text-xs">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto flex flex-col gap-1">
                  <button
                    onClick={() => handleWhatsAppBooking(pkg)}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-1 px-2 rounded-lg flex items-center justify-center hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-xs"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Book
                  </button>
                  <a
                    href="tel:+919704123338"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-1 px-2 rounded-lg flex items-center justify-center hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-semibold text-xs"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 lg:p-8 mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Why Book a Tirupati To Tirumala cab with Nishanth Travels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-3 md:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
              <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Hassle-free Booking</h4>
              <p className="text-xs md:text-sm text-gray-600">We promise a hassle-free booking experience with transparent billing</p>
            </div>
            <div className="text-center p-3 md:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
              <Clock className="w-8 h-8 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Timely Service</h4>
              <p className="text-xs md:text-sm text-gray-600">Enjoy timely pick-up and drop-off with our reliable and efficient service</p>
            </div>
            <div className="text-center p-3 md:p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl">
              <Users className="w-8 h-8 md:w-12 md:h-12 text-orange-600 mx-auto mb-3 md:mb-4" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Courteous Drivers</h4>
              <p className="text-xs md:text-sm text-gray-600">Make the most of your journey with our courteous drivers, specially trained for outstation rides</p>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-6 lg:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Terms & Conditions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">General Terms:</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                <li>• Don't put valuable items inside the car like money, gold, etc.</li>
                <li>• A/C will not function during travel time at Ghat Road (Tirumala)</li>
                <li>• Package cost is without GST</li>
                <li>• Night allowance charges applicable (After 10PM to 6AM)</li>
                <li>• Driver Food customer has to pay</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Package Terms:</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                <li>• Once package is booked, cancellation not allowed</li>
                <li>• Any additions to itinerary will increase price</li>
                <li>• Driver food will always be customer expense</li>
                <li>• ₹300/day can be given for driver food expenses</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Vehicle Terms:</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                <li>• Not responsible for loss of valuables during journey</li>
                <li>• Price may increase due to fuel cost/tax changes</li>
                <li>• AC turned off during ghat roads & parking</li>
                <li>• Extra usage charged as per market standards</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-4 md:p-6 text-center">
            <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">What is the difference between Tirupati and Tirumala?</h4>
            <p className="text-xs md:text-sm text-gray-700">
              The difference between Tirupati and Tirumala is that Tirupati is the main town, while Tirumala is the hill town where the Tirupati Balaji Temple, also known as the Sri Venkateshvara Swami Vaari Temple, is located.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TirumalaPackages;