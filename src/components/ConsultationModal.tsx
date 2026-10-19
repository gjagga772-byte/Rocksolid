import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Phone, 
  MessageSquare, 
  Clock, 
  Info,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedProgramTitle?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedProgramTitle
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    serviceInterest: '',
    preferredFormat: 'In-Person (Kathmandu / On-Site)',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceInterest: preselectedService }));
    } else if (preselectedProgramTitle) {
      setFormData(prev => ({ 
        ...prev, 
        serviceInterest: 'Customized Corporate Training',
        message: `Inquiry regarding the training program: "${preselectedProgramTitle}"\n\n`
      }));
    }
  }, [preselectedService, preselectedProgramTitle, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Please provide a valid telephone number (minimum 8 digits)';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.serviceInterest) {
      errs.serviceInterest = 'Please select a service or program of interest';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief outline of your training or consultancy needs';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a few more details so we can assist you properly';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Rocksolid Business Solutions,%0A%0AMy name is ${encodeURIComponent(formData.fullName || 'Prospective Client')}${formData.organization ? ` from ${encodeURIComponent(formData.organization)}` : ''}.%0A%0A*Service of Interest:* ${encodeURIComponent(formData.serviceInterest || 'General Inquiry')}%0A*Preferred Format:* ${encodeURIComponent(formData.preferredFormat)}%0A*Contact Phone:* ${encodeURIComponent(formData.phone)}%0A%0A*Requirements:*%0A${encodeURIComponent(formData.message || 'I would like to schedule a consultation with Mr. Dipankar Sherpa.')}`;
    return `https://wa.me/${COMPANY_INFO.whatsAppNumber}?text=${text}`;
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      organization: '',
      phone: '',
      email: '',
      serviceInterest: '',
      preferredFormat: 'In-Person (Kathmandu / On-Site)',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0b1b3d] to-[#1e3a8a] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-2 border border-amber-500/30">
            <span>Rocksolid Client Advisory</span>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Request Business Consultation
          </h3>
          <p className="text-slate-300 text-sm mt-1 max-w-lg">
            Discuss your organization's skill gaps, managerial challenges, or growth strategy with our Kathmandu advisory team.
          </p>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="space-y-6 py-4 animate-in zoom-in-95 duration-200">
              <div className="text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Inquiry Prepared Successfully
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. 
                  Your consultation request for <strong className="text-blue-900">{formData.serviceInterest}</strong> has been structured.
                </p>
              </div>

              {/* Explicit demonstration mode notice required by prompt instructions */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-800">
                  <Info className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>Demonstration & Direct Communication Notice</span>
                </div>
                <p className="text-amber-800/90 leading-relaxed">
                  To ensure complete transparency, this website currently operates in <strong>frontend demonstration mode</strong> without an external server-side email relay. To ensure your inquiry reaches <strong>Mr. Dipankar Sherpa</strong> immediately, please use the direct WhatsApp or phone buttons below.
                </p>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="space-y-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Pre-Filled Inquiry via WhatsApp (+977 9851233343)</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-bold text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call {COMPANY_INFO.primaryPhone} Directly</span>
                </a>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-slate-500 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-blue-700 hover:underline"
                >
                  ← Submit Another Inquiry
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form notice */}
              <div className="bg-slate-50 rounded-lg p-3 text-xs text-slate-600 border border-slate-200 flex items-center justify-between">
                <span>Official Contact: <strong>{COMPANY_INFO.primaryPhone}</strong></span>
                <span className="text-slate-400">Kathmandu, Nepal</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Karki"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                      errors.fullName ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30' : 'border-slate-300 focus:ring-blue-600'
                    }`}
                  />
                  {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                    Organization / Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Himalayan Enterprises Pvt. Ltd."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                    Phone / Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9851000000 / +977..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30' : 'border-slate-300 focus:ring-blue-600'
                    }`}
                  />
                  {errors.phone && <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                    Your Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-rose-300 focus:ring-rose-500' : 'border-slate-300 focus:ring-blue-600'
                    }`}
                  />
                  {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Interest */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                    Service of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 bg-white ${
                      errors.serviceInterest ? 'border-rose-300 focus:ring-rose-500' : 'border-slate-300 focus:ring-blue-600'
                    }`}
                  >
                    <option value="">Select Service / Program</option>
                    {SERVICES_CATALOG.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General Strategic Consultation">General Strategic Consultation</option>
                    <option value="Other Customized Inquiries">Other Inquiries</option>
                  </select>
                  {errors.serviceInterest && <p className="text-rose-600 text-xs mt-1">{errors.serviceInterest}</p>}
                </div>

                {/* Preferred Format */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                    Preferred Training / Advisory Format
                  </label>
                  <select
                    value={formData.preferredFormat}
                    onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                  >
                    <option value="In-Person (Kathmandu / On-Site)">In-Person (Kathmandu / On-Site)</option>
                    <option value="In-Person (Outside Kathmandu / Nationwide)">In-Person (Outside Kathmandu / Nationwide)</option>
                    <option value="Interactive Online (Zoom/Teams)">Interactive Online (Virtual)</option>
                    <option value="Hybrid (Combined In-Person & Virtual)">Hybrid (Combined)</option>
                    <option value="To Be Decided in Consultation">To Be Decided</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                  Message or Training Requirements <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your key business challenge, team size, intended participants, or what you hope to achieve through this session..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 resize-none ${
                    errors.message ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30' : 'border-slate-300 focus:ring-blue-600'
                  }`}
                />
                {errors.message && <p className="text-rose-600 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#0b1b3d] hover:bg-blue-900 text-white font-semibold text-sm shadow transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
