import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  ShieldAlert, 
  Sparkles,
  MapPin,
  Laptop
} from 'lucide-react';
import { TRAINING_PROGRAMS, TrainingProgram, COMPANY_INFO } from '../data/companyData';

interface TrainingProgramsViewProps {
  onInquireProgram: (programTitle: string) => void;
  onRequestConsultation: (service?: string) => void;
}

export const TrainingProgramsView: React.FC<TrainingProgramsViewProps> = ({
  onInquireProgram,
  onRequestConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Entrepreneurship',
    'Leadership',
    'Sales',
    'Customer Service',
    'Communication',
    'HR & Org',
    'Custom Corporate'
  ];

  const filteredPrograms = selectedCategory === 'All'
    ? TRAINING_PROGRAMS
    : TRAINING_PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Training Hero Banner */}
      <section className="bg-gradient-to-br from-[#07132c] via-[#0b1b3d] to-[#142852] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-300 text-xs font-semibold">
            <span>Executive & Organizational Capacity Building</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Professional Training Programs & Workshops
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Practical, interactive business development curricula engineered to equip founders, departmental leads, and frontline teams with actionable skills.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 flex-wrap">
            <span>Customizable Durations</span>
            <span>•</span>
            <span>In-Person (Kathmandu / On-Site) & Virtual</span>
            <span>•</span>
            <span>Needs-Assessed Content</span>
          </div>
        </div>
      </section>

      {/* 2. Important Course Scope & Compliance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-blue-950 block">
                Transparent Program Terms & Scheduling Notice
              </span>
              <p className="text-blue-900/90 text-xs leading-relaxed">
                In strict adherence to ethical standards, all training programs have <strong>customizable durations and schedules</strong> determined in consultation with client organizations. <strong>We do not pre-fill unverified fees, academic accreditations, or guaranteed exam outcomes.</strong> Exact schedules, materials, and participant group sizes are agreed upon during discovery.
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequestConsultation('Customized Corporate Training')}
            className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white rounded-lg font-bold text-xs shrink-0 transition-colors"
          >
            Inquire on Schedule
          </button>
        </div>
      </section>

      {/* 3. Category Filter Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0b1b3d] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4. Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold border border-blue-100">
                    {program.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    Level: {program.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {program.shortSummary}
                  </p>
                </div>

                {/* Intended Audience */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-700" />
                    <span>Intended Audience:</span>
                  </span>
                  <p className="text-xs text-slate-700 font-medium">
                    {program.intendedAudience}
                  </p>
                </div>

                {/* Key Learning Outcomes */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Learning Outcomes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {program.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta details: Format & Duration */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <Laptop className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block text-[11px] uppercase">Format:</strong>
                      <span>{program.deliveryFormat}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block text-[11px] uppercase">Duration:</strong>
                      <span>{program.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500 italic">
                  Fee: Provided on customized proposal
                </span>

                <button
                  onClick={() => onInquireProgram(program.title)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0b1b3d] hover:bg-blue-900 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <span>Inquire About This Program</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NEED A CUSTOMIZED TRAINING PROGRAM? (Prominent Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0b1b3d] via-[#112d68] to-[#07132c] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-700">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Tailored Corporate Workshops</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Need a Customized Training Program?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Every enterprise possesses distinct operational workflows, employee seniority distributions, and cultural dynamics. Organizations can inquire about training programs tailored strictly to their strategic objectives, employee skill deficits, and scheduling requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-amber-400 font-bold block mb-1">Step 1: Needs Analysis</span>
                <span>Pre-session interviews to identify actual operational bottlenecks.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-amber-400 font-bold block mb-1">Step 2: Custom Case Studies</span>
                <span>Scenarios and role plays built directly around your business sector.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-amber-400 font-bold block mb-1">Step 3: Post-Training Followup</span>
                <span>Participant evaluation report and 30-day reinforcement milestones.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onRequestConsultation('Customized Corporate Training')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-md transition-all text-center"
              >
                Discuss Custom Corporate Curriculum
              </button>

              <a
                href={COMPANY_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp (+977 9851233343)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
