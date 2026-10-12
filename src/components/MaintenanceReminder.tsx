import React, { useState } from 'react';
import { ArrowRight, Bell, Calendar, Check, Clock, ShieldCheck, Download, Sparkles, AlertCircle } from 'lucide-react';
import { ServiceReminderData } from '../types';

interface MaintenanceReminderProps {
  onOpenServiceBooking: () => void;
}

export const MaintenanceReminder: React.FC<MaintenanceReminderProps> = ({
  onOpenServiceBooking,
}) => {
  const [systemType, setSystemType] = useState<ServiceReminderData['systemType']>('both');
  const [lastServiced, setLastServiced] = useState<string>('over-1-year');
  const [preferredTiming, setPreferredTiming] = useState<ServiceReminderData['preferredTiming']>('pre-winter');
  const [contactMethod, setContactMethod] = useState<'email' | 'sms'>('email');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerContact, setCustomerContact] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('Bendigo');
  const [isScheduled, setIsScheduled] = useState<boolean>(false);

  const handleScheduleReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerContact || !customerName) return;
    setIsScheduled(true);
  };

  const generateIcsFile = () => {
    // Generate a downloadable calendar invite for the next service reminder
    const calendarData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//BRACS Bendigo//Service Reminder//EN',
      'BEGIN:VEVENT',
      'SUMMARY:BRACS Heating & Cooling Annual System Service',
      'DESCRIPTION:Reminder to book seasonal maintenance for your heating & cooling equipment with Bendigo Refrigeration & Air Conditioning Services (BRACS). Call (03) 5448 3999.',
      'LOCATION:14b Rohs Road, East Bendigo VIC 3550',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([calendarData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'BRACS-Service-Reminder.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="servicing" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            System Maintenance & Servicing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Keep Your System Performing at Its Best.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Central Victoria’s weather places heavy seasonal demands on HVAC equipment. Routine maintenance preserves
            airflow efficiency, sanitises indoor coils, prevents sudden winter breakdowns, and prolongs compressor life.
          </p>
        </div>

        {/* 2-Column Split: Service Offerings Overview & Interactive Smart Reminder Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Servicing Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                What a Comprehensive BRACS Service Includes:
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our licensed technicians conduct thorough multi-point checks in accordance with Australian Standards
                and manufacturer guidelines.
              </p>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Indoor Air Quality & Coil Sanitisation</strong>
                  <span className="text-slate-600 text-xs">Deep chemical clean of evaporator coils and filter treatment to remove allergen build-up.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Refrigerant Pressure & Leak Inspection</strong>
                  <span className="text-slate-600 text-xs">ARC-certified pressure testing to ensure peak thermodynamic heat transfer and zero gas leaks.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Electrical & Contactor Diagnostics</strong>
                  <span className="text-slate-600 text-xs">Thermal imaging and current load draw checks on compressor capacitors and fan motors.</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Condensate Drainage Flushing</strong>
                  <span className="text-slate-600 text-xs">Clearing drip trays and drain traps to protect your ceilings from water leaks and algae blockage.</span>
                </div>
              </li>
            </ul>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenServiceBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
              >
                <span>Request a Service Call</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Smart Service Reminder Tool */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            
            <div className="border-b border-slate-200 pb-5 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-sky-600" />
                  Smart Service Reminder Feature
                </span>
                <span className="text-[11px] text-slate-500 font-mono">Demo Preview</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Never Miss a System Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Configure seasonal reminders so your heating is checked before winter and cooling is prepped before summer heatwaves.
              </p>
            </div>

            {!isScheduled ? (
              <form onSubmit={handleScheduleReminder} className="space-y-5">
                
                {/* System Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    1. Select Equipment to Protect:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'heating', label: 'Heating Only' },
                      { id: 'cooling', label: 'Cooling Only' },
                      { id: 'both', label: 'Heating & Cooling' },
                      { id: 'commercial', label: 'Commercial Plant' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSystemType(opt.id as any)}
                        className={`py-2 px-2.5 rounded-md text-xs font-medium border text-center transition-colors cursor-pointer ${
                          systemType === opt.id
                            ? 'bg-slate-900 border-slate-900 text-white font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timing Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      2. Approximate Last Service:
                    </label>
                    <select
                      value={lastServiced}
                      onChange={(e) => setLastServiced(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-md bg-white border border-slate-200 text-slate-800 focus:border-sky-600 focus:outline-none"
                    >
                      <option value="under-6-months">Within last 6 months</option>
                      <option value="6-to-12-months">6 to 12 months ago</option>
                      <option value="over-1-year">1 to 2 years ago (Due now)</option>
                      <option value="never">Over 2 years / Never serviced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      3. Preferred Reminder Timing:
                    </label>
                    <select
                      value={preferredTiming}
                      onChange={(e) => setPreferredTiming(e.target.value as any)}
                      className="w-full text-xs p-2.5 rounded-md bg-white border border-slate-200 text-slate-800 focus:border-sky-600 focus:outline-none"
                    >
                      <option value="pre-winter">Pre-Winter (March / April Check)</option>
                      <option value="pre-summer">Pre-Summer (October / November Check)</option>
                      <option value="annual">Every 12 Months</option>
                      <option value="semi-annual">Bi-Annual (Spring & Autumn)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Mitchell"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-md bg-white border border-slate-200 text-slate-800 focus:border-sky-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Contact Email or Mobile:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. sarah@example.com.au"
                      value={customerContact}
                      onChange={(e) => setCustomerContact(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-md bg-white border border-slate-200 text-slate-800 focus:border-sky-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                  >
                    <span>Configure Service Reminder (Interactive Demo)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                  </button>
                  <p className="text-[11px] text-slate-500 mt-2 text-center">
                    Simulated concept preview. No spam. You will also be offered a direct calendar invite.
                  </p>
                </div>

              </form>
            ) : (
              /* Simulated Success State */
              <div className="p-6 rounded-lg bg-emerald-50/80 border border-emerald-200 text-emerald-950 space-y-4 animate-in fade-in">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Service Reminder Scheduled (Interactive Demo)</span>
                </div>

                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, <strong>{customerName}</strong>! In a production deployment, an automated seasonal
                  maintenance prompt would be sent to <strong>{customerContact}</strong> prior to peak season.
                </p>

                <div className="p-3 bg-white/80 rounded border border-emerald-200 text-xs text-slate-700 space-y-1">
                  <div><strong>System Tracked:</strong> {systemType.toUpperCase()}</div>
                  <div><strong>Recommended Next Window:</strong> {preferredTiming === 'pre-winter' ? 'March–April (Pre-Winter)' : 'October–November (Pre-Summer)'}</div>
                  <div><strong>Location:</strong> Bendigo Region</div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={generateIcsFile}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-md transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Calendar Event (.ics)</span>
                  </button>

                  <button
                    onClick={() => setIsScheduled(false)}
                    className="text-xs text-emerald-800 hover:text-emerald-950 font-medium underline"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
