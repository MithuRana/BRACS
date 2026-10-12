import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Building, Calendar, Layers } from 'lucide-react';
import { GENUINE_PROJECTS } from '../data/bracsData';
import { ProjectItem } from '../types';

interface ProjectsShowcaseProps {
  onOpenQuote: (serviceType?: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Commercial HVAC', label: 'Commercial HVAC' },
    { id: 'Educational', label: 'Institutional & Campus' },
    { id: 'Commercial Refrigeration', label: 'Refrigeration Plant' },
    { id: 'Residential Ducted', label: 'Residential Ducted' },
  ];

  const filteredProjects =
    filter === 'all'
      ? GENUINE_PROJECTS
      : GENUINE_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
              Demonstrated Local Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Featured Regional Projects
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore authentic HVAC and refrigeration engineering delivered by BRACS across commercial enterprises,
              educational campuses, and high-spec homes throughout Central Victoria.
            </p>
          </div>

          {/* Interactive Filter Control Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  filter === cat.id
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-7 space-y-5">
                
                {/* Clean unboxed metadata header */}
                <div className="flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
                  <span className="font-semibold text-sky-700">{project.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{project.location}</span>
                    </span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  {project.client && (
                    <span className="text-xs text-slate-500 font-medium block mt-0.5">
                      Client / Project Scope: {project.client}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Engineering Specifications:
                  </span>
                  <ul className="space-y-1.5">
                    {project.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome Callout */}
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <span className="font-semibold text-slate-900 block mb-0.5">Project Outcome:</span>
                  <span className="text-slate-600">{project.keyOutcome}</span>
                </div>

              </div>

              {/* Action Bar */}
              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuote(project.category)}
                  className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire about similar specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto space-y-3">
          <h4 className="text-base font-bold text-slate-900">
            Have a commercial tender or bespoke residential project?
          </h4>
          <p className="text-xs text-slate-600">
            Our project engineering estimators review tender packages, mechanical schedules, and architectural blueprints with fast turnaround.
          </p>
          <button
            onClick={() => onOpenQuote('Commercial HVAC Project')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
          >
            <span>Submit Project Brief</span>
            <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
