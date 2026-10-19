import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Filter, 
  Briefcase, 
  Rocket, 
  Award, 
  TrendingUp, 
  Users, 
  PieChart, 
  MessageSquare, 
  Layers, 
  Info,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { SERVICES_CATALOG, ServiceItem, COMPANY_INFO } from '../data/companyData';

interface ServicesViewProps {
  onRequestConsultation: (serviceTitle?: string) => void;
  onNavigate: (view: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onRequestConsultation,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const categories = [
    'All',
    'Consultancy & Strategy',
    'Professional Training',
    'Organizational Improvement',
    'Financial Management',
    'Custom Workshops'
  ];

  const filteredServices = SERVICES_CATALOG.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.keyPillars.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-blue-700" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-amber-600" />;
      case 'Award': return <Award className="w-6 h-6 text-blue-800" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Users': return <Users className="w-6 h-6 text-purple-600" />;
      case 'PieChart': return <PieChart className="w-6 h-6 text-rose-600" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-indigo-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-amber-700" />;
      default: return <Briefcase className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Services Hero Banner */}
      <section className="bg-gradient-to-br from-[#07132c] via-[#0b1b3d] to-[#142852] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-300 text-xs font-semibold">
            <span>Rocksolid Proposed Service Offerings</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Business Training & Management Consultancy Services
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Practical, structured solutions to improve operational productivity, develop managerial talent, and scale commercial performance in Kathmandu and across Nepal.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 flex-wrap">
            <span>8 Proposed Specializations</span>
            <span>•</span>
            <span>In-Person & Virtual Formats</span>
            <span>•</span>
            <span>Custom Corporate Syllabi</span>
          </div>
        </div>
      </section>

      {/* 2. Mandatory Compliance & Non-Regulated Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-amber-900 block">
                Official Transparency Notice: Proposed Service Scope
              </span>
              <p className="text-amber-900/90 leading-relaxed text-xs">
                All services listed below are presented as <strong>proposed offerings</strong> for Rocksolid Business Solutions Pvt. Ltd. to confirm. The company specializes exclusively in business management training, entrepreneurial mentorship, and operational consultancy. <strong>We do not offer regulated statutory legal, court representation, formal tax filing, or licensed external audit services.</strong>
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequestConsultation()}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-xs shrink-0 transition-colors"
          >
            Inquire on Specific Scope
          </button>
        </div>
      </section>

      {/* 3. Search and Category Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* 4. Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Header & Tagline */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {service.category}
                      </span>
                      <span className="text-[10px] text-amber-700 font-medium mt-1">
                        Proposed Offering
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-700 mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Key Pillars / Focus Areas */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Focus Areas:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.keyPillars.map((pillar, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Collapsible / Expandable Details */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
                      {/* Tangible Deliverables */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Key Deliverables & Toolkits:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {service.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-700">
                              • {del}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommended For */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Recommended For:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {service.recommendedFor.map((rec, rIdx) => (
                            <li key={rIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-slate-50/70 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {isExpanded ? 'Show Less Details ↑' : 'View Deliverables & Audience ↓'}
                  </button>

                  <button
                    onClick={() => onRequestConsultation(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0b1b3d] hover:bg-blue-900 text-white font-semibold text-xs tracking-wide transition-all shadow-sm"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-3">
            <Info className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="text-base font-bold text-slate-800">No Services Found</h4>
            <p className="text-xs text-slate-500">
              Try adjusting your search criteria or clearing your filter.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-lg bg-blue-900 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 5. Custom Corporate Training Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Enterprise Workshops
            </span>
            <h3 className="text-2xl font-bold tracking-tight">
              Looking for a Multi-Day Training Program for Your Team?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Explore our structured training catalog featuring modules in Entrepreneurship, Leadership, Consultative Sales, and Communication.
            </p>
          </div>

          <button
            onClick={() => onNavigate('training')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow"
          >
            Browse Training Programs Catalog →
          </button>
        </div>
      </section>
    </div>
  );
};
