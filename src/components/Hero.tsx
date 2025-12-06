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
        <span className="inline-block bg-secondary/50 rounded-lg self-start uppercase mb-5 ml-3 px-2 py-1 animate-[var(--animate-slide-in-left)]">
          Excellence in faith & academics
        </span>

        {/* Main title and paragraph */}
        <div className="px-4 animate-slide-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold pb-6">
            Nurturing Hearts, <span className="italic">Inspiring Minds</span>.
          </h1>
          <p className="text-lg md:text-xl">
            We provide a holistic education that integrates rigorous academics
            with timeless Islamic values, preparing students to lead with
            character and confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
