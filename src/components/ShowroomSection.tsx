import React, { useMemo } from 'react';
import { MapPin, Clock, Phone, Navigation, Check, ExternalLink, Calendar, Info } from 'lucide-react';
import { BRACS_COMPANY_INFO } from '../data/bracsData';

interface ShowroomSectionProps {
  onOpenConsultation: () => void;
}

export const ShowroomSection: React.FC<ShowroomSectionProps> = ({ onOpenConsultation }) => {
  // Timezone-aware calculation for Australia/Melbourne (AEST/AEDT)
  const currentStatus = useMemo(() => {
    try {
      const now = new Date();
      const melbourneTimeStr = now.toLocaleTimeString('en-AU', {
        timeZone: 'Australia/Melbourne',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      const dayOfWeekStr = now.toLocaleDateString('en-AU', {
        timeZone: 'Australia/Melbourne',
        weekday: 'short',
      });

      const [hours, minutes] = melbourneTimeStr.split(':').map(Number);
      const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(dayOfWeekStr);
      const isWorkingHours = hours >= 9 && hours < 17;

      if (isWeekday && isWorkingHours) {
        return {
          isOpen: true,
          badge: 'Showroom Open Now',
          detail: 'Closes at 5:00 pm AEST today',
          color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        };
      } else if (isWeekday && hours < 9) {
        return {
          isOpen: false,
          badge: 'Opening Today at 9:00 am',
          detail: 'Weekday hours: 9:00 am – 5:00 pm',
          color: 'text-amber-800 bg-amber-50 border-amber-200',
        };
      } else {
        return {
          isOpen: false,
          badge: 'Showroom Closed',
          detail: 'Reopens Monday at 9:00 am',
          color: 'text-slate-700 bg-slate-100 border-slate-200',
        };
      }
    } catch {
      return {
        isOpen: false,
        badge: 'Mon–Fri 9:00am–5:00pm',
        detail: 'Showroom & Trade Depot',
        color: 'text-slate-700 bg-slate-100 border-slate-200',
      };
    }
  }, []);

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=14b+Rohs+Road+East+Bendigo+VIC+3550';

  return (
    <section id="showroom" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
            Local Trade Showroom & Workshop
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            See Your Options. Speak With a Local Expert.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Selecting heating and cooling is easier when you can see units operating on live power, test wall controllers,
            and discuss your house plans across the table with qualified trade professionals.
          </p>
        </div>

        {/* 2-Column Split: Visual Showroom Facility & Location/Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Showroom Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
              <img
                src="/src/assets/images/showroom_workshop_bendigo_1791829326717.jpg"
                alt="BRACS customer showroom and consultation space in East Bendigo"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded bg-white/95 backdrop-blur-md border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <div>
                  <strong className="text-slate-900 block font-semibold">East Bendigo Consultation Centre</strong>
                  <span className="text-slate-500">Live split systems, ducted controllers & floor plan reviews</span>
                </div>
                <div className="pl-2">
                  <span className="text-xs font-bold text-sky-700">14b Rohs Rd</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Live Hours, Directions, Features */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Live Status Indicator Bar */}
            <div className={`p-4 rounded-lg border flex items-center justify-between text-xs ${currentStatus.color}`}>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <div>
                  <strong className="block font-semibold">{currentStatus.badge}</strong>
                  <span className="text-[11px] opacity-90">{currentStatus.detail}</span>
                </div>
              </div>
              <span className="text-[11px] font-mono font-medium">Victoria (AEST)</span>
            </div>

            {/* Address & Hours Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  Showroom Address
                </span>
                <div className="text-sm font-semibold text-slate-900 leading-snug">
                  14b Rohs Road <br />
                  East Bendigo VIC 3550
                </div>
                <div className="pt-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  Standard Working Hours
                </span>
                <div className="text-xs text-slate-700 space-y-1">
                  <div className="flex justify-between">
                    <span>Monday – Friday:</span>
                    <strong className="text-slate-900">9:00 am – 5:00 pm</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Can Experience at the Showroom */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Showroom Demonstrations Available:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>Mitsubishi Electric Diamond displays</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>AirTouch 5 smart touchscreen zoning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>Bring house blueprints for sizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>Architectural ceiling linear grilles</span>
                </li>
              </ul>
            </div>

            {/* Address Verification Note */}
            <div className="p-3 rounded-md bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <span>
                <strong>Location Note:</strong> 14b Rohs Road, East Bendigo is the active trade headquarters and public showroom. (Older historical records referencing Beischer Street represent prior premises).
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="tel:0354483999"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call (03) 5448 3999</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
