import { Terminal, Laptop, BrainCircuit, Sparkles, Code2, Info } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-indigo-600" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Foundations</span>
          </div>
          <h2
            id="skills-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            Technology Skills
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-xl mx-auto">
            Core technical proficiencies and concepts I am actively learning and applying in my coursework and projects.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Honest Student Disclosure Banner */}
        <div
          id="skills-student-note"
          className="mb-8 p-4 rounded-xl bg-white border border-indigo-100/80 shadow-2xs flex items-start gap-3 max-w-2xl mx-auto"
        >
          <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-800">Learning in Progress:</span> As a first-year student, I believe in transparently showcasing my real abilities. These represent foundational and beginner-level competencies that I actively develop each day.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-indigo-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  {skill.level ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {skill.level}
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                      Foundational
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 block mb-2">
                  {skill.category}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress / Status Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  Active Practice
                </span>
                <span className="font-mono text-[10px] text-slate-600">Year 1 Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
