
function Footer(){
    return(
        <div>
            <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 to-pink-500/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-500/5 to-pink-500/5 rounded-full translate-y-20 -translate-x-20"></div>
                
                <div className="relative">
                    {/* Main footer content */}
                    <div className="lg:flex max-lg:space-y-8 lg:max-w-6xl mx-auto lg:py-16 pt-16 pb-8 justify-between px-6 max-sm:px-5">
                        {/* Brand section */}
                        <div className="lg:max-w-sm space-y-6">
                            <div>
                                <a href="#home" className="text-4xl text-white font-bold satisfy-regular hover:text-red-400 transition-colors duration-300">RunsPadi</a>
                            </div>
                            <div>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Your trusted partner for household errands and deliveries. 
                                    <span className="text-red-400 font-semibold">We deliver convenience</span> to your doorstep, 
                                    so you can focus on what matters most.
                                </p>
                            </div>
                            
                            {/* App download buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs">Download on the</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs">Get it on</div>
                                        <div className="text-sm font-semibold">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        
                        {/* Navigation sections */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Company */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl text-white">Company</h3>
                                <div className="space-y-3">
                                    <a href="#about" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">About Us</a>
                                    <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Careers</a>
                                    <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Press</a>
                                    <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Blog</a>
                                </div>
                            </div>
                            
                            {/* Services */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl text-white">Services</h3>
                                <div className="space-y-3">
                                    <a href="#service" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Grocery Shopping</a>
                                    <a href="#service" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Pharmacy Runs</a>
                                    <a href="#service" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Restaurant Delivery</a>
                                    <a href="#service" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Gift Delivery</a>
                                </div>
                            </div>
                            
                            {/* Support */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl text-white">Support</h3>
                                <div className="space-y-3">
                                    <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Help Center</a>
                                    <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Contact Us</a>
                                    <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Safety</a>
                                    <a href="#" className="block text-gray-300 hover:text-red-400 transition-colors duration-300">Terms & Privacy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Social media and contact */}
                    <div className="border-t border-gray-700">
                        <div className="max-w-6xl mx-auto px-6 py-8">
                            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                                {/* Contact info */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">51 Shogbamu Street, New Garage, Gbagada Lagos</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                        </svg>
                                        <span className="text-sm">24/7 Support: 1-800-RUNSPADI</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                        </svg>
                                        <span className="text-sm">hello@runspadi.com</span>
                                    </div>
                                </div>
                                
                                {/* Social media */}
                                <div className="flex items-center gap-4">
                                    <span className="text-white font-medium">Follow Us:</span>
                                    <div className="flex gap-3">
                                        <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                            <ion-icon name="logo-facebook" className="text-lg"></ion-icon>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                            <ion-icon name="logo-instagram" className="text-lg"></ion-icon>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                            <ion-icon name="logo-twitter" className="text-lg"></ion-icon>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                            <ion-icon name="logo-linkedin" className="text-lg"></ion-icon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Copyright */}
                    <div className="border-t border-gray-700 py-6 text-center">
                        <div className="max-w-6xl mx-auto px-6">
                            <p className="text-gray-400">
                                © 2025 RunsPadi. All rights reserved. | 
                                <span className="text-red-400">Making life easier, one delivery at a time.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;