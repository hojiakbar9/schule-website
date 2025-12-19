import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  // Current Year for Copyright
  const currentYear = new Date().getFullYear();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section: Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: School Brand & Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Marburger <span className="text-accent">Moschee</span>
            </h3>
            <p className="font-accent text-gray-400 text-sm leading-relaxed max-w-sm">
              Exzellenz in Bildung und spirituellem Wachstum. Eine Gemeinschaft
              im Herzen von Marburg, die sich Wissen, Hilfsbereitschaft und
              Charakterbildung widmet.
            </p>
            {/* Social Icons (Optional Placeholder) */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/marburgermoschee/"
                className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://www.instagram.com/marburger_moschee/"
                className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
              >
                <FaInstagram size={14} />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Contact Us & Location */}
          <motion.div variants={itemVariants}>
            <h4
              id="contact"
              className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block"
            >
              Kontakt
            </h4>
            <ul className="font-accent space-y-4 text-gray-400 text-sm">
              {/* Location */}
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-accent mt-1 mr-3 shrink-0" />
                <span>
                  Marburger Moschee e.V.
                  <br />
                  Bei St. Jost 13
                  <br />
                  35039 Marburg, Deutschland
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center hover:text-accent transition-colors">
                <FaPhoneAlt className="text-accent mr-3 shrink-0" />
                <a href="tel:+496421123456">06421/ 98 35 173</a>
              </li>

              {/* Email */}
              <li className="flex items-center hover:text-accent transition-colors">
                <FaEnvelope className="text-accent mr-3 shrink-0" />
                <a href="mailto:info@marburger-moschee.de">
                  info@marburger-moschee.de
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Rechtliches (Legal) */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">
              Rechtliches
            </h4>
            <ul className="font-accent space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="https://www.marburger-moschee.de/impressum/"
                  className="flex items-center hover:text-accent transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="https://www.marburger-moschee.de/datenschutzerklaerung/"
                  className="flex items-center hover:text-accent transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-accent transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Cookie-Einstellungen
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Copyright */}
        <motion.div
          className="font-accent pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Marburger Moschee. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-600 text-xs mt-2 md:mt-0">
            Gestaltet für die Gemeinschaft.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
