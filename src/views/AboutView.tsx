import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Compass, 
  Sparkles,
  Quote
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  MISSION_VISION, 
  CORE_VALUES, 
  PROPRIETOR_PROFILE 
} from '../data/companyData';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onRequestConsultation: (service?: string) => void;
  onOpenChecklist: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onRequestConsultation,
  onOpenChecklist
}) => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Hero Banner */}
      <section className="bg-gradient-to-br from-[#07132c] via-[#0b1b3d] to-[#142852] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-300 text-xs font-semibold">
            <span>About Rocksolid Business Solutions Pvt. Ltd.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Empowering Nepalese Businesses Through Strategic Competence & Practical Guidance
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Headquartered in Budhanilkantha, Kathmandu, we are committed to strengthening the operational foundations of entrepreneurs, SMEs, and corporate institutions.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 flex-wrap">
            <span>Proprietor: <strong className="text-white">Mr. Dipankar Sherpa</strong></span>
            <span>•</span>
            <span>Budhanilkantha Municipality-08, Kathmandu</span>
            <span>•</span>
            <span>Est. to Support Nepalese Enterprise Growth</span>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction & Business Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              A Training & Consultancy Partner Grounded in Nepal's Commercial Realities
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full" />

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong>Rocksolid Business Solutions Pvt. Ltd.</strong> is a dedicated business training, management development, and strategic consultancy firm based in Kathmandu, Nepal. Our work centers on a singular, foundational premise: <em>real business resilience comes from structured execution, disciplined management practices, and ongoing human capability development.</em>
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Too often, business owners and corporate managers in Nepal are forced to choose between abstract theoretical management textbooks or fragmented ad-hoc fixes. Rocksolid bridges that divide. We tailor modern management frameworks specifically to navigate local market dynamics, supply chain relationships, credit practices, and organizational culture.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-800 uppercase tracking-wide block">
                Target Market Served:
              </span>
              <p>
                {COMPANY_INFO.primaryMarket}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Business collaboration and training workshop in Kathmandu"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6 bg-slate-900 text-white space-y-3">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
                  Our Philosophy
                </span>
                <p className="text-sm font-medium text-slate-200 leading-snug">
                  "Sustainable businesses aren't built on shortcuts—they are forged through solid fundamentals, disciplined execution, and continuous team capability development."
                </p>
                <p className="text-xs text-slate-400 border-t border-slate-800 pt-2">
                  — Mr. Dipankar Sherpa, Proprietor
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Proposed Mission & Vision */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Guiding Directives
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Mission & Vision
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Proposed corporate statements reflecting our enduring commitment to client capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-bold">
                <Target className="w-4 h-4 text-blue-700" />
                <span>Our Proposed Mission</span>
              </div>

              <blockquote className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                "{MISSION_VISION.mission}"
              </blockquote>

              <p className="text-xs text-slate-500 leading-relaxed">
                We believe that individuals at every level—from newly appointed supervisors to enterprise proprietors—deserve actionable, modern management skills that produce measurable operational improvements.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Status: Proposed Statement</span>
                <span className="italic">Customizable by Company Management</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-bold">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Our Proposed Vision</span>
              </div>

              <blockquote className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                "{MISSION_VISION.vision}"
              </blockquote>

              <p className="text-xs text-slate-500 leading-relaxed">
                Aiming to be the foremost advisory choice for growing businesses across Kathmandu Valley, recognized for unwavering integrity, practical relevance, and institutional impact.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Status: Proposed Statement</span>
                <span className="italic">Customizable by Company Management</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-slate-600 text-sm">
            The fundamental standards that govern every training module, client engagement, and strategic advisory session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900">{val.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}

          {/* Value summary card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b1b3d] to-[#1e3a8a] text-white flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                Ethical Stance
              </span>
              <h3 className="text-base font-bold text-white">Truth in Advertising & Service Scope</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                We make no unsupported promises regarding pass rates, guaranteed financial windfalls, or fabricated partnerships. We stand on authentic capability transfer.
              </p>
            </div>
            <button
              onClick={onOpenChecklist}
              className="text-xs text-amber-300 hover:text-amber-200 underline font-semibold text-left"
            >
              Review Verification Standards →
            </button>
          </div>
        </div>
      </section>

      {/* 5. Proprietor Profile: Mr. Dipankar Sherpa */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual or Portrait Avatar */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-blue-800 to-slate-800 p-1 border-2 border-amber-500/40 shadow-xl relative overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop"
                  alt="Mr. Dipankar Sherpa - Proprietor of Rocksolid Business Solutions"
                  className="w-full h-full object-cover object-top rounded-xl filter brightness-95"
                />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">{PROPRIETOR_PROFILE.name}</h3>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  {PROPRIETOR_PROFILE.title}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Rocksolid Business Solutions Pvt. Ltd.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
                >
                  Call Directly
                </a>
                <a
                  href={COMPANY_INFO.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-700/40 hover:bg-emerald-700/60 text-emerald-300 text-xs font-medium border border-emerald-600/40"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Profile Bio & Focus Areas */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-300 text-xs font-semibold border border-amber-500/20">
                <span>Proprietor Leadership & Advisory Focus</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Meet Mr. Dipankar Sherpa
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {PROPRIETOR_PROFILE.bio}
              </p>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block">
                  Key Strategic Practice Areas:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {PROPRIETOR_PROFILE.focusAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onRequestConsultation('General Strategic Consultation')}
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Consult with Mr. Dipankar Sherpa
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Office Contact Info
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Commitment to Practical Customized Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
              Our Service Pledge
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Commitment to Customized, Client-Centered Solutions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We pledge to never sell pre-packaged training templates when your business requires a tailored organizational solution. We pledge to maintain strict confidentiality, respect client timelines, and measure our effectiveness by the tangible improvements experienced by your team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Confidential Advisory</h4>
                <p className="text-xs text-slate-500">Your organizational metrics and strategic plans stay 100% confidential.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Adaptive Scheduling</h4>
                <p className="text-xs text-slate-500">Weekend, evening, or modular morning sessions to avoid disrupting active business operations.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Actionable Toolkits</h4>
                <p className="text-xs text-slate-500">Templates, spreadsheets, checklists, and review frameworks provided with every program.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          Explore How We Can Support Your Organization
        </h3>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => onNavigate('services')}
            className="px-6 py-3 rounded-xl bg-[#0b1b3d] text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-900 transition-colors"
          >
            View All Services
          </button>
          <button
            onClick={() => onNavigate('training')}
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors"
          >
            Explore Training Programs
          </button>
        </div>
      </section>
    </div>
  );
};
