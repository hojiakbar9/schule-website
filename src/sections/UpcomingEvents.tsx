import React from "react";
import { motion } from "framer-motion";

// 1. TypeScript Interfaces
interface Event {
  id: number;
  type: "Academic" | "Community" | "Service";
  title: string;
  day: string;
  month: string;
  time: string;
  location: string;
}

// 2. Sample Data
const events: Event[] = [
  {
    id: 1,
    type: "Academic",
    title: "Annual Science Fair",
    day: "15",
    month: "NOV",
    time: "09:00 AM - 02:00 PM",
    location: "Main Auditorium Hall",
  },
  {
    id: 2,
    type: "Community",
    title: "Fall Harvest Festival",
    day: "22",
    month: "NOV",
    time: "03:00 PM - 07:00 PM",
    location: "School Courtyard",
  },
  {
    id: 3,
    type: "Service",
    title: "Charity Food Drive",
    day: "05",
    month: "DEC",
    time: "08:30 AM - 12:00 PM",
    location: "Community Center",
  },
];

// Helper: Map types to your Theme Colors
const getTypeColor = (type: string) => {
  switch (type) {
    case "Academic":
      return "bg-primary"; // #172436
    case "Community":
      return "bg-accent"; // #d19847
    case "Service":
      return "bg-secondary"; // #52637a
    default:
      return "bg-primary";
  }
};

const UpcomingEvents = () => {
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
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    // Updated background to your specific off-white hex
    <section className="py-24 bg-[#fbfaf8]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">
              Calendar
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Upcoming Events
            </h2>
          </motion.div>
        </div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex bg-white rounded-2xl shadow-xl overflow-hidden min-h-[220px] group border border-gray-100/50"
            >
              {/* Left Column: Event Type (Color Coded) */}
              <div
                className={`${getTypeColor(
                  event.type
                )} w-12 md:w-14 flex items-center justify-center shrink-0 transition-colors duration-300`}
              >
                <span className="text-white font-bold tracking-widest text-xs uppercase -rotate-90 whitespace-nowrap">
                  {event.type}
                </span>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6 relative">
                {/* Date Badge (Top Right) */}
                {/* Using bg-[#fbfaf8] here to match the section background for a "cutout" feel, or gray-100 */}
                <div className="absolute top-0 right-0 bg-[#fbfaf8] px-4 py-2 rounded-bl-2xl text-center min-w-[70px]">
                  <span className="block text-xl font-bold text-primary leading-none">
                    {event.day}
                  </span>
                  <span className="block text-xs font-bold text-secondary uppercase">
                    {event.month}
                  </span>
                </div>

                {/* Event Details */}
                <div className="mt-8 pr-12">
                  <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2">
                    {/* Time */}
                    <div className="flex items-center text-secondary text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {event.time}
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-secondary text-sm">
                      <svg
                        className="w-4 h-4 mr-2 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300">
            View Full Calendar
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
