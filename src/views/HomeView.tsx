import React, { useState } from 'react';
import { 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Target, 
  Award, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  Store, 
  Layers, 
  HelpCircle,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  SERVICES_CATALOG, 
  CONSULTANCY_PROCESS, 
  TARGET_SECTORS, 
  FAQS, 
  MISSION_VISION,
  PROPRIETOR_PROFILE
} from '../data/companyData';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onRequestConsultation: (service?: string) => void;
  onOpenChecklist: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onRequestConsultation,
  onOpenChecklist
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative bg-gradient-to-br from-[#07132c] via-[#0b1b3d] to-[#142852] text-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-slate-800">
        {/* Subtle background ambient elements */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Copy & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-300 text-xs font-semibold shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Kathmandu, Nepal • Business Training & Consultancy</span>
              </div>

              {/* Exact Requested Hero Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Building Stronger Businesses Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-amber-200 to-amber-400">
                  Training, Strategy & Consultancy.
                </span>
              </h1>

              {/* Exact Requested Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Rocksolid Business Solutions Pvt. Ltd. empowers entrepreneurs, professionals, 
                and organizations with practical business training, strategic guidance, 
                and customized consultancy solutions designed to improve performance and support sustainable growth.
              </p>

              {/* Verified Proprietor & Location Note */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Budhanilkantha-08, Kathmandu</span>
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Proprietor: <strong>Mr. Dipankar Sherpa</strong></span>
                </span>
              </div>

              {/* Primary & Secondary Call-to-Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
                {/* Primary CTA */}
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all active:scale-[0.98]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary CTA */}
                <button
                  onClick={() => onRequestConsultation()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-700 font-semibold text-sm transition-all shadow-sm"
                >
                  <span>Book a Consultation</span>
                </button>

                {/* Direct WhatsApp Callout */}
                <a
                  href={COMPANY_INFO.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 text-sm font-semibold transition-colors"
                  title="Direct WhatsApp Chat"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Verification & compliance reassurance */}
              <p className="text-[11px] text-slate-400 pt-2 italic">
                * All consultation inquiries receive personalized evaluation from our Kathmandu advisory team.
              </p>
            </div>

            {/* Right Column: Hero Visual Graphic / Card Matrix (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Visual Card */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900/90 relative">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
                    alt="Corporate strategic meeting and business training session"
                    className="w-full h-72 object-cover object-center filter brightness-95"
                    loading="eager"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07132c] via-transparent to-transparent opacity-90" />

                  {/* Floating Metric & Value Pillars on Card */}
                  <div className="p-6 relative space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <h4 className="text-white font-bold text-base">Rocksolid Methodology</h4>
                        <p className="text-xs text-slate-400">Practical & Measurable Capability</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
                        Kathmandu, Nepal
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="text-amber-400 font-bold block mb-0.5">Custom Programs</span>
                        <span className="text-slate-300">Co-designed for organizational objectives</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="text-blue-400 font-bold block mb-0.5">Flexible Formats</span>
                        <span className="text-slate-300">In-person, virtual, or on-site workshops</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                      <span>Direct Inquiries:</span>
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                        {COMPANY_INFO.primaryPhone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-white text-slate-900 p-3.5 rounded-xl shadow-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Sustainable Business Growth</p>
                    <p className="text-slate-500">Structured Management & Strategy</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BRIEF INTRODUCTION TO ROCKS SOLID BUSINESS SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              About the Company
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Rooted in Practical Business Knowledge & Organizational Discipline
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full" />
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Based in <strong>Budhanilkantha Municipality, Kathmandu</strong>, Rocksolid Business Solutions Pvt. Ltd. was founded on the conviction that Nepalese enterprises thrive when equipped with structured management practices, accountable leadership, and market-tested commercial tools.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Under the strategic leadership of proprietor <strong>Mr. Dipankar Sherpa</strong>, we bridge the gap between abstract academic theories and the daily operational realities of running a business in Nepal.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950 transition-colors group"
              >
                <span>Read Full Company Profile & Leadership</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Proposed Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                "{MISSION_VISION.mission}"
              </p>
              <span className="text-[10px] text-slate-400 block italic">
                * Editable proposed statement
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Proposed Vision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                "{MISSION_VISION.vision}"
              </p>
              <span className="text-[10px] text-slate-400 block italic">
                * Editable proposed statement
              </span>
            </div>

            <div className="sm:col-span-2 p-5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                  Strategic Business Advisory
                </p>
                <p className="text-sm font-medium text-slate-200">
                  Ready to assess your company's operational bottlenecks or training gaps?
                </p>
              </div>
              <button
                onClick={() => onRequestConsultation()}
                className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow"
              >
                Book Discovery Session
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED SERVICES GRID */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
                Core Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Business Training & Management Consultancy
              </h2>
              <p className="text-slate-600 text-sm">
                Carefully structured programs designed to build organizational capability, optimize commercial performance, and empower team leaders.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 hover:text-blue-700"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service Cards Grid (showing first 6 on Home, with link to full 8 on Services page) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_CATALOG.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      {service.category}
                    </span>
                    <span className="text-[10px] text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      Proposed Offering
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                      Key Focus Areas:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {service.keyPillars.slice(0, 3).map((pillar, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onRequestConsultation(service.title)}
                    className="text-xs font-semibold text-blue-900 hover:text-amber-600 transition-colors"
                  >
                    Request Consultation →
                  </button>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-[11px] text-slate-500 hover:text-slate-800"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>
              * All service descriptions are presented as proposed company offerings for client confirmation. We do not provide regulated legal, court, or statutory financial audit services.
            </p>
            <button
              onClick={() => onNavigate('services')}
              className="text-blue-950 font-bold hover:underline shrink-0"
            >
              Review Full Service Details
            </button>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE ROCKS SOLID BUSINESS SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Our Differentiating Approach
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Rocksolid Business Solutions?
          </h2>
          <p className="text-slate-600 text-sm">
            We prioritize actionable business capabilities over theoretical presentations. Here is why organizations in Kathmandu and across Nepal trust our guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Practical & Business-Focused</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every concept is grounded in practical application suitable for Nepal's market conditions, regulatory frameworks, and commercial realities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Customized Interventions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We reject rigid, one-size-fits-all training packs. Every workshop is shaped around your specific team challenges and operational priorities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">Client-Centered Partnership</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We take the time to listen, visit your workplace, engage with departmental leaders, and understand true root causes before recommending solutions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h3 className="text-base font-bold text-slate-900">Capability Building Over Dependency</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our objective is to transfer repeatable skills, frameworks, and management toolkits directly into the hands of your internal team.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-sm">
              05
            </div>
            <h3 className="text-base font-bold text-slate-900">Flexible Delivery Formats</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Available for in-person workshops at your premises, executive retreats in Kathmandu Valley, or interactive virtual sessions for remote teams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-sm">
              06
            </div>
            <h3 className="text-base font-bold text-slate-900">Actionable Recommendations</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our consulting engagements conclude with pragmatic milestone blueprints, templates, and accountability checkpoints your staff can implement right away.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('why-us')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700"
          >
            <span>Read in-depth about our methodology and commitment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. TRAINING & CONSULTANCY PROCESS */}
      <section className="bg-gradient-to-b from-[#0b1b3d] to-[#07132c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Structured Engagement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our 4-Step Consultancy & Training Process
            </h2>
            <p className="text-slate-300 text-sm">
              A systematic engagement pathway ensuring clarity, alignment, and maximum practical return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONSULTANCY_PROCESS.map((proc) => (
              <div 
                key={proc.step}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 relative overflow-hidden"
              >
                <div className="text-4xl font-extrabold text-amber-500/30">
                  {proc.step}
                </div>
                <h3 className="text-base font-bold text-white">
                  {proc.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {proc.description}
                </p>
                <div className="w-8 h-0.5 bg-amber-500/50 mt-4" />
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onRequestConsultation()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow transition-all"
            >
              <span>Schedule Step 1: Needs Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. INDUSTRIES & CLIENTS WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
            Target Market & Beneficiaries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Sectors & Organizations We Support
          </h2>
          <p className="text-slate-600 text-sm">
            Providing tailored business knowledge and leadership training to a diverse spectrum of Nepalese organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_SECTORS.map((sector, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5 text-blue-800" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{sector.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CUSTOMIZED CORPORATE TRAINING BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0b1b3d] via-[#1d4ed8] to-[#0b1b3d] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 transform skew-x-12 pointer-events-none" />

          <div className="relative max-w-3xl space-y-5">
            <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-400/30">
              Custom Corporate Solutions
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Need a Training Program Tailored Exclusively for Your Workforce?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Standard training modules do not always match your team's specific culture, industry nuances, or current skill gaps. We design bespoke workshops with custom case studies, role plays, and post-session accountability rubrics.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onRequestConsultation('Customized Corporate Training')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-md transition-all text-center"
              >
                Request Custom Corporate Training
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>

            <p className="text-xs text-slate-300">
              Available in Kathmandu Valley and for nationwide corporate retreats upon prior scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* 8. CALL-TO-ACTION BANNER FOR CONSULTATION REQUESTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-lg text-center space-y-6">
          <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/30">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Strengthen Your Business Strategy?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connect directly with <strong>Mr. Dipankar Sherpa</strong> and the Rocksolid Business Solutions advisory team in Kathmandu. We will assess your organizational priorities and propose practical interventions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onRequestConsultation()}
              className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              Book an Initial Consultation
            </button>

            <a
              href={COMPANY_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+977 9851233343)</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-800 max-w-xl mx-auto text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
            <span>Office: Budhanilkantha-08, Kathmandu</span>
            <span>•</span>
            <span>Tel: {COMPANY_INFO.primaryPhone}</span>
            <span>•</span>
            <span>Proprietor: Mr. Dipankar Sherpa</span>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Answers to common questions regarding our business training, consultancy sessions, and engagement terms.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-900 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div className="p-1 rounded-full bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. DIRECT CONTACT & LOCATION PREVIEW STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Visiting Our Office in Kathmandu
              </h3>
              <p className="text-xs text-slate-500">
                {COMPANY_INFO.address} • Meetings by prior appointment
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>Call +977-9851233343</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0b1b3d] hover:bg-blue-900 text-white text-xs font-bold"
            >
              <span>Full Contact Page</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
