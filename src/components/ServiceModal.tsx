import React from 'react';
import { DentalSpecialty } from '../types';
import { SPECIALTIES } from '../data/clinicData';

interface ServiceModalProps {
  specialty: DentalSpecialty | null;
  isOpenAllServices?: boolean;
  onClose: () => void;
  onBookSpecialty: (specialtyTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  specialty,
  isOpenAllServices = false,
  onClose,
  onBookSpecialty
}) => {
  if (!specialty && !isOpenAllServices) return null;

  // View 1: All Services Directory
  if (isOpenAllServices) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
        <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl relative border border-black/10 overflow-hidden max-h-[90vh] flex flex-col">
          <div className="p-6 border-b border-black/10 flex items-center justify-between bg-[#fbf9f9]">
            <div>
              <h3 className="font-cormorant text-2xl sm:text-3xl text-black font-medium">
                Toutes nos Prestations Médicales
              </h3>
              <p className="font-sans text-xs text-[#7e7576]">
                Cabinet Dentaire Dr. Rania Azzouzi - Tanger
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-black p-1 rounded-full hover:bg-neutral-100"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SPECIALTIES.map((spec) => (
                <div
                  key={spec.id}
                  className="p-5 bg-[#f5f3f3] rounded-2xl border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono-code text-[11px] bg-white px-2 py-0.5 rounded text-neutral-600">
                        {spec.badge}
                      </span>
                      <span className="text-[11px] font-mono-code text-neutral-500">
                        {spec.durationEstimate}
                      </span>
                    </div>
                    <h4 className="font-cormorant text-xl text-black font-medium mb-1">
                      {spec.title}
                    </h4>
                    <p className="font-sans text-xs text-[#4c4546] leading-relaxed mb-3">
                      {spec.shortDesc}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onBookSpecialty(spec.title);
                    }}
                    className="mt-2 text-xs font-sans font-semibold text-black underline underline-offset-4 hover:text-[#d4af37] text-left flex items-center gap-1"
                  >
                    <span>Prendre RDV pour ce soin</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // View 2: Single Specialty Detail
  if (!specialty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl relative border border-black/10 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Cover Image */}
        <div className="relative h-48 sm:h-56 w-full bg-neutral-900 overflow-hidden">
          <img
            src={specialty.image}
            alt={specialty.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-sm"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="font-mono-code text-[10px] text-white/80 uppercase tracking-widest bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-sm inline-block mb-1.5">
              Spécialité {specialty.badge}
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl text-white font-medium leading-tight">
              {specialty.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div>
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
              Protocole & Prise en charge
            </h4>
            <p className="font-sans text-sm text-[#4c4546] leading-relaxed">
              {specialty.fullDesc}
            </p>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-2">
              Avantages Cliniques
            </h4>
            <div className="space-y-2">
              {specialty.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-800">
                  <span className="material-symbols-outlined text-sm text-green-700">check_circle</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-[#f5f3f3] rounded-xl border border-black/5">
              <span className="text-neutral-500 block text-[10px] font-mono-code uppercase mb-0.5">
                Durée estimée
              </span>
              <span className="font-medium text-black">{specialty.durationEstimate}</span>
            </div>
            <div className="p-3 bg-[#f5f3f3] rounded-xl border border-black/5">
              <span className="text-neutral-500 block text-[10px] font-mono-code uppercase mb-0.5">
                Confort & Anesthésie
              </span>
              <span className="font-medium text-black">{specialty.anesthesiaType}</span>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onBookSpecialty(specialty.title);
              }}
              className="w-full bg-black text-white font-sans text-xs font-semibold py-3.5 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Prendre rendez-vous pour {specialty.title}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
