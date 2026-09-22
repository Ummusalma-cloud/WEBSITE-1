import { useState } from 'react';
import { HelpCircle, X, Terminal, GitBranch, FolderPlus, Globe, Check, Copy } from 'lucide-react';

interface StudentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StudentGuideModal({ isOpen, onClose }: StudentGuideModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div
      id="student-guide-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="student-guide-modal-content"
        className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-indigo-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Portfolio Maintenance & Deployment Guide
              </h3>
              <p className="text-xs text-indigo-700">
                Quick guide for Ummu Salma to manage projects, update links, and deploy
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close Guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Section 1: How to run locally */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Terminal className="w-4 h-4 text-indigo-600" />
              <h4>1. Running Your Portfolio Locally</h4>
            </div>
            <p className="text-xs text-slate-600">
              In your terminal or VS Code, run these two commands inside the project folder:
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs flex items-center justify-between">
              <code>npm install && npm run dev</code>
              <button
                onClick={() => copyCode('npm install && npm run dev', 'run')}
                className="text-xs text-slate-400 hover:text-white"
              >
                {copiedKey === 'run' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Open <code className="text-indigo-600">http://localhost:3000</code> in your browser to view your live portfolio.
            </p>
          </div>

          {/* Section 2: Adding future projects */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <FolderPlus className="w-4 h-4 text-emerald-600" />
              <h4>2. How to Add Future Projects</h4>
            </div>
            <p className="text-xs text-slate-600">
              All project information is centralized in <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700 font-semibold">src/data/portfolioData.ts</code>. To add a 3rd or 4th project, simply append a new object to the <code className="font-semibold text-slate-800">PROJECTS_DATA</code> array:
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs overflow-x-auto">
              <pre>{`{
  id: "project-new-id",
  title: "New Project Title",
  description: "Description of your project...",
  technology: "Python",
  level: "Beginner",
  projectUrl: "https://github.com/Ummusalma-cloud/new-repo",
  highlights: ["Feature 1", "Feature 2"],
  codeSnippet: "# Your code here"
}`}</pre>
            </div>
          </div>

          {/* Section 3: Replacing placeholder link */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <GitBranch className="w-4 h-4 text-purple-600" />
              <h4>3. Replacing Placeholder Links (`#project-link`)</h4>
            </div>
            <p className="text-xs text-slate-600">
              Open <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700 font-semibold">src/data/portfolioData.ts</code> and locate:
            </p>
            <div className="bg-slate-100 p-2.5 rounded-lg font-mono text-xs text-slate-800 border border-slate-200">
              projectUrl: "#project-link",
            </div>
            <p className="text-xs text-slate-600">
              Replace it with your actual repository URL:
            </p>
            <div className="bg-emerald-50 p-2.5 rounded-lg font-mono text-xs text-emerald-800 border border-emerald-200">
              projectUrl: "https://github.com/Ummusalma-cloud/student-grade-calculator",
            </div>
          </div>

          {/* Section 4: Deploying to GitHub Pages */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Globe className="w-4 h-4 text-blue-600" />
              <h4>4. Deploying to GitHub Pages</h4>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-xs text-slate-600 leading-relaxed">
              <li>Create a new repository on your GitHub named <code className="font-semibold text-slate-800">portfolio</code> or <code className="font-semibold text-slate-800">Ummusalma-cloud.github.io</code>.</li>
              <li>Push this project code to your GitHub repository.</li>
              <li>Go to <strong>Settings</strong> &gt; <strong>Pages</strong> in your GitHub repository.</li>
              <li>Under <em>Build and deployment</em> &gt; <em>Source</em>, select <strong>GitHub Actions</strong> (Vite Static Page workflow) or choose Deploy from branch (<code className="font-semibold">dist</code>).</li>
              <li>Your site will be live at <code className="text-indigo-600">https://Ummusalma-cloud.github.io</code>!</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Created for Ummu Salma • First-Year CS Student
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
