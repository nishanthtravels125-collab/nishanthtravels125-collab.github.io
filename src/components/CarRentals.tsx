import React from 'react';
import { Users, Fuel, Settings, Phone, MessageCircle, Car, Star, Shield, Info } from 'lucide-react';

const CarRentals = () => {
  const cars = [
    {
      id: 1,
      name: "Swift Dzire",
      type: "Sedan",
      image: "https://vishnu-travels.com/wp-content/uploads/2025/05/dzire-1-1.png",
      capacity: "4 persons",
      fuel: "Petrol/Diesel",
      transmission: "Manual/Auto",
      pricePerKm: "₹15",
      pricePerDay: "₹2,000",
      features: ["AC", "Music System", "GPS", "Driver"],
      rating: 4.8,
      popular: true,
      minimumNote: "Minimum 300km"
    },
    {
      id: 2,
      name: "Maruti Suzuki Ertiga",
      type: "Sedan",
      image:"https://vishnu-travels.com/wp-content/uploads/2024/08/Maruthi-Ertiga.jpg",
      fuel: "Petrol/Diesel",
      transmission: "Manual",
      pricePerKm: "₹19",
      pricePerDay: "₹2,500",
      features: ["AC", "Music System", "GPS", "Driver"],
      rating: 4.7,
      minimumNote: "Minimum 300km"
    },
    {
      id: 3,
      name: "Toyota Innova Crysta",
      type: "SUV",
      image: "https://vishnu-travels.com/wp-content/uploads/2024/08/INNOVA.jpg",
      capacity: "7 persons",
      fuel: "Diesel",
      transmission: "Manual",
      pricePerKm: "₹23",
      pricePerDay: "₹3,500",
      features: ["AC", "Music System", "GPS", "Driver", "Extra Space"],
      rating: 4.9,
      minimumNote: "Minimum 300km"
    },
    {
      id: 4,
      name: "Fortuner",
      type: "SUV",
      image: "https://vishnu-travels.com/wp-content/uploads/2025/05/Untitled-design-4.png",
      capacity: "7 persons",
      fuel: "Diesel",
      transmission: "Manual",
      pricePerKm: "₹45",
      pricePerDay: "₹8,500",
      features: ["AC", "Music System", "GPS", "Driver", "Luggage Space"],
      rating: 4.6,
      minimumNote: "Minimum 300km"
    },
    {
      id: 5,
      name: "Force Tempo Traveller",
      type: "Tempo Traveller",
      image: "https://5.imimg.com/data5/AV/IP/HQ/SELLER-34845852/20-seater-mini-bus-tempo-traveller-on-hire-in-mumbai-navi-mumbai-and-thane.png",
      capacity: "12 persons",
      fuel: "Diesel",
      transmission: "Manual",
      pricePerKm: "₹26",
      pricePerDay: "₹4,500",
      features: ["AC", "Music System", "GPS", "Driver", "Group Travel"],
      rating: 4.5,
      minimumNote: "Minimum 300km"
    },
  
    // New Vehicles
    {
      id: 7,
      name: "Tempo Traveller 17 Seater",
      type: "Tempo Traveller",
      image: "https://res.cloudinary.com/dnreeobav/image/fetch/c_scale,q_30,w_350,f_auto/l_text:Arial_20_bold:TrucksBuses.com,x_70,y_100,co_rgb:ffffff/https://www.trucksbuses.com/uploads/Force%20Tempo%20Traveller%203700%20Super.jpg", // Add your image URL here
      capacity: "17 persons",
      fuel: "Diesel",
      transmission: "Manual",
      pricePerKm: "₹35",
      pricePerDay: "₹6,000 (Local)",
      features: ["AC", "Music System", "GPS", "Driver", "Group Travel"],
      rating: 4.6,
      minimumNote: "Minimum 350km"
    },
    {
      id: 8,
      name: "Tempo Traveller 20 Seater",
      type: "Tempo Traveller",
      image: "https://res.cloudinary.com/dnreeobav/image/fetch/c_scale,q_30,w_350,f_auto/l_text:Arial_20_bold:TrucksBuses.com,x_70,y_100,co_rgb:ffffff/https://www.trucksbuses.com/uploads/Force%20Tempo%20Traveller%204020%20Super%2020%20seater.jpg", // Add your image URL here
      capacity: "20 persons",
      fuel: "Diesel",
      transmission: "Manual",
      pricePerKm: "₹45",
      pricePerDay: "₹8,000 (Local)",
      features: ["AC", "Music System", "GPS", "Driver", "Group Travel"],
      rating: 4.5,
      minimumNote: "Minimum 350km"
    },
    {
      id: 9,
      name: "Mini Bus 27 Seater",
      type: "Mini Bus",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/10/EU/JK/QU/8114104/mini-bus-27-seater-ac.jpg", // Add your image URL here
      capacity: "27 persons",
      fuel: "Diesel",
      transmission: "Manual",
      pricePerKm: "₹55",
      pricePerDay: "₹10,000 (Local)",
      features: ["AC", "Music System", "GPS", "Driver", "Group Travel"],
      rating: 4.5,
      minimumNote: "Minimum 350km"
    },
  
  ];

  return (
    <section id="rentals" className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Premium 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> Car Rental Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
            Choose from our fleet of well-maintained, comfortable vehicles with experienced drivers. 
            All cars come with comprehensive insurance, GPS tracking, and 24/7 roadside assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 relative flex flex-col mx-auto"
              style={{ maxWidth: 320, minWidth: 0, width: '100%', minHeight: 0 }}
            >
              {car.popular && (
                <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 py-0.5 rounded-full text-xs font-bold z-10">
                  Most Popular
                </div>
              )}
              <div className="relative">
                <img 
                  src={car.image || "https://via.placeholder.com/320x120?text=Vehicle+Image"} 
                  alt={car.name}
                  className="w-full h-28 sm:h-32 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-0.5 text-xs font-bold shadow">
                  {car.type}
                </div>
                <div className="absolute bottom-2 right-2 bg-white rounded-full px-2 py-1 shadow">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-xs font-bold">{car.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 flex-1 flex flex-col">
                <div className="flex items-center mb-2">
                  <Car className="w-5 h-5 text-orange-600 mr-2" />
                  <h3 className="text-base font-bold text-gray-800">{car.name}</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-1 mb-2">
                  <div className="text-center bg-orange-50 p-1.5 rounded-lg">
                    <Users className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                    <p className="font-bold text-gray-800 text-xs">{car.capacity}</p>
                    <p className="text-gray-600 text-xs font-semibold">Seating</p>
                  </div>
                  <div className="text-center bg-orange-50 p-1.5 rounded-lg">
                    <Fuel className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                    <p className="font-bold text-gray-800 text-xs">{car.fuel}</p>
                    <p className="text-gray-600 text-xs font-semibold">Fuel</p>
                  </div>
                  <div className="text-center bg-orange-50 p-1.5 rounded-lg">
                    <Settings className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                    <p className="font-bold text-gray-800 text-xs">{car.transmission}</p>
                    <p className="text-gray-600 text-xs font-semibold">Transmission</p>
                  </div>
                </div>

                <div className="mb-2">
                  <h4 className="font-bold text-gray-800 mb-1 text-xs">✨ Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {car.features.map((feature, i) => (
                      <span key={i} className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-2 py-0.5 rounded-full text-xs font-semibold border border-orange-200">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2 text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-2 rounded-xl shadow-lg">
                    <p className="font-bold text-base">{car.pricePerKm}</p>
                    <p className="text-xs opacity-90">Per KM</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-2 rounded-xl shadow-lg">
                    <p className="font-bold text-base">{car.pricePerDay}</p>
                    <p className="text-xs opacity-90">Per Day</p>
                  </div>
                </div>

                <div className="border-t pt-2 mb-2">
                  <div className="flex items-center justify-center mb-1">
                    <Shield className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-xs text-gray-600 font-semibold">Fully Insured & GPS Enabled</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Info className="w-4 h-4 text-orange-500 mr-1" />
                    <span className="text-xs text-orange-600 font-semibold">{car.minimumNote || "Minimum 350km"}</span>
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row gap-2 mt-auto">
                  <a
                    href={`https://wa.me/919704123338?text=Hi, I'm interested in renting ${car.name}`}
                    className="flex-1 bg-green-500 text-white py-2 px-2 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-105 font-bold shadow text-xs"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Book Now
                  </a>
                  <a
                    href="tel:+919704123338"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 px-2 rounded-lg flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 font-bold shadow text-xs"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-4 sm:p-6 md:p-8 text-white">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">Why Choose Nishanth Travels Car Rental?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Experienced Drivers</h4>
              <p className="text-white opacity-90 text-xs sm:text-sm">Professional and courteous drivers with extensive local knowledge and safe driving records</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Settings className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Well Maintained Fleet</h4>
              <p className="text-white opacity-90 text-xs sm:text-sm">Regular servicing, comprehensive insurance, and GPS tracking for your safety and peace of mind</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">24/7 Support</h4>
              <p className="text-white opacity-90 text-xs sm:text-sm">Round-the-clock customer support and roadside assistance throughout your journey</p>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <div className="bg-white bg-opacity-20 rounded-xl p-3 sm:p-4 max-w-xl mx-auto">
              <h4 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">🎉 Special Car Rental Offers</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="bg-white bg-opacity-10 rounded-lg p-2">
                  <p className="font-semibold">Multi-Day Discount</p>
                  <p>Book for 3+ days and save 15%</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-2">
                  <p className="font-semibold">Round Trip Special</p>
                  <p>Get 10% off on return journeys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CarRentals;