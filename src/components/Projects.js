import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Expense Tracker App",
    description:
      "Smart browser extension to clip and save web content instantly.",
    image: "/image3.png",
    tags: ["React", "Firebase", "TailwindCSS", "Node.js"],
    link: "https://github.com/your-username/ai-clipper",
  },
  {
    title: "Chrome Extension (AI Clipper)",
    description:
      "Track your daily expenses with real-time Firebase storage and analytics.",
    image: "/image2.png",
    tags: ["React", "Firebase", "TailwindCSS", "Node.js"],
    link: "https://github.com/your-username/ai-clipper",
  },
  {
    title: "INoteBook",
    description:
      "Secure cloud-based app to create, edit, and manage personal notes.",
    image: "/image4.png",
    tags: ["React", "MongoDB", "Bootstrap", "Node.js", "Express"],
    link: "https://github.com/your-username/ai-clipper",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(
    window.innerWidth < 768 ? 1 : 3
  );

  // 🔁 Adjust layout on resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage
    );
  };

  return (
    <section
      id="projects-section"
      className="py-16 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900"
      data-aos="fade-up"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          My Works
        </h2>
        <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          A showcase of some of my projects demonstrating my skills in MERN
          stack and web development.
        </p>

        {/* Slider */}
        <div className="relative mt-10">
          <div className="flex flex-wrap justify-center gap-8">
            {projects
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-contain bg-gray-100 dark:bg-gray-900 rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-all duration-500"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full shadow-md p-2 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full shadow-md p-2 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
