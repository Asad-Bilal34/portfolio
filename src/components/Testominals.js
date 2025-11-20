import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://i.pravatar.cc/150?img=1",
      name: "Ali Amad Khan",
      title: "Founder of Subtle Marketing",
      quote:
        "Muhammad Asad Bilal built a complete Expense Tracker app for our company Subtle Marketing. The application made our expense management process smooth and efficient. He is highly skilled in MERN Stack and delivers on time.",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=2",
      name: "Sarah Ahmed",
      title: "Project Manager at Innovita",
      quote:
        "Muhammad Asad Bilal has an excellent grasp of front-end development. His designs are elegant and his work ethic is top-notch. He understands business needs and converts them into clean interfaces.",
    },
    {
      avatar: "https://i.pravatar.cc/150?img=3",
      name: "Hassan Raza",
      title: "Freelance Client",
      quote:
        "Working with Muhammad Asad Bilal was seamless. He quickly understood my requirements and delivered a responsive website that exceeded expectations. Definitely recommend him!",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <motion.section
      id="testimonials-section"
      className="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Testimonials
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <p className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed">
                “{testimonials[currentTestimonial].quote}”
              </p>

              <div className="mt-8 flex flex-col items-center">
                <motion.img
                  key={testimonials[currentTestimonial].avatar}
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full border-4 border-indigo-500 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                />
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[currentTestimonial].title}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === idx
                    ? "bg-indigo-600 scale-125"
                    : "bg-gray-400 hover:bg-indigo-400"
                }`}
              ></button>
            ))}
          </div>

          {/* Arrows (optional for next/prev) */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
