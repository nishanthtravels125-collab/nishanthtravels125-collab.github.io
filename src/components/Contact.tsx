import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Get In Touch</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
            Ready to plan your next journey? Contact us today for personalized travel solutions and instant bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm sm:text-base">+91 9704123338</p>
                  <p className="text-xs sm:text-sm text-gray-500">Available 24/7 for bookings and support</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base">nishanthtravels700@gmail.com</p>
                  <p className="text-xs sm:text-sm text-gray-500">Get detailed quotations and itineraries</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Office Address</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    M Prasanthi
22-8-207/1/C, Upadyaya Nagar,Revenue Ward No 22,<br />
                    Tirupathi, Andhra Pradesh 517507
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">Visit us for in-person consultations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Business Hours</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Opens 24 hours<br />
                    Emergency support: 24/7
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 sm:p-6 bg-orange-50 rounded-2xl">
              <h4 className="font-bold text-gray-800 mb-4">Quick Booking</h4>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://wa.me/919704123338?text=Hi, I'd like to book a travel package"
                  className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Booking
                </a>
                <a
                  href="tel:+919704123338"
                  className="flex-1 bg-orange-600 text-white py-3 px-4 rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Send Us a Message</h3>
            <form className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="contact-name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="contact-phone"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="contact-email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travel Requirements</label>
                <textarea
                  rows={4}
                  id="contact-message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Tell us about your travel plans, preferred dates, number of travelers, etc."
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const name = (document.getElementById('contact-name') as HTMLInputElement).value;
                  const phone = (document.getElementById('contact-phone') as HTMLInputElement).value;
                  const email = (document.getElementById('contact-email') as HTMLInputElement).value;
                  const message = (document.getElementById('contact-message') as HTMLTextAreaElement).value;
                  const whatsappMessage = `Hi, I'm ${name}. Phone: ${phone}, Email: ${email}. Message: ${message}`;
                  window.open(`https://wa.me/919704123338?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                }}
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
            <div className="mt-6 p-4 bg-white rounded-lg border border-orange-200">
              <p className="text-xs sm:text-sm text-gray-600">
                <strong>Quick Response:</strong> We typically respond to inquiries within 30 minutes during business hours.
                For immediate assistance, please call or WhatsApp us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;