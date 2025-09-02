import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Star, Car, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="lg:col-span-2">
          <div className="flex items-center mb-6">
  <div className="p-0 rounded-lg border-0 shadow-none flex items-center justify-center">
    <img
      src="https://i.postimg.cc/BvjmH1gG/Chat-GPT-Image-Aug-3-2025-06-58-56-PM.png" // <-- Place your logo image URL here
      alt="Nishanth Travels Logo"
      className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
    />
  </div>
  <div className="ml-3">
    <h1 className="text-2xl font-bold">NISHANTH</h1>
    <p className="text-sm text-orange-400 font-semibold">— TRAVELS —</p>
  </div>
</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted travel partner for spiritual journeys and comfortable transportation. 
              We provide professional services with experienced drivers and well-maintained vehicles 
              for all your travel needs in South India.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.9/5 (127 reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#packages" className="hover:text-orange-400 transition-colors">Tour Packages</a></li>
              <li><a href="#rentals" className="hover:text-orange-400 transition-colors">Car Rentals</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Temple Tours</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Group Bookings</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Outstation Trips</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get in touch</h3>
            <div className="space-y-4 text-gray-300">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center mb-2">
                  <div className="bg-gray-700 p-2 rounded">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-white mb-1">Phone</h4>
                <p className="text-gray-300">+91 9704123338</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center mb-2">
                  <div className="bg-gray-700 p-2 rounded">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-white mb-1">Email</h4>
                <p className="text-orange-400">nishanthtravels700@gmail.com</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex items-center mb-2">
                  <div className="bg-gray-700 p-2 rounded">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-white mb-1">Address</h4>
                <p className="text-gray-300">
                  Balaji Colony, Railway Station,<br />
                  Tirupathi, Andhra Pradesh 517507
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-3xl font-bold text-white">Pay now</h3>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
           <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-6 sm:p-8 border-4 border-green-400">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white bg-opacity-20 rounded-2xl p-4 sm:p-6">
      <h4 className="font-bold text-white mb-4 text-lg">Scan here to pay</h4>
      <div className="mb-4 flex items-center justify-center">
        <img
          src="https://i.postimg.cc/ncJsbb98/Screenshot-2025-08-03-192332.png"
          alt="Scan QR to Pay"
          className="w-36 h-36 object-cover rounded-lg border-4 border-white"
          style={{ background: 'transparent' }}
        />
      </div>
      <div className="text-xs text-white space-y-1">
         <p><strong>Account Holder:</strong>Aramati Suresh Reddy</p>
         <p><strong>Merchant Name:</strong> NISHANTH TRAVELS</p>
        <p><strong>ACC NO:</strong>  4910155000020493</p>
        <p><strong>IFSC CODE:</strong> KVBL0004910</p>
      </div>
    </div>
                
                <div className="space-y-3">
                  <div className="flex flex-col xs:flex-row items-center justify-between gap-2">
                   <div className="flex-1 flex items-center justify-center bg-transparent">
      <img
        src="https://www.presentations.gov.in/wp-content/uploads/2020/06/BHIM_Preview.png" // BHIM logo image URL
        alt="BHIM"
        className="h-8 w-auto object-contain"
      />
    </div>
         <div className="flex-1 flex items-center justify-center bg-transparent">
      <img
        src="https://t3.ftcdn.net/jpg/05/60/50/16/360_F_560501607_x7crxqBWbmbgK2k8zOL0gICbIbK9hP6y.jpg" // UPI logo image URL
        alt="UPI"
        className="h-8 w-auto object-contain"
      />
    </div> 
    <div className="flex-1 flex items-center justify-center bg-transparent">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png" // UPI logo image URL
        alt="UPI"
        className="h-8 w-auto object-contain"
      />
    </div>         
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center justify-center bg-transparent">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcECxTNIJ1-vLjGirkF-Nfa4Kme0J3defdA&s" // VISA logo image URL
        alt="VISA"
        className="h-8 w-auto object-contain"
      />
    </div>
     <div className="flex items-center justify-center bg-transparent">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fMu_3tekBPP-wDPcK5GCtETHPnWTMfLK1w&s" // Mastercard logo image URL
        alt="Mastercard"
        className="h-8 w-auto object-contain"
      />
    </div>
                    
                 
                  </div>
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-bold text-center">
                    <div className="flex items-center justify-center">
                      <span className="mr-2">₹</span>
                      <span>Digital Rupee</span>
                    </div>
                    <div className="text-xs mt-1 opacity-90">accepted here</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Book Your Journey Today!</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/919704123338?text=Hi, I'd like to book a travel package"
                className="bg-green-500 text-white px-8 py-4 rounded-full flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-105 font-bold shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp Booking
              </a>
              <a
                href="tel:+919704123338"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 font-bold shadow-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Now
              </a>
            </div>
            <p className="text-gray-400 mb-8">
              Available 24/7 for bookings and support
            </p>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Contact Details</h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-2xl font-bold text-white">Nishanth travels</p>
              <p className="text-lg">Phone number: <span className="text-orange-400 font-bold">9704123338</span></p>
              <div className="my-6">
                <h4 className="text-lg font-bold text-white mb-2">Address</h4>
                <div className="border-b-2 border-orange-400 w-24 mx-auto mb-4"></div>
                <p className="text-xl font-bold">9704123338</p>
                <p className="mt-2">nishanthtravels700gmail.com</p>
                <p className="mt-2">Balaji colony, railway station, Tirupathi</p>
                <p>Andhra Pradesh 517507</p>
              </div>
              <div className="mt-6">
                <p className="font-bold text-white">Term & conditions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links & Offers */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-6 text-center lg:text-left">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="#home" className="hover:text-orange-400 transition-colors">Home</a></li>
                    <li><a href="#packages" className="hover:text-orange-400 transition-colors">Tour Packages</a></li>
                    <li><a href="#rentals" className="hover:text-orange-400 transition-colors">Car Rentals</a></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="#reviews" className="hover:text-orange-400 transition-colors">Reviews</a></li>
                    <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right mt-8 lg:mt-0">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-3">🎉 Special Offers</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-white bg-opacity-20 rounded-lg p-2">
                    <p className="font-semibold">Group Discount: 10% off for 6+ people</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-2">
                    <p className="font-semibold">Early Bird: Book 7 days ahead, save 5%</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-2">
                    <p className="font-semibold">Festival Special: Seasonal packages available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <div className="bg-gray-800 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
              <h4 className="font-bold text-white mb-4">Why Choose Nishanth Travels?</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-orange-400 font-bold">500+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-orange-400 font-bold">5+ Years</div>
                  <div className="text-gray-300">Experience</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-orange-400 font-bold">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="text-orange-400 font-bold flex items-center justify-center">
                    4.9 <Star className="w-4 h-4 text-yellow-500 ml-1" />
                  </div>
                  <div className="text-gray-300">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <div className="mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.4234567890123!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQ0LjciTiA3OcKwMjUnMDkuMSJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full max-w-2xl mx-auto"
              ></iframe>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              <strong>Nishanth travels - Taxi...</strong><br />
              View larger map
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Nishanth Travels.
            </p>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/919704123338?text=Hi, I need help with booking"
            className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;