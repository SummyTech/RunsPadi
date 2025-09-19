import deliveryImage from "../assets/delivery-img.svg"
const HowItWorks = () => {
    return(
        <section id="howitworks" className="h-screen py-20 items-center flex align-center justify-center">
           
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 py-12">
                {/* left Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-red-500 font-semibold text-4xl ">Fast Delivery</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-snug mt-2">Order Now, Recieve <br />Within 30mins</h1>
                    <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-md hover:bd-red-600 transition cursor-pointer ">Download App</button>
                </div>
                {/* Right Image */}
                <div className="flex-1 flex justify-center mb-8 md:mb-0">
                    <img 
                    src={deliveryImage}
                    alt="Delivery" 
                    className="w-full md:max-w-lg" />
                </div>
            </div>

        </section>
    )
}
export default HowItWorks;