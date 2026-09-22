import { Milestone, Compass, ChevronRight, Sparkles } from 'lucide-react';
import { LEARNING_JOURNEY_STEPS } from '../data/portfolioData';

export default function LearningJourney() {
  return (
    <section
      id="journey"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Path & Milestones</span>
          </div>
          <h2
            id="journey-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            My Learning Journey
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-xl mx-auto">
            A step-by-step roadmap reflecting where I started, what I am currently developing, and my aspiration toward AI.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-12">
          {LEARNING_JOURNEY_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`journey-step-${step.number}`}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-100/80">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                    {idx === 0 ? 'Current Base' : idx === 1 ? 'In Action' : 'Next Horizon'}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Skills Focus Tags */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Areas of Focus
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {step.skillsFocus.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ending Goal Statement Callout */}
        <div
          id="journey-goal-quote-box"
          className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-linear-to-r from-indigo-50/90 via-white to-purple-50/90 border border-indigo-100 shadow-xs text-center"
        >
          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-3 shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <blockquote className="text-base sm:text-lg font-semibold text-slate-800 italic leading-relaxed">
            "My goal is to keep learning, keep building, and gradually grow into a skilled AI Engineer."
          </blockquote>
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mt-2">
            Ummu Salma • Long-Term Vision
          </p>
        </div>
      </div>
    </section>
  );
}
