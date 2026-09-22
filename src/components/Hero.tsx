import { ArrowDown, Code2, Sparkles, Terminal, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial from-indigo-50/50 via-slate-50 to-white"
    >
      {/* Subtle tech background accents */}
      <div className="absolute inset-0 tech-grid-bg opacity-70 pointer-events-none" />
      
      {/* Decorative ambient blurred spots (light & subtle) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Subtle AI/Student Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-indigo-100 shadow-xs mb-8">
          <GraduationCap className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
            {PERSONAL_INFO.education.degree} • {PERSONAL_INFO.education.year}
          </span>
        </div>

        {/* Main Name */}
        <h1
          id="hero-main-title"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-4"
        >
          {PERSONAL_INFO.name.toUpperCase()}
        </h1>

        {/* Professional Title & Academic Focus */}
        <p
          id="hero-professional-title"
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-700 tracking-tight mb-4"
        >
          Aspiring AI Engineer
        </p>
        <p
          id="hero-academic-subtitle"
          className="text-base sm:text-lg text-slate-600 font-medium mb-6"
        >
          B.Tech Computer Science Student
        </p>

        {/* Tagline */}
        <div className="max-w-xl mx-auto mb-10">
          <p
            id="hero-tagline"
            className="text-lg sm:text-xl text-slate-700 font-medium italic border-y border-slate-200/70 py-3 inline-block px-6 bg-white/60 backdrop-blur-xs rounded-xl shadow-2xs"
          >
            "{PERSONAL_INFO.tagline}"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          <button
            id="hero-btn-view-projects"
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Code2 className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            <span>View My Projects</span>
          </button>

          <button
            id="hero-btn-connect"
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white hover:bg-slate-100/80 active:scale-[0.98] border border-slate-300/80 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Connect With Me</span>
          </button>
        </div>

        {/* Minimal Tech Motif / Code Snippet Hint */}
        <div className="inline-flex items-center gap-4 text-xs font-mono text-slate-500 bg-white/80 border border-slate-200/80 rounded-lg px-4 py-2 shadow-2xs">
          <span className="flex items-center gap-1.5 text-indigo-600 font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>ummu@first-year-cs:~$</span>
          </span>
          <span className="text-slate-700">python3 -m learn.grow_ai</span>
        </div>

        {/* Subtle scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll down to About Me"
            className="text-slate-400 hover:text-indigo-600 transition-colors p-2 rounded-full hover:bg-slate-100"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
