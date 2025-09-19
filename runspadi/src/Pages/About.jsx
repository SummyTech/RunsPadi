import aboutImage from"../assets/about-img.svg"
const About = () => {
    return(
        <section id="about" className="h-screen py-20  items-center flex align-center justify-center">
            
             {/* Left Image */}
        <div className="flex-1 flex justify-center md:flex-col-reverse ml-5">
          <img
            src={aboutImage}
            alt="About Us Illustration"
            className="w-full md:max-w-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-red-500 font-semibold uppercase text-4xl">About Us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            On-time Delivery and <br /> Customer Satisfaction
          </h2>
          {/* <p className="mt-4 text-gray-500 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </p> */}

          {/* Rating */}
          <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
            <span className="font-semibold text-gray-800">Rating 4.8</span>
            <div className="flex text-yellow-400 text-lg">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 flex sm:grid-cols-3 gap-4 bg-red-500 text-white p-4 rounded-lg shadow-md text-center h-25 w-115">
            <div className="mr-10">
                <h3 className="text-2xl font-bold">1M+</h3>
                <p className="text-sm">Download</p>
            </div>
             
             <hr className=" color-white grid-cols-1"/>
            <div className="mr-10">
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