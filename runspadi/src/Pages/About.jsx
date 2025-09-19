import aboutImage from"../assets/about-img.svg"
const About = () => {
    return(
        <section id="about" className="py-24 flex max-lg:flex-col items-center lg:px-6 lg:gap-20 lg:flex lg:max-w-6xl lg:mx-auto ">
            
             {/* Left Image */}
        <div className="flex-1 justify-center max-md:px-5 md:flex-col-reverse">
          <img
            src={aboutImage}
            alt="About Us Illustration"
            className="w-full md:max-w-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 lg:space-y-3 space-y-6 max-lg:py-10 mx-2 md:mx-10 lg:mx-10 text-center md:text-left">
          <p className="text-[#E8505B] font-semibold text-3xl">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            On-time Delivery and Customer Satisfaction
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </p>

          {/* Rating */}
          <div className=" flex items-center justify-center md:justify-start gap-2">
            <span className="font-semibold text-gray-800">Rating 4.8</span>
            <div className="flex text-yellow-400 text-lg">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>

          {/* Stats */}
          <div className="max-md:mx-2 flex justify-between lg:gap-4 px-5 bg-[#E8505B] text-white md:px-30 py-4 rounded-lg shadow-md text-center">
            <div className="">
                <h3 className="text-2xl font-bold">1M+</h3>
                <p className="text-sm">Download</p>
            </div>
             
             <hr className=" color-white grid-cols-1"/>
            <div className="">
                 <h3 className="text-2xl font-bold">234K+</h3>
                <p className="text-sm w-20" >Happy User</p>
            </div>
           
            <hr />
            <div className="">
                <h3 className="text-2xl font-bold">34K+</h3>
                <p className="text-sm">Reviews</p>
            </div>
            
          </div>
        </div>
        </section>
    )
}
export default About;