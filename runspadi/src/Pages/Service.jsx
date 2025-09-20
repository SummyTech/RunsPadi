import serviceIcon1 from "../assets/service-icon-1.svg";
import serviceIcon2 from "../assets/service-icon-2.svg";
import serviceIcon3 from "../assets/service-icon-3.svg";
import serviceIcon4 from "../assets/service-icon-4.svg";
import serviceIcon5 from "../assets/service-icon-5.svg";
import serviceIcon6 from "../assets/service-icon-6.svg";

const features = [
  {
    icon: serviceIcon1,
    title: "Grocery Shopping",
    desc: "Fresh produce, pantry staples, and household essentials delivered to your doorstep. We shop with care, just like you would.",
    emoji: "🛒"
  },
  {
    icon: serviceIcon2,
    title: "Pharmacy Runs",
    desc: "Prescription pickups and over-the-counter medications. Your health needs handled with priority and discretion.",
    emoji: "💊"
  },
  {
    icon: serviceIcon3,
    title: "Home Essentials",
    desc: "Cleaning supplies, toiletries, and household items. Keep your home stocked without the hassle.",
    emoji: "🏠"
  },
  {
    icon: serviceIcon4,
    title: "Restaurant Delivery",
    desc: "Your favorite meals from local restaurants delivered hot and fresh. Satisfy your cravings instantly.",
    emoji: "🍴"
  },
  {
    icon: serviceIcon5,
    title: "Gift & Flowers",
    desc: "Last-minute gifts, birthday surprises, or beautiful flowers for special occasions. We make moments memorable.",
    emoji: "🎁"
  },
  {
    icon: serviceIcon6,
    title: "Pet Supplies",
    desc: "Food, toys, and care products for your furry friends. Because pets are family too.",
    emoji: "🐶"
  },
];

const Service = () => {
    return(
        <section id="service" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-red-100 to-pink-100 rounded-full opacity-20 -translate-y-48"></div>
            
            <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                    ✨ Our Services
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Everything You Need,<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Delivered With Care</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    From daily essentials to special requests, we're your trusted partner for all household errands. 
                    Save time and focus on what matters most to you.
                </p>
            </div>
            
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                                    </div>
                                    <span className="text-3xl">{feature.emoji}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                <div className="mt-6 flex items-center text-red-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm">Learn more</span>
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call to action */}
                <div className="text-center py-12">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
                        <p className="text-lg mb-6 opacity-90">Join thousands of satisfied customers who trust us with their daily errands</p>
                        <button className="bg-white text-red-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                            📱 Download App Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Service;