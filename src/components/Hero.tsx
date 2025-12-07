import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[600px] h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover animate-fade-in-scale"
        src="src/assets/quran-background.jpg"
        alt="Hero background"
      />
      <div className="absolute inset-0 bg-black/40 animate-fade-in-scale"></div>

      {/* Hero Text */}
      <div className="relative mx-5 text-white flex md:ml-2 lg:ml-10 flex-col z-10 h-full justify-center max-w-[630px]">
        {/* Small caption */}
        <span className="inline-block bg-secondary/50 rounded-lg self-start uppercase mb-5 ml-3 px-2 py-1 animate-slide-in-left">
          Exzellenz im Glauben & in der Bildung
        </span>

        {/* Main title and paragraph */}
        <div className="px-4 animate-slide-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold pb-6">
            Quran und Arabisch <span className="italic"></span>
          </h1>
          <p className="text-lg md:text-xl pb-8">
            Marburger Moschee bietet eine ganzheitliche Ausbildung, die
            anspruchsvolle akademische Inhalte mit zeitlosen islamischen Werten
            verbindet und Schüler darauf vorbereitet, mit Charakter und
            Selbstvertrauen zu führen.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#learn-more"
              className="bg-accent text-primary font-semibold px-6 py-3 rounded-lg text-center transition transform hover:scale-105 hover:bg-accent/90 animate-[var(--animate-slide-in-up)]"
            >
              Mehr erfahren
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg text-center transition transform hover:scale-105 hover:bg-white hover:text-primary animate-[var(--animate-slide-in-up)]"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
