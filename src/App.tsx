import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningJourney from './components/LearningJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StudentGuideModal from './components/StudentGuideModal';
import { HelpCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="portfolio-app-root" className="min-h-screen flex flex-col bg-slate-50 text-slate-800 relative selection:bg-indigo-100 selection:text-indigo-900">
      {/* 1. Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-portfolio-content" className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me */}
        <AboutMe />

        {/* 4. Skills */}
        <Skills />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Learning Journey / Career Goal */}
        <LearningJourney />

        {/* 7. Social Links / Contact */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Floating Student Customization Helper Button */}
      <button
        id="btn-open-student-guide"
        onClick={() => setShowGuide(true)}
        className="fixed bottom-5 right-5 z-40 bg-white/90 hover:bg-white text-slate-700 hover:text-indigo-700 px-3.5 py-2 rounded-full border border-slate-300 shadow-md hover:shadow-lg backdrop-blur-xs flex items-center gap-2 text-xs font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="Open Guide: How to add projects and deploy"
        aria-label="Open portfolio guide"
      >
        <HelpCircle className="w-4 h-4 text-indigo-600" />
        <span className="hidden sm:inline">Portfolio Guide</span>
      </button>

      {/* Student Guide Modal */}
      <StudentGuideModal isOpen={showGuide} onClose={() => setShowGuide(false)} />
    </div>
  );
}
