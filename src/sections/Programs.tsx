import ProgramCards from "../components/ProgramCards";
import { motion } from "framer-motion";

const Programs = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Column: Image Section */}
            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
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
            </motion.div>

            {/* Right Column: Content Section */}
            <div className="lg:w-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.1 }}
              >
                <motion.span
                  className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block"
                  variants={fadeInUp}
                >
                  Academics
                </motion.span>
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-primary mb-8 "
                  variants={fadeInUp}
                >
                  Pathways to
                  <br />
                  Success
                </motion.h2>
              </motion.div>

              {/* Grid of Cards with Stagger Effect */}
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* We wrap custom components in motion.div to animate them without touching component internals */}
                <motion.div variants={fadeInUp}>
                  <ProgramCards />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <ProgramCards />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <ProgramCards />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <ProgramCards />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
