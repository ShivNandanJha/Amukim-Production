"use client";
import { InView } from "../components/core/InView";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img1.jpg";
import img5 from "../assets/img4.jpg";
import img6 from "../assets/img5.jpg";
import img7 from "../assets/img8.jpg";
import img8 from "../assets/img9.jpg";
import img9 from "../assets/img10.jpg";
import img10 from "../assets/img11.jpg";
import img11 from "../assets/img12.jpg";
import img12 from "../assets/img13.jpg";
import img13 from "../assets/img14.jpg";
import img14 from "../assets/img15.jpg";
import img15 from "../assets/img16.jpg";
import img16 from "../assets/img17.jpg";
import img17 from "../assets/img18.jpg";
import img18 from "../assets/img19.jpg";
import img19 from "../assets/img19.jpg";

export function InViewImagesGrid() {
  return (
    <div className="h-full w-full overflow-auto mt-5">
      <div className="flex h-full items-end justify-center pb-12">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-2 gap-4 px-8 sm:columns-3">
            {[
              img1,
              img2,
              img3,
              img4,
              img5,
              img15,
              img16,
              img17,
              img18,
              img19,
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
              img7,
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
              img7,
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
              img7,
              img8,
              img9,
              img10,
              img11,
              img12,
              img13,
              img14,

              img6,
              img7,
              img8,
              img9,
              img10,
              img11,
              img12,
              img13,
              img14,
              img15,
              img16,
              img17,
              img18,
              img19,
            ].map((imgSrc, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                  key={index}
                  className="mb-4"
                >
                  <img
                    src={imgSrc}
                    alt={`Image placeholder from cosmos.so, index:${index}`}
                    className="size-full rounded-lg object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}
