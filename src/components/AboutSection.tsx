import React, { useRef } from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/clinicData';

interface AboutSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
  doctorPhoto: string;
  onUpdatePhoto: (newPhotoUrl: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onOpenBooking,
  doctorPhoto,
  onUpdatePhoto
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = DICTIONARY[currentLang].about;

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
    <section id="propos" className="py-24 md:py-32 px-5 md:px-12 bg-[#fbf9f9]">
      <div className="max-w-7xl mx-auto">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bio & Philosophy */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-black mb-4 uppercase tracking-wide font-normal">
              {t.title}
            </h2>
            <h3 className="font-cormorant text-xl sm:text-2xl text-[#4c4546] mb-6 font-medium">
              {t.doctorName}
            </h3>

            <div className="space-y-4 font-sans text-[#4c4546] leading-relaxed text-sm sm:text-base">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* Doctor's Credentials & Hospital affiliations */}
            <div className="mt-8 pt-6 border-t border-black/10 grid grid-cols-2 gap-4 text-xs font-sans text-neutral-600">
              <div>
                <span className="font-semibold text-black block mb-0.5">Spécialisation</span>
                <span>Esthétique DSD & Chirurgie Implantaire</span>
              </div>
              <div>
                <span className="font-semibold text-black block mb-0.5">Équipements</span>
                <span>Radiologie 3D CBCT & Laser Dentaire</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenBooking}
                className="border-b border-black text-black font-sans text-sm font-semibold pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors duration-300 flex items-center gap-2 group"
              >
                <span>{t.cta}</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Doctor Portrait + Certified Badge */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl relative bg-[#0b0f17] border-2 border-black/10 group">
              <img
                src={doctorPhoto}
                alt="Dr. Rania Azzouzi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Photo change overlay button */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 shadow-md"
                title="Changer la photo du Dr. Azzouzi"
              >
                <span className="material-symbols-outlined text-sm">photo_camera</span>
                <span>Changer la photo</span>
              </button>
            </div>

            {/* Floating Certified Badge */}
            <div className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 bg-white p-5 sm:p-6 rounded-2xl shadow-xl border border-[#cfc4c5]/20 max-w-[260px] z-20">
              <div className="flex items-center gap-3.5">
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#d4af37]">
                  verified
                </span>
                <div>
                  <p className="font-mono-code text-[10px] text-[#4c4546] uppercase tracking-widest font-semibold">
                    {t.badgeTitle}
                  </p>
                  <p className="font-cormorant text-lg sm:text-xl text-black font-medium leading-tight">
                    {t.badgeSub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
