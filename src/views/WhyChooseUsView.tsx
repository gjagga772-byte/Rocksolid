import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Compass, 
  Target, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  RefreshCw, 
  FileSpreadsheet,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface WhyChooseUsViewProps {
  onNavigate: (view: string) => void;
  onRequestConsultation: () => void;
}

export const WhyChooseUsView: React.FC<WhyChooseUsViewProps> = ({
  onNavigate,
  onRequestConsultation
}) => {
  const valueProps = [
    {
      title: "Practical & Business-Focused Learning",
      description: "Our workshops reject abstract foreign case studies that don't translate to Nepal. We teach frameworks that directly address local supplier practices, cash flow constraints, customer buying psychology, and employee engagement dynamics in Kathmandu and regional markets.",
      icon: <Target className="w-6 h-6 text-blue-700" />
    },
    {
      title: "Customized Training & Consultancy",
      description: "We do not believe in cookie-cutter off-the-shelf presentations. Every engagement begins with an inquiry into your specific business bottlenecks so the curriculum directly advances your organizational goals.",
      icon: <Layers className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Client-Centered Partnership",
      description: "We act as your dedicated strategic sounding board. We take time to listen, observe your workplace environment, and design interventions that align with your leadership style and company culture.",
      icon: <Users className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Focus on Developing Professional Capabilities",
      description: "Rather than creating perpetual reliance on outside consultants, our core mission is institutional capability transfer—equipping your managers and team leads with repeatable habits and self-sustaining systems.",
      icon: <Award className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Flexible Training Formats",
      description: "Whether you need intensive weekend workshops, on-site weekday bootcamps at your office in Kathmandu, nationwide off-site executive retreats, or interactive virtual sessions, we adapt to your operational schedule.",
      icon: <Compass className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Emphasis on Actionable Recommendations",
      description: "Every module concludes with clear next steps: editable SOP templates, 13-week cashflow spreadsheets, performance review scorecards, and delegation trackers that can be put to work immediately.",
      icon: <FileSpreadsheet className="w-6 h-6 text-rose-600" />
    },
    {
      title: "Commitment to Continuous Improvement",
      description: "Business improvement is an ongoing journey. We provide post-training follow-up checkpoints, participant feedback summaries, and leadership debriefs to ensure the new skills are retained and applied.",
      icon: <RefreshCw className="w-6 h-6 text-teal-600" />
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-br from-[#07132c] via-[#0b1b3d] to-[#142852] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-300 text-xs font-semibold">
            <span>The Rocksolid Difference</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Why Choose Rocksolid Business Solutions?
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Practical business acumen, customized interventions, and an unwavering focus on real-world organizational performance for Nepalese enterprises.
          </p>
        </div>
      </section>

      {/* 2. Seven Value Propositions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
            Our Core Value Propositions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Built on Real Capability Building
          </h2>
          <p className="text-slate-600 text-sm">
            Seven principles that define our methodology and ensure your training investment translates into tangible business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                  {prop.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-amber-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Rocksolid Standard</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Comparison Matrix: Traditional Generic Workshops vs Rocksolid Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            A Clear Contrast
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How Rocksolid Compares to Generic Training
          </h2>
          <p className="text-slate-600 text-sm">
            See why forward-thinking business owners prefer our practical, outcome-driven intervention model.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0b1b3d] text-white">
                <tr>
                  <th className="py-4 px-6 font-bold w-1/3">Key Dimension</th>
                  <th className="py-4 px-6 font-bold w-1/3 text-slate-300">Generic Academic Seminars</th>
                  <th className="py-4 px-6 font-bold w-1/3 text-amber-400">Rocksolid Business Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/80">
                  <td className="py-4 px-6 font-bold text-slate-900">Curriculum Source</td>
                  <td className="py-4 px-6 text-slate-500">Foreign textbook theories detached from local Nepalese realities</td>
                  <td className="py-4 px-6 font-semibold text-blue-900 bg-blue-50/40">Grounded in local Kathmandu supply chains, credit terms, and culture</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="py-4 px-6 font-bold text-slate-900">Customization Level</td>
                  <td className="py-4 px-6 text-slate-500">Rigid pre-recorded or standardized slides presented identically</td>
                  <td className="py-4 px-6 font-semibold text-blue-900 bg-blue-50/40">Pre-training discovery to co-create tailored case studies and roleplay</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="py-4 px-6 font-bold text-slate-900">Participant Engagement</td>
                  <td className="py-4 px-6 text-slate-500">One-way lectures with minimal interaction</td>
                  <td className="py-4 px-6 font-semibold text-blue-900 bg-blue-50/40">Highly interactive workshops, live problem solving, and group discussions</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="py-4 px-6 font-bold text-slate-900">Post-Training Support</td>
                  <td className="py-4 px-6 text-slate-500">Concludes at the door once the session ends</td>
                  <td className="py-4 px-6 font-semibold text-blue-900 bg-blue-50/40">Actionable toolkits, post-session debriefs, and 30-day reinforcement milestones</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="py-4 px-6 font-bold text-slate-900">Proprietor Involvement</td>
                  <td className="py-4 px-6 text-slate-500">Outsourced to third-party ad-hoc instructors</td>
                  <td className="py-4 px-6 font-semibold text-blue-900 bg-blue-50/40">Personal strategic oversight and advisory led by Mr. Dipankar Sherpa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-5 border border-slate-800 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Experience the Rocksolid Difference
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book an initial diagnostic discussion to explore where your organization can achieve immediate operational gains.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <button
              onClick={() => onRequestConsultation()}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Request a Consultation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider"
            >
              Direct Contact Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
