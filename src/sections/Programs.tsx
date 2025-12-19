import React from "react";
import ProgramCards from "../components/ProgramCards";
import { h2 } from "framer-motion/client";

const Programs = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative lg:ml-8 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="src\assets\bright_classroom_with_engaged_students.png"
                  alt="Students learning"
                  className="w-full h-auto object-cover aspect-4/3 "
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-8 text-center">
                  <p className="text-white italic text-xl ">
                    "Education is the most powerful weapon to change the world."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">
                Academics
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 ">
                Pathways to
                <br />
                Success
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <ProgramCards />
                <ProgramCards />
                <ProgramCards />
                <ProgramCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
