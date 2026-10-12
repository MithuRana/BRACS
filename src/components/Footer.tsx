import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { BRACS_COMPANY_INFO } from '../data/bracsData';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#080E16] text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Identity Column (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-sky-600 flex items-center justify-center text-white font-bold text-base">
                B
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                BRACS BENDIGO
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Bendigo Refrigeration & Air Conditioning Services (BRACS). Providing domestic heating & cooling,
              high-efficiency reverse cycle conversions, commercial refrigeration, and mechanical services across
              Central Victoria since 1982.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div>· Mitsubishi Electric Diamond Dealer</div>
              <div>· ARC Licensed Refrigerant Handling (AU# Certified)</div>
              <div>· VBA Mechanical & Plumbing Accreditation</div>
            </div>
          </div>

          {/* Core Services Column (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Heating & Cooling Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('residential')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Ducted Reverse Cycle Heating & Cooling
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('residential')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  High-Efficiency Split Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('veu')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Victorian Energy Upgrades (VEU) Discounts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Commercial Refrigeration & Coolrooms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('commercial')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mechanical HVAC & Ventilation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicing')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  System Servicing & Preventative Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom & Operating Hours (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Showroom & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  14b Rohs Road <br />
                  East Bendigo VIC 3550
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:0354483999" className="text-white hover:text-sky-400 font-semibold">
                  (03) 5448 3999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:enquiries@bracs.com.au" className="hover:text-white">
                  enquiries@bracs.com.au
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300">Mon–Fri: 9:00am – 5:00pm</span>
                  <span className="text-slate-500 text-[11px]">Saturday & Sunday: Closed</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Areas & Quick Action (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Regions
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Bendigo, East Bendigo, Strathdale, Kangaroo Flat, Golden Square, Kennington, Epsom, Eaglehawk, Castlemaine & Central Victoria.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded transition-colors cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Speculative Concept Transparency Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Bendigo Refrigeration & Air Conditioning Services (BRACS). All rights reserved.
          </div>
          
          <div className="text-center md:text-right text-[11px] text-slate-400">
            Independent modern website redesign concept for BRACS · Established 1982 in Bendigo, VIC.
          </div>
        </div>

      </div>
    </footer>
  );
};
