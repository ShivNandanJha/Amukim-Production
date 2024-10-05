
import { useParams } from 'react-router-dom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'; // Import Parallax components
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const serviceData = {
  portrait: {
    title: 'Portrait Photography',
    images: [
     img1,img2,img3,
    ],
  },
  wedding: {
    title: 'Wedding Photography',
    images: [
      img1,img2,img3,
    ],
  },
  // Add other services similarly...
};

const ServiceDetails = () => {
  const { serviceType } = useParams<{ serviceType: string }>();
  const service = serviceData[serviceType as keyof typeof serviceData] || serviceData.portrait;

  return (
    <ParallaxProvider>
      <section className="bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Fullscreen Parallax Images */}
          <div className="space-y-10">
            {service.images.map((image, index) => (
              <Parallax
                key={index}
                translateY={[-30, 30]} // Parallax effect
                tagOuter="figure"
                className="relative w-full h-screen"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  {/* Optionally, overlay some content */}
                </div>
              </Parallax>
            ))}
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default ServiceDetails;