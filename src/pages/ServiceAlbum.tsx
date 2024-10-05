import  { useState, useEffect, useRef } from "react";


// Importing images from the local file system
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img1.jpg';
import img5 from '../assets/category-1.jpg';
import img6 from '../assets/category-2.jpg';
import img7 from '../assets/category-3.jpg';

const images = [img1, img2, img3, img4, img5,img6,img7];

const App = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageList, setImageList] = useState([...images]); // Initialize with local images
  const [, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight;

    setScrollPosition(scrollTop);

    // Infinite scroll: When reaching the bottom, append more images
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setImageList((prevImages) => [...prevImages, ...images]);
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
    <div ref={containerRef} className="scroll-container h-screen overflow-y-scroll no-scrollbar ">
      {imageList.map((image, index) => (
        <div
          key={index}
          className="parallax-section w-full"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="overlay">
            <h1 className="text-5xl text-white font-bold">Image {index + 1}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;