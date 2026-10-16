import React, { useRef } from 'react';
import { Language } from '../types';
import { CLINIC_CONTACT, DICTIONARY } from '../data/clinicData';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
  doctorPhoto: string;
  onUpdatePhoto: (newPhotoUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenBooking,
  doctorPhoto,
  onUpdatePhoto
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = DICTIONARY[currentLang].hero;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdatePhoto(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-16 overflow-hidden bg-[#fbf9f9]">
      {/* Background Subtle Gradient & Studio Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center md:bg-right opacity-30 md:opacity-40 scale-105 transition-all duration-1000 blur-[1px]"
          style={{ backgroundImage: `url(${doctorPhoto})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f9] via-[#fbf9f9]/95 md:via-[#fbf9f9]/90 to-[#fbf9f9]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f9] via-transparent to-transparent" />
      </div>

      {/* Hidden File Input for Image Replacement */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Main Headline */}
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-[66px] tracking-[0.03em] uppercase text-[#0b0f17] leading-[1.08] mb-4">
              <span className="block font-light text-neutral-800">{t.titleLine1}</span>
              <span className="block font-normal text-neutral-900">{t.titleLine2}</span>
              <span className="block font-bold text-black">{t.titleLine3}</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cinzel font-light text-slate-600 tracking-[0.04em] mt-3">
                {t.titleSub}
              </span>
            </h1>

            {/* Subtitle / Kicker */}
            <p className="text-xs sm:text-sm font-sans font-semibold tracking-[0.16em] uppercase text-slate-500 max-w-xl leading-relaxed pt-2">
              {t.kicker}
            </p>

            {/* Body Prose */}
            <p className="text-[#43474e] font-sans text-base sm:text-lg mt-4 mb-8 max-w-xl leading-relaxed">
              {t.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-black text-white font-sans text-sm font-semibold px-8 py-4 rounded-full hover:bg-neutral-800 transition-all duration-300 flex items-center gap-2 shadow-[0_10px_40px_rgba(0,31,63,0.12)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.bookBtn}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              <a
                href="#services"
                className="border border-black text-black font-sans text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#efeded] transition-colors duration-300"
              >
                {t.discoverBtn}
              </a>
            </div>

            {/* Micro trust indicators */}
            <div className="mt-10 pt-6 border-t border-black/10 flex flex-wrap items-center gap-6 text-xs text-neutral-600 font-sans">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-neutral-800">verified</span>
                <span>Scanner Intra-Oral 3D</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-neutral-800">verified</span>
                <span>Anesthésie sans douleur</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-neutral-800">verified</span>
                <span>Hygiène Stérilisation Classe B</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Doctor Portrait Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Luxury Frame Container */}
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative bg-[#0b0f17] border-2 border-black/10 transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src={doctorPhoto}
                  alt="Dr. Rania Azzouzi - Chirurgienne Dentiste à Tanger"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-all duration-700"
                />

                {/* Dark Vignette Overlay for High-End Aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />

                {/* Photo Change Action Trigger */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-black/60 hover:bg-black text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 shadow-md group/btn"
                    title="Changer la photo (sélectionner la photo de votre appareil)"
                  >
                    <span className="material-symbols-outlined text-sm">photo_camera</span>
                    <span>Changer la photo</span>
                  </button>
                </div>

                {/* Bottom Caption Pill */}
                <div className="absolute bottom-5 inset-x-5 z-20 text-white">
                  <div className="bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-lg">
                    <p className="font-cormorant text-xl font-medium leading-tight">
                      Dr. Rania Azzouzi
                    </p>
                    <p className="font-mono-code text-[11px] text-[#d4af37] uppercase tracking-wider mt-0.5">
                      Conception Numérique 3D & Esthétique
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-black/10 flex items-center gap-3 z-30">
                <span className="material-symbols-outlined text-3xl text-[#d4af37]">
                  verified
                </span>
                <div>
                  <p className="font-mono-code text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
                    Cabinet Certifié
                  </p>
                  <p className="font-cormorant text-base sm:text-lg font-medium text-black leading-tight">
                    Excellence Tanger
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
