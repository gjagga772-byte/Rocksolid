import React from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ShieldCheck, 
  FileCheck,
  Copy,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_VERIFICATION_CHECKLIST } from '../data/companyData';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0b1b3d] to-[#1e3a8a] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close checklist"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-2 border border-amber-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Proprietor & Pre-Launch Audit</span>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Company Verification & Launch Checklist
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Official details for <strong className="text-white">{COMPANY_INFO.name}</strong> reviewed against strict publishing compliance.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Confirmed Official Details Card */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Verified Official Company Facts (Active on Site)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
                <span className="text-emerald-700 font-semibold block">Company Name:</span>
                <span className="text-slate-800">{COMPANY_INFO.name}</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
                <span className="text-emerald-700 font-semibold block">Proprietor:</span>
                <span className="text-slate-800">{COMPANY_INFO.proprietor}</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100 sm:col-span-2">
                <span className="text-emerald-700 font-semibold block">Registered Location:</span>
                <span className="text-slate-800">{COMPANY_INFO.address}</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
                <span className="text-emerald-700 font-semibold block">Official Phone:</span>
                <span className="text-slate-800 font-mono">{COMPANY_INFO.primaryPhone}</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
                <span className="text-emerald-700 font-semibold block">Official WhatsApp:</span>
                <span className="text-slate-800 font-mono">+{COMPANY_INFO.whatsAppNumber}</span>
              </div>
            </div>
          </div>

          {/* Items that require Proprietor Confirmation prior to live deployment */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Editable Placeholders & Pre-Publication Checklist</span>
              </h4>
              <span className="text-xs text-slate-500">5 Compliance Items</span>
            </div>

            <div className="space-y-2.5">
              {COMPANY_VERIFICATION_CHECKLIST.map((item) => (
                <div 
                  key={item.id}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800 text-sm">
                      {item.title}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong className="text-slate-700">Current Value:</strong> {item.currentValue}
                  </p>
                  <p className="text-xs text-blue-900 bg-blue-50/70 p-2 rounded border border-blue-100">
                    <strong className="text-blue-950">Action for Mr. Dipankar Sherpa:</strong> {item.actionNeeded}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Assurance Notice */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <FileCheck className="w-4 h-4 text-blue-800" />
              <span>Strict Anti-Misrepresentation Safeguards</span>
            </div>
            <p className="leading-relaxed">
              In accordance with ethical business communication, no false client numbers, unverified partner logos, 
              fabricated client testimonials, or invented awards have been placed on this website. All services are presented 
              as proposed offerings for the company to confirm, and clear disclaimers state that regulated legal and audited accounting 
              services are not provided.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500">Source: src/data/companyData.ts</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#0b1b3d] hover:bg-blue-900 text-white font-semibold transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
