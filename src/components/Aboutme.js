import React from "react";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <section
      id="aboutme-section"
      className="py-24 text-center bg-gradient-to-t from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <motion.section
        id="aboutme-section"
        // className="py-24 text-center bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          {/* Paragraphs */}
          <motion.div
            className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
          >
            <p>
              Hi, I'm{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Muhammad Asad Bilal
              </span>{" "}
              — a Frontend Developer based in Lahore, Pakistan. I specialize in
              building modern, responsive, and user-friendly web applications
              using <span className="font-medium">React</span> and{" "}
              <span className="font-medium">TailwindCSS,Bootstrap</span>.
            </p>

            <p>
              I focus on writing clean, efficient code and creating seamless
              user experiences that bring ideas to life. My goal is to craft
              fast, accessible, and visually appealing websites that perform
              well on all devices.
            </p>

            <p>
              I’m always open to learning new technologies and working on
              creative projects. If you have an idea or opportunity — let’s
              connect!
            </p>
          </motion.div>

          {/* Button Animation */}
          <motion.a
            href="https://wa.me/3027823434?text=Hi%20Muhammad%20Asad%20Bilal,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-xl hover:bg-indigo-700 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            Let’s Work Together
          </motion.a>
        </div>
      </motion.section>
    </section>
  );
};

export default Aboutme;
