import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  FileText,
  Clock,
  Sparkles,
  Share2
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/companyData';

interface FooterProps {
  onNavigate: (view: string) => void;
  onRequestConsultation: (service?: string) => void;
  onOpenPrivacy: (initialTab?: 'privacy' | 'terms') => void;
  onOpenChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestConsultation,
  onOpenPrivacy,
  onOpenChecklist
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07132c] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Official Registration overview (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="light" size="lg" />
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Rocksolid Business Solutions Pvt. Ltd. empowers entrepreneurs, professionals, 
              and organizations across Nepal with practical business training, leadership development, 
              and customized management consultancy solutions designed for measurable, sustainable growth.
            </p>

            {/* Proprietor & Leadership Callout */}
            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800/80 max-w-md">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold text-slate-200">Company Leadership</span>
                <span className="text-amber-400 text-[11px] font-medium">Verified Profile</span>
              </div>
              <p className="text-sm text-slate-300">
                <strong className="text-white font-medium">{COMPANY_INFO.proprietor}</strong> — {COMPANY_INFO.roleTitle}
              </p>
            </div>

            {/* Configurable Social Media Placeholders notice */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                Official Digital Channels
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={COMPANY_INFO.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-950/70 text-emerald-400 hover:bg-emerald-900 border border-emerald-800/50 text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Business</span>
                </a>

                <div 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 text-slate-400 text-xs border border-slate-800"
                  title="Configurable placeholder for verified company LinkedIn profile"
                >
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>LinkedIn (Pending URL)</span>
                </div>

                <div 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 text-slate-400 text-xs border border-slate-800"
                  title="Configurable placeholder for verified company Facebook page"
                >
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Facebook (Pending URL)</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                * Social handles remain editable placeholders pending verified corporate account creation.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('training')} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Training Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('why-us')} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('insights')} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Insights & Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_CATALOG.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      handleNav('services');
                    }}
                    className="text-slate-400 hover:text-amber-400 text-left transition-colors flex items-center justify-between group w-full"
                  >
                    <span className="truncate">{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-amber-400 shrink-0 ml-1" />
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 mt-1"
                >
                  <span>View All 8 Services</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
              Official Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-slate-200 hover:text-amber-400 font-medium block"
                  >
                    {COMPANY_INFO.primaryPhone}
                  </a>
                  <span className="text-[11px] text-slate-500">Official Mobile / Direct Inquiries</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={COMPANY_INFO.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium block"
                  >
                    +977 {COMPANY_INFO.whatsAppNumber.slice(3)}
                  </a>
                  <span className="text-[11px] text-slate-500">Instant WhatsApp Business Chat</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400">
                  <p className="font-medium text-slate-300">Office Working Hours</p>
                  <p>{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onRequestConsultation()}
                className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Lower row: Legal disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © {currentYear} <span className="text-slate-300 font-medium">{COMPANY_INFO.name}</span>. All rights reserved.
            </p>
            <span className="hidden sm:inline">•</span>
            <p className="text-[11px] text-slate-500">
              Registered in Kathmandu, Nepal.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              onClick={() => onOpenPrivacy('privacy')}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPrivacy('terms')}
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Terms of Use
            </button>
            <span>•</span>
            <button
              onClick={onOpenChecklist}
              className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Owner Pre-Launch Checklist</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
