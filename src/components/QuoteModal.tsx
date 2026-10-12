import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check, Phone, Mail, Upload, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';
import { QuoteFormData } from '../types';
import { BRACS_COMPANY_INFO } from '../data/bracsData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceType?: string;
  initialVeuData?: {
    existingSystem: string;
    desiredUpgrade: string;
    propertyType: string;
    estimatedDiscount: string;
  } | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceType,
  initialVeuData,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [quoteRef, setQuoteRef] = useState<string>('');

  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: initialServiceType || 'Replace Existing System',
    propertyType: 'Home (Single Storey)',
    suburb: 'Bendigo',
    projectDescription: '',
    preferredContact: 'phone',
    fullName: '',
    phone: '',
    email: '',
    estimatedBudget: '$3,000 – $6,000',
    veuInterested: !!initialVeuData,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialServiceType) {
      setFormData((prev) => ({ ...prev, serviceType: initialServiceType }));
    }
    if (initialVeuData) {
      setFormData((prev) => ({
        ...prev,
        serviceType: 'VEU Upgrade Enquiry',
        propertyType: initialVeuData.propertyType || 'Home (Single Storey)',
        projectDescription: `VEU Upgrade Exploration: Upgrading from ${initialVeuData.existingSystem} to ${initialVeuData.desiredUpgrade}. Estimated indicative discount: ${initialVeuData.estimatedDiscount}.`,
        veuInterested: true,
      }));
    }
  }, [initialServiceType, initialVeuData]);

  if (!isOpen) return null;

  const validateStep4 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 8)
      newErrors.phone = 'Please enter a valid phone number';
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Please enter a valid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep4()) return;

    const randomRef = `BRACS-Q${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteRef(randomRef);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-xl w-full overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-[#0F1E2E] text-white p-6 flex items-start justify-between">
          <div>
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              {submitted ? 'Enquiry Confirmation' : `Step 0${step} of 04 · No-Obligation Quotation`}
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              {submitted
                ? 'Thank You for Your Enquiry'
                : 'Request a Free Heating & Cooling Quote'}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Bendigo Refrigeration & Air Conditioning Services · Est. 1982
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <div>
              {/* STEP 1: Service Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      1. What can we help you with?
                    </h4>
                    <p className="text-xs text-slate-500">
                      Choose the primary category for your heating, cooling or refrigeration enquiry.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {[
                      'New Heating Installation',
                      'Cooling Installation',
                      'Replace Existing System',
                      'Repair or Maintenance',
                      'Commercial Refrigeration',
                      'Commercial HVAC Project',
                      'VEU Upgrade Enquiry',
                      'General Consultation',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, serviceType: type });
                        }}
                        className={`p-3 text-left rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                          formData.serviceType === type
                            ? 'bg-slate-900 border-slate-900 text-white font-semibold'
                            : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                    >
                      <span>Continue to Property Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Property Type */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      2. What type of property is this for?
                    </h4>
                    <p className="text-xs text-slate-500">
                      Knowing the building layout helps us anticipate ducting routes and electrical capacities.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {[
                      'Home (Single Storey)',
                      'Home (Double Storey)',
                      'Commercial Retail / Hospitality',
                      'Commercial Office / Clinic',
                      'Industrial / Cold Storage',
                      'New Construction / Renovation',
                    ].map((prop) => (
                      <button
                        key={prop}
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: prop })}
                        className={`p-3 text-left rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                          formData.propertyType === prop
                            ? 'bg-slate-900 border-slate-900 text-white font-semibold'
                            : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        {prop}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                    >
                      <span>Continue to Project Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Project Scope & Suburb */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      3. Project Scope & Suburb
                    </h4>
                    <p className="text-xs text-slate-500">
                      Provide details about your rooms, current issues, or desired temperature control.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Location Suburb or Postcode:
                    </label>
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Strathdale, East Bendigo, Kangaroo Flat 3555"
                      className="w-full text-xs p-2.5 rounded-md bg-white border border-slate-200 text-slate-800 focus:border-sky-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Brief Project Description or Rooms to Heat/Cool:
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDescription}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDescription: e.target.value })
                      }
                      placeholder="e.g. Looking to replace a 12-year-old gas ducted heater with a reverse cycle heat pump across 4 bedrooms and open living room."
                      className="w-full text-xs p-2.5 rounded-md bg-white border border-slate-200 text-slate-800 focus:border-sky-600 focus:outline-none"
                    />
                  </div>

                  {/* Simulated Upload Slot */}
                  <div className="p-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center">
                    <Upload className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                    <span className="text-xs font-semibold text-slate-700 block">
                      Optional Floor Plans or Photo of Existing Unit
                    </span>
                    <span className="text-[10px] text-slate-500">
                      PDF, JPG or PNG up to 10MB (Simulated for quote estimation)
                    </span>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact & Submission */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      4. Your Contact Details
                    </h4>
                    <p className="text-xs text-slate-500">
                      We’ll review your specifications and contact you with a prompt estimate or measure booking.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Lachlan Bennett"
                      className={`w-full text-xs p-2.5 rounded-md bg-white border text-slate-800 focus:outline-none ${
                        errors.fullName ? 'border-red-500' : 'border-slate-200 focus:border-sky-600'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[10px] text-red-600 mt-0.5 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0412 345 678"
                        className={`w-full text-xs p-2.5 rounded-md bg-white border text-slate-800 focus:outline-none ${
                          errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-sky-600'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-600 mt-0.5 block">{errors.phone}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. lachlan@example.com.au"
                        className={`w-full text-xs p-2.5 rounded-md bg-white border text-slate-800 focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-slate-200 focus:border-sky-600'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-600 mt-0.5 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Contact Method:
                    </label>
                    <div className="flex items-center gap-4 text-xs text-slate-700">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          checked={formData.preferredContact === 'phone'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                          className="text-sky-600"
                        />
                        <span>Phone Call</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          checked={formData.preferredContact === 'email'}
                          onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                          className="text-sky-600"
                        />
                        <span>Email Written Quote</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#0F1E2E] hover:bg-slate-800 rounded-md transition-colors cursor-pointer shadow-sm active:scale-[0.99]"
                    >
                      <span>Submit Quote Request</span>
                      <ArrowRight className="w-4 h-4 text-sky-400" />
                    </button>
                    <p className="text-[11px] text-slate-400 mt-2 text-center">
                      Your privacy is protected. No spam. A qualified BRACS technician will contact you promptly.
                    </p>
                  </div>

                  <div className="pt-2 flex justify-start">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      ← Back to Scope
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Successful Submission Confirmation */
            <div className="space-y-5 text-center py-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-sky-700 uppercase">
                  Reference: {quoteRef}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">
                  Enquiry Received Successfully
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding{' '}
                  <strong>{formData.serviceType}</strong> for your property in{' '}
                  <strong>{formData.suburb}</strong> has been logged in our system.
                </p>
              </div>

              {/* Summary box */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs text-slate-700 space-y-1 max-w-md mx-auto">
                <div><strong>Service:</strong> {formData.serviceType}</div>
                <div><strong>Property:</strong> {formData.propertyType}</div>
                <div><strong>Contact:</strong> {formData.phone} · {formData.email}</div>
                <div><strong>Preferred Method:</strong> {formData.preferredContact.toUpperCase()}</div>
              </div>

              {/* Speculative Demo Disclosure */}
              <div className="p-3 rounded-lg bg-sky-50 border border-sky-200 text-xs text-sky-900 max-w-md mx-auto text-left flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-[11px]">
                  <strong>Redesign Concept Note:</strong> This submission was safely simulated. To contact
                  the real BRACS workshop directly in Bendigo, call{' '}
                  <a href="tel:0354483999" className="font-bold underline text-sky-800">
                    (03) 5448 3999
                  </a>{' '}
                  or visit the showroom at 14b Rohs Road, East Bendigo.
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
