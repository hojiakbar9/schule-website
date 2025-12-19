import React from "react";
import { motion, type Variants } from "framer-motion";

const Stats = () => {
  // Data: Update these numbers to match the actual school data
  const statsData = [
    {
      value: "10+",
      label: "Jahre Tradition",
    },
    {
      value: "100+",
      label: "Aktive Schüler",
    },
    {
      value: "20+",
      label: "Engagierte Lehrkräfte",
    },
    {
      value: "100%",
      label: "Gemeinschaft",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="stats" className="relative bg-primary overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Statistic Number */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-gray-300 font-medium tracking-wider text-sm md:text-base uppercase">
                {stat.label}
              </p>

              {/* Decorative Separator (Hidden on last item, different logic for mobile/desktop) */}
              {index !== statsData.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10 translate-x-4 lg:translate-x-8" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
