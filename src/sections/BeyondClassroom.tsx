import React from "react";
import { motion } from "framer-motion";
import {
  FaMosque,
  FaUsers,
  FaTree,
  FaBookOpen,
  FaQuoteLeft,
} from "react-icons/fa";

// Data for the 4 pillars of school life
const activities = [
  {
    id: 1,
    title: "Spiritual Foundation",
    description:
      "We nurture the soul through daily prayers, Adhkar sessions, and practical Islamic etiquette, ensuring students grow with a strong connection to their Creator.",
    icon: <FaMosque className="w-8 h-8" />,
    color: "bg-primary", // Navy
  },
  {
    id: 2,
    title: "Community & Family",
    description:
      "Education is a family journey. We host regular social gatherings where parents and children bond, strengthening the ties that make our community unique.",
    icon: <FaUsers className="w-8 h-8" />,
    color: "bg-secondary", // Slate
  },
  {
    id: 3,
    title: "Camps & Recreation",
    description:
      "From summer camps to weekend excursions, we believe in learning through adventure. These activities build character, resilience, and lifelong friendships.",
    icon: <FaTree className="w-8 h-8" />,
    color: "bg-accent", // Gold
  },
  {
    id: 4,
    title: "Quran Competitions",
    description:
      "Excellence is encouraged through friendly competition. Our annual Quran and Islamic knowledge contests inspire students to strive for their best.",
    icon: <FaBookOpen className="w-8 h-8" />,
    color: "bg-primary", // Navy
  },
];

const BeyondClassroom = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">
              Student Life
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Beyond the Classroom
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
              We believe education extends far beyond textbooks. Our holistic
              approach integrates faith, fun, and community into the daily lives
              of our students.
            </p>
          </motion.div>
        </div>

        {/* 2x2 Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {activities.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-2xl border border-gray-100 shadow-lg bg-white p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Decorative Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Icon Box */}
              <div
                className={`shrink-0 w-16 h-16 rounded-xl ${item.color} flex items-center justify-center text-white shadow-md transform group-hover:rotate-6 transition-transform duration-300`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hadith Section */}
        <motion.div
          className="max-w-2xl mx-auto text-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Decorative Background Container */}
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-accent/20 relative overflow-hidden">
            {/* Background Decoration Icon */}
            <FaQuoteLeft className="absolute top-4 left-4 text-accent/10 text-6xl" />

            <div className="relative z-10">
              {/* Arabic Text */}
              {/* 'font-arabic' class must be defined in your CSS/Tailwind config */}
              <h3
                className="font-arabic text-3xl md:text-5xl text-primary mb-6 leading-relaxed drop-shadow-sm"
                dir="rtl"
              >
                خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ
              </h3>

              {/* Separator */}
              <div className="w-16 h-1 bg-accent/40 mx-auto mb-6 rounded-full" />

              {/* English Translation */}
              <p className="text-secondary text-lg md:text-xl italic mb-3 font-medium">
                "The best of people are those who are most beneficial to
                people."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondClassroom;
