import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRACS_COMPANY_INFO } from '../data/bracsData';
import { PageView } from '../types';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenQuote: (serviceType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0F1E2E] text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              Serving Bendigo & Central Victoria Since 1982
            </span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              14b Rohs Rd, East Bendigo VIC
            </span>
            <span className="hidden lg:inline text-slate-500">·</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              Mon–Fri 9:00am–5:00pm
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:0354483999"
              className="flex items-center gap-1.5 text-white font-semibold hover:text-sky-400 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{BRACS_COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: [Brand Wordmark] — [4-5 single-line Nav Links] — [1 Primary Action] */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single Brand Wordmark Element */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-md bg-[#0F1E2E] flex items-center justify-center text-white font-bold text-lg tracking-wider border border-sky-600/40 shadow-sm">
                  <span className="text-sky-400">B</span>
                </div>
                <div className="leading-tight">
                  <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors whitespace-nowrap">
                    BRACS
                  </span>
                  <span className="block text-[11px] font-semibold text-slate-500 tracking-wider uppercase whitespace-nowrap">
                    Bendigo Heating & Cooling
                  </span>
                </div>
              </div>
            </button>

            {/* Zone 2: 4-5 Concise Single-line Nav Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
              <button
                onClick={() => handleNavClick('home')}
                className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-slate-900 ${
                  currentPage === 'home'
                    ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                    : 'text-slate-600'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('residential')}
                className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-slate-900 ${
                  currentPage === 'residential'
                    ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                    : 'text-slate-600'
                }`}
              >
                Residential
              </button>

              <button
                onClick={() => handleNavClick('commercial')}
                className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-slate-900 ${
                  currentPage === 'commercial'
                    ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                    : 'text-slate-600'
                }`}
              >
                Commercial & Refrigeration
              </button>

              <button
                onClick={() => handleNavClick('veu')}
                className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-slate-900 ${
                  currentPage === 'veu'
                    ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                    : 'text-slate-600'
                }`}
              >
                VEU Upgrades
              </button>

              <button
                onClick={() => handleNavClick('servicing')}
                className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-slate-900 ${
                  currentPage === 'servicing'
                    ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                    : 'text-slate-600'
                }`}
              >
                Servicing & Repairs
              </button>

              <button
                onClick={() => handleNavClick('projects')}
                className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-slate-900 ${
                  currentPage === 'projects'
                    ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                    : 'text-slate-600'
                }`}
              >
                Projects
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-slate-900 ${
                  currentPage === 'about'
                    ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                    : 'text-slate-600'
                }`}
              >
                About & Showroom
              </button>
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenQuote()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap active:scale-[0.99]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md ${
                  currentPage === 'home' ? 'bg-sky-50 text-sky-800 font-semibold' : 'text-slate-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('residential')}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md ${
                  currentPage === 'residential' ? 'bg-sky-50 text-sky-800 font-semibold' : 'text-slate-700'
                }`}
              >
                Residential Heating & Cooling
              </button>
              <button
                onClick={() => handleNavClick('commercial')}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md ${
                  currentPage === 'commercial' ? 'bg-sky-50 text-sky-800 font-semibold' : 'text-slate-700'
                }`}
              >
                Commercial HVAC & Refrigeration
              </button>
              <button
                onClick={() => handleNavClick('veu')}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md ${
                  currentPage === 'veu' ? 'bg-sky-50 text-sky-800 font-semibold' : 'text-slate-700'
                }`}
              >
                Victorian Energy Upgrades (VEU)
              </button>
              <button
                onClick={() => handleNavClick('servicing')}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md ${
                  currentPage === 'servicing' ? 'bg-sky-50 text-sky-800 font-semibold' : 'text-slate-700'
                }`}
              >
                Servicing & Maintenance
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md ${
                  currentPage === 'projects' ? 'bg-sky-50 text-sky-800 font-semibold' : 'text-slate-700'
                }`}
              >
                Featured Projects
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-md ${
                  currentPage === 'about' ? 'bg-sky-50 text-sky-800 font-semibold' : 'text-slate-700'
                }`}
              >
                About BRACS & Showroom
              </button>

              <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#0F1E2E] rounded-md shadow-sm"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </button>
                <a
                  href="tel:0354483999"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 rounded-md border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call (03) 5448 3999</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
