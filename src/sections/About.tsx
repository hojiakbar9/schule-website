import React from "react";
import TextBox from "../components/TextBox";
import Card from "../components/Card";
import { LuBookOpen, LuHeart, LuStar } from "react-icons/lu";
import Citatation from "../components/Citatation";
import { motion } from "framer-motion";

const About = () => {
  const cardContents = [
    {
      icon: LuBookOpen,
      title: "Academic Growth",
      text: "We foster academic excellence through innovative teaching methods and personalized learning approaches.",
    },
    {
      icon: LuHeart,
      title: "Caring Environment",
      text: "Our school provides a nurturing and supportive atmosphere where every student feels valued and respected.",
    },
    {
      icon: LuStar,
      title: "Excellence in Education",
      text: "We strive for excellence in all aspects of education, preparing students for success in their future endeavors.",
    },
  ];

  return (
    <motion.section
      className="py-24 bg-background relative overflow-hidden"
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <TextBox />

        <motion.div
          className="flex flex-col gap-8 md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {cardContents.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card icon={card.icon} title={card.title} text={card.text} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Citatation
          ayah="رَّبِّ زِدْنِى عِلْمًا"
          translation='"My Lord, increase me in knowledge."'
          reference="Quran 20:114"
        />
      </motion.div>
    </motion.section>
  );
};

export default About;
