import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 mt-16 border-t border-gray-700 shadow-[0_-4px_20px_rgba(79,70,229,0.15)]">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Text */}
        <p className="text-center md:text-left text-sm md:text-base text-gray-400 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Muhammad Asad Bilal</span>. All
          rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {[
            {
              href: "https://www.facebook.com/asad.bilal.309263",
              icon: <FaFacebookF />,
              label: "Facebook",
            },
            {
              href: "https://www.linkedin.com/in/asad-bilal-4b1038363/",
              icon: <FaLinkedinIn />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/Asad-Bilal34",
              icon: <FaGithub />,
              label: "GitHub",
            },
          ].map(({ href, icon, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Subtle Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 opacity-60"></div>
    </footer>
  );
};

export default Footer;
