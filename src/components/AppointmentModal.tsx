import React, { useState } from 'react';
import { SPECIALTIES } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [step, setStep] = useState<number>(1);
  const [service, setService] = useState<string>(
    preselectedService || 'Consultation générale & Bilan 3D'
  );
  const [date, setDate] = useState<string>('');
  const [slot, setSlot] = useState<string>('09:30');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [confirmedRef, setConfirmedRef] = useState<string>('');

  if (!isOpen) return null;

  const timeSlots = ['09:30', '10:30', '11:30', '14:30', '15:30', '16:30', '17:30'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const ref = `RDV-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedRef(ref);
    setStep(3);
  };

  const handleClose = () => {
    setStep(1);
    setConfirmedRef('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative border border-black/10 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-black/10 flex items-center justify-between bg-[#fbf9f9]">
          <div>
            <h3 className="font-cormorant text-2xl text-black font-medium">
              Prendre rendez-vous en ligne
            </h3>
            <p className="font-sans text-xs text-[#7e7576]">
              Cabinet Dentaire Dr. Rania Azzouzi - Tanger
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-neutral-400 hover:text-black p-1 rounded-full"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-2">
                  1. Choisissez le motif de votre visite
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    'Consultation générale & Bilan 3D',
                    'Hollywood Smile & Facettes',
                    'Détartrage & Prophylaxie GBT',
                    'Implant Dentaire & Scanner',
                    'Orthodontie & Aligneurs invisibles',
                    'Blanchiment Dentaire Médical',
                    'Urgence dentaire (Douleur / Casse)'
                  ].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                        service === s
                          ? 'border-black bg-black text-white font-medium shadow-xs'
                          : 'border-black/10 bg-[#fbf9f9] text-[#1b1c1c] hover:border-black/30'
                      }`}
                    >
                      <span>{s}</span>
                      {service === s && (
                        <span className="material-symbols-outlined text-sm">check</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-2">
                  2. Date souhaitée & Créneau
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#fbf9f9] border border-black/10 rounded-xl p-3 text-xs sm:text-sm focus:border-black outline-none mb-3"
                  min={new Date().toISOString().split('T')[0]}
                />

                <div className="grid grid-cols-4 gap-1.5">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSlot(time)}
                      className={`py-2 px-1 text-xs rounded-lg border text-center transition-all ${
                        slot === time
                          ? 'bg-black text-white border-black font-semibold'
                          : 'bg-[#f5f3f3] text-neutral-700 border-black/5 hover:bg-neutral-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-black text-white font-sans text-xs font-semibold py-3.5 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                <span>Continuer vers mes coordonnées</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#f5f3f3] p-3 rounded-xl text-xs text-neutral-700 space-y-1">
                <p>
                  <span className="font-semibold text-black">Soin :</span> {service}
                </p>
                <p>
                  <span className="font-semibold text-black">Créneau demandé :</span> {date || 'Prochain jour ouvré'} à {slot}
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1">
                  Nom et Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Karim Benjelloun"
                  className="w-full bg-[#fbf9f9] border border-black/10 rounded-lg p-3 text-sm focus:border-black outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1">
                  Numéro de téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+212 6..."
                  className="w-full bg-[#fbf9f9] border border-black/10 rounded-lg p-3 text-sm focus:border-black outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1">
                  Email (pour confirmation)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full bg-[#fbf9f9] border border-black/10 rounded-lg p-3 text-sm focus:border-black outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1">
                  Commentaires ou antécédents médicaux
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Peur du dentiste, sensibilité au froid, femme enceinte..."
                  className="w-full bg-[#fbf9f9] border border-black/10 rounded-lg p-3 text-sm focus:border-black outline-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 bg-[#f5f3f3] text-black font-sans text-xs font-semibold py-3.5 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-black text-white font-sans text-xs font-semibold py-3.5 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Valider la réservation
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="py-6 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h4 className="font-cormorant text-2xl sm:text-3xl text-black">
                Rendez-vous Pré-réservé !
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Merci {name}. Votre demande pour <span className="font-semibold text-black">{service}</span> a été transmise au cabinet du Dr. Rania Azzouzi.
              </p>

              <div className="bg-[#f5f3f3] p-4 rounded-xl border border-black/10 inline-block font-mono-code text-xs">
                <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Numéro de confirmation</span>
                <span className="text-base font-bold text-black">{confirmedRef}</span>
              </div>

              <p className="text-xs text-neutral-500">
                Vous recevrez un appel ou un SMS au <strong>{phone}</strong> pour confirmer votre horaire définitif.
              </p>

              <button
                onClick={handleClose}
                className="bg-black text-white font-sans text-xs font-semibold px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
