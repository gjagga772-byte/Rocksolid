import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  Search, 
  Sparkles, 
  Tag, 
  Share2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { INSIGHTS_ARTICLES, ResourceArticle, COMPANY_INFO } from '../data/companyData';

interface InsightsViewProps {
  onRequestConsultation: () => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({ onRequestConsultation }) => {
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Management Strategy', 'Financial Literacy', 'Leadership Development', 'Customer Experience'];

  const filteredArticles = INSIGHTS_ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-[#07132c] via-[#0b1b3d] to-[#142852] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-amber-300 text-xs font-semibold">
            <span>Knowledge Sharing & Business Resources</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Business Insights, Strategy & Management Guides
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Practical articles and executive guides curated specifically for Nepalese entrepreneurs, business owners, and corporate leaders.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
            <span>Sample Resource Library</span>
            <span>•</span>
            <span>Editable Content Structure</span>
            <span>•</span>
            <span>Kathmandu Business Perspectives</span>
          </div>
        </div>
      </section>

      {/* 2. Sample Content Notice (Mandatory Prompt Compliance) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Sample Editorial Notice:</strong> These articles represent sample editorial templates demonstrating the knowledge-sharing architecture of the website. Rocksolid Business Solutions Pvt. Ltd. can publish new business articles, case reflections, and training whitepapers here at any time.
          </p>
        </div>
      </section>

      {/* 3. Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search business insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* 4. Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </span>
                  </div>
                </div>

                <h3 
                  onClick={() => setSelectedArticle(art)}
                  className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors cursor-pointer"
                >
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium border border-amber-200">
                  Sample Resource
                </span>

                <button
                  onClick={() => setSelectedArticle(art)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#0b1b3d] text-white p-6 relative">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-blue-700/60 text-blue-200 text-xs font-semibold">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-slate-300">• {selectedArticle.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight pr-8">
                {selectedArticle.title}
              </h2>

              <p className="text-xs text-slate-400 mt-2">
                Published by {selectedArticle.author} • Kathmandu, Nepal
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 text-xs sm:text-sm italic">
                {selectedArticle.summary}
              </div>

              {selectedArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-700">
                  {paragraph}
                </p>
              ))}

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs space-y-2 mt-6">
                <span className="font-bold block">Looking to implement these practices in your business?</span>
                <p>
                  Connect with Rocksolid Business Solutions to explore a tailored workshop or management consultation for your team.
                </p>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onRequestConsultation();
                  }}
                  className="px-4 py-2 bg-[#0b1b3d] text-white rounded-lg font-bold text-xs hover:bg-blue-900 transition-colors"
                >
                  Request Consultation on this Topic
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
