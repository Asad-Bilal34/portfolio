import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Welcome to Asad Bilal Portfolio ";
  const charDelay = 100; // ms per char

  useEffect(() => {
    // use deterministic setTimeouts instead of a single setInterval
    const timers = [];
    for (let i = 0; i < fullText.length; i++) {
      timers.push(
        setTimeout(() => {
          setDisplayedText((prev) => prev + fullText.charAt(i));
        }, i * charDelay)
      );
    }

    // ensure we show full text if something interrupts (safety)
    const ensureFullTextTimer = setTimeout(() => {
      setDisplayedText(fullText);
    }, fullText.length * charDelay + 50);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(ensureFullTextTimer);
    };
  }, []); // run once

  // compute fade delay so fade only starts after typing finishes
  const typingDurationSec = (fullText.length * charDelay) / 1000;
  const fadeDelay = typingDurationSec + 0.6; // small buffer

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: fadeDelay }}
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold tracking-wide font-['Poppins'] text-white"
        >
          {displayedText}
          <span
            className="inline-block animate-pulse bg-indigo-500 ml-1"
            style={{
              width: "3px",
              height: "1.4em",
              transform: "translateY(3px)",
              boxShadow: "0 0 10px #6366f1",
            }}
            aria-hidden
          />
        </motion.h1>

        <p className="text-gray-400 mt-6 text-base md:text-xl font-light tracking-wide">
          Loading your experience...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
