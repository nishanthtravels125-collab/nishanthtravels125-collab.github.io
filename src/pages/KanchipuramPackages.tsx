import React, { useState } from 'react';
import { Phone, MessageCircle, Car, ChevronDown, ChevronUp } from 'lucide-react';

const KanchipuramPackages = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const packages = [
    {
      id: 'KAC0001',
      title: 'Kanchipuram Temples - Vishnu Kanchi - Siva Kanchi - Kanchi Kamakshi Temple',
      description: 'Complete tour of ancient Kanchipuram temples including Vishnu and Siva Kanchi.',
      image: 'https://vishnu-travels.com/wp-content/uploads/2024/01/Kanchipuram-Temples.jpg',
      pricing: [
        { vehicle: 'Dzire, Etios 4 Seater', price: 'Rs.5500' },
        { vehicle: 'Ertiga 6 Seater', price: 'Rs.6000' },
        { vehicle: 'Innova / Tavera 7 Seater', price: 'Rs.7000' },
        { vehicle: 'Innova Crysta 7 Seater', price: 'Rs.7500' },
        { vehicle: 'Tempo Traveler 12 Seater', price: 'Rs.9400' }
      ]
    },
    {
      id: 'KAC0002',
      title: 'Kanchipuram Temples - Tiruttani - Padmavathi Temple',
      description: 'Sacred journey covering Kanchipuram temples, Tiruttani and Padmavathi Temple.',
      image: 'https://vishnu-travels.com/wp-content/uploads/2024/01/Kanchipuram-Temples-Tiruttani-Temple.jpg',
      pricing: [
        { vehicle: 'Dzire, Etios 4 Seater', price: 'Rs.6000' },
        { vehicle: 'Ertiga 6 Seater', price: 'Rs.7200' },
        { vehicle: 'Innova / Tavera 7 Seater', price: 'Rs.8000' },
        { vehicle: 'Innova Crysta 7 Seater', price: 'Rs.8500' },
        { vehicle: 'Tempo Traveler 12 Seater', price: 'Rs.9500' }
      ]
    },
    {
      id: 'KAC0003',
      title: 'Kanchipuram - Sri Kalahasti',
      description: 'Combined tour of Kanchipuram temples and Sri Kalahasti temple.',
      image: 'https://vishnu-travels.com/wp-content/uploads/2024/01/2.jpeg',
      pricing: [
        { vehicle: 'Dzire, Etios 4 Seater', price: 'Rs.7500' },
        { vehicle: 'Ertiga 6 Seater', price: 'Rs.8000' },
        { vehicle: 'Innova / Tavera 7 Seater', price: 'Rs.9500' },
        { vehicle: 'Innova Crysta 7 Seater', price: 'Rs.10500' },
        { vehicle: 'Tempo Traveler 12 Seater', price: 'Rs.12000' }
      ]
    },
    {
      id: 'KAC0004',
      title: 'Kanchipuram - Tirutani - Tirumala Drop',
      description: 'Spiritual tour ending with drop at Tirumala temple.',
      image: 'https://vishnu-travels.com/wp-content/uploads/2024/01/5.jpeg',
      pricing: [
        { vehicle: 'Dzire, Etios 4 Seater', price: 'Rs.6500' },
        { vehicle: 'Ertiga 6 Seater', price: 'Rs.7500' },
        { vehicle: 'Innova / Tavera 7 Seater', price: 'Rs.8500' },
        { vehicle: 'Innova Crysta 7 Seater', price: 'Rs.9000' },
        { vehicle: 'Tempo Traveler 12 Seater', price: 'Rs.10500' }
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
    const message = `🙏 *KANCHIPURAM TAXI PACKAGE BOOKING*

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
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">Kanchipuram Packages</h1>
            <p className="text-sm md:text-base lg:text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
              Online Car Rental from Tirupati to Kanchipuram and get best deals on your cab booking. 
              Explore the ancient temples of Kanchipuram, the city of thousand temples.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6 md:py-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
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

              <div className="p-2 md:p-3">
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

                <div className="space-y-1">
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

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Terms & Conditions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <ul className="space-y-1">
              <li>• Don't put valuable items inside the car</li>
              <li>• A/C will not function during ghat roads</li>
              <li>• Package cost is without GST</li>
              <li>• Night allowance charges applicable</li>
            </ul>
            <ul className="space-y-1">
              <li>• Driver food customer has to pay</li>
              <li>• Once booked, cancellation not allowed</li>
              <li>• Extra usage charged separately</li>
              <li>• Not responsible for valuables loss</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanchipuramPackages;