import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// 1. IMPORT YOUR IMAGES HERE
// Make sure these filenames match exactly what is in your folder
import img1 from "../assets/gallery_1.jpg";
import img2 from "../assets/gallery_2.jpg";
import img3 from "../assets/gallery_3.jpg";
import img4 from "../assets/gallery_4.jpg";
import img5 from "../assets/gallery_5.jpg"; // Fixed "asssets" typo here

// Define the shape of your image data
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// 2. USE THE VARIABLES IN THE ARRAY
const galleryImages: GalleryImage[] = [
  { id: 1, src: img1, alt: "Students collaborating" },
  { id: 2, src: img2, alt: "Science lab experiment" },
  { id: 3, src: img3, alt: "Sports day event" },
  { id: 4, src: img4, alt: "Art class project" },
  { id: 5, src: img5, alt: "Graduation ceremony" },
];

const Gallery = () => {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isPaused, setIsPaused] = useState(false);

  // We duplicate the array to create the "infinite" scroll loop effect
  const duplicatedImages = [...galleryImages, ...galleryImages];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      // Scroll if not paused and on desktop/tablet (width >= 768px)
      if (!isPaused && window.innerWidth >= 768) {
        scrollContainer.scrollLeft += 1;

        // Reset scroll position when we reach halfway (the end of the first set of images)
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
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariant: Variants = {
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
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariant}
          >
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">
              Galerie
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Einblicke in den <br className="hidden md:block" /> Schulalltag
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
              // Use a unique key combining ID and index because of duplication
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
