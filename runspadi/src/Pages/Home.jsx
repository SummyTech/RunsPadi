import homeImage from "../assets/hero-img.svg"
const Home = () => {
    return(
        <section id="home" className="h-screen bg-white items-center flex align-center justify-center">
            
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl  text-gray-900 leading-snug">
            <span className="text-gray-900 font-bold">Home Delivery</span> From <br />
            Stores <span className="text-gray-900">Near You</span>
          </h1>
          {/* <p className="mt-4 text-gray-500 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.
          </p> */}
          <button className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition cursor-pointer">
            Download App
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={homeImage}
            alt="Home image"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
        </section>
        
      
    )
}
export default Home;