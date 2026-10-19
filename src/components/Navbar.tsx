import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  ClipboardCheck
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onRequestConsultation: (preselectedService?: string) => void;
  onOpenChecklist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onRequestConsultation,
  onOpenChecklist
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'training', label: 'Training Programs' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'insights', label: 'Insights & Resources' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top corporate informational utility bar */}
      <div className="bg-[#0b1b3d] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Location & proprietor note */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Budhanilkantha-08, Kathmandu, Nepal</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              Proprietor: <strong className="text-slate-200 font-medium">Mr. Dipankar Sherpa</strong>
            </span>
          </div>

          {/* Quick contact and owner verification trigger */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 font-medium transition-colors"
              title="Call Rocksolid Business Solutions"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              title="Inquire via WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </a>

            <button
              onClick={onOpenChecklist}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 text-[11px] font-medium border border-amber-500/30 transition-colors"
              title="Review company details verification status"
            >
              <ClipboardCheck className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">Owner</span> Review
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <nav className={`w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-lg"
          >
            <Logo variant="dark" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-blue-900 bg-blue-50 font-semibold'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              title="Chat with our advisory team on WhatsApp"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => onRequestConsultation()}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-[#0b1b3d] to-[#1d4ed8] hover:from-[#0d214c] hover:to-[#1e40af] shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onRequestConsultation()}
              className="px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-[#0b1b3d] hover:bg-blue-900"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile navigation slide-down menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 font-semibold border-l-4 border-amber-500'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs text-amber-600 font-bold">•</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0b1b3d] text-white font-semibold text-sm shadow hover:bg-blue-950 transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-slate-300 text-slate-800 text-xs font-semibold hover:bg-slate-50"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <span>Call Phone</span>
              </a>

              <a
                href={COMPANY_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold hover:bg-emerald-100"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChecklist();
              }}
              className="w-full py-2 text-center text-xs text-slate-500 hover:text-slate-800 flex items-center justify-center gap-1.5"
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>Owner Verification & Launch Checklist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
