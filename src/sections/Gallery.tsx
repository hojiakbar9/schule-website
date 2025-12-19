import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// Define the shape of your image data
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// Updated to .jpg extension
const galleryImages: GalleryImage[] = [
  { id: 1, src: "src/assets/gallery_1.jpg", alt: "Students collaborating" },
  { id: 2, src: "src/assets/gallery_2.jpg", alt: "Science lab experiment" },
  { id: 3, src: "src/assets/gallery_3.jpg", alt: "Sports day event" },
  { id: 4, src: "src/assets/gallery_4.jpg", alt: "Art class project" },
  { id: 5, src: "src/assets/gallery_5.jpg", alt: "Graduation ceremony" },
];

const Gallery = () => {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isPaused, setIsPaused] = useState(false);

  const duplicatedImages = [...galleryImages, ...galleryImages];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      // Scroll if not paused and on desktop/tablet (width >= 768px)
      if (!isPaused && window.innerWidth >= 768) {
        scrollContainer.scrollLeft += 1;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section: Centered, no paragraph */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariant}
          >
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">
              Gallery
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Life at the <br className="hidden" /> School
            </h2>
          </motion.div>
        </div>

        {/* Gallery Container */}
        <motion.div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="
            flex flex-col gap-6 
            md:flex-row md:overflow-x-hidden md:pb-8 md:-mx-4 md:px-4 
            scrollbar-hide
          "
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariant}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              className="shrink-0 w-full md:w-[400px]"
              variants={cardVariant}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[450px] relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
