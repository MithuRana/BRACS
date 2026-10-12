import React, { useState } from 'react';
import { ArrowRight, Check, Flame, Snowflake, Zap, Wind, ChevronRight } from 'lucide-react';
import { RESIDENTIAL_SERVICES } from '../data/bracsData';

interface ResidentialSectionProps {
  onOpenQuote: (serviceType?: string) => void;
  onNavigateVeu: () => void;
}

export const ResidentialSection: React.FC<ResidentialSectionProps> = ({
  onOpenQuote,
  onNavigateVeu,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ducted-reverse-cycle');

  const activeService =
    RESIDENTIAL_SERVICES.find((s) => s.id === selectedServiceId) || RESIDENTIAL_SERVICES[0];

  return (
    <section id="residential" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            Residential Heating & Air Conditioning
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Comfort at Home, Whatever the Season.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From freezing winter mornings to 40°C+ summer heatwaves, BRACS helps Bendigo households choose
            practical heating and cooling systems tailored to local climate extremes, property construction, and running costs.
          </p>
        </div>

        {/* Interactive Systems Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-1 pb-1">
              Select a system type to review:
            </div>
            {RESIDENTIAL_SERVICES.map((service, idx) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-lg border transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-sky-400' : 'text-slate-400'}`}>
                        0{idx + 1}.
                      </span>
                      <h3 className={`text-base font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className={`text-xs line-clamp-2 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                      {service.headline}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 mt-1 transition-transform ${isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}

            {/* Quick Gas-to-Electric Callout */}
            <div className="mt-6 p-4 rounded-lg bg-sky-50 border border-sky-200 text-xs text-sky-950 flex flex-col gap-2">
              <div className="font-semibold flex items-center gap-1.5 text-sky-900">
                <Zap className="w-4 h-4 text-sky-600 shrink-0" />
                Thinking About Phasing Out Gas Heating?
              </div>
              <p className="text-sky-800 leading-relaxed">
                Eligible Victorian households can access Victorian Energy Upgrades discounts when replacing gas heaters with reverse cycle heat pumps.
              </p>
              <button
                onClick={onNavigateVeu}
                className="mt-1 font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
              >
                <span>Check VEU discount estimator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Active System Deep Dive Card with Image */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            
            {/* Visual Photography Header */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/residential_cooling_installation_1791829304235.jpg"
                alt="Professional reverse cycle air conditioning installation in Bendigo home"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                  Residential Climate Engineering
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                  {activeService.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {activeService.description}
                </p>
              </div>

              {/* Technical Features */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Engineering & Performance Highlights
                </h4>
                <ul className="space-y-2">
                  {activeService.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitability & Brands */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
                <div>
                  <span className="font-semibold text-slate-900 block mb-0.5">Recommended Property Types:</span>
                  <span className="text-slate-600">{activeService.idealFor}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block mb-0.5">Authorised Equipment:</span>
                  <span className="text-slate-600">
                    {activeService.recommendedBrands.join(' · ')}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenQuote(activeService.title)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                >
                  <span>Request Quote for {activeService.title}</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </button>
                <button
                  onClick={onNavigateVeu}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
                >
                  <span>Explore VEU Rebates</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
