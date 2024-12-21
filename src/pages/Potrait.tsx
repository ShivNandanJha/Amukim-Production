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
  { src: img5,heading:"Lifestyle Portraits", description: "Highlight your everyday moments in a natural and relaxed setting, showcasing your story." },
  { src: img2, heading:"Professional Headshots", description: "Perfect for resumes, social media profiles, and corporate use, presenting you at your best." },
  { src: img3,heading:"Family Portraits",     description: "Cherish the bond with your loved ones through beautiful group photos that last a lifetime." },
  { src: img1,heading:"Creative Portraits", description: "Experiment with styles, lighting, and props to create artistic portraits tailored to your personality." },
  
];

const Potrait = () => {
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

export default Potrait
