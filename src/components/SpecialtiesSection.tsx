import React from 'react';
import { DentalSpecialty, Language } from '../types';
import { SPECIALTIES, DICTIONARY } from '../data/clinicData';

interface SpecialtiesSectionProps {
  currentLang: Language;
  onSelectSpecialty: (specialty: DentalSpecialty) => void;
  onOpenAllServices: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  currentLang,
  onSelectSpecialty,
  onOpenAllServices,
}) => {
  const t = DICTIONARY[currentLang].specialties;

  return (
    <section id="services" className="py-24 md:py-32 px-5 md:px-12 bg-[#f5f3f3] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-16 text-center flex flex-col items-center">
          <div className="bg-[#fbf9f9] text-[#4c4546] font-mono-code text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-[0.2em] shadow-xs border border-[#cfc4c5]/30">
            {t.badge}
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-black mb-4 text-center max-w-3xl leading-tight uppercase font-normal">
            {t.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4c4546] max-w-2xl text-center leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* Dynamic Overlapping Tilted Cards Showcase */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-x-8 lg:gap-x-10 gap-y-16 pt-8 pb-16 px-2 sm:px-6">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              onClick={() => onSelectSpecialty(spec)}
              className={`group relative w-full sm:w-[320px] lg:w-[350px] xl:w-[360px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:z-50 hover:scale-105 hover:rotate-0 cursor-pointer border border-white/20 bg-neutral-900 ${spec.rotationClass}`}
              title={`En savoir plus sur ${spec.title}`}
            >
              {/* Background Medical Photography */}
              <img
                src={spec.image}
                alt={spec.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10 opacity-80" />

              {/* Floating Glassmorphic Info Header Card */}
              <div className="absolute top-4 inset-x-4">
                <div className="bg-black/45 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-white/20 text-white shadow-lg transition-colors duration-500 group-hover:bg-black/65 flex flex-col justify-between min-h-[145px]">
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <h3 className="font-cormorant text-xl md:text-2xl font-medium mb-1.5 leading-snug">
                        {spec.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-white/85 line-clamp-3 leading-relaxed">
                        {spec.shortDesc}
                      </p>
                    </div>

                    <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:-rotate-45">
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Tag */}
              <div className="absolute bottom-5 inset-x-6 flex items-center justify-between text-xs text-white/90">
                <span className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 font-mono-code text-[11px]">
                  {spec.durationEstimate}
                </span>
                <span className="text-white/80 group-hover:text-white font-sans font-medium text-xs flex items-center gap-1">
                  Découvrir
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Primary Action to view all services directory */}
        <div className="mt-8 text-center relative z-10">
          <button
            onClick={onOpenAllServices}
            className="inline-flex items-center gap-2 bg-black text-white font-sans text-sm font-semibold px-8 py-4 rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>{t.seeAllBtn}</span>
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
      </div>
    </section>
  );
};
