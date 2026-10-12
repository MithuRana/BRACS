import React, { useState } from 'react';
import { ArrowRight, Check, HelpCircle, AlertCircle, RefreshCw, Sparkles, Zap, ShieldAlert } from 'lucide-react';
import { VEU_REGULATORY_CONFIG } from '../data/bracsData';

interface VeuEstimatorProps {
  onTransferToQuote: (details: {
    existingSystem: string;
    desiredUpgrade: string;
    propertyType: string;
    estimatedDiscount: string;
  }) => void;
}

export const VeuEstimator: React.FC<VeuEstimatorProps> = ({ onTransferToQuote }) => {
  const [step, setStep] = useState<number>(1);
  const [currentSystem, setCurrentSystem] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('');
  const [desiredUpgrade, setDesiredUpgrade] = useState<string>('');
  const [systemAge, setSystemAge] = useState<string>('');
  const [willDecommission, setWillDecommission] = useState<boolean>(true);

  const calculateEstimate = () => {
    if (currentSystem === 'ducted-gas' && desiredUpgrade === 'ducted-reverse-cycle') {
      return {
        range: '$1,600 – $3,200',
        typical: '$2,400',
        category: 'Whole-Home Gas Ducted to Reverse Cycle Heat Pump',
        eligible: true,
      };
    }
    if (currentSystem === 'gas-space-heater' && (desiredUpgrade === 'single-split' || desiredUpgrade === 'multi-split')) {
      return {
        range: '$700 – $1,400',
        typical: '$1,050',
        category: 'Gas Space Heater to High-Efficiency Inverter Split',
        eligible: true,
      };
    }
    if (currentSystem === 'electric-resistance') {
      return {
        range: '$600 – $1,200',
        typical: '$900',
        category: 'Electric Resistance / Panel Heater Upgrade',
        eligible: true,
      };
    }
    if (currentSystem === 'ducted-gas' && desiredUpgrade === 'single-split') {
      return {
        range: '$800 – $1,600',
        typical: '$1,200',
        category: 'Ducted Gas to Living-Zone Split System',
        eligible: true,
      };
    }
    if (currentSystem === 'not-sure' || desiredUpgrade === 'need-advice') {
      return {
        range: 'Indicative Assessment Required',
        typical: 'Subject to Site Survey',
        category: 'Custom Upgrade Assessment',
        eligible: true,
      };
    }
    return {
      range: 'Custom Quote Required',
      typical: 'Variable',
      category: 'Standard Energy-Efficient Inverter Upgrade',
      eligible: false,
    };
  };

  const estimate = calculateEstimate();

  const handleReset = () => {
    setStep(1);
    setCurrentSystem('');
    setPropertyType('');
    setDesiredUpgrade('');
    setSystemAge('');
    setWillDecommission(true);
  };

  const handleContinueToQuote = () => {
    onTransferToQuote({
      existingSystem: currentSystem || 'Not Specified',
      desiredUpgrade: desiredUpgrade || 'Ducted Reverse Cycle',
      propertyType: propertyType || 'Residential',
      estimatedDiscount: estimate.range,
    });
  };

  return (
    <section id="veu-upgrades" className="py-20 lg:py-28 bg-[#0F1E2E] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Zap className="w-4 h-4 text-sky-400 shrink-0" />
            Victorian Energy Upgrades (VEU) Exploration Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Thinking About Switching from Gas?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore whether your current heating system could qualify for a Victorian Energy Upgrades discount
            when upgrading to an eligible energy-efficient reverse cycle system.
          </p>
        </div>

        {/* Interactive Estimator Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl p-6 sm:p-10 max-w-4xl mx-auto">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-sky-400">
                Step 0{step} of 05
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {step === 1 && 'What type of heating or cooling do you currently have?'}
                {step === 2 && 'What is the property classification?'}
                {step === 3 && 'What replacement system are you interested in?'}
                {step === 4 && 'Existing system condition & decommissioning'}
                {step === 5 && 'Your Indicative VEU Discount Assessment'}
              </h3>
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Start Over</span>
            </button>
          </div>

          {/* STEP 1: Current System */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Select your primary existing heating setup. Older gas and electric systems generally yield the highest energy upgrade certificates.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'ducted-gas', label: 'Ducted Gas Heating (Ceiling or Floor)', desc: 'Whole-house ducted gas unit' },
                  { id: 'gas-space-heater', label: 'Gas Wall Furnace / Space Heater', desc: 'Gas heater in living room or hallway' },
                  { id: 'electric-resistance', label: 'Electric Resistance / Panel Heaters', desc: 'Plug-in or wall-mounted bar/panel heaters' },
                  { id: 'older-split', label: 'Older Split System Air Conditioner', desc: 'Existing reverse cycle unit (10+ yrs old)' },
                  { id: 'ducted-reverse-cycle', label: 'Older Ducted Reverse Cycle', desc: 'Existing central ducted electric unit' },
                  { id: 'not-sure', label: 'Not Sure / Other System', desc: 'Unsure of current mechanical configuration' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setCurrentSystem(opt.id);
                      setStep(2);
                    }}
                    className={`p-4 rounded-lg border text-left transition-all duration-150 cursor-pointer ${
                      currentSystem === opt.id
                        ? 'bg-sky-950/70 border-sky-400 text-white ring-1 ring-sky-400'
                        : 'bg-slate-850 bg-slate-800/60 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 text-slate-200'
                    }`}
                  >
                    <div className="font-semibold text-sm text-white">{opt.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Property Type */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                VEU incentives apply to both owner-occupiers and rental providers across regional Victoria.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { id: 'owner-occupier', label: 'Residential (Owner-Occupier)', desc: 'Your primary family home' },
                  { id: 'rental-provider', label: 'Residential Rental Property', desc: 'Tenanted residential property' },
                  { id: 'commercial', label: 'Commercial / Business Facility', desc: 'Offices, shops, trade premises' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setPropertyType(opt.id);
                      setStep(3);
                    }}
                    className={`p-4 rounded-lg border text-left transition-all duration-150 cursor-pointer ${
                      propertyType === opt.id
                        ? 'bg-sky-950/70 border-sky-400 text-white ring-1 ring-sky-400'
                        : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 text-slate-200'
                    }`}
                  >
                    <div className="font-semibold text-sm text-white">{opt.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Back to Step 1
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Upgrade System Interest */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Which high-efficiency electric climate solution are you considering?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'ducted-reverse-cycle', label: 'Whole-Home Ducted Reverse Cycle', desc: 'Central concealed heating & refrigerated cooling' },
                  { id: 'single-split', label: 'Single Room Inverter Split System', desc: 'Targeted bedroom or main open living area' },
                  { id: 'multi-split', label: 'Multi-Head Split System', desc: 'Multiple indoor wall heads running off one outdoor unit' },
                  { id: 'need-advice', label: 'Not Sure / Need Expert BRACS Recommendation', desc: 'Tailor equipment to home blueprint' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setDesiredUpgrade(opt.id);
                      setStep(4);
                    }}
                    className={`p-4 rounded-lg border text-left transition-all duration-150 cursor-pointer ${
                      desiredUpgrade === opt.id
                        ? 'bg-sky-950/70 border-sky-400 text-white ring-1 ring-sky-400'
                        : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 text-slate-200'
                    }`}
                  >
                    <div className="font-semibold text-sm text-white">{opt.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Back to Step 2
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: System Age & Decommissioning */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Approximate Age of Current Heating System:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'under-5', label: 'Under 5 Years' },
                    { id: '5-to-10', label: '5 – 10 Years' },
                    { id: 'over-10', label: '10+ Years / Obsolete' },
                  ].map((age) => (
                    <button
                      key={age.id}
                      onClick={() => setSystemAge(age.id)}
                      className={`py-3 px-3 rounded-md text-xs font-medium border text-center transition-colors cursor-pointer ${
                        systemAge === age.id
                          ? 'bg-sky-600 border-sky-400 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {age.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="decommission"
                  checked={willDecommission}
                  onChange={(e) => setWillDecommission(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-700 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="decommission" className="text-xs text-slate-300 cursor-pointer">
                  <span className="font-semibold text-white block">
                    Decommission & Cap Obsolete Gas Appliance (Recommended)
                  </span>
                  Full decommissioning of obsolete gas heating by a licensed gasfitter maximises the Victorian Energy Upgrades certificate discount yield.
                </label>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setStep(3)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Back to Step 3
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-colors cursor-pointer"
                >
                  <span>Calculate Indicative Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Indicative Result & Conversion */}
          {step === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Main Estimation Box */}
              <div className="p-6 rounded-xl bg-slate-850 bg-slate-800/80 border border-sky-500/40 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
                  <div>
                    <span className="text-xs text-sky-400 font-semibold tracking-wider uppercase block">
                      Indicative Government VEU Upgrade Discount
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5">
                      {estimate.category}
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-extrabold text-sky-300 tabular-nums">
                      {estimate.range}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Typical benchmark savings: ~{estimate.typical}
                    </div>
                  </div>
                </div>

                {/* 4 Pillars of Transparency: Government Discount vs Installation vs Savings vs Quote */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-2">
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[11px] font-medium">Indicative VEU Discount</span>
                    <strong className="text-white text-sm">{estimate.range}</strong>
                    <span className="text-slate-400 block text-[10px] mt-0.5">Applied upfront off quote</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[11px] font-medium">Equipment Efficiency</span>
                    <strong className="text-white text-sm">A-Grade Inverter</strong>
                    <span className="text-slate-400 block text-[10px] mt-0.5">High COP heat pump</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[11px] font-medium">Estimated Bill Savings</span>
                    <strong className="text-white text-sm">Up to 45% lower</strong>
                    <span className="text-slate-400 block text-[10px] mt-0.5">Heating running costs vs gas</span>
                  </div>
                  <div className="p-3 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[11px] font-medium">Confirmed Quotation</span>
                    <strong className="text-sky-400 text-sm">Site Survey Required</strong>
                    <span className="text-slate-400 block text-[10px] mt-0.5">No hidden surprises</span>
                  </div>
                </div>
              </div>

              {/* Mandatory Regulatory & Legal Transparency Notice */}
              <div className="p-4 rounded-lg bg-amber-950/30 border border-amber-600/30 text-xs text-amber-200/90 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-300">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>Important Regulatory & Eligibility Disclosure</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  {VEU_REGULATORY_CONFIG.disclaimer}
                </p>
                <div className="text-[10px] text-amber-300/70 pt-1 border-t border-amber-900/40 flex items-center justify-between">
                  <span>Regulatory Standard: Essential Services Commission Victoria</span>
                  <span>Validated Baseline: {VEU_REGULATORY_CONFIG.lastUpdated}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  onClick={() => setStep(4)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Adjust Selections
                </button>

                <button
                  onClick={handleContinueToQuote}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-all duration-200 shadow-md cursor-pointer active:scale-[0.99]"
                >
                  <span>Get My Personalised Upgrade Quote</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
