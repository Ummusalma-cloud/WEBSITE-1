import { useState } from 'react';
import { Sparkles, ExternalLink, Check, Copy, MessageSquareCode } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Networking</span>
          </div>
          <h2
            id="contact-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            Let's Connect
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Narrative Box */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p
            id="contact-narrative-text"
            className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium"
          >
            I'm currently learning, building projects, and exploring the world of AI. Feel free to connect with me and follow my learning journey.
          </p>
        </div>

        {/* Social Connection Cards (GitHub & LinkedIn only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
          {/* GitHub Card */}
          <div
            id="social-card-github"
            className="bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                  {/* Recognized GitHub SVG Icon */}
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                  Code & Projects
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">GitHub</h3>
              <p className="text-xs text-slate-600 mb-4">
                Explore my repositories, code exercises, and early project commits.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <a
                id="social-btn-github"
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors"
                aria-label="Open Ummu Salma's GitHub in a new tab"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.socials.github, 'github')}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                {copiedLink === 'github' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Link Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Copy Profile URL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div
            id="social-card-linkedin"
            className="bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-xs">
                  {/* Recognized LinkedIn SVG Icon */}
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100/70 text-blue-800">
                  Professional Network
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">LinkedIn</h3>
              <p className="text-xs text-slate-600 mb-4">
                Connect with me to follow my progress, coursework, and future milestones.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <a
                id="social-btn-linkedin"
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-semibold shadow-xs transition-colors"
                aria-label="Open Ummu Salma's LinkedIn in a new tab"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.socials.linkedin, 'linkedin')}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                {copiedLink === 'linkedin' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Link Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Copy Profile URL</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Student Note */}
        <p className="text-center text-xs text-slate-500">
          Open to connecting with fellow students, developers, and mentors passionate about computer science and AI.
        </p>
      </div>
    </section>
  );
}
