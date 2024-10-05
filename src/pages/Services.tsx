import { Link } from "react-router-dom";
import cat1 from "../assets/category-1.jpg";
import cat2 from "../assets/category-2.jpg";
import cat3 from "../assets/category-3.jpg";
import cat4 from "../assets/category-4.jpg";
import cat5 from "../assets/category-5.jpg";

const services = [
  {
    name: "Portrait Photography",
    image: cat1,
    route: "/services/portrait",
  },
  {
    name: "Wedding Photography",
    image: cat2,
    route: "/services/wedding",
  },
  {
    name: "Commercial Photography",
    image: cat3,
    route: "/services/commercial",
  },
  {
    name: "Landscape Photography",
    image: cat4,
    route: "/services/landscape",
  },
  {
    name: "Fashion Photography",
    image: cat5,
    route: "/services/fashion",
  },
  {
    name: "Model Photography",
    image: cat2,
    route: "/services/model",
  },
];

const Services = () => {
  return (
    <section className="relative services-section py-20 ">
      <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-8xl font-bold mb-10 font-Babes">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-item relative group">
              {/* Background Image */}
              <div
                className="service-bg transition-all duration-500 ease-in-out grayscale hover:grayscale-0"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Service Name */}
              <h3 className="font-DMSans service-name absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                {service.name}
              </h3>

              {/* "See More" Button */}
              <div className="see-more-button absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link to={service.route || "/"}>
                  <button className="relative inline-flex h-12 w-30 items-center justify-center rounded-md bg-white px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                    <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                    Click Me
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;