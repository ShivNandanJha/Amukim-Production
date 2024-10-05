import Hero from "../pages/Hero";
import AboutMe from "../pages/About";
import Services from "../pages/Services";
import Testimonial from "../pages/Testimonials";
import ContactUsSection from "../pages/Contact";

function Homepage() {
  return (
    <div className=" h-full w-full bg-black no-scrollbar">

          <Hero />
          <AboutMe />
        <Services />
        <Testimonial />
        <ContactUsSection/>
        </div>


  );
}

export default Homepage;
