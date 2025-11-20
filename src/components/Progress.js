import React from "react";
import { motion } from "framer-motion";

const ProgressSection = () => {
  const skills = [
    { title: "UI/UX Design", percent: 80 },
    { title: "Front End Development", percent: 70 },
    { title: "Backend Development", percent: 30 },
  ];

  return (
    <motion.section
      id="progress-section"
      className="py-24 text-center bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Progress
        </motion.h2>

        {/* Skill Circles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center px-3">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: idx * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative w-32 h-32"
                whileHover={{
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.8 },
                }}
              >
                <svg className="w-32 h-32 transform -rotate-90">
                  {/* Background circle */}
                  <circle
                    className="text-gray-200 dark:text-gray-700"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                  />
                  {/* Animated progress circle */}
                  <motion.circle
                    className="text-indigo-600"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 50}
                    strokeDashoffset={2 * Math.PI * 50}
                    animate={{
                      strokeDashoffset:
                        2 * Math.PI * 50 -
                        (2 * Math.PI * 50 * skill.percent) / 100,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: idx * 0.2,
                    }}
                  />
                </svg>

                {/* Percentage label */}
                <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900 dark:text-white">
                  {skill.percent}%
                </span>
              </motion.div>

              <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-300">
                {skill.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProgressSection;
