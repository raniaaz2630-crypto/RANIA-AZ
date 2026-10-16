import React, { useState } from 'react';
import { ClinicalCase, Language } from '../types';
import { CLINICAL_CASES, DICTIONARY } from '../data/clinicData';
import { ComparisonSlider } from './ComparisonSlider';

interface ClinicalResultsProps {
  currentLang: Language;
  onSelectCase: (clinicalCase: ClinicalCase) => void;
}

export const ClinicalResults: React.FC<ClinicalResultsProps> = ({ currentLang, onSelectCase }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = DICTIONARY[currentLang].gallery;

  const categories = [
    { id: 'all', label: 'Tous les résultats' },
    { id: 'esthetic', label: 'Esthétique & Facettes' },
    { id: 'implant', label: 'Implantologie' },
    { id: 'periodontics', label: 'Parodontie & Laser' },
    { id: 'ortho', label: 'Orthodontie' },
  ];

  const filteredCases = selectedCategory === 'all'
    ? CLINICAL_CASES
    : CLINICAL_CASES.filter((c) => c.category === selectedCategory);

  return (
    <section id="galerie" className="py-24 md:py-32 px-5 md:px-12 bg-[#fbf9f9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-black mb-3 uppercase tracking-wide font-normal">
              {t.title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4c4546] leading-relaxed">
              {t.sub}
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#efeded] rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white shadow-xs'
                    : 'text-[#4c4546] hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredCases.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 group">
              <div className="flex items-center justify-between">
                <h3 className="font-cormorant text-2xl text-black font-medium tracking-tight">
                  {item.title}
                </h3>
                <span className="font-mono-code text-[11px] text-[#7e7576] uppercase tracking-wider">
                  {item.categoryLabel}
                </span>
              </div>

              {/* The Draggable Before/After Slider */}
              <ComparisonSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeLabel={t.before}
                afterLabel={t.after}
                initialPosition={item.defaultPosition || 50}
                onOpenDetails={() => onSelectCase(item)}
              />

              <div className="flex items-center justify-between text-xs text-[#7e7576] pt-1">
                <span>{item.duration}</span>
                <button
                  onClick={() => onSelectCase(item)}
                  className="text-black hover:text-[#d4af37] font-sans font-medium transition-colors flex items-center gap-1 underline underline-offset-4 decoration-black/20 hover:decoration-[#d4af37]"
                >
                  <span>Voir le protocole clinique</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
