import React from "react";
import { motion } from "framer-motion";

const TextBox = () => {
  return (
    <section className=" py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Eyebrow / Label */}
          <span className="text-accent text-sm uppercase font-bold mb-3 block tracking-widest">
            Unsere Mission
          </span>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            Bildung mit Herz und Verstand
          </h2>

          {/* Body Text */}
          <div className="font-accent text-secondary text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              Wir glauben daran, dass echte Bildung Wissen und Charakter
              vereint. In der Marburger Moschee schaffen wir eine Umgebung, in
              der schulisches Lernen und islamische Werte Hand in Hand gehen.
            </p>
            <p>
              Unser Ziel ist es, selbstbewusste junge Menschen heranzubilden,
              die ihre Religion kennen, ihre Gemeinschaft schätzen und
              verantwortungsvoll ihre Zukunft in der Gesellschaft gestalten.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TextBox;
