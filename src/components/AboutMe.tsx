import { BookOpen, GraduationCap, Compass, Lightbulb, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Introduction</span>
          </div>
          <h2
            id="about-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Narrative Box */}
        <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs mb-10">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {PERSONAL_INFO.aboutText}
          </p>
        </div>

        {/* 3 Core Pillars of Current Stage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Academic Track */}
          <div
            id="about-card-education"
            className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-indigo-200 hover:shadow-xs transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Academic Status</h3>
            <p className="text-sm font-semibold text-indigo-700 mb-1">
              B.Tech in Computer Science
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              First-year undergraduate focusing on engineering fundamentals, mathematics, and introductory computing.
            </p>
          </div>

          {/* Card 2: Current Focus */}
          <div
            id="about-card-focus"
            className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-indigo-200 hover:shadow-xs transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Current Focus</h3>
            <p className="text-sm font-semibold text-purple-700 mb-1">
              Python & Fundamentals
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Building muscle memory through practice exercises, conditional logic, problem-solving, and web basics.
            </p>
          </div>

          {/* Card 3: Long-term Aspiration */}
          <div
            id="about-card-aspiration"
            className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-indigo-200 hover:shadow-xs transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Career Aspiration</h3>
            <p className="text-sm font-semibold text-emerald-700 mb-1">
              AI & Machine Learning
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gradually advancing from basic scripts toward understanding generative AI systems and machine learning workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
