import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, History, Users2, Award } from 'lucide-react';
import { BRACS_COMPANY_INFO } from '../data/bracsData';

interface TheBracsStoryProps {
  onNavigateShowroom: () => void;
  onOpenQuote: () => void;
}

export const TheBracsStory: React.FC<TheBracsStoryProps> = ({
  onNavigateShowroom,
  onOpenQuote,
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Bendigo Heritage & Craftsmanship
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance leading-tight">
              Local Experience That Goes Back to 1982.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              When Bendigo Refrigeration & Air Conditioning Services first opened its doors in 1982, Central Victoria
              relied on fundamental mechanical cooling and early gas heating systems. Over four decades later, technology
              has transformed into inverter heat pumps, cloud-managed VRF systems, and zero-carbon electrification—yet
              our core principle has never changed: honest tradesmanship and long-term customer relationships.
            </p>

            <div className="space-y-4 pt-2 text-sm text-slate-600 leading-relaxed">
              <p>
                Unlike fly-by-night subcontractors or impersonal metropolitan call centres, BRACS operates directly from
                our permanent East Bendigo showroom and workshop at 14b Rohs Road. Our team of qualified refrigeration mechanics,
                licensed plumbers, and customer service staff live and work in the Bendigo community.
              </p>
              <p>
                From advising a young family on an economical split system in Strathdale to engineering complex multi-zone
                mechanical ventilation for Echuca TAFE or critical coolrooms for local wineries, we approach every project with
                engineering precision and personal accountability.
              </p>
            </div>

            {/* Credibility Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200 text-xs">
              <div>
                <span className="text-2xl font-bold text-slate-900 tabular-nums block">1982</span>
                <span className="text-slate-500 font-medium">Established in Bendigo</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900 block">Diamond</span>
                <span className="text-slate-500 font-medium">Mitsubishi Electric Dealer</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900 block">Dual Trade</span>
                <span className="text-slate-500 font-medium">HVAC & Refrigeration</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onNavigateShowroom}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
              >
                <span>Visit Our East Bendigo Showroom</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
              <button
                onClick={onOpenQuote}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-3"
              >
                Request a Consultation
              </button>
            </div>

          </div>

          {/* Right Column: Visual Brand Card */}
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Operating Philosophy
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                The BRACS Standards
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="text-slate-900 block">No Subcontractor Run-Around</strong>
                  <span>Direct employment of certified refrigeration mechanics and HVAC technicians with full accountability.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="text-slate-900 block">Accurate Thermal Heat Load Sizing</strong>
                  <span>We calculate real room heat gains and solar exposure before recommending kilowatt capacity—no undersized systems.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <strong className="text-slate-900 block">Long-Term Maintenance Commitment</strong>
                  <span>Installation is just day one. We service, repair and support your equipment throughout its entire operating life.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
              <div>
                <span className="font-semibold text-slate-900 block">Permanent Local Workshop</span>
                <span>14b Rohs Road, East Bendigo VIC 3550</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
