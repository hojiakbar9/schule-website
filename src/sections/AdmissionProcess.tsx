import { motion, type Variants } from "framer-motion";
import {
  FaFileSignature,
  FaPhoneVolume,
  FaCreditCard,
  FaUserGraduate,
} from "react-icons/fa";

// Data Structure with React Icons
const steps = [
  {
    id: 1,
    title: "Online-Anmeldung",
    description:
      "Füllen Sie unser Online-Formular aus, um uns die wichtigsten Daten zu Ihrem Kind zu übermitteln.",
    icon: <FaFileSignature className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Kennenlerngespräch",
    description:
      "Wir vereinbaren einen Termin, um die Ziele und Bedürfnisse des Schülers persönlich zu besprechen.",
    icon: <FaPhoneVolume className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Zahlung & Bestätigung",
    description:
      "Nach der Zusage sichern Sie den Schulplatz durch die Überweisung der Schulgebühren.",
    icon: <FaCreditCard className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Einschulung",
    description:
      "Willkommen an Bord! Sie erhalten alle Unterlagen und nehmen an der Orientierungsveranstaltung teil.",
    icon: <FaUserGraduate className="w-8 h-8" />,
  },
];

const AdmissionProcess = () => {
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-2 block">
              Anmeldung
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Der Weg zur Aufnahme
            </h2>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 -z-10" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className="flex flex-col items-center text-center relative"
              >
                {/* Icon Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-lg z-10 relative border-4 border-white transition-transform duration-300 hover:scale-110">
                    {step.icon}
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent border-2 border-white flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm font-accent">
                  {step.description}
                </p>

                {/* Mobile Connector (Vertical Line) - visual only for mobile stack */}
                {step.id !== 4 && (
                  <div className="md:hidden absolute -bottom-12 left-1/2 w-0.5 h-8 bg-gray-200 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="font-accent px-8 py-3 rounded-full bg-accent text-white font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <a href="#apply">Anmeldung starten</a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
