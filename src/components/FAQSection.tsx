import React, { useState, useMemo } from 'react';
import { FAQItem, Language } from '../types';
import { FAQ_ITEMS, DICTIONARY } from '../data/clinicData';

interface FAQSectionProps {
  currentLang: Language;
  onOpenBooking: (serviceName?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ currentLang, onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'procedures' | 'insurance' | 'post-op'>('all');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-5', 'faq-8']); // open first item of each category by default
  const [searchQuery, setSearchQuery] = useState('');

  const t = DICTIONARY[currentLang].faq;

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: 'all' as const, label: t.allTab, count: FAQ_ITEMS.length },
    {
      id: 'procedures' as const,
      label: t.proceduresTab,
      count: FAQ_ITEMS.filter((i) => i.category === 'procedures').length
    },
    {
      id: 'insurance' as const,
      label: t.insuranceTab,
      count: FAQ_ITEMS.filter((i) => i.category === 'insurance').length
    },
    {
      id: 'post-op' as const,
      label: t.postOpTab,
      count: FAQ_ITEMS.filter((i) => i.category === 'post-op').length
    }
  ];

  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        (item.keyPoints && item.keyPoints.some((p) => p.toLowerCase().includes(q)))
      );
    });
  }, [activeCategory, searchQuery]);

  const getCategoryLabel = (cat: FAQItem['category']) => {
    switch (cat) {
      case 'procedures':
        return t.proceduresTab;
      case 'insurance':
        return t.insuranceTab;
      case 'post-op':
        return t.postOpTab;
      default:
        return '';
    }
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-5 md:px-12 bg-[#f5f3f3] relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center flex flex-col items-center">
          <div className="bg-[#fbf9f9] text-[#4c4546] font-mono-code text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em] shadow-xs border border-[#cfc4c5]/30">
            {t.badge}
          </div>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 uppercase tracking-wide font-normal max-w-3xl leading-tight">
            {t.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4c4546] max-w-2xl text-center leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#e3e2e2]/70 rounded-2xl max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-black text-white shadow-xs'
                    : 'text-[#4c4546] hover:text-black hover:bg-white/40'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono-code ${
                    activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-black/5 text-neutral-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="max-w-xl mx-auto relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-lg">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#fbf9f9] border border-[#cfc4c5]/40 rounded-full py-3 pl-11 pr-10 text-xs sm:text-sm text-black placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black text-xs p-1"
                aria-label="Effacer la recherche"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="p-10 text-center bg-[#fbf9f9] rounded-2xl border border-black/5">
              <span className="material-symbols-outlined text-4xl text-neutral-400 mb-2">
                help_outline
              </span>
              <p className="font-cormorant text-2xl text-black mb-1">Aucune question correspondante</p>
              <p className="text-xs text-neutral-500 mb-4">
                Essayez d'autres mots-clés ou consultez directement notre secrétariat médical.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs font-mono-code uppercase tracking-wider text-black underline underline-offset-4"
              >
                Réinitialiser la recherche
              </button>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white shadow-md border-black/15'
                      : 'bg-[#fbf9f9] hover:bg-white hover:border-[#cfc4c5]/60 border-[#cfc4c5]/30'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none group cursor-pointer"
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono-code text-[10px] uppercase tracking-wider text-neutral-500 bg-[#efeded] px-2 py-0.5 rounded">
                          {getCategoryLabel(item.category)}
                        </span>
                      </div>
                      <h3
                        className={`font-cormorant text-lg sm:text-xl md:text-2xl transition-colors font-medium ${
                          isOpen ? 'text-black' : 'text-neutral-800 group-hover:text-black'
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 border ${
                        isOpen
                          ? 'bg-black text-white border-black rotate-180'
                          : 'bg-[#f5f3f3] text-neutral-700 border-black/10 group-hover:bg-neutral-200'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">expand_more</span>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-[#4c4546] font-sans text-xs sm:text-sm leading-relaxed border-t border-black/5 animate-in fade-in duration-200">
                      <p className="mb-4">{item.answer}</p>

                      {/* Key Points Badges */}
                      {item.keyPoints && item.keyPoints.length > 0 && (
                        <div className="p-4 bg-[#f5f3f3] rounded-xl border border-black/5 mb-4">
                          <span className="font-mono-code text-[11px] text-neutral-600 uppercase tracking-wider font-semibold block mb-2">
                            Points Clés & Recommandations :
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.keyPoints.map((point, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-neutral-800">
                                <span className="material-symbols-outlined text-sm text-green-700 shrink-0">
                                  check_circle
                                </span>
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Micro contextual action */}
                      <div className="flex items-center justify-between text-xs pt-2">
                        <span className="text-neutral-400 font-mono-code text-[11px]">
                          Cabinet Certifié Dr. Rania Azzouzi
                        </span>
                        <button
                          onClick={() => onOpenBooking(item.question)}
                          className="text-black font-semibold hover:text-[#d4af37] transition-colors flex items-center gap-1 underline underline-offset-4"
                        >
                          <span>Demander conseil pour ce cas</span>
                          <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Reassurance Card */}
        <div className="mt-12 bg-white p-7 sm:p-8 rounded-2xl border border-black/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-cormorant text-2xl text-black font-medium">
              {t.contactPrompt}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-xl">
              Notre équipe médicale se tient à votre entière disposition pour répondre à toutes vos interrogations préalables.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('Consultation & Renseignements')}
            className="bg-black text-white hover:bg-neutral-800 font-sans text-xs font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>{t.contactBtn}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
