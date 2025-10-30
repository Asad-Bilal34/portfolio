import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div
        className="max-w-screen-xl mx-auto px-4 py-20 md:flex md:items-center md:gap-12"
        data-aos="fade-up"
      >
        {/* 📱 Mobile Image (Top) */}
        <div className="flex justify-center mb-8 md:hidden">
          <img
            src="/image.jpg"
            alt="Profile"
            className="w-48 h-48 object-cover object-top shadow-xl border-4 border-indigo-500 rounded-full mx-auto md:w-full md:max-w-md md:h-auto md:rounded-2xl md:border md:border-gray-200"
          />
        </div>

        {/* 💻 Desktop Image (Left Side) */}
        <div className="flex-1 hidden md:flex items-center justify-center">
          <img
            src="/image.jpg"
            alt="Profile"
            className="w-40 h-40 object-cover shadow-xl border-4 border-indigo-500 rounded-full mx-auto md:w-full md:max-w-md md:h-auto md:rounded-2xl md:border md:border-gray-200"
          />
        </div>

        {/* 📝 Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Title Animation */}
          <motion.h1
            className="text-2xl md:text-4xl font-bold whitespace-nowrap text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              words={["Front End Developer"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </motion.h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-lg mx-auto md:mx-0 text-gray-700 dark:text-gray-300 leading-relaxed">
            Showcasing my expertise in modern web development, creating fast,
            responsive and user-friendly websites that drive results.
          </p>

          {/* Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <motion.a
              href="/AsadResume.pdf"
              download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-x-2 px-6 py-3 text-white bg-indigo-600 rounded-full shadow-md hover:bg-indigo-700 transition"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm7 11a1 1 0 01-1-1V7.414L7.707 9.707a1 1 0 01-1.414-1.414l3.999-4a1 1 0 011.416 0l4 4a1 1 0 01-1.416 1.414L11 7.414V13a1 1 0 01-1 1z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>
          {/* 🌐 Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            {[
              {
                href: "https://www.facebook.com/asad.bilal.309263",
                icon: <FaFacebookF />,
              },
              {
                href: "https://www.linkedin.com/in/asad-bilal-4b1038363/",
                icon: <FaLinkedinIn />,
              },
              {
                href:  "https://github.com/Asad-Bilal34",
                icon: <FaGithub />,
              },
            ].map(({ href, icon }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-indigo-600 transition-all shadow-md"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
