import serviceIcon1 from "../assets/service-icon-1.svg";
import serviceIcon2 from "../assets/service-icon-2.svg";
import serviceIcon3 from "../assets/service-icon-3.svg";
import serviceIcon4 from "../assets/service-icon-4.svg";
import serviceIcon5 from "../assets/service-icon-5.svg";
import serviceIcon6 from "../assets/service-icon-6.svg";

const features = [
  {
    icon: serviceIcon1,
    title: "Food",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
  },
  {
    icon: serviceIcon2,
    title: "Grocery",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
  },
  {
    icon: serviceIcon3,
    title: "Furniture",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
  },
  {
    icon: serviceIcon4,
    title: "Medicine",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
  },
  {
    icon: serviceIcon5,
    title: "Electronics",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
  },
  {
    icon: serviceIcon6,
    title: "Clothes",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
  },
];

const Service = () => {
    return(
        <section id="service" className="py-24 bg-white items-center space-y-3 align-center justify-center">
             <h1 className="text-[#E8505B] text-center font-bold text-3xl">Delivery Service</h1>
            <p className="text-center text-[#4B5563] text-4xl px-5 font-semibold">All Essentials You Need</p>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col bg-[#f7e7e8] p-5 rounded-2xl items-start space-y-4">
              <img src={feature.icon} alt="" />
              <h3 className="text-xl font-semibold text-[#E8505B]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
        </section>
    )
}
export default Service;