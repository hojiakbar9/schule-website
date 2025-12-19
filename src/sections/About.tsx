import React from "react";
import TextBox from "../components/TextBox";
import Card from "../components/Card";
import { LuBookOpen, LuHeart, LuStar } from "react-icons/lu";
import Citatation from "../components/Citatation";
import { motion, type Variants } from "framer-motion";

const About = () => {
  const cardContents = [
    {
      icon: LuBookOpen,
      title: "Wissen & Bildung",
      text: "Wir fördern neugieriges Denken und akademische Exzellenz durch moderne Lehrmethoden und individuelle Betreuung.",
    },
    {
      icon: LuHeart,
      title: "Herz & Charakter",
      text: "Eine warme, familiäre Atmosphäre, in der sich jedes Kind geborgen fühlt. Wir legen Wert auf Respekt und emotionales Wachstum.",
    },
    {
      icon: LuStar,
      title: "Glaube & Ethik",
      text: "Wir leben islamische Werte wie Ehrlichkeit, Nächstenliebe und Verantwortung, um starke Persönlichkeiten für die Zukunft zu formen.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white pb-24 relative overflow-hidden" id="about">
      <TextBox />

      <div className="container mx-auto px-4 md:px-6 relative z-10 -mt-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" // items-stretch is default, but good to be explicit
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cardContents.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full" // <--- CRITICAL: Forces wrapper to fill grid cell
              whileHover={{ y: -10 }}
            >
              <Card icon={card.icon} title={card.title} text={card.text} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Citatation
            ayah="رَّبِّ زِدْنِى عِلْمًا"
            translation='"O mein Herr, mehre mein Wissen."'
            reference="Quran 20:114"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
