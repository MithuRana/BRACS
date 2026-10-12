import React from 'react';
import { ArrowRight, Check, ShieldCheck, Phone, Wrench, HardHat, FileSpreadsheet } from 'lucide-react';
import { COMMERCIAL_SERVICES, BRACS_COMPANY_INFO } from '../data/bracsData';

interface CommercialSectionProps {
  onOpenQuote: (serviceType?: string) => void;
  onNavigateProjects: () => void;
}

export const CommercialSection: React.FC<CommercialSectionProps> = ({
  onOpenQuote,
  onNavigateProjects,
}) => {
  return (
    <section id="commercial" className="py-20 lg:py-28 bg-[#0B1520] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Commercial Refrigeration & Mechanical Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Commercial Systems. Built Around Your Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From industrial cold storage and commercial coolrooms to complex multi-level mechanical HVAC engineering,
            BRACS engineers, installs and maintains commercial systems designed for uncompromising reliability.
          </p>
        </div>

        {/* 2-Column Split: Visual Technical Asset & Engineering Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Industrial Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/commercial_refrigeration_hvac_1791829315098.jpg"
                alt="Commercial mechanical refrigeration plant and walk-in cold room installation"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Industrial Refrigeration & Mechanical Plant
                </div>
                <div className="text-sm sm:text-base font-bold text-white mt-1">
                  Engineered for Regional Victoria’s Demanding Operational Climates
                </div>
                <div className="mt-2 text-xs text-slate-300 flex items-center gap-4 flex-wrap">
                  <span>· Bitzer & Copeland Compressors</span>
                  <span>· Carel Digital Telemetry</span>
                  <span>· AS 1668 Ventilation Standards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Capabilities Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Engineering Capacity Backed by Four Decades
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We work directly with commercial builders, primary producers, wineries, hospitality venues,
                and facility managers across Bendigo and Central Victoria. Our technicians are dual-licensed in
                refrigeration mechanics and mechanical plumbing.
              </p>
            </div>

            {/* Structured Capabilities List */}
            <div className="space-y-4 pt-2">
              {COMMERCIAL_SERVICES.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <span className="text-xs text-sky-400 font-medium">{item.idealFor.split(',')[0]}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.headline}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-400">
                    {item.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenQuote('Commercial HVAC Project')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={onNavigateProjects}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors cursor-pointer"
              >
                <span>View Commercial Projects</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
