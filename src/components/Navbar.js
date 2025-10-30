import { useState, useEffect } from "react";
import { Sun, Moon, Home, User, Briefcase, Folder, Phone } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigation = [
    { title: "Home", path: "#hero-section", icon: <Home size={22} /> },
    { title: "About", path: "#aboutme-section", icon: <User size={22} /> },
    {
      title: "Services",
      path: "#skills-section",
      icon: <Briefcase size={22} />,
    },
    {
      title: "Projects",
      path: "#projects-section",
      icon: <Folder size={22} />,
    },
    { title: "Contact", path: "#contact-section", icon: <Phone size={22} /> },
  ];

  // Theme logic
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* 🖥️ Desktop Navbar */}
      <header className="hidden md:block sticky top-4 z-50">
        <nav className="flex items-center justify-between bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3 mx-auto max-w-6xl border border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Asad Bilal
          </h1>

          <ul className="flex items-center space-x-8">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.path}
                  className="text-gray-900 dark:text-gray-200 hover:text-indigo-600 font-medium transition"
                >
                  {item.title}
                </a>
              </li>
            ))}
            {/* 🌗 Theme Toggle - Desktop Only */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-all hover:scale-110 hover:shadow-md"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </ul>
        </nav>
      </header>

      {/* 📱 Mobile Top-Right Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`md:hidden fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg border transition-all hover:scale-110
    ${
      theme === "dark"
        ? "bg-gray-800 border-gray-600 text-yellow-300 hover:shadow-[0_0_10px_2px_rgba(250,204,21,0.4)]"
        : "bg-white border-gray-300 text-gray-700 hover:shadow-[0_0_10px_2px_rgba(99,102,241,0.3)]"
    }
  `}
        title="Toggle Theme"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* 📱 Mobile Bottom Navigation */}
      <nav
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex justify-between items-center 
bg-white/10 dark:bg-gray-900/60 backdrop-blur-xl 
shadow-[0_0_15px_rgba(99,102,241,0.2)] 
rounded-full px-8 py-3 w-[92%] max-w-md border border-gray-700/40 md:hidden"
      >
        <div className="flex justify-between items-center gap-4 w-full">
          {navigation.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition-all"
            >
              {item.icon}
              <span className="text-[11px] mt-1 font-medium">{item.title}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
