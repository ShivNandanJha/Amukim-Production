import{ useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import logo from "../assets/logo.png";

const Hero = () => {
  const images = [img1, img2,img3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(slideInterval); // Clear interval when component unmounts
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen Slideshow */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Intro Text in the Middle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <img src={logo} alt="Logo" className="w-40" />
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg font-Babes">
          Amukim Production
              </h1>
              <p className=" w-1/2 md:w-auto  md:p-10 text-2xl text-white drop-shadow-lg font-DMSans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil reiciendis dolor aut animi laudantium expedita ut. Repellendus, voluptatibus. Nobis, quaerat?</p>
      </div>
    </div>
  );
};

export default Hero;
