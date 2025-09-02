import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle, User, ExternalLink } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Bangalore",
      rating: 5,
      comment: "Excellent service! The driver was very professional and the vehicle was clean and comfortable. Visited all the temples peacefully. Highly recommended for Tirupati darshan.",
      date: "2 weeks ago",
      trip: "Tirupati 3-Day Package",
      verified: true,
      helpful: 24,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Chennai",
      rating: 5,
      comment: "Amazing experience with Nishanth Travels. They arranged everything perfectly from pickup to drop. The driver was knowledgeable about all the temples and helped us plan our darshan efficiently.",
      date: "1 month ago",
      trip: "South India Temple Tour",
      verified: true,
      helpful: 18,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      name: "Venkat Reddy",
      location: "Hyderabad",
      rating: 5,
      comment: "Great value for money! The car was well-maintained and the driver was punctual. They helped us avoid crowds and manage our time well. Will definitely book again.",
      date: "3 weeks ago",
      trip: "Car Rental - Swift Dzire",
      verified: true,
      helpful: 31,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 4,
      name: "Lakshmi Devi",
      location: "Vijayawada",
      rating: 5,
      comment: "Very satisfied with the service. Professional approach and transparent pricing. The WhatsApp booking was very convenient. Thank you for making our pilgrimage memorable.",
      date: "1 week ago",
      trip: "Tirupati One Day Darshan",
      verified: true,
      helpful: 15,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 5,
      name: "Arun Kumar",
      location: "Coimbatore",
      rating: 5,
      comment: "Booked for a family group of 8 people. The Innova was spacious and comfortable. Driver was friendly and helped with luggage. Smooth journey throughout. Recommended!",
      date: "2 months ago",
      trip: "Family Package - Innova Rental",
      verified: true,
      helpful: 27,
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 6,
      name: "Anasuya Reddy",
      location: "Tirupati",
      rating: 5,
      comment: "First time visiting Tirupati and Nishanth Travels made it hassle-free. Prompt responses on WhatsApp, fair pricing, and excellent service. Will refer to friends and family.",
      date: "1 month ago",
      trip: "Tirupati 3-Day Package",
      verified: true,
      helpful: 22,
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const averageRating = 5.0;
  const totalReviews = 127;
  const ratingDistribution = [
    { stars: 5, count: 98, percentage: 77 },
    { stars: 4, count: 23, percentage: 18 },
    { stars: 3, count: 4, percentage: 3 },
    { stars: 2, count: 2, percentage: 2 },
    { stars: 1, count: 0, percentage: 0 }
  ];

  const [googleReviewText, setGoogleReviewText] = useState('');

  const handleWhatsAppReview = () => {
    const message = `🙏 Hello`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919704123338?text=${encodedMessage}`, '_blank');
  };

  const handleGoogleReview = () => {
    window.open('https://g.page/r/CaIjS10oybgOEAI/review', '_blank');
  };

  return (
    <section id="reviews" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-2xl md:text-3xl font-bold text-gray-800">{averageRating}</span>
            <span className="text-gray-600 ml-2 text-lg">({totalReviews} reviews)</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read testimonials from our satisfied customers who have experienced our exceptional travel services.
          </p>
        </div>

        {/* Rating Overview */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rating Summary */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Customer Ratings</h3>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="text-4xl md:text-6xl font-bold text-orange-600 mr-4">{averageRating}</div>
                <div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600">Based on {totalReviews} reviews</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-50 p-3 md:p-4 rounded-2xl">
                  <div className="text-xl md:text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Excellent</div>
                </div>
                <div className="bg-blue-50 p-3 md:p-4 rounded-2xl">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">96%</div>
                  <div className="text-sm text-gray-600">Recommend</div>
                </div>
                <div className="bg-purple-50 p-3 md:p-4 rounded-2xl">
                  <div className="text-xl md:text-2xl font-bold text-purple-600">94%</div>
                  <div className="text-sm text-gray-600">Repeat</div>
                </div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Rating Breakdown</h4>
              <div className="space-y-3">
                {ratingDistribution.map((rating) => (
                  <div key={rating.stars} className="flex items-center">
                    <div className="flex items-center w-16">
                      <span className="text-sm font-medium mr-2">{rating.stars}</span>
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">{rating.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-3 md:p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-gray-800 text-xs md:text-sm">{review.name}</h4>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">{review.location}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>

              <div className="mb-3">
                <Quote className="w-4 h-4 text-orange-600 mb-2" />
                <p className="text-gray-700 leading-relaxed text-xs md:text-sm">{review.comment}</p>
              </div>

              <div className="bg-orange-50 px-2 py-1 rounded-lg mb-3">
                <p className="text-xs font-semibold text-orange-800">Trip: {review.trip}</p>
              </div>

              <div className="flex items-center justify-between">
                <button className="flex items-center text-gray-600 hover:text-orange-600 transition-colors text-xs">
                  <ThumbsUp className="w-3 h-3 mr-1" />
                  Helpful ({review.helpful})
                </button>
                <button className="text-orange-600 hover:text-orange-700 transition-colors text-xs font-medium">
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Share Experience Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Share Your Experience</h3>
          <p className="text-gray-600 mb-6 text-base md:text-lg max-w-2xl mx-auto">
            We value your feedback! Help other travelers by sharing your experience with Nishanth Travels. 
            Your review helps us improve our services and assists fellow pilgrims in making informed decisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 md:p-6 rounded-2xl">
              <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">WhatsApp Review</h4>
              <p className="text-sm text-gray-600">Quick and easy review via WhatsApp</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 md:p-6 rounded-2xl">
              <Star className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Rate Your Trip</h4>
              <p className="text-sm text-gray-600">Share your rating and experience</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 md:p-6 rounded-2xl">
              <User className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Help Others</h4>
              <p className="text-sm text-gray-600">Guide fellow travelers with your insights</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={handleWhatsAppReview}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Share via WhatsApp
            </button>
            <a
              href="tel:+919704123338"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-semibold flex items-center justify-center"
            >
              <User className="w-5 h-5 mr-2" />
              Call to Share Review
            </a>
            <a
              href="https://g.page/r/CaIjS10oybgOEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold flex items-center justify-center"
            >
              <Star className="w-5 h-5 mr-2" />
              Review on Google Maps
            </a>
          </div>

         

          <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl">
            <p className="text-sm text-gray-700">
              <strong>💡 Review Tip:</strong> Include details about your driver, vehicle condition, punctuality, 
              and overall experience to help other travelers make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;