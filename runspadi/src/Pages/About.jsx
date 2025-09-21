import aboutImage from"../assets/about-img.svg"
const About = () => {
    return(
        <section id="about" className="py-24 bg-gradient-to-br from-white via-red-50 to-pink-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100 to-pink-100 rounded-full opacity-20 -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-50 to-pink-50 rounded-full opacity-30 translate-y-20 -translate-x-20"></div>
            
            <div className="relative max-w-6xl mx-auto flex max-lg:flex-col items-center lg:px-6 lg:gap-20">
                {/* Left Image */}
                <div className="flex-1 justify-center max-md:px-5 relative">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-pink-200 rounded-3xl transform -rotate-6 opacity-20"></div>
                        <img
                            src={aboutImage}
                            alt="About Us - Trusted delivery service"
                            className="relative w-full md:max-w-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

        {/* Right Content */}
        <div className="flex-1 space-y-8 max-lg:py-10 mx-2 md:mx-10 lg:mx-10 text-center md:text-left">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            🎆 About RunsPadi
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Trusted Partner for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500"> Everyday Errands</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We understand that life gets busy. That's why we created RunsPadi - to give you back your most valuable asset: <span className="font-semibold text-red-500">time</span>. 
            Our dedicated team of trusted shoppers ensures every errand is handled with the same care and attention you'd give it yourself.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Background-checked shoppers</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Real-time order tracking</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">100% satisfaction guarantee</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center md:justify-start gap-4 py-4">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-xl">
                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
              </div>
              <span className="font-bold text-gray-900 text-lg">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <span className="text-gray-600">Based on 50,000+ reviews</span>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">50K+</h3>
                <p className="text-sm opacity-90">Happy Customers</p>
              </div>
              <div className="space-y-2 border-l border-r border-white/20">
                <h3 className="text-3xl font-bold">500K+</h3>
                <p className="text-sm opacity-90">Errands Completed</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">30min</h3>
                <p className="text-sm opacity-90">Avg Delivery Time</p>
              </div>
            </div>
          </div>
        </div>
            </div>
        </section>
    )
}
export default About;