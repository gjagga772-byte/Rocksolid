import React from 'react';
import { Compass, ArrowRight, Home, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NotFoundViewProps {
  onNavigate: (view: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-lg text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center mx-auto border border-blue-100">
          <Compass className="w-8 h-8 text-blue-700 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Page Not Found • 404
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Looking for Business Solutions?
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or resource you requested may have moved or does not exist. Explore our active consultancy services or return to the homepage.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0b1b3d] hover:bg-blue-900 text-white font-semibold text-xs uppercase tracking-wider shadow transition-colors"
          >
            <Home className="w-4 h-4 text-amber-400" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-xs text-blue-900 hover:underline pt-2"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>Call Advisory Team: {COMPANY_INFO.primaryPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
