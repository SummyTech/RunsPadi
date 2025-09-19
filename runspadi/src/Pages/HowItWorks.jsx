import deliveryImage from "../assets/delivery-img.svg"
import receivedImage from "../assets/received-img.svg"
const HowItWorks = () => {
    return(
        <section id="howitworks" className="lg:py-20 max-w-6xl mx-auto items-center">
        
            <div className="mx-auto gap-10 md:gap-20 flex flex-col-reverse lg:flex-row items-center px-6 lg:px-12 py-12">
                {/* left Content */}
                <div className="flex-1 space-y-3 text-center md:text-left">
                    <p className="text-[#E8505B] font-semibold text-4xl ">Fast Delivery</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-snug ">Order Now, Recieve Within 30mins</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti adipisci error omnis debitis commodi itaque aliquid modi eaque corrupti.</p>
                    <button className="px-6 py-3 bg-[#E8505B] text-white rounded-md hover:bd-red-600 transition cursor-pointer ">Download App</button>
                </div>
                {/* Right Image */}
                <div className="flex-1 flex justify-center mb-8 md:mb-0">
                    <img 
                    src={deliveryImage}
                    alt="Delivery" 
                    className="" />
                </div>
            </div>
            <div className="mx-auto gap-10 md:gap-20 flex flex-col-reverse lg:flex-row-reverse items-center px-6 lg:px-12 py-12">
                {/* left Content */}
                <div className="flex-1 space-y-3 text-center md:text-left">
                    <p className="text-[#E8505B] font-semibold text-3xl ">Contactless Delivery</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-snug ">On-time Delivery to Your Doorstep</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti adipisci error omnis debitis commodi itaque aliquid modi eaque corrupti.</p>
                    
                </div>
                {/* Right Image */}
                <div className="flex-1 flex justify-center mb-8 md:mb-0">
                    <img 
                    src={receivedImage}
                    alt="Delivery" 
                    className="" />
                </div>
            </div>

        </section>
    )
}
export default HowItWorks;