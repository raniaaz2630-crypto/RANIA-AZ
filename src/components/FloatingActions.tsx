import React from 'react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface FloatingActionsProps {
  onOpenEmergency: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEmergency }) => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col gap-3.5 z-40 items-end">
      {/* WhatsApp Button */}
      <a
        href={CLINIC_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter le cabinet par WhatsApp"
        className="w-13 h-13 bg-black text-white p-3.5 rounded-full shadow-xl hover:bg-neutral-800 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative border border-white/20"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
        <span className="absolute right-full mr-3 bg-white text-black font-mono-code text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${CLINIC_CONTACT.phone.replace(/\s+/g, '')}`}
        aria-label="Appeler le cabinet dentaire"
        className="w-13 h-13 bg-[#5e5e5e] text-white p-3.5 rounded-full shadow-xl hover:bg-black hover:scale-110 transition-all duration-300 flex items-center justify-center group relative border border-white/20"
      >
        <span className="material-symbols-outlined text-2xl">call</span>
        <span className="absolute right-full mr-3 bg-white text-black font-mono-code text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Appeler le cabinet
        </span>
      </a>
    </div>
  );
};
