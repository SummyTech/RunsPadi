import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import testimony1 from "../assets/testimonial-1.png";
import testimony2 from "../assets/testimonial-2.png";
import testimony3 from "../assets/testimonial-3.png";   
import testimony4 from "../assets/testimonial-4.png";
import testimony5 from "../assets/testimonial-5.png";
import testimony6 from "../assets/testimonial-6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  const testimonials = [
    {
      img: testimony1,
      handle: "@sarah_mom",
      name: "Sarah Johnson",
      role: "Working Mom",
      testimony: "RunsPadi has been a lifesaver! With two kids and a full-time job, I barely had time for grocery shopping. Now I get everything delivered in 30 minutes. Amazing service!",
      rating: 5,
      location: "Downtown"
    },
    {
      img: testimony2,
      handle: "@mike_senior",
      name: "Michael Chen",
      role: "Senior Citizen",
      testimony: "As someone who finds it difficult to carry heavy groceries, RunsPadi has given me my independence back. The shoppers are so kind and careful with my orders.",
      rating: 5,
      location: "Westside"
    },
    {
      img: testimony3,
      handle: "@emma_student",
      name: "Emma Rodriguez",
      role: "College Student",
      testimony: "Perfect for busy students! I can focus on my studies while RunsPadi handles my shopping. The prices are fair and delivery is super fast.",
      rating: 5,
      location: "University Area"
    },
    {
      img: testimony4,
      handle: "@james_exec",
      name: "James Wilson",
      role: "Business Executive",
      testimony: "Time is money, and RunsPadi saves me both. I can order during meetings and have everything waiting when I get home. Exceptional service quality.",
      rating: 5,
      location: "Business District"
    },
    {
      img: testimony5,
      handle: "@lisa_nurse",
      name: "Lisa Thompson",
      role: "Healthcare Worker",
      testimony: "After long shifts at the hospital, the last thing I want to do is shop. RunsPadi takes care of everything, even my prescription pickups. Truly grateful!",
      rating: 5,
      location: "Medical Center"
    },
    {
      img: testimony6,
      handle: "@david_dad",
      name: "David Martinez",
      role: "Single Father",
      testimony: "Juggling work and raising my daughter alone was tough until I found RunsPadi. They handle all our household needs so I can spend quality time with my kid.",
      rating: 5,
      location: "Suburbs"
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100 to-pink-100 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-50 to-pink-50 rounded-full opacity-30 translate-y-20 -translate-x-20"></div>
      
      <div className="relative py-16 px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium">
            💬 Customer Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Happy Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers say about their RunsPadi experience.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },      // mobile
              640: { slidesPerView: 2 },    // small tablets
              1024: { slidesPerView: 3 },   // desktops
            }}
            className="pb-16 custom-swiper"
          >
            {testimonials.map((member, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white h-full rounded-3xl shadow-lg hover:shadow-2xl p-8 text-left flex flex-col transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  {/* Quote decoration */}
                  <div className="absolute top-4 right-4 text-6xl text-red-100 font-serif">“</div>
                  
                  <div className="relative z-10">
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(member.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">⭐</span>
                      ))}
                    </div>
                    
                    {/* Testimonial text */}
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-base">
                      “{member.testimony}”
                    </p>
                    
                    {/* Customer info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-red-100"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-gray-400">{member.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Trust indicators */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">50,000+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-500">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">500K+</div>
                <div className="text-sm text-gray-500">Orders Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">30min</div>
                <div className="text-sm text-gray-500">Avg Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
