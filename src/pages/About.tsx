import About from '../assets/about.jpg'

const AboutUs = () => {
  return (
    <section className="relative bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Left Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={About}
            alt="About Me"
            className="w-[80%] sm:w-[110%] h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Right Text Content */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-8xl font-bold mb-4 font-Babes">Hi, I am <br /> Anmol Gurang</h2>
          <h3 className="text-4xl mb-4 font-DMSans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, minus.</h3>
          <p className="text-gray-400 font-DMSans">
            I am a passionate photographer dedicated to capturing moments that tell stories. With a focus on creativity and attention to detail, I strive to provide stunning images that you will cherish forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
