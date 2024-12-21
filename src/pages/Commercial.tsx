import { useState, useEffect, useRef } from "react";

// Importing images from the local file system
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img1.jpg';
import img5 from '../assets/img4.jpg';
// import img6 from '../assets/img5.jpg';
// import img7 from '../assets/img8.jpg';

const imagesWithDescriptions = [
  { src: img5,heading:"Corporate Photography", description: "Professional images for brochures, websites, and marketing campaigns." },
  { src: img2, heading:"Event Photography", description: "Coverage for corporate events, conferences, and product launches." },
  { src: img3,heading:"Brand Storytelling",     description: "Unique visuals that tell your brand’s story, engaging your audience authentically." },
  { src: img1,heading:"Interior & Architecture", description: "High-quality photos to highlight real estate or design projects." },

];

const Commercial = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageList, setImageList] = useState([...imagesWithDescriptions]); // Initialize with images and descriptions
  const [, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight;

    setScrollPosition(scrollTop);

    // Infinite scroll: When reaching the bottom, append more images
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setImageList((prevImages) => [...prevImages, ...imagesWithDescriptions]);
    }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-container h-screen overflow-y-scroll no-scrollbar">
      {imageList.map((image, index) => (
        <div
          key={index}
          className="parallax-section w-full"
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className="overlay">
            <h1 className="text-5xl text-white font-bold items-center">{image.heading}</h1>
            <p className="text-5xl text-white text-[30px] p-4 ">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Commercial
