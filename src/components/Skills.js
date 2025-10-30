import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaDatabase, FaWordpress } from "react-icons/fa";
import { SiPostman, SiJavascript } from "react-icons/si";

const About = () => {
  const features = [
    {
      icon: <FaHtml5 className="w-6 h-6" />,
      title: "HTML & CSS",
      desc: "Strong foundation in building responsive and structured web pages using HTML5 and modern CSS3.",
    },
    {
      icon: <SiJavascript className="w-6 h-6" />,
      title: "JavaScript & React",
      desc: "Hands-on experience with JavaScript fundamentals and creating interactive UIs with React.",
    },
    {
      icon: <FaCss3Alt className="w-6 h-6" />,
      title: "Tailwind CSS & Bootstrap",
      desc: "Capable of designing clean, responsive, and modern layouts using popular CSS frameworks.",
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "SQL, MongoDB & Firebase",
      desc: "Basic understanding of database design, queries, and working with cloud-based databases.",
    },
    {
      icon: <SiPostman className="w-6 h-6" />,
      title: "Postman",
      desc: "Familiar with testing REST APIs and debugging backend services using Postman.",
    },
    {
      icon: <FaWordpress className="w-6 h-6" />,
      title: "WordPress & Shopify",
      desc: "Ability to build and customize simple websites and e-commerce stores with WordPress and Shopify.",
    },
  ];

  return (
    <motion.section
      id="skills-section"
      className="py-24 text-center bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold sm:text-4xl text-gray-900 dark:text-white">
            What I Do Best
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            As a fresher, I’ve been sharpening my skills in modern web
            technologies and continuously learning to improve. Here are the key
            areas I’m confident in:
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center px-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="group space-y-3 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 10px 25px rgba(79,70,229,0.3)",
              }}
            >
              <div className="w-14 h-14 mx-auto bg-indigo-50 dark:bg-gray-700 text-indigo-600 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-3">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
