import React from 'react';
import { Award, Shield, Wrench, Check, Snowflake } from 'lucide-react';

export const TrustCredentials: React.FC = () => {
  return (
    <section className="bg-slate-50 border-b border-slate-200/80 py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          <div className="shrink-0">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Certified Trade Credentials
            </span>
            <span className="text-sm font-bold text-slate-900">
              Bendigo’s Verified HVAC & Refrigeration Partner
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto text-xs text-slate-700">
            <div className="flex items-start gap-2.5">
              <Award className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold">Diamond Dealer</strong>
                <span className="text-slate-500">Mitsubishi Electric</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold">ARC Certified</strong>
                <span className="text-slate-500">Refrigerant Licensed</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Wrench className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold">VBA Registered</strong>
                <span className="text-slate-500">Mechanical & Plumbing</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Snowflake className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold">Dual Expertise</strong>
                <span className="text-slate-500">Domestic & Commercial</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
