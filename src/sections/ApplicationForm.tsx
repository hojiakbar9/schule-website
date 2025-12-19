import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaChild,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

const ApplicationForm = () => {
  // Simple state to handle form focus for styling
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden" id="apply">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Persuasive Text */}
          <motion.div
            className="lg:w-5/12 text-white pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">
              Start Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Join Our Community?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Take the first step towards an education that nurtures both the
              mind and the soul. Fill out this initial form, and our admissions
              team will reach out to schedule your screening call.
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-4 border-t border-white/10 pt-8">
              <div className="flex items-center text-gray-300">
                <FaPhone className="text-accent mr-4" />
                <span>+49 6421 123456 (Admissions Office)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="text-accent mr-4" />
                <span>admissions@marburger-moschee.de</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div
            className="lg:w-7/12 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <form className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Parent Name */}
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-primary mb-2">
                    Parent / Guardian Name
                  </label>
                  <div
                    className={`flex items-center border-2 rounded-xl px-4 py-3 transition-colors ${
                      focusedField === "parent"
                        ? "border-accent"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <FaUser className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="bg-transparent w-full outline-none text-primary"
                      onFocus={() => setFocusedField("parent")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Child Name */}
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-primary mb-2">
                    Student Name
                  </label>
                  <div
                    className={`flex items-center border-2 rounded-xl px-4 py-3 transition-colors ${
                      focusedField === "student"
                        ? "border-accent"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <FaChild className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="bg-transparent w-full outline-none text-primary"
                      onFocus={() => setFocusedField("student")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-primary mb-2">
                    Phone Number
                  </label>
                  <div
                    className={`flex items-center border-2 rounded-xl px-4 py-3 transition-colors ${
                      focusedField === "phone"
                        ? "border-accent"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <FaPhone className="text-gray-400 mr-3" />
                    <input
                      type="tel"
                      placeholder="+49 ..."
                      className="bg-transparent w-full outline-none text-primary"
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-primary mb-2">
                    Email Address
                  </label>
                  <div
                    className={`flex items-center border-2 rounded-xl px-4 py-3 transition-colors ${
                      focusedField === "email"
                        ? "border-accent"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <FaEnvelope className="text-gray-400 mr-3" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-transparent w-full outline-none text-primary"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Grade Level (Select) */}
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-primary mb-2">
                    Applying for Grade
                  </label>
                  <div
                    className={`flex items-center border-2 rounded-xl px-4 py-3 transition-colors ${
                      focusedField === "grade"
                        ? "border-accent"
                        : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <FaGraduationCap className="text-gray-400 mr-3" />
                    <select
                      className="bg-transparent w-full outline-none text-primary cursor-pointer"
                      onFocus={() => setFocusedField("grade")}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="">Select a grade...</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      {/* Add more grades as needed */}
                    </select>
                  </div>
                </div>

                {/* Additional Comments */}
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-primary mb-2">
                    Any Questions?
                  </label>
                  <textarea
                    rows={3}
                    className={`w-full border-2 rounded-xl px-4 py-3 outline-none transition-colors ${
                      focusedField === "message"
                        ? "border-accent"
                        : "border-gray-100 bg-gray-50"
                    }`}
                    placeholder="Tell us about your child's interests or ask a question..."
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button" // Change to submit when connected to backend
                className="w-full mt-8 bg-accent text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Submit Application
              </button>

              <p className="text-center text-gray-400 text-xs mt-4">
                By submitting, you agree to our privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
