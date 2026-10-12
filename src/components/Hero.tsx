import React from 'react';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2, Sparkles, Building2, Home } from 'lucide-react';
import { BRACS_COMPANY_INFO } from '../data/bracsData';

interface HeroProps {
  onOpenQuote: (serviceType?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onNavigateSection }) => {
  return (
    <section className="relative bg-[#0B1520] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background architectural grid texture subtle line */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker without pill styling */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase">
              <span>Bendigo Refrigeration & Air Conditioning Services</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-300">Est. 1982</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Better Comfort. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-white">
                Built on Experience.
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Heating, cooling and refrigeration solutions for Bendigo homes and businesses. 
              Trusted local expertise, professional installation and reliable ongoing service since 1982.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-all duration-200 shadow-lg shadow-sky-950/50 cursor-pointer active:scale-[0.99]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => onNavigateSection('residential')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 rounded-md transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <span>Explore Solutions</span>
              </button>

              <a
                href="tel:0354483999"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {BRACS_COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Key Trust Signals (No static pill badges) */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                Mitsubishi Electric Diamond Dealer
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                ARC Certified Technicians
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                Free On-Site Quotations
              </span>
            </div>

          </div>

          {/* Right Hero Image Column (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_bracs_comfort_1791829293772.jpg"
                alt="Modern Australian architectural interior in Bendigo with premium climate control"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />
              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* In-photo contextual caption */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Central Victorian Engineered Comfort</div>
                  <div className="text-slate-400 text-[11px]">Discreet ducted and split-system precision climate solutions</div>
                </div>
                <div className="text-right text-[11px] font-medium text-sky-400 whitespace-nowrap pl-2">
                  1982 — 2026
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Regional Capability Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">44+ Years</div>
            <div className="text-xs text-slate-400">Serving Bendigo & Central Victoria continuously since 1982</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">Diamond</div>
            <div className="text-xs text-slate-400">Accredited Mitsubishi Electric Diamond Dealer status</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">Dual Trade</div>
            <div className="text-xs text-slate-400">Licensed HVAC mechanical engineering & refrigeration specialists</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">14b Rohs Rd</div>
            <div className="text-xs text-slate-400">Dedicated East Bendigo showroom & technical service facility</div>
          </div>
        </div>

      </div>
    </section>
  );
};
