import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Car, Users, Calendar } from 'lucide-react';

const PickupDrop = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropLocation: '',
    pickupDate: '',
    pickupTime: '',
    passengers: '',
    vehicleType: '',
    specialRequests: ''
  });

  const popularLocations = [
    { name: "Tirupati Railway Station", type: "Railway Station" },
    { name: "Renigunta Railway Station", type: "Railway Station" },
    { name: "Tirupati Airport", type: "Airport" },
    { name: "Chennai Airport", type: "Airport" },
    { name: "Bangalore Airport", type: "Airport" },
    { name: "Tirumala Temple", type: "Temple" },
    { name: "Srikalahasti Temple", type: "Temple" },
    { name: "Kanipakam Temple", type: "Temple" },
    { name: "Chennai Central", type: "Railway Station" },
    { name: "Bangalore City", type: "City" },
    { name: "Vellore", type: "City" },
    { name: "Kanchipuram", type: "City" }
  ];

  const vehicleOptions = [
    { name: "Swift Dzire/Etios", capacity: "4+1", price: "₹12/km" },
    { name: "Toyota Innova", capacity: "7+1", price: "₹16/km" },
    { name: "Tempo Traveller", capacity: "12+1", price: "₹20/km" },
    { name: "Luxury Bus", capacity: "35+1", price: "₹35/km" }
  ];

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // WhatsApp message
    const message = `🚗 *PICKUP & DROP BOOKING REQUEST*

👤 *CUSTOMER DETAILS:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

📍 *TRAVEL DETAILS:*
Pickup Location: ${formData.pickupLocation}
Drop Location: ${formData.dropLocation}
Date: ${formData.pickupDate}
Time: ${formData.pickupTime}
Passengers: ${formData.passengers}
Vehicle: ${formData.vehicleType}

📝 *SPECIAL REQUESTS:*
${formData.specialRequests || 'None'}

Please confirm availability and provide quotation. Thank you! 🙏`;

    // Send to MongoDB (if backend is available)
    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'pickup-drop',
          ...formData,
          timestamp: new Date()
        }),
      });
    } catch (error) {
      console.log('Backend not available, proceeding with WhatsApp');
    }

    // Redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919704123338?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="pickup-drop" className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pickup & Drop Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Convenient and reliable pickup and drop services for airports, railway stations, and any destination. 
            Book your comfortable ride with professional drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Car className="w-8 h-8 mr-3 text-orange-600" />
              Book Your Ride
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter pickup location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Drop Location *
                  </label>
                  <input
                    type="text"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter drop location"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Time *
                  </label>
                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passengers *
                  </label>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5-7">5-7 People</option>
                    <option value="8-12">8-12 People</option>
                    <option value="13+">13+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Type *
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Vehicle</option>
                  {vehicleOptions.map((vehicle, index) => (
                    <option key={index} value={vehicle.name}>
                      {vehicle.name} ({vehicle.capacity}) - {vehicle.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Any special requirements or requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-2xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 flex items-center justify-center"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Book via WhatsApp
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">Or call us directly for instant booking</p>
              <a
                href="tel:+919704123338"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 9704123338
              </a>
            </div>
          </div>

          {/* Popular Locations & Info */}
          <div className="space-y-8">
            {/* Popular Locations */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-8 h-8 mr-3 text-orange-600" />
                Popular Locations
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {popularLocations.map((location, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors cursor-pointer">
                    <Navigation className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{location.name}</p>
                      <p className="text-xs text-gray-600">{location.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Options */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Car className="w-8 h-8 mr-3 text-orange-600" />
                Vehicle Options
              </h3>
              
              <div className="space-y-4">
                {vehicleOptions.map((vehicle, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl">
                    <div className="flex items-center">
                      <Users className="w-6 h-6 text-orange-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-800">{vehicle.name}</p>
                        <p className="text-sm text-gray-600">Capacity: {vehicle.capacity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-orange-600">{vehicle.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Features */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="w-8 h-8 mr-3 text-orange-600" />
                Service Features
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">24/7 Availability</h4>
                    <p className="text-sm text-gray-600">Round-the-clock pickup and drop services</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Professional Drivers</h4>
                    <p className="text-sm text-gray-600">Experienced and courteous drivers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <Car className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Well-Maintained Vehicles</h4>
                    <p className="text-sm text-gray-600">Clean, comfortable, and safe vehicles</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Real-time Tracking</h4>
                    <p className="text-sm text-gray-600">Track your ride and get live updates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <MapPin className="w-8 h-8 mr-3 text-orange-600" />
                  Our Service Area
                </h3>
                <p className="text-gray-600 mb-6">We provide pickup and drop services across South India</p>
              </div>
              
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7754.93694842216!2d79.41922199867899!3d13.629242747525815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sm%20prasanthi%2022-8-207%2F1%2Fc%20upadyaya%20nagar%20revenue%20ward%20no%2022%20tirupati%20517507!5e0!3m2!1sen!2sin!4v1756387053285!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupDrop;