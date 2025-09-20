import homeImage from "../assets/hero-img.svg"
const Home = () => {
    return(
        <section id="home" className="relative lg:max-w-6xl max-md:px-6 lg:px-6 max-lg:max-w-2xl mx-auto py-32 bg-gradient-to-br from-white via-red-50 to-pink-50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-20 -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-50 to-pink-50 rounded-full opacity-30 translate-y-32 -translate-x-32"></div>
            
            <div className="relative flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            🛍️ Your Personal Shopping Assistant
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Skip the Store,</span><br/>
            <span className="text-gray-900">We'll Handle</span><br/>
            <span className="text-gray-900">Your Shopping</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
            From groceries to household essentials, we take care of all your shopping needs. 
            <span className="font-semibold text-red-500">Fast, reliable, and convenient</span> - 
            because your time matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              📱 Download App
            </button>
            <button className="px-8 py-4 border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300">
              🎯 How It Works
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center md:justify-start gap-6 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">30min</div>
              <div className="text-sm text-gray-500">Avg Delivery</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-yellow-400 text-lg">⭐</span>
              </div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-pink-200 rounded-3xl transform rotate-6 opacity-20"></div>
            <img
              src={homeImage}
              alt="Delivery service illustration"
              className="relative w-full max-w-md md:max-w-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
        </section>
    )
}
export default Home;