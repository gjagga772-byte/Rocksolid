import React, { useState } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms';
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0b1b3d] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10 text-amber-400">
              {activeTab === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold">
                {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
              </h3>
              <p className="text-xs text-slate-300">
                {COMPANY_INFO.name} • Kathmandu, Nepal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === 'privacy' 
                ? 'border-blue-900 text-blue-900' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === 'terms' 
                ? 'border-blue-900 text-blue-900' 
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Terms of Use
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
          {activeTab === 'privacy' ? (
            <>
              <p className="text-slate-500 text-xs italic">
                Last updated: October 2026. This policy outlines how Rocksolid Business Solutions Pvt. Ltd. handles contact inquiries and consultation details.
              </p>
              
              <h4 className="font-bold text-slate-900 text-sm">1. Information Collection & Usage</h4>
              <p>
                When you submit an inquiry through our consultation or contact forms, we collect your name, phone number, email address, organization name, and specific business requirements. This information is strictly utilized to understand your consultancy needs, respond to inquiries, and prepare customized training proposals.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">2. Non-Disclosure & Confidentiality</h4>
              <p>
                We treat all client business challenges, organizational structures, and proprietary operational details shared during training assessments with the utmost confidentiality. We do not sell, rent, or trade client information to any third parties.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">3. Direct Contact & Communication</h4>
              <p>
                By providing your contact number or initiating a WhatsApp inquiry, you authorize our advisory representatives to communicate with you regarding your stated training or consultancy requirements.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">4. Data Inquiries & Corrections</h4>
              <p>
                To request modification or deletion of any contact details previously provided, you may contact our office at <strong>{COMPANY_INFO.address}</strong> or call <strong>{COMPANY_INFO.primaryPhone}</strong>.
              </p>
            </>
          ) : (
            <>
              <p className="text-slate-500 text-xs italic">
                Last updated: October 2026. Please read these terms carefully before engaging our training and consulting services.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">1. Nature of Business Training & Consultancy Services</h4>
              <p>
                Rocksolid Business Solutions Pvt. Ltd. provides professional management consultancy, corporate training, entrepreneurship mentorship, and organizational development advisory. Our programs are designed to enhance management capabilities and strategic decision-making.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">2. Non-Provision of Regulated Statutory Advice</h4>
              <p>
                Rocksolid Business Solutions Pvt. Ltd. does not offer statutory external financial audits, licensed tax legal representations, or formal court litigation services. Our financial literacy and business planning modules are educational and managerial in nature.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">3. Intellectual Property of Training Materials</h4>
              <p>
                All workshop syllabi, presentation decks, framework models, and customized organizational assessment templates developed by Rocksolid Business Solutions remain the intellectual property of the company unless expressly agreed otherwise in written contractual engagement agreements.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">4. Jurisdiction</h4>
              <p>
                All business engagements, agreements, and services are governed by and construed in accordance with the prevailing laws of Nepal, under the jurisdiction of the competent courts of Kathmandu.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 text-white text-xs font-semibold rounded-lg hover:bg-slate-900"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};
