import React, { useState } from 'react';
import { MapPin, CheckCircle, Phone, MessageCircle, Car, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const TripPackages = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const packages = [
    {
      id: 2,
      title: "Tirumala One Day Darshan",
      price: "₹3,500",
      originalPrice: "₹4,000",
      duration: "1 Day",
      vehicle: "Swift Dzire or Etios",
      pickup: "Tirupati",
      image: "https://th-i.thgim.com/public/migration_catalog/article10086851.ece/alternates/FREE_1200/VJ_09_TIRUPATI_VJ_09_TIRUPATI_ZOO..jpg",
      itinerary: [
        {
          day: "DAY 1",
          places: ["Early Morning Darshan", "Local Sightseeing", "TTD Museum", "Sri Vari Padalu"],
          stay: "Same Day Return"
        }
      ],
      includes: ["Toll", "Parking", "Driver Bata", "VIP Darshan Tickets"],
      excludes: ["Meals", "Personal Expenses"]
    },
    {
      id: 1,
      title: "Tirupati Darshan - 2 Days Package",
      price: "₹7,500",
      originalPrice: "₹8,500",
      duration: "2 Days / 2 Nights",
      vehicle: "Swift Dzire or Etios",
      pickup: "Tirupati",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKppM07_5Oe7MsO8z7mc5beotuiH23OBYQUA&s",
      itinerary: [
        {
          day: "DAY 1",
          places: ["Sri Vasavi Mangapuram", "Kanipakam", "Golden Temple", "Arunachlam"],
          stay: "Night Halt"
        },
        {
          day: "DAY 2",
          places: ["Tiruthani", "Srikalahasti"],
          stay: "Drop at Renigunta Railway Station"
        }
      ],
      includes: ["Toll", "Parking", "Driver Bata"],
      excludes: ["Driver Food (to be provided by customer)"],
      popular: true
    },
    {
      id: 4,
      title: "Tirupati to Arunachalam Taxi Package",
      price: "₹7,000",
      originalPrice: "",
      duration: "1 Day",
      vehicle: "Swift Dzire / Etios / Innova (as per group size)",
      pickup: "Tirupati",
      image: "https://t4.ftcdn.net/jpg/03/55/64/93/360_F_355649371_yN5DvZTvciolhMmPJebvLrQhbNlAs3eg.jpg",
      itinerary: [
        {
          day: "DAY 1",
          places: [
            "Srivarasamanga puram",
            "Kanipakam",
            "Arunachalam",
            "Golden Temple",
            "Return Drop at Tirupati"
          ],
          stay: "Same Day Return"
        }
      ],
      includes: [
        "Toll, Tax, and Permit Charges",
        "Temple Parking Fees",
        "Driver Bata"
      ],
      excludes: [
        "Only the driver’s food has to be provided by the customer"
      ]
    },
    {
      id: 5,
      title: "Tirupati to Golden Temple Taxi Package",
      price: "₹9,500",
      originalPrice: "",
      duration: "2 Days",
      vehicle: "Swift Dzire / Etios / Innova (as per group size)",
      pickup: "Tirupati",
      image: "https://wallpapers.com/images/featured/golden-temple-hd-6rp8cxk91fvj9ksx.jpg",
      itinerary: [
        {
          day: "DAY 1",
          places: [
            "Srivarasamangapuram",
            "Kanipakam",
            "Golden Temple",
            "Return Drop at Tirupati"
          ],
          stay: "Night Halt"
        },
        {
          day: "DAY 2",
          places: [
            "Kanchipuram Temples: Vishnu Kanchi, Shiva Kanchi, Kanchi Kamakshi Amman Temple",
            "Shopping (optional)",
            "Tiruttani Temple",
            "Return Drop at Tirupati"
          ],
          stay: "tirupathi Day Return"
        }
      ],
      includes: [
        "Toll Charges",
        "Tax & Permit Fees",
        "Temple Parking Fees",
        "Driver Bata"
      ],
      excludes: [
        "Only the driver’s food has to be provided by the customer"
      ]
    },
    {
      id: 6,
      title: "Tirupati to Kanchipuram Taxi Package",
      price: "₹5,000",
      originalPrice: "",
      duration: "1 Day",
      vehicle: "Swift Dzire / Etios / Innova (as per group size)",
      pickup: "Tirupati",
      image: "https://media.istockphoto.com/id/1442119975/photo/shot-of-the-kailashnath-temple-early-8th-century-pallava-kanchipuram-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=pw3XBftUizNjeMiYubt08LcviTj2AoJxbYjOljCsZjE=",
      itinerary: [
        {
          day: "DAY 1",
          places: [
            "Kanchipuram Temples: Vishnu Kanchi, Shiva Kanchi, Kanchi Kamakshi Amman Temple",
            "Shopping (optional)",
            "Tiruttani Temple",
            "Return Drop at Tirupati"
          ],
          stay: "Same Day Return"
        }
      ],
      includes: [
        "Toll Charges",
        "Tax & Permit Fees",
        "Temple Parking Fees",
        "Driver Bata"
      ],
      excludes: [
        "Only the driver’s food has to be provided by the customer"
      ]
    },
    {
      id: 7,
      title: "Tirupati to Kanipakam Taxi Package",
      price: "₹4,000",
      originalPrice: "",
      duration: "8 Hours",
      vehicle: "Swift Dzire / Etios / Innova (as per group size)",
      pickup: "Tirupati",
      image: "https://i.pinimg.com/474x/da/fa/2d/dafa2d3db2dedb2efb82cbc144df055d.jpg",
      itinerary: [
        {
          day: "DAY 1",
          places: [
            "ISKCON Temple",
            "Kapila Theertham (Kapileswara Temple)",
            "Srivarasamangapuram",
            "Kanipakam",
            "Return Drop at Tirupati"
          ],
          stay: "Same Day Return"
        }
      ],
      includes: [
        "Toll Charges",
        "Temple Parking Fees",
        "Driver Bata"
      ],
      excludes: [
        "Only the driver’s food has to be provided by the customer"
      ]
    },
    {
      id: 8,
      title: "Tirupati to Kalahasti Taxi Package",
      price: "₹3,000",
      originalPrice: "",
      duration: "6 Hours",
      vehicle: "Swift Dzire / Etios / Innova (as per group size)",
      pickup: "Tirupati",
      image: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2025/02/SrikalahastiITG-1740113394603.jpg?size=*:900",
      itinerary: [
        {
          day: "DAY 1",
          places: [
            "Padmavathi Temple",
            "Sri Kalahasti Temple",
            "Return Drop at Tirupati"
          ],
          stay: "Same Day Return"
        }
      ],
      includes: [
        "Toll Charges",
        "Temple Parking Fees",
        "Driver Bata"
      ],
      excludes: [
        "Only the driver’s food has to be provided by the customer"
      ]
    },
    {
      id: 9,
      title: "Tirupati Local Temple Taxi Package",
      price: "₹3,000",
      originalPrice: "",
      duration: "8 Hours",
      vehicle: "Swift Dzire / Etios / Innova (as per group size)",
      pickup: "Tirupati",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/ISKCON_Tirupathi.jpg/1024px-ISKCON_Tirupathi.jpg",
      itinerary: [
        {
          day: "DAY 1",
          places: [
            "Padmavathi Temple",
            "ISKCON Temple",
            "Kapila Theertham (Kapileswara Temple)",
            "Govindaraja Temple",
            "Rama Temple",
            "Srivarasamangapuram",
            "Vakulamatha Temple",
            "Return Drop at Tirupati"
          ],
          stay: "Same Day Return"
        }
      ],
      includes: [
        "Toll Charges",
        "Temple Parking Fees",
        "Driver Bata"
      ],
      excludes: [
        "Only the driver’s food has to be provided by the customer"
      ]
    },
    {
      id: 10,
      title: "Tirupati Airport to Airport Taxi Package",
      price: "₹6,500",
      originalPrice: "",
      duration: "2 Days",
      vehicle: "Swift Dzire / Etios / Innova (as per group size)",
      pickup: "Tirupati Airport",
      image: "https://temple.yatradham.org/public/Product/temple/temple_3A6L6yBs_202408181247570.jpg",
      itinerary: [
        {
          day: "DAY 1",
          places: [
            "Airport Pick-Up",
            "Hotel Fresh-Up",
            "Padmavathi Temple",
            "ISKCON Temple",
            "Kapila Theertham (Kapileswara Temple)",
            "Night Halt: Tirumala or Tirupati (as per customer preference)"
          ],
          stay: "Night Halt"
        },
        {
          day: "DAY 2",
          places: [
            "Varaha Swamy Temple",
            "Tirumala Balaji Darshan",
            "Sri Kalahasti Temple",
            "Airport Drop (Tirupati)",
            "Return Drop at Tirupati Airport"
          ],
          stay: "Trip End"
        }
      ],
      includes: [
        "Toll Charges",
        "Temple Parking Fees",
        "Driver Bata"
      ],
      excludes: [
        "Only the driver’s food has to be provided by the customer"
      ]
    }
  ];

 return (
    <section id="packages" className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
            Your Trip Itinerary & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> Package Details</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover divine destinations with our carefully crafted spiritual journey packages. 
            Complete itineraries with comfortable vehicles, experienced drivers, and all-inclusive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg) => {
            const isExpanded = expanded === pkg.id;
            return (
              <div
                key={pkg.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 relative flex flex-col min-h-[320px] max-w-xs mx-auto"
                style={{ minHeight: 0, width: '100%' }}
              >
                {pkg.popular && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-28 object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-xl p-2 shadow text-center">
                    <div className="text-base font-bold text-orange-600">{pkg.price}</div>
                    {pkg.originalPrice && (
                      <div className="text-xs text-gray-500 line-through">{pkg.originalPrice}</div>
                    )}
                    <div className="text-xs text-green-600 font-semibold">{pkg.price === "Contact for Best Price" ? "" : "(All Inclusive)"}</div>
                  </div>
                </div>

                <div className="p-3 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-gray-800 mb-2">{pkg.title}</h3>
                  
                  {/* Collapsible Content */}
                  <div className={`${isExpanded ? '' : 'max-h-24 overflow-hidden relative'} transition-all duration-300`}>
                    <div className="grid grid-cols-1 gap-2 mb-2">
                      <div className="flex items-center bg-orange-50 p-1.5 rounded-lg">
                        <Car className="w-4 h-4 text-orange-600 mr-2" />
                        <div>
                          <p className="font-semibold text-gray-800 text-xs">Vehicle Type:</p>
                          <p className="text-xs text-gray-600">{pkg.vehicle}</p>
                        </div>
                      </div>
                      <div className="flex items-center bg-orange-50 p-1.5 rounded-lg">
                        <MapPin className="w-4 h-4 text-orange-600 mr-2" />
                        <div>
                          <p className="font-semibold text-gray-800 text-xs">Pick-up Location:</p>
                          <p className="text-xs text-gray-600">{pkg.pickup}</p>
                        </div>
                      </div>
                      <div className="flex items-center bg-orange-50 p-1.5 rounded-lg">
                        <Calendar className="w-4 h-4 text-orange-600 mr-2" />
                        <div>
                          <p className="font-semibold text-gray-800 text-xs">Duration:</p>
                          <p className="text-xs text-gray-600">{pkg.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <h4 className="font-bold text-gray-800 mb-1 text-xs">Trip Itinerary:</h4>
                      {pkg.itinerary.map((day, index) => (
                        <div key={index} className="mb-2 bg-gray-50 p-2 rounded-lg">
                          <div className="flex items-center mb-1">
                            <div className="bg-orange-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mr-1">
                              {index + 1}
                            </div>
                            <p className="font-bold text-orange-600 text-xs">{day.day}</p>
                          </div>
                          <ul className="text-xs text-gray-700 space-y-0.5">
                            {day.places.map((place, i) => (
                              <li key={i} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-1 flex-shrink-0"></div>
                                {place}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-1 flex items-center">
                            <div className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-xs font-semibold">
                              🏨 {day.stay}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-2">
                      <div className="grid grid-cols-1 gap-2 text-xs">
                        <div>
                          <h5 className="font-bold text-green-600 mb-1">✅ Includes:</h5>
                          <ul className="space-y-1">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="flex items-center text-gray-700">
                                <CheckCircle className="w-3.5 h-3.5 text-green-500 mr-1 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-red-600 mb-1">❌ Excludes:</h5>
                          <ul className="space-y-1">
                            {pkg.excludes.map((item, i) => (
                              <li key={i} className="text-gray-700">
                                <span className="text-red-500 mr-1">•</span>{item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-2">
                      <p className="text-center text-gray-600 mb-2 font-semibold text-xs">
                        Thank you for choosing Nishanth Travels!<br />
                        <span className="text-orange-600">Have a pleasant and divine journey! 🚗</span>
                      </p>
                      <div className="text-center mb-2">
                        <p className="text-base font-bold text-gray-800">9704123338</p>
                      </div>
                    </div>
                  </div>
                  {/* Read More/Less Button */}
                  <button
                    className="mx-auto mt-1 mb-2 flex items-center text-orange-600 font-bold text-xs focus:outline-none"
                    onClick={() => handleToggle(pkg.id)}
                  >
                    {isExpanded ? (
                      <>
                        Read Less <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <div className="flex flex-col xs:flex-row gap-2 mt-auto">
                    <a
                      href={`https://wa.me/919704123338?text=Hi, I'm interested in ${pkg.title} package`}
                      className="flex-1 bg-green-500 text-white py-2 px-2 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-105 font-bold shadow text-xs"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Book now..🚗
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TripPackages;