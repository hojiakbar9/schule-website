import ProgramCards from "../components/ProgramCards";
import { motion, type Variants } from "framer-motion";
import students_in_the_classroom from "../assets/bright_classroom_with_engaged_students.png";
const Programs = () => {
  // Content Data - clearly defined here for easy editing
  const programsData = [
    {
      title: "Quran & Tajweed",
      text: "Fundierte Ausbildung in korrekter Rezitation und Auswendiglernen für Kinder und Jugendliche.",
    },
    {
      title: "Arabisch lernen",
      text: "Strukturierter Sprachunterricht, der das Verständnis des Quran und der islamischen Texte fördert.",
    },
    {
      title: "Nachhilfe",
      text: "Unterstützung in schulischen Hauptfächern, um den akademischen Erfolg unserer Schüler zu sichern.",
    },
    {
      title: "Jugendarbeit",
      text: "Gemeinsame Aktivitäten, Ausflüge und Gesprächskreise zur Stärkung der Gemeinschaft.",
    },
  ];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="academics" className="py-24 bg-white">
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
                // Fixed path slashes for cross-platform compatibility
                src={students_in_the_classroom}
                alt="Schüler im Unterricht"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Fixed gradient syntax (bg-gradient-to-t) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-center">
                <p className="text-white italic text-xl font-medium">
                  "Bildung ist die mächtigste Waffe, um die Welt zu verändern."
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
                Unsere Angebote
              </motion.span>
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight"
                variants={fadeInUp}
              >
                Bildung für die
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Zukunft
                </span>
              </motion.h2>
            </motion.div>

            {/* Grid of Cards with Stagger Effect */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6" // Increased gap slightly for better breathing room
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {programsData.map((program, index) => (
                <motion.div key={index} variants={fadeInUp} className="h-full">
                  {/* Passing props to ProgramCards. 
                      If ProgramCards doesn't accept props yet, you need to update it! */}
                  <ProgramCards title={program.title} text={program.text} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
