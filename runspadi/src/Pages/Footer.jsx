
function Footer(){
    return(
        <div>
            <footer className="FooterImage bg-[#263238] " >
            <div className="lg:flex max-lg:space-y-5 lg:max-w-6xl mx-auto max-lg:pt-10 lg:py-16 justify-between px-6 max-sm:px-5">
            <div className=" dark:text-gray-300 space-y-4">
                {/* logo  */}
                <div>
                    <a href="./Home.jsx" className="text-4xl text-white font-bold satisfy-regular">RunsPadi</a>
                </div>
                <div>
                    {/* text  */}
                    <p className="font-semibold text-md lg:w-80 text-[#9CA3AF]">
                        More than just a courier service — we deliver trust, convenience, and peace of mind with every package we handle.
                    </p>
                    
                </div>
            </div>
            
                {/* Quick links  */}
                <div className="text-md text-[#9CA3AF] flex flex-col">
                    <h1 className="font-bold text-xl pb-2 dark:text-white">Company</h1>
                    <a href="" id="#home" className="hover:text-blue-600 duration-300 ease-in-out "> - About Us</a>
                    <a href="" id="#service" className="hover:text-blue-600 duration-300 ease-in-out "> - Careers</a>
                    <a href="/Features" className="hover:text-blue-600 duration-300 ease-in-out "> - Blog/News</a>

                </div>
                {/* Features  */}
                <div className="text-[#9CA3AF] text-md flex flex-col">
                    <h1 className="font-bold text-xl pb-2 dark:text-white">Service</h1>
                    <a className="hover:text-blue-600 duration-300 ease-in-out" href="./Features"> - Our Service</a>
                    <a className="hover:text-blue-600 duration-300 ease-in-out" href="./Features"> - Pricing</a>
                    <a className="hover:text-blue-600 duration-300 ease-in-out" href="./Features"> - Book a Delivery</a>
                    <a className="hover:text-blue-600 duration-300 ease-in-out" href="./Features"> - Track Your Order</a>

                </div>
                {/* Policy  */}
                <div className="text-[#9CA3AF] text-md flex flex-col">
                    <h1 className="font-bold text-xl pb-2 dark:text-white">Support</h1>
                    <a className="hover:text-blue-600 duration-300 ease-in-out" href="./Features"> - Help Center</a>
                    <a className="hover:text-blue-600 duration-300 ease-in-out" href="./Features"> - Contact Us</a>
                    <a className="hover:text-blue-600 duration-300 ease-in-out" href="./Features"> - Shipping Guidelines</a>
                    <a className="hover:text-blue-600 duration-300 ease-in-out" href="./Features"> - Terms & Conditions</a>
                    <a className="hover:text-blue-600 duration-300 ease-in-out" href="./Features"> - Privacy Policy</a>
                    
                </div>
                <div className="space-y-3">
                        <h1 className="text-xl text-white">Follow Us :</h1>
                        <div className="flex gap-2">
                            <a href="" className="text-xl flex items-center px-3 py-2 rounded-lg text-[#6B7280] bg-[#1E293B] hover:bg-[#007bff] hover:text-white">
                                <ion-icon name="logo-facebook" className="text-2xl"></ion-icon>
                            </a>
                            <a href="" className="text-xl flex items-center px-3 py-2 rounded-lg text-[#6B7280] bg-[#1E293B] hover:bg-[#db2777] hover:text-white">
                                <ion-icon name="logo-youtube" className="text-2xl"></ion-icon>
                            </a>
                            <a href="" className="text-xl flex items-center px-3 py-2 rounded-lg text-[#6B7280] bg-[#1E293B] hover:bg-[#0284c7] hover:text-white">
                                <ion-icon name="logo-linkedin" className="text-2xl"></ion-icon>
                            </a>
                            <a href="" className="text-xl flex items-center px-3 py-2 rounded-lg text-[#6B7280] bg-[#1E293B] hover:bg-[#1e40af] hover:text-white">
                                <ion-icon name="logo-instagram" className="text-2xl"></ion-icon>
                            </a>
                        </div>
                    </div>
            </div>
            
        {/* <hr className="mx-20 text-gray-500"/> */}
        <div className="lg:py-7 py-10 text-center dark:text-gray-300">
            <p>© 2025 Runspadi. All right reserved.</p>
        </div>
        </footer>
        </div>
        
    )
}
export default Footer;