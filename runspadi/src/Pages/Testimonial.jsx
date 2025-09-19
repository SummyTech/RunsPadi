import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import testimony1 from "../assets/testimonial-1.png";
import testimony2 from "../assets/testimonial-2.png";
import testimony3 from "../assets/testimonial-3.png";   
import testimony4 from "../assets/testimonial-4.png";
import testimony5 from "../assets/testimonial-5.png";
import testimony6 from "../assets/testimonial-6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  const testimonials = [
    {
      img: testimony1,
      handle: "@maxine",
      name: "Maxine Gilmer",
      role: "Web designer",
      testimony: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ",
    },
    {
      img: testimony2,
      handle: "@michael",
      name: "Michael Ellis",
      role: "UI/UX designer",
      testimony: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ",
    },
    {
      img: testimony3,
      handle: "@ruben",
      name: "Ruben Gouse",
      role: "Web developer",
      testimony: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ",
    },
    {
      img: testimony4,
      handle: "@john",
      name: "John Smith",
      role: "Backend developer",
      testimony: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ",
    },
    {
      img: testimony5,
      handle: "@susan",
      name: "Susan Lee",
      role: "Project Manager",
      testimony: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ",
    },
    {
      img: testimony6,
      handle: "@david",
      name: "David Brown",
      role: "Mobile Developer",
      testimony: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ",
    },
  ];

  return (
    <section id="testimonials" className="py-10">
      <div className=" py-16 px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[#E8505B] text-center text-2xl ">
            Testimonials
          </h1>
          <h2 className="text-4xl font-bold text-center text-[#1F2937] px-1">
            What Our Users Says
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },      // mobile
              640: { slidesPerView: 2 },    // small tablets
              1024: { slidesPerView: 3 },   // desktops
            }}
            className="pb-12 custom-swiper"
          >
            {testimonials.map((member, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white h-full rounded-2xl shadow-md p-8 text-left flex flex-col ">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-16 w-16 rounded-md object-cover mb-4"
                  />
                  <span className="text-sm text-gray-500">{member.handle}</span>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {member.testimony}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
