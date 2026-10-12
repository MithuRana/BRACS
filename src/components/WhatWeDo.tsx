import React from 'react';
import { ArrowRight, Flame, Snowflake, Wrench, Building2, Store, RefreshCw } from 'lucide-react';
import { PageView } from '../types';

interface WhatWeDoProps {
  onNavigatePage: (page: PageView) => void;
  onOpenQuote: (serviceType?: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onNavigatePage, onOpenQuote }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
              Our Capabilities & Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              What We Do
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Dual-licensed expertise spanning domestic home comfort, commercial refrigeration engineering,
              and fast diagnostics across Central Victoria.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-sky-700 transition-colors"
            >
              <span>Consult with our technical team</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </button>
          </div>
        </div>

        {/* Asymmetric Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Residential Heating (Hero Asymmetric Span) */}
          <div className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-700">01. Residential Heating</span>
                <Flame className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                High-Efficiency Heating & Heat Pumps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Reverse cycle ducted systems, premium wall-mounted split systems, and gas ducted conversions engineered to keep Bendigo homes warm through sub-zero winter frosts.
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                Focus: Energy efficiency · Whisper-quiet acoustics · Multi-zone comfort
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigatePage('residential')}
                className="text-xs font-semibold text-slate-900 group-hover:text-sky-700 flex items-center gap-1 cursor-pointer"
              >
                <span>View Heating Options</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenQuote('Residential Heating')}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Card 2: Residential Cooling */}
          <div className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-700">02. Residential Cooling</span>
                <Snowflake className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                Air Conditioning & Climate Precision
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Refrigerated inverter cooling and high-flow evaporative air conditioning built to maintain gentle, continuous cool airflow during severe Central Victorian summer heatwaves.
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                Focus: Inverter efficiency · Low running draw · AirTouch tablet integration
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigatePage('residential')}
                className="text-xs font-semibold text-slate-900 group-hover:text-sky-700 flex items-center gap-1 cursor-pointer"
              >
                <span>View Cooling Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenQuote('Residential Cooling')}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Card 3: Servicing & Diagnostics */}
          <div className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-700">03. Maintenance & Servicing</span>
                <Wrench className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                System Servicing, Repairs & Diagnostics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Qualified licensed refrigeration mechanics for diagnostic fault-finding, coil cleaning, refrigerant pressure testing, fan motor replacements, and seasonal checkups.
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                Focus: Rapid fault isolation · Licensed gasfitters · Genuine replacement parts
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigatePage('servicing')}
                className="text-xs font-semibold text-slate-900 group-hover:text-sky-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Book Service Check</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenQuote('Repair or Maintenance')}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Enquire
              </button>
            </div>
          </div>

          {/* Card 4: Commercial HVAC & Mechanical */}
          <div className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-700">04. Commercial HVAC</span>
                <Building2 className="w-5 h-5 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                Commercial Mechanical HVAC & Ventilation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Packaged units, VRF/VRV variable refrigerant installations, ventilation exhaust and fresh-air economisers for commercial offices, schools, and medical facilities.
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                Focus: AS 1668 compliance · BMS integration · Acoustic performance
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigatePage('commercial')}
                className="text-xs font-semibold text-slate-900 group-hover:text-sky-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Commercial Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenQuote('Commercial HVAC Project')}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Discuss
              </button>
            </div>
          </div>

          {/* Card 5: Commercial Refrigeration */}
          <div className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-700">05. Commercial Refrigeration</span>
                <Store className="w-5 h-5 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                Coolrooms, Freezers & Display Cases
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Industrial cold storage design, modular panel construction, glycol beverage chillers, supermarket cabinets, and 24/7 commercial maintenance support.
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                Focus: Holding tight temperatures · Food safety compliance · Bitzer compressors
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigatePage('commercial')}
                className="text-xs font-semibold text-slate-900 group-hover:text-sky-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Refrigeration Engineering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenQuote('Commercial Refrigeration')}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Enquire
              </button>
            </div>
          </div>

          {/* Card 6: Electrification & Gas Upgrades */}
          <div className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-700">06. Electrification & Upgrades</span>
                <RefreshCw className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                Gas-to-Electric Upgrades & VEU Discounts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Decommission inefficient aging gas heaters and upgrade to high-COP electric reverse cycle systems to tap into Victorian Energy Upgrades incentives and solar synergy.
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                Focus: Upfront VEU discounts · Lower carbon emissions · Zero combustion fumes
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigatePage('veu')}
                className="text-xs font-semibold text-slate-900 group-hover:text-sky-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Calculate Discounts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenQuote('VEU Upgrade Enquiry')}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Quote
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
