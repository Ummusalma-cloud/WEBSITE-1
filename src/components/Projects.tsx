import { useState } from 'react';
import { FolderGit2, Terminal, Code2, ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Work</span>
          </div>
          <h2
            id="projects-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
          >
            Featured Projects
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-xl mx-auto">
            Hands-on beginner projects built with Python to put core programming concepts and logic into practice.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7">
                {/* Header tags: Tech + Level */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{project.technology}</span>
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
                    {project.level} Level
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100 mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Key Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Action Buttons */}
              <div className="px-6 py-4 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between gap-3">
                {/* Code Preview Modal Button */}
                <button
                  id={`btn-code-preview-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer py-1.5"
                  title="View Python Code & Logic"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Code</span>
                </button>

                {/* Main View Project Button */}
                <a
                  id={`btn-view-project-${project.id}`}
                  href={project.projectUrl}
                  onClick={(e) => {
                    // If it's the placeholder '#project-link', also offer the code viewer
                    if (project.projectUrl === '#project-link') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs hover:shadow-indigo-500/20 active:scale-[0.98] transition-all"
                  aria-label={`View Project: ${project.title}`}
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Note on upcoming projects */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            More beginner-friendly Python and web projects will be added as my coursework and self-study progress.
          </p>
        </div>
      </div>

      {/* Code Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
