import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { DICTIONARY, STATS_ITEMS } from '../data/clinicData';

interface TrustStatsProps {
  currentLang: Language;
}

export const TrustStats: React.FC<TrustStatsProps> = ({ currentLang }) => {
  const t = DICTIONARY[currentLang].trust;
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // trigger animation once component mounts or intersects
    const timer = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="stats" className="py-20 md:py-28 px-5 md:px-12 bg-[#0a0a0a] text-white relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#d4af37] mb-4 uppercase tracking-wider font-normal">
            {t.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/[0.04] p-8 rounded-xl border border-white/10 text-center hover:bg-white/[0.08] hover:border-[#d4af37]/40 transition-all duration-300 group"
            >
              <div className="text-4xl md:text-5xl font-cormorant text-[#d4af37] mb-3 flex items-center justify-center font-normal tracking-tight">
                <span className="tabular-nums font-medium">
                  {item.value}
                </span>
                <span className="ml-0.5 text-3xl md:text-4xl">{item.suffix}</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-white/70 uppercase tracking-widest font-normal leading-relaxed group-hover:text-white/90 transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
