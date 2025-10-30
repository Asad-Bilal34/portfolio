import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Progress from "./components/Progress";
import Skills from "./components/Skills";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testominals";
import Projects from "./components/Projects";
import Preloader from "./components/Preloader";
import Aboutme from "./components/Aboutme";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4s preloader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/70 to-white dark:from-gray-900 dark:via-gray-800/80 dark:to-gray-900">
        <Navbar />

        <section id="hero-section">
          <HeroSection />
        </section>
        <section id="aboutme-section" className="mt-22">
          <Aboutme />
        </section>
        <section id="skills-section" className="mt-25">
          <Skills />
        </section>
        <section id="projects-section" className="mt-25">
          <Projects />
        </section>
        <section id="progress-section" className="mt-25 mb-25">
          <Progress />
        </section>
        <Testimonials className="mt-25" />
        <section id="contact-section" className="mt-25 mb-25">
          <ContactSection />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
