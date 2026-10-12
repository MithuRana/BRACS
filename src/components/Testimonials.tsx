import React from 'react';
import { Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { GENUINE_TESTIMONIALS } from '../data/bracsData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 block mb-2">
            Local Reputation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Real Customer Experiences
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Genuine feedback from homeowners and clients across Bendigo who rely on BRACS for year-round heating,
            cooling, and technical repairs.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GENUINE_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-sky-200 shrink-0" />
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.author}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-medium text-sky-700 block">
                    {t.service}
                  </span>
                  <span className="text-[10px] text-slate-400">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
