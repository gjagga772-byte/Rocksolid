import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Navigation,
  Building,
  UserCheck
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/companyData';

interface ContactViewProps {
  onOpenChecklist: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenChecklist }) => {
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

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Please provide a valid phone number (at least 8 digits)';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }

    if (!formData.serviceInterest) {
      errs.serviceInterest = 'Please select a service or program of interest';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please specify your requirements or business challenges';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least a brief sentence describing your needs';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Rocksolid Business Solutions,%0A%0AMy name is ${encodeURIComponent(formData.fullName || 'Inquirer')}${formData.organization ? ` representing ${encodeURIComponent(formData.organization)}` : ''}.%0A%0A*Service of Interest:* ${encodeURIComponent(formData.serviceInterest || 'General Inquiry')}%0A*Preferred Format:* ${encodeURIComponent(formData.preferredFormat)}%0A*Contact Phone:* ${encodeURIComponent(formData.phone)}%0A%0A*Message / Requirements:*%0A${encodeURIComponent(formData.message || 'I would like to schedule a consultation with Mr. Dipankar Sherpa.')}`;
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
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-[#07132c] via-[#0b1b3d] to-[#142852] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-300 text-xs font-semibold">
            <span>Direct Communication & Advisory Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Contact Rocksolid Business Solutions
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Reach out to discuss your company's training needs, schedule an executive consultation, or inquire about tailored organizational workshops in Kathmandu.
          </p>
        </div>
      </section>

      {/* 2. Official Company Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Official Phone */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Official Contact Number
              </span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-900 block mt-0.5"
              >
                {COMPANY_INFO.primaryPhone}
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Direct mobile line for telephone inquiries and scheduling.
            </p>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:underline pt-1"
            >
              <span>Click to Call</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Official WhatsApp
              </span>
              <a
                href={COMPANY_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-emerald-800 hover:text-emerald-900 block mt-0.5"
              >
                +{COMPANY_INFO.whatsAppNumber}
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Instant business messaging with our advisory team.
            </p>
            <a
              href={COMPANY_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:underline pt-1"
            >
              <span>Open WhatsApp Chat</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 3: Registered Address */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Office Location
              </span>
              <p className="text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                {COMPANY_INFO.address}
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Meetings conducted by prior confirmed appointment.
            </p>
          </div>

          {/* Card 4: Proprietor & Hours */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Hours & Leadership
              </span>
              <p className="text-xs font-bold text-slate-900 mt-0.5">
                Proprietor: {COMPANY_INFO.proprietor}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {COMPANY_INFO.hours}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Inquiry Form & Interactive Location Map Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
                Inquiry Form
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                Send a Training or Consultancy Inquiry
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Fill in the details below. Our team in Kathmandu will evaluate your request and respond promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="space-y-6 py-4 animate-in zoom-in-95 duration-200">
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Inquiry Structured Successfully
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. 
                    Your inquiry regarding <strong className="text-blue-900">{formData.serviceInterest}</strong> is ready.
                  </p>
                </div>

                {/* Demonstration Mode Notification Required by Prompt #6 */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Live Demonstration Mode Notification</span>
                  </div>
                  <p className="text-amber-900/90 leading-relaxed">
                    This website is in <strong>client demonstration mode</strong> without an external server-side mail relay. To ensure your inquiry reaches <strong>Mr. Dipankar Sherpa</strong> right now, please use the 1-click WhatsApp or telephone button below.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Send Inquiry to WhatsApp (+977 9851233343)</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-blue-900 text-blue-900 hover:bg-blue-50 font-bold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span>Call +977-9851233343 Directly</span>
                  </a>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-semibold text-blue-900 hover:underline"
                  >
                    ← Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="e.g. Sujan Shrestha"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        errors.fullName ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30' : 'border-slate-300 focus:ring-blue-600'
                      }`}
                    />
                    {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                      Organization or Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Kathmandu Trading Pvt. Ltd."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9851233343"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30' : 'border-slate-300 focus:ring-blue-600'
                      }`}
                    />
                    {errors.phone && <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@domain.com"
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
                      Preferred Training Format
                    </label>
                    <select
                      value={formData.preferredFormat}
                      onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    >
                      <option value="In-Person (Kathmandu / On-Site)">In-Person (Kathmandu / On-Site)</option>
                      <option value="In-Person (Outside Kathmandu)">In-Person (Outside Kathmandu)</option>
                      <option value="Interactive Online (Virtual)">Interactive Online (Virtual)</option>
                      <option value="Hybrid (In-Person & Online)">Hybrid (In-Person & Online)</option>
                      <option value="Subject to Discussion">Subject to Discussion</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 mb-1">
                    Message or Training Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your organization size, key objectives, or dates you are considering..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 resize-none ${
                      errors.message ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30' : 'border-slate-300 focus:ring-blue-600'
                    }`}
                  />
                  {errors.message && <p className="text-rose-600 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#0b1b3d] hover:bg-blue-900 text-white font-semibold text-sm shadow transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Google Maps & Office Location Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                  Location & Map
                </span>
                <span className="text-[10px] text-slate-400">Kathmandu, Nepal</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Budhanilkantha Municipality, Ward No. 08
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Conveniently situated in northern Kathmandu Valley, offering accessible proximity for corporate clients and institutional partners.
              </p>

              {/* Map Container / Embed */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 h-64 shadow-inner">
                {/* Embed OpenStreetMap / Google Maps iframe focused on Budhanilkantha Kathmandu */}
                <iframe
                  title="Rocksolid Business Solutions Office Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=85.3400%2C27.7500%2C85.3800%2C27.7850&amp;layer=mapnik&amp;marker=27.7667%2C85.3583"
                  className="w-full h-full border-0"
                  loading="lazy"
                />

                {/* Map marker overlay pill */}
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 text-white p-2.5 rounded-lg text-xs backdrop-blur-sm border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white leading-tight">Rocksolid Business Solutions</p>
                      <p className="text-[10px] text-slate-300">Budhanilkantha-08, Kathmandu</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Budhanilkantha+Ward+8+Kathmandu+Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-amber-400 hover:underline font-semibold"
                  >
                    Google Maps →
                  </a>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Sunday – Friday: 9:00 AM – 5:30 PM (NPT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>In-person consultations are arranged in advance.</span>
                </div>
              </div>
            </div>

            {/* Owner verification review card */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  Proprietor Dashboard
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Review verified company facts and editable placeholders prior to public domain deployment.
              </p>
              <button
                onClick={onOpenChecklist}
                className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold text-xs border border-amber-500/30 transition-colors"
              >
                Open Proprietor Launch Checklist →
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
