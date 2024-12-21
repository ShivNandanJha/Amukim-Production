import {
    PanInfo,
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
  } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img1.jpg';
import img5 from '../assets/img4.jpg';
import img6 from '../assets/img5.jpg';
import img7 from '../assets/img8.jpg';

const IMGS = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,img7

  ];

  export default function ThreeDPhotoCarousel() {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
    const faceCount = IMGS.length;
    const faceWidth = cylinderWidth / faceCount;
    const dragFactor = 0.05;
    const radius = cylinderWidth / (2 * Math.PI);

    const rotation = useMotionValue(0);
    const controls = useAnimation();

    const handleDrag = (_: MouseEvent | TouchEvent, info: PanInfo) => {
      rotation.set(rotation.get() + info.offset.x * dragFactor);
    };

    const handleDragEnd = (_: MouseEvent | TouchEvent, info: PanInfo) => {
      controls.start({
        rotateY: rotation.get() + info.velocity.x * dragFactor,
        transition: { type: "spring", stiffness: 100, damping: 30, mass: 0.1 },
      });
    };

    const transform = useTransform(rotation, (value) => {
      return `rotate3d(0, 1, 0, ${value}deg)`;
    });

    return (
      <>
        <div className="relative h-[500px] w-full overflow-hidden">
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12"
            style={{
              background:
                "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgb(26, 25, 27) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(26, 25, 27) 100%)",
            }}
          />
          <div
            className="flex h-full items-center justify-center bg-mauve-dark-2"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              transform: "rotateX(0deg)",
            }}
          >
            <motion.div
              drag="x"
              className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
              style={{
                transform: transform,
                rotateY: rotation,
                width: cylinderWidth,
                transformStyle: "preserve-3d",
              }}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              animate={controls}
            >
              {IMGS.map((url, i) => {
                return (
                  <div
                    key={i}
                    className="absolute flex h-full origin-center items-center justify-center bg-mauve-dark-2 p-2"
                    style={{
                      width: `${faceWidth}px`,
                      transform: `rotateY(${
                        i * (360 / faceCount)
                      }deg) translateZ(${radius}px)`,
                    }}
                  >
                    <img
                      src={url}
                      alt="img"
                      className="pointer-events-none h-[60%] w-[200%] rounded-xl object-cover "
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </>
    );
  }
