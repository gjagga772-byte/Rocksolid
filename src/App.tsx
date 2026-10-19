import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ConsultationModal } from './components/ConsultationModal';
import { VerificationModal } from './components/VerificationModal';
import { PrivacyModal } from './components/PrivacyModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { TrainingProgramsView } from './views/TrainingProgramsView';
import { WhyChooseUsView } from './views/WhyChooseUsView';
import { InsightsView } from './views/InsightsView';
import { ContactView } from './views/ContactView';
import { NotFoundView } from './views/NotFoundView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [preselectedProgramTitle, setPreselectedProgramTitle] = useState<string | undefined>(undefined);
  
  const [verificationModalOpen, setVerificationModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [privacyInitialTab, setPrivacyInitialTab] = useState<'privacy' | 'terms'>('privacy');

  // Sync hash routing with view state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validViews = ['home', 'about', 'services', 'training', 'why-us', 'insights', 'contact'];
      if (hash && validViews.includes(hash)) {
        setCurrentView(hash);
      } else if (!hash) {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.location.hash = view === 'home' ? '' : view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (service?: string, programTitle?: string) => {
    setPreselectedService(service);
    setPreselectedProgramTitle(programTitle);
    setConsultationModalOpen(true);
  };

  const handleOpenPrivacy = (tab: 'privacy' | 'terms' = 'privacy') => {
    setPrivacyInitialTab(tab);
    setPrivacyModalOpen(true);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            onNavigate={handleNavigate}
            onRequestConsultation={(s) => handleOpenConsultation(s)}
            onOpenChecklist={() => setVerificationModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutView
            onNavigate={handleNavigate}
            onRequestConsultation={() => handleOpenConsultation('General Strategic Consultation')}
            onOpenChecklist={() => setVerificationModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesView
            onRequestConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)}
            onNavigate={handleNavigate}
          />
        );
      case 'training':
        return (
          <TrainingProgramsView
            onInquireProgram={(title) => handleOpenConsultation(undefined, title)}
            onRequestConsultation={(s) => handleOpenConsultation(s)}
          />
        );
      case 'why-us':
        return (
          <WhyChooseUsView
            onNavigate={handleNavigate}
            onRequestConsultation={() => handleOpenConsultation()}
          />
        );
      case 'insights':
        return (
          <InsightsView
            onRequestConsultation={() => handleOpenConsultation()}
          />
        );
      case 'contact':
        return (
          <ContactView
            onOpenChecklist={() => setVerificationModalOpen(true)}
          />
        );
      default:
        return <NotFoundView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onRequestConsultation={() => handleOpenConsultation()}
        onOpenChecklist={() => setVerificationModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestConsultation={(s) => handleOpenConsultation(s)}
        onOpenPrivacy={handleOpenPrivacy}
        onOpenChecklist={() => setVerificationModalOpen(true)}
      />

      {/* Floating Action Controls */}
      <FloatingActions onRequestConsultation={() => handleOpenConsultation()} />

      {/* Global Modals */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => {
          setConsultationModalOpen(false);
          setPreselectedService(undefined);
          setPreselectedProgramTitle(undefined);
        }}
        preselectedService={preselectedService}
        preselectedProgramTitle={preselectedProgramTitle}
      />

      <VerificationModal
        isOpen={verificationModalOpen}
        onClose={() => setVerificationModalOpen(false)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        initialTab={privacyInitialTab}
      />
    </div>
  );
}
