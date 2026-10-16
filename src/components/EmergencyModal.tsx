import React from 'react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative border border-black/10 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Emergency Banner */}
        <div className="bg-[#ba1a1a] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl animate-pulse">emergency</span>
            <div>
              <h3 className="font-sans font-bold text-base uppercase tracking-wider">
                Service Urgences Dentaires 24/7
              </h3>
              <p className="text-xs text-white/80">Cabinet Dr. Rania Azzouzi - Tanger</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#1b1c1c]">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs text-red-900 space-y-1">
            <p className="font-semibold text-red-950">
              En cas de douleur aiguë, traumatisme ou saignement persistant :
            </p>
            <p>
              Notre équipe médicale assure une permanence prioritaire pour soulager la douleur immédiatement au cabinet de Tanger.
            </p>
          </div>

          {/* Quick Call Actions */}
          <div className="space-y-3">
            <a
              href={`tel:${CLINIC_CONTACT.emergencyPhone.replace(/\s+/g, '')}`}
              className="w-full bg-[#ba1a1a] hover:bg-red-800 text-white font-sans font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span className="material-symbols-outlined text-xl">call</span>
              <span>Ligne d'Urgence Directe : {CLINIC_CONTACT.emergencyPhone}</span>
            </a>

            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsappNumber}?text=URGENCE%20DENTAIRE%20:%20J'ai%20une%20douleur%20aigu%C3%AB%20et%20souhaite%20consulter%20au%20plus%20vite.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-sans font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              <span>WhatsApp Prioritaire Urgences</span>
            </a>
          </div>

          {/* Guidance Cards */}
          <div>
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-3">
              Que faire en attendant votre consultation ?
            </h4>

            <div className="space-y-2.5 text-xs text-neutral-700">
              <div className="p-3 bg-[#f5f3f3] rounded-lg">
                <span className="font-bold text-black block mb-0.5">Dent expulsée après un choc :</span>
                Ne nettoyez pas la racine. Conservez la dent dans du lait ou du sérum physiologique, et consultez dans l'heure.
              </div>
              <div className="p-3 bg-[#f5f3f3] rounded-lg">
                <span className="font-bold text-black block mb-0.5">Rage de dent / Douleur nocturne :</span>
                Évitez d'appliquer de la chaleur sur la joue. Prenez un antalgique usuel (paracétamol) sans dépasser la dose.
              </div>
              <div className="p-3 bg-[#f5f3f3] rounded-lg">
                <span className="font-bold text-black block mb-0.5">Couronne ou facette descellée :</span>
                Gardez la pièce intacte dans une boîte propre. Ne tentez pas de la recoller avec de la colle forte.
              </div>
            </div>
          </div>

          {/* Cabinet address */}
          <div className="pt-2 border-t border-black/10 flex items-center justify-between text-xs text-neutral-600">
            <span>Adresse : {CLINIC_CONTACT.address}</span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="text-black font-semibold underline"
            >
              Formulaire de rendez-vous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
