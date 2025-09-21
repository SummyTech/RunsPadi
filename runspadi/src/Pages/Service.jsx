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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col bg-[#f7e7e8] p-5 rounded-2xl items-start space-y-4">
              <img src={feature.icon} alt="" />
              <h3 className="text-xl font-semibold text-[#E8505B]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
        </section>
    )
}
export default Service;