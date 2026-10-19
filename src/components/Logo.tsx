import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = false
}) => {
  const isDark = variant === 'dark';
  
  // Size classes
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtitleSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Geometric solid emblem: Solid monolith with upward strategic chevron representing sustainable business growth */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSize} rounded-lg bg-gradient-to-br from-[#0b1b3d] to-[#1e3a8a] border border-amber-500/30 shadow-sm transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4"
        >
          {/* Solid foundation base */}
          <path
            d="M8 30L20 34L32 30V32L20 36L8 32V30Z"
            fill="#D97706"
          />
          {/* Lower solid block */}
          <path
            d="M9 22L20 26L31 22L20 18L9 22Z"
            fill="#F59E0B"
            fillOpacity="0.9"
          />
          {/* Middle pillar */}
          <path
            d="M13 16L20 19L27 16L20 13L13 16Z"
            fill="#E2E8F0"
          />
          {/* Upward strategic peak (Growth Arrowhead) */}
          <path
            d="M20 5L15 11H25L20 5Z"
            fill="#D97706"
          />
          {/* Core upward line */}
          <path
            d="M20 7V27"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="flex items-baseline gap-1">
          <span className={`font-extrabold tracking-tight uppercase ${isDark ? 'text-slate-900' : 'text-white'} ${titleSize}`}>
            ROCKSOLID
          </span>
        </div>
        <span className={`font-semibold tracking-wider uppercase text-amber-500 ${subtitleSize}`}>
          Business Solutions Pvt. Ltd.
        </span>
        {showTagline && (
          <span className={`text-xs mt-0.5 tracking-normal ${isDark ? 'text-slate-500' : 'text-slate-300'}`}>
            Training • Strategy • Consultancy • Kathmandu
          </span>
        )}
      </div>
    </div>
  );
};
