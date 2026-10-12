import React from 'react';
import { ArrowRight, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { BRACS_COMPANY_INFO } from '../data/bracsData';

interface LeadCtaBannerProps {
  onOpenQuote: () => void;
}

export const LeadCtaBanner: React.FC<LeadCtaBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="bg-[#0B1520] text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
            <span>Bendigo Refrigeration & Air Conditioning Services</span>
            <span className="text-slate-600">·</span>
            <span>Est. 1982</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance leading-tight">
            Let’s Find the Right Solution for Your Space.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you’re planning a new installation, upgrading an older system or arranging maintenance,
            the BRACS team can help you explore the next step.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-all duration-200 shadow-lg shadow-sky-950/50 cursor-pointer active:scale-[0.99]"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href="tel:0354483999"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call (03) 5448 3999</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Licensed Tradesmen</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>14b Rohs Road, East Bendigo</span>
            </span>
            <span>·</span>
            <span>No Obligation Estimates</span>
          </div>

        </div>
      </div>
    </section>
  );
};
