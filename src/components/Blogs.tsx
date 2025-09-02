import React, { useState } from 'react';
import { Calendar, User, Eye, MessageCircle, Phone, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Blogs = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const blogs = [
    {
      id: 1,
      title: "Complete Guide to Tirupati Darshan: Tips for First-Time Visitors",
      excerpt: "Everything you need to know about visiting Lord Venkateswara Temple, including booking procedures, accommodation, and travel tips.",
      image: "https://i.pinimg.com/736x/d3/dc/46/d3dc4638c4672f3536d771ba1bd65bd5.jpg",
      author: "Nishanth Travels",
      date: "2024-01-15",
      views: 1250,
      category: "Travel Guide"
    },
    {
      id: 2,
      title: "Best Time to Visit South Indian Temples: Weather and Festival Guide",
      excerpt: "Discover the ideal seasons and festival times for visiting famous South Indian temples for a memorable spiritual experience.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihbY9q-92gOtuDP2qYFMCbT7wYHHnJ3-9TzD3EhEijtP5-6Fap5sOloTRQ1C4ylQZMua5xHQGo3ot__66OEBkU1VaRoRWR1yFcV2oacUqDY6rV7erqvhNl9wzE46Islw4Q_IrdUApELCfvRA9vuUjO6y8gUH4_fotEzrizuBuiSIb60VO_ze4GvsD2dU5J/s1280/IndianTemplesList%20Blog%20HD%20Image.webp",
      author: "Nishanth Travels",
      date: "2024-01-10",
      views: 980,
      category: "Travel Tips"
    },
    {
      id: 3,
      title: "Kanchipuram Temple Tour: A Journey Through Ancient Architecture",
      excerpt: "Explore the magnificent temples of Kanchipuram, known as the city of thousand temples, with our detailed travel itinerary.",
      image: "https://w0.peakpx.com/wallpaper/550/808/HD-wallpaper-kailasanathar-temple-kanchipuram-hindu-temple-old-temple-evening-landmark-tamil-nadu-india.jpg",
      author: "Nishanth Travels",
      date: "2024-01-05",
      views: 756,
      category: "Destinations"
    },
    {
      id: 4,
      title: "Car Rental Tips for Temple Tours: Choosing the Right Vehicle",
      excerpt: "Learn how to select the perfect vehicle for your temple tour based on group size, comfort, and budget considerations.",
      image: "https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwY2FyfGVufDB8fDB8fHww",
      author: "Nishanth Travels",
      date: "2023-12-28",
      views: 642,
      category: "Car Rental"
    },
    {
      id: 5,
      title: "Spiritual Journey to Rameswaram: Temple Significance and Travel Guide",
      excerpt: "Discover the spiritual significance of Rameswaram and plan your pilgrimage with our comprehensive travel guide.",
      image: "https://i.pinimg.com/736x/57/fa/4e/57fa4e77959c5ce67d0c505e67e5de21.jpg",
      author: "Nishanth Travels",
      date: "2023-12-20",
      views: 892,
      category: "Pilgrimage"
    },
    {
      id: 6,
      title: "Budget-Friendly Temple Tours: How to Plan an Affordable Pilgrimage",
      excerpt: "Tips and tricks for planning an affordable temple tour without compromising on comfort and spiritual experience.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-rameswaram-temple-rameswaram-tamilnadu-hero-1?qlt=82&ts=1727162277643",
      author: "Nishanth Travels",
      date: "2023-12-15",
      views: 1100,
      category: "Budget Travel"
    }
  ];

  const categories = ["All", "Travel Guide", "Travel Tips", "Destinations", "Car Rental", "Pilgrimage", "Budget Travel"];

  return (
    <section id="blogs" className="py-6 sm:py-10 md:py-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Travel 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> Blogs & Guides</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
            Discover travel tips, temple guides, and spiritual journey insights from our experienced team. 
            Get the most out of your pilgrimage with our expert advice.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-gray-700 rounded-full hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 shadow font-semibold text-xs sm:text-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {blogs.map((blog) => {
            const isBlogExpanded = expanded === blog.id;
            return (
              <article
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 mx-auto"
                style={{ maxWidth: 320, minWidth: 0, width: '100%' }}
              >
                <div className="relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-28 sm:h-32 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    {blog.category}
                  </div>
                  <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {blog.views}
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex flex-wrap items-center text-xs text-gray-500 mb-2">
                    <User className="w-3 h-3 mr-1" />
                    <span className="mr-2">{blog.author}</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>

                  <h3 className="text-base font-bold text-gray-800 mb-1 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className={`text-gray-600 mb-2 text-xs transition-all duration-300 ${isBlogExpanded ? '' : 'line-clamp-3'}`}>
                    {blog.excerpt}
                  </p>

                  <button
                    className="text-purple-600 font-semibold hover:text-purple-700 flex items-center text-xs mb-2"
                    onClick={() => setExpanded(isBlogExpanded ? null : blog.id)}
                  >
                    {isBlogExpanded ? (
                      <>
                        Read Less <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`https://wa.me/919704123338?text=Hi, I read your blog about ${blog.title}`}
                      className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a
                      href="tel:+919704123338"
                      className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 sm:mt-12 md:mt-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-5 sm:p-8 md:p-10 text-white text-center max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Stay Updated with Travel Tips</h3>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-90">
            Subscribe to our newsletter for the latest travel guides, temple information, and exclusive offers.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 text-xs sm:text-sm"
            />
            <button className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-xs sm:text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact for Blog Inquiries */}
        <div className="mt-8 sm:mt-12 md:mt-14 bg-white rounded-xl shadow-xl p-5 sm:p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Have Questions About Our Destinations?</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm">
            Our travel experts are here to help you plan the perfect spiritual journey. 
            Contact us for personalized advice and recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <a
              href="https://wa.me/919704123338?text=Hi, I need help planning my temple tour"
              className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-105 font-bold shadow text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919704123338"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105 font-bold shadow text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blogs;