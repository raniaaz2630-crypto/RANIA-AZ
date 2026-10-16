import React, { useState } from 'react';
import { AppointmentFormData, Language } from '../types';
import { CLINIC_CONTACT, DICTIONARY, SPECIALTIES } from '../data/clinicData';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: 'Consultation générale & Bilan 3D',
    preferredDate: '',
    preferredTime: 'Matin (09:00 - 13:00)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const t = DICTIONARY[currentLang].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    const ref = `RDV-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'Consultation générale & Bilan 3D',
      preferredDate: '',
      preferredTime: 'Matin (09:00 - 13:00)',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-12 bg-[#fbf9f9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-16 text-center md:text-left">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-black mb-3 uppercase tracking-wide font-normal">
            {t.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4c4546] max-w-2xl leading-relaxed">
            {t.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Contact & Booking Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#f5f3f3] p-7 sm:p-10 rounded-2xl shadow-xs border border-[#cfc4c5]/20">
            {submitted ? (
              <div className="py-10 text-center space-y-5 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-cormorant text-3xl text-black">
                  Demande de Rendez-vous Confirmée
                </h3>
                <p className="font-sans text-sm text-[#4c4546] max-w-md mx-auto leading-relaxed">
                  Merci <span className="font-semibold text-black">{formData.fullName}</span>. Votre demande pour « {formData.service} » a bien été enregistrée.
                </p>

                <div className="bg-white p-4 rounded-xl border border-black/10 inline-block font-mono-code text-xs text-neutral-800">
                  <span className="text-neutral-500 block text-[11px] uppercase tracking-wider">Référence dossier</span>
                  <span className="text-base font-bold text-black tracking-widest">{bookingRef}</span>
                </div>

                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  Notre coordinatrice de soins vous appellera au <span className="font-medium text-black">{formData.phone}</span> pour convenir de l'heure exacte.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs font-mono-code uppercase tracking-wider text-black underline underline-offset-4 hover:opacity-70"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-mono-code text-xs text-[#7e7576] uppercase tracking-widest block font-medium">
                      {t.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t.namePlaceholder}
                      className="w-full bg-[#fbf9f9] border border-[#cfc4c5]/40 rounded-lg p-3.5 text-sm focus:border-black outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono-code text-xs text-[#7e7576] uppercase tracking-widest block font-medium">
                      {t.phoneLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+212 6..."
                      className="w-full bg-[#fbf9f9] border border-[#cfc4c5]/40 rounded-lg p-3.5 text-sm focus:border-black outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-mono-code text-xs text-[#7e7576] uppercase tracking-widest block font-medium">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.emailPlaceholder}
                      className="w-full bg-[#fbf9f9] border border-[#cfc4c5]/40 rounded-lg p-3.5 text-sm focus:border-black outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono-code text-xs text-[#7e7576] uppercase tracking-widest block font-medium">
                      Motif de consultation
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#fbf9f9] border border-[#cfc4c5]/40 rounded-lg p-3.5 text-sm focus:border-black outline-none transition-colors cursor-pointer"
                    >
                      <option>Consultation générale & Bilan 3D</option>
                      {SPECIALTIES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option>Urgence dentaire (Douleur / Traumatisme)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono-code text-xs text-[#7e7576] uppercase tracking-widest block font-medium">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className="w-full bg-[#fbf9f9] border border-[#cfc4c5]/40 rounded-lg p-3.5 text-sm focus:border-black outline-none transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-black text-white font-sans text-sm font-semibold px-8 py-4 rounded-full hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
                >
                  <span>{t.sendBtn}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Coordinates (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dark Details Card */}
            <div className="bg-[#0b0f17] text-white p-8 rounded-2xl shadow-xl border border-white/5">
              <h3 className="font-cormorant text-2xl sm:text-3xl mb-6 text-white tracking-wide font-normal">
                {t.coordinatesTitle}
              </h3>

              <div className="space-y-4 font-sans text-sm sm:text-base text-white/90">
                <div className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-[#d4af37] text-xl shrink-0 mt-0.5">
                    location_on
                  </span>
                  <p>{CLINIC_CONTACT.address}</p>
                </div>

                <div className="flex items-center gap-3.5">
                  <span className="material-symbols-outlined text-[#d4af37] text-xl shrink-0">
                    call
                  </span>
                  <a
                    href={`tel:${CLINIC_CONTACT.phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    {CLINIC_CONTACT.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3.5">
                  <span className="material-symbols-outlined text-[#d4af37] text-xl shrink-0">
                    mail
                  </span>
                  <a
                    href={`mailto:${CLINIC_CONTACT.email}`}
                    className="hover:text-[#d4af37] transition-colors break-all"
                  >
                    {CLINIC_CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-mono-code text-xs uppercase tracking-widest mb-4 text-[#d4af37] font-medium">
                  {t.hoursTitle}
                </h4>
                <div className="space-y-2 font-sans text-xs sm:text-sm">
                  {CLINIC_CONTACT.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-white/80">
                      <span>{h.day}</span>
                      <span className={h.day.includes('Dimanche') ? 'text-[#d4af37]' : 'text-white'}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Insurance & Pricing Assurance Card */}
            <div className="bg-[#efeded] p-7 sm:p-8 rounded-2xl border-2 border-[#d4af37]/30 text-center shadow-md hover:shadow-lg transition-all duration-300">
              <span className="material-symbols-outlined text-4xl sm:text-5xl text-[#d4af37] mb-3 inline-block">
                verified_user
              </span>
              <h4 className="font-cormorant text-2xl text-black mb-3 font-normal">
                {t.insuranceTitle}
              </h4>
              <div className="space-y-3">
                <p className="font-sans text-base text-black font-semibold">
                  {t.insuranceLead}
                </p>
                <div className="w-12 h-0.5 bg-[#d4af37]/40 mx-auto" />
                <p className="font-sans text-xs sm:text-sm text-[#4c4546] leading-relaxed px-2">
                  {t.insuranceDesc}
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-2 text-[11px] font-mono-code text-[#4c4546]">
                  <span className="bg-white px-2.5 py-1 rounded-md border border-black/5">CNOPS</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-black/5">CNSS</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-black/5">Saham</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-black/5">AXA Assurance</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-black/5">RMA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
