import React from "react";
import { motion, type Variants } from "framer-motion";

const Hero = () => {
  // Animation Variants
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    // min-h-[100dvh] ensures it covers the full viewport height initially
    // but allows content to expand vertically if needed (preventing clipping)
    <div className="relative w-full min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
      >
        <img
          className="w-full h-full object-cover"
          src="src/assets/quran-background.jpg"
          alt="Hero background"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Hero Content */}
      {/* Added pb-24 to ensure buttons are never cut off on short screens */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-24">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.span
            variants={textVariants}
            className="text-accent font-accent font-bold tracking-widest text-sm uppercase mb-4 block"
          >
            Willkommen bei der Marburger Moschee
          </motion.span>

          {/* Main Title */}
          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Quran und Arabisch <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              für die Zukunft
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={textVariants}
            className="font-accent text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
          >
            Marburger Moschee bietet eine ganzheitliche Ausbildung, die
            anspruchsvolle akademische Inhalte mit zeitlosen islamischen Werten
            verbindet und Schüler darauf vorbereitet, mit Charakter und
            Selbstvertrauen zu führen.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={textVariants}
            className="font-accent flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#about"
              className="bg-accent text-white font-bold px-8 py-4 rounded-full text-center transition-all transform hover:scale-105 hover:bg-opacity-90 shadow-lg hover:shadow-xl"
            >
              Mehr erfahren
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full text-center transition-all transform hover:scale-105 hover:bg-white hover:text-primary"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
