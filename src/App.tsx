import React, { useState } from 'react';
import { PageView } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustCredentials } from './components/TrustCredentials';
import { ResidentialSection } from './components/ResidentialSection';
import { VeuEstimator } from './components/VeuEstimator';
import { WhatWeDo } from './components/WhatWeDo';
import { CommercialSection } from './components/CommercialSection';
import { TheBracsStory } from './components/TheBracsStory';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { MaintenanceReminder } from './components/MaintenanceReminder';
import { MitsubishiDiamond } from './components/MitsubishiDiamond';
import { Testimonials } from './components/Testimonials';
import { ShowroomSection } from './components/ShowroomSection';
import { FaqSection } from './components/FaqSection';
import { LeadCtaBanner } from './components/LeadCtaBanner';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { DedicatedViews } from './components/DedicatedViews';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [initialServiceType, setInitialServiceType] = useState<string | undefined>(undefined);
  const [initialVeuData, setInitialVeuData] = useState<any | null>(null);

  const handleOpenQuote = (serviceType?: string) => {
    setInitialServiceType(serviceType);
    setInitialVeuData(null);
    setIsQuoteOpen(true);
  };

  const handleTransferVeuToQuote = (veuDetails: any) => {
    setInitialServiceType('VEU Upgrade Enquiry');
    setInitialVeuData(veuDetails);
    setIsQuoteOpen(true);
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      {/* Premium Utility Bar & Top Bar Contract Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* Section 02: Signature Hero Experience */}
            <Hero
              onOpenQuote={handleOpenQuote}
              onNavigateSection={handleScrollToSection}
            />

            {/* Section 03: Trust & Brand Credentials Strip */}
            <TrustCredentials />

            {/* Section 04: Residential Heating & Cooling */}
            <ResidentialSection
              onOpenQuote={handleOpenQuote}
              onNavigateVeu={() => handleScrollToSection('veu-upgrades')}
            />

            {/* Section 05: Victorian Energy Upgrades (VEU) Campaign & Interactive Estimator */}
            <VeuEstimator onTransferToQuote={handleTransferVeuToQuote} />

            {/* Section 06: What We Do (Asymmetric Capabilities Directory) */}
            <WhatWeDo
              onNavigatePage={handleNavigate}
              onOpenQuote={handleOpenQuote}
            />

            {/* Section 07: Commercial Refrigeration & HVAC */}
            <CommercialSection
              onOpenQuote={handleOpenQuote}
              onNavigateProjects={() => handleScrollToSection('projects')}
            />

            {/* Section 08: The BRACS Story */}
            <TheBracsStory
              onNavigateShowroom={() => handleScrollToSection('showroom')}
              onOpenQuote={handleOpenQuote}
            />

            {/* Section 09: Featured Projects */}
            <ProjectsShowcase onOpenQuote={handleOpenQuote} />

            {/* Section 10: Maintenance & Servicing + Smart Service Reminder Feature */}
            <MaintenanceReminder
              onOpenServiceBooking={() => handleOpenQuote('Repair or Maintenance')}
            />

            {/* Section 11: Mitsubishi Electric Diamond Dealer */}
            <MitsubishiDiamond onOpenQuote={handleOpenQuote} />

            {/* Section 12: Real Customer Experiences */}
            <Testimonials />

            {/* Section 13: East Bendigo Showroom */}
            <ShowroomSection
              onOpenConsultation={() => handleOpenQuote('Showroom Consultation')}
            />

            {/* Section 14: Helpful FAQs */}
            <FaqSection onOpenQuote={() => handleOpenQuote('General Enquiry')} />

            {/* Section 15: Final Lead-Generation CTA */}
            <LeadCtaBanner onOpenQuote={handleOpenQuote} />
          </>
        ) : (
          /* Dedicated Deep-Dive Sub-Pages */
          <>
            <DedicatedViews
              page={currentPage}
              onOpenQuote={handleOpenQuote}
              onNavigate={handleNavigate}
              onTransferToQuote={handleTransferVeuToQuote}
            />
            <LeadCtaBanner onOpenQuote={handleOpenQuote} />
          </>
        )}
      </main>

      {/* Section 16: Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />

      {/* Multi-Step High-Converting Quote Enquiry Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialServiceType={initialServiceType}
        initialVeuData={initialVeuData}
      />
    </div>
  );
}
