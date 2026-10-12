import React from 'react';
import { Award, ShieldCheck, Check, ArrowRight, Zap, Cpu } from 'lucide-react';

interface MitsubishiDiamondProps {
  onOpenQuote: (serviceType?: string) => void;
}

export const MitsubishiDiamond: React.FC<MitsubishiDiamondProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Accreditation Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <Award className="w-4 h-4 text-sky-400 shrink-0" />
              Accredited Dealer Partnership
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Mitsubishi Electric Diamond Dealer
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Diamond Dealer accreditation is Mitsubishi Electric’s highest tier of independent dealer recognition.
              It reflects BRACS’s proven technical competence, extensive factory training, and dedication to installing
              systems strictly to manufacturer specifications across Central Victoria.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  <span>Full Range Availability</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Direct access to the complete residential split, whole-home ducted, multi-split, and commercial City Multi portfolio.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700/80 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Factory-Trained Technicians</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Technicians undergo ongoing manufacturer technical certification on refrigeration circuits, inverter diagnostics, and Wi-Fi controls.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote('Mitsubishi Electric System')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-colors cursor-pointer"
              >
                <span>Explore Mitsubishi Electric Options</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          {/* Right Column: Diamond Dealer Showcase Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-850 p-8 rounded-2xl border border-slate-700 shadow-xl space-y-6">
            <div className="border-b border-slate-700 pb-5 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
                  Official Status
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  What Diamond Status Means for You
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-sky-950/80 border border-sky-400 flex items-center justify-center text-sky-300">
                <Award className="w-5 h-5" />
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Working demonstrator units on display at our 14b Rohs Road showroom</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Comprehensive sizing audits calculating room volume and insulation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Priority factory technical support and genuine replacement components</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Full manufacturer warranty backing and BRACS workmanship guarantee</span>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-700/80">
              Note: BRACS also services, repairs and installs other major reputable brands including Daikin, Brivis, Bonaire, Braemar, and Temperzone.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
