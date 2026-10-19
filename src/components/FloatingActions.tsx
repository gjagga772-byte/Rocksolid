import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FloatingActionsProps {
  onRequestConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onRequestConsultation }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href={COMPANY_INFO.whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xl shadow-emerald-900/20 hover:scale-105 transition-all group border border-emerald-500/50"
        title="Chat on WhatsApp (+977 9851233343)"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">WhatsApp Inquiries</span>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-amber-400 hover:text-amber-300 shadow-xl border border-slate-700 transition-all hover:scale-105 active:scale-95"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </aside>
  );
};
