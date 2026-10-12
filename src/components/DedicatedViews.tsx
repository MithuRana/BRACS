import React from 'react';
import { ArrowRight, Check, Phone, MapPin, Clock, ShieldCheck, Award, Zap, Snowflake, Flame, Wrench, Building2, Store } from 'lucide-react';
import { PageView } from '../types';
import { BRACS_COMPANY_INFO, RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES, GENUINE_PROJECTS } from '../data/bracsData';
import { VeuEstimator } from './VeuEstimator';
import { MaintenanceReminder } from './MaintenanceReminder';
import { ProjectsShowcase } from './ProjectsShowcase';
import { ShowroomSection } from './ShowroomSection';

interface DedicatedViewProps {
  page: PageView;
  onOpenQuote: (serviceType?: string) => void;
  onNavigate: (page: PageView) => void;
  onTransferToQuote: (details: any) => void;
}

export const DedicatedViews: React.FC<DedicatedViewProps> = ({
  page,
  onOpenQuote,
  onNavigate,
  onTransferToQuote,
}) => {
  if (page === 'residential') {
    return (
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
              Residential Air Conditioning & Heating Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Engineered Home Comfort in Bendigo
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore bespoke residential systems designed for Bendigo’s dramatic seasonal shifts.
              From whisper-quiet bedroom split systems to whole-home ducted reverse cycle zoning with smart touchscreen controls.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenQuote('Residential Heating & Cooling')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
              >
                <span>Request a Measure & Quote</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
              <button
                onClick={() => onNavigate('veu')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                <Zap className="w-4 h-4 text-sky-600" />
                <span>Check VEU Upgrade Rebates</span>
              </button>
            </div>
          </div>

          {/* Deep Dive System Cards */}
          <div className="space-y-12">
            {RESIDENTIAL_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-700">
                    <span>0{index + 1}.</span>
                    <span>{service.category.toUpperCase()}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-sm font-medium text-slate-700">{service.headline}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Key Technical Advantages:
                    </span>
                    <ul className="space-y-2">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Ideal Property Fit:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {service.idealFor}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Authorised Equipment:
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      {service.recommendedBrands.join(' · ')}
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded transition-colors text-center cursor-pointer"
                    >
                      Get Quote for This System
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }

  if (page === 'commercial') {
    return (
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
              Industrial Refrigeration & Commercial Mechanical HVAC
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Commercial Mechanical Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              BRACS delivers turnkey commercial cold storage, food safety compliant coolrooms,
              office VRF climate systems, and mechanical ventilation across Bendigo, Echuca, and Central Victoria.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenQuote('Commercial HVAC Project')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
              >
                <span>Discuss Commercial Tender</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
              >
                <span>View Delivered Projects</span>
              </button>
            </div>
          </div>

          <div className="space-y-10">
            {COMMERCIAL_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-700">
                    <span>0{index + 1}.</span>
                    <span>COMMERCIAL SPECIFICATION</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-sm font-medium text-slate-700">{service.headline}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Engineering Scope:
                    </span>
                    <ul className="space-y-2">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Industry Sector:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {service.idealFor}
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded transition-colors text-center cursor-pointer"
                    >
                      Request Project Consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (page === 'veu') {
    return (
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
              Government Incentive Guidelines
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Victorian Energy Upgrades (VEU) Hub
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Everything you need to know about transitioning your home heating from gas to high-efficiency reverse cycle
              electric heat pumps under current Victorian government discount frameworks.
            </p>
          </div>

          <VeuEstimator onTransferToQuote={onTransferToQuote} />
        </div>
      </div>
    );
  }

  if (page === 'servicing') {
    return (
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MaintenanceReminder onOpenServiceBooking={() => onOpenQuote('Repair or Maintenance')} />
        </div>
      </div>
    );
  }

  if (page === 'projects') {
    return (
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ProjectsShowcase onOpenQuote={onOpenQuote} />
        </div>
      </div>
    );
  }

  if (page === 'about') {
    return (
      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
              Company Profile & Showroom
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              About BRACS & East Bendigo Showroom
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Established in 1982, Bendigo Refrigeration & Air Conditioning Services is Central Victoria's trusted
              heating, cooling, and mechanical refrigeration specialist.
            </p>
          </div>

          <ShowroomSection onOpenConsultation={() => onOpenQuote('Showroom Consultation')} />
        </div>
      </div>
    );
  }

  return null;
};
