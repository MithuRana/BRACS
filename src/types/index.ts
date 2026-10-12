export type PageView =
  | 'home'
  | 'residential'
  | 'commercial'
  | 'servicing'
  | 'veu'
  | 'projects'
  | 'about'
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'maintenance';
  headline: string;
  description: string;
  features: string[];
  idealFor: string;
  recommendedBrands: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client?: string;
  category: 'Commercial HVAC' | 'Educational' | 'Commercial Refrigeration' | 'Residential Ducted';
  location: string;
  year?: string;
  summary: string;
  specifications: string[];
  keyOutcome: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  service: string;
  quote: string;
  isVerifiedCustomer: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'residential' | 'commercial' | 'rebates' | 'maintenance';
}

export interface QuoteFormData {
  serviceType: string;
  propertyType: string;
  suburb: string;
  projectDescription: string;
  preferredContact: 'phone' | 'email';
  fullName: string;
  phone: string;
  email: string;
  estimatedBudget?: string;
  existingSystem?: string;
  veuInterested: boolean;
}

export interface ServiceReminderData {
  systemType: 'heating' | 'cooling' | 'both' | 'commercial';
  lastServicedDate: string;
  preferredTiming: 'pre-winter' | 'pre-summer' | 'annual' | 'semi-annual';
  contactMethod: 'email' | 'sms';
  customerName: string;
  customerContact: string;
  suburb: string;
}
