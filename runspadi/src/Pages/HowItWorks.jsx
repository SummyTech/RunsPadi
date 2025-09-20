import deliveryImage from "../assets/delivery-img.svg"
import receivedImage from "../assets/received-img.svg"

const steps = [
  {
    number: "01",
    title: "Place Your Order",
    description: "Simply tell us what you need through our app or website. From groceries to prescriptions, we handle it all.",
    icon: "📱"
  },
  {
    number: "02", 
    title: "We Shop For You",
    description: "Our trusted shoppers carefully select each item, sending you photos and updates along the way.",
    icon: "🛒"
  },
  {
    number: "03",
    title: "Fast Delivery",
    description: "Your items are delivered to your doorstep within 30 minutes, fresh and exactly as requested.",
    icon: "🚚"
  }
];

const HowItWorks = () => {
    return(
        <section id="howitworks" className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-red-100 to-pink-100 rounded-full opacity-20 -translate-y-48"></div>
            
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                        ⚡ How It Works
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Simple Steps to
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500"> Get Everything Done</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Getting your errands done has never been easier. Here's how we make your life simpler in just 3 steps.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center group">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-red-200 to-pink-200 transform translate-x-1/2 z-0"></div>
                            )}
                            
                            <div className="relative z-10">
                                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <div className="text-4xl">{step.icon}</div>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    {step.number}
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Feature sections */}
                <div className="space-y-20">
                    {/* Fast Delivery Section */}
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                                ⚡ Lightning Fast
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Order Now,<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Receive Within 30 Minutes</span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our network of local shoppers ensures your essentials reach you faster than ever. 
                                Track your order in real-time and get instant updates on your delivery status.
                            </p>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Real-time tracking</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Instant notifications</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-pink-200 rounded-3xl transform rotate-3 opacity-20"></div>
                                <img 
                                    src={deliveryImage}
                                    alt="Fast delivery service" 
                                    className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contactless Delivery Section */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                🛡️ Safe & Secure
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Contactless Delivery<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Right to Your Doorstep</span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Your safety is our priority. We offer completely contactless delivery with photo confirmation, 
                                ensuring your items are delivered safely while maintaining social distancing.
                            </p>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Photo confirmation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Safe drop-off</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl transform -rotate-3 opacity-20"></div>
                                <img 
                                    src={receivedImage}
                                    alt="Contactless delivery to your doorstep" 
                                    className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Convenience?</h3>
                        <p className="text-lg mb-6 opacity-90">Join thousands who've already made their lives easier with RunsPadi</p>
                        <button className="bg-white text-red-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                            📱 Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HowItWorks;