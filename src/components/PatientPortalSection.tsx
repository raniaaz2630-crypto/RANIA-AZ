import React, { useState, useEffect, useMemo } from 'react';
import { PatientAppointment, PostOpGuide, Language } from '../types';
import { DEMO_APPOINTMENTS, POST_OP_GUIDES } from '../data/portalData';
import { CLINIC_CONTACT } from '../data/clinicData';

interface PatientPortalSectionProps {
  currentLang: Language;
  onOpenEmergency: () => void;
  onOpenBooking: () => void;
}

export const PatientPortalSection: React.FC<PatientPortalSectionProps> = ({
  currentLang,
  onOpenEmergency,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'appointment' | 'post-op'>('appointment');
  const [selectedAppointmentId, setSelectedAppointmentId] = useState<string>('RDV-829104');
  const [searchRef, setSearchRef] = useState<string>('');
  const [selectedGuideId, setSelectedGuideId] = useState<string>('post-op-implant');
  const [guideCategoryFilter, setGuideCategoryFilter] = useState<string>('all');
  const [copiedRef, setCopiedRef] = useState(false);
  const [showSymptomChecker, setShowSymptomChecker] = useState(false);
  const [selectedSymptom, setSelectedSymptom] = useState<string>('swelling');

  // Load custom booking from localStorage if user booked previously
  const appointmentsList = useMemo(() => {
    return DEMO_APPOINTMENTS;
  }, []);

  const currentAppointment = useMemo(() => {
    if (searchRef.trim()) {
      const found = appointmentsList.find(
        (a) =>
          a.id.toLowerCase() === searchRef.trim().toLowerCase() ||
          a.phone.replace(/\s+/g, '').includes(searchRef.trim().replace(/\s+/g, '')) ||
          a.patientName.toLowerCase().includes(searchRef.trim().toLowerCase())
      );
      if (found) return found;
    }
    return appointmentsList.find((a) => a.id === selectedAppointmentId) || appointmentsList[0];
  }, [searchRef, selectedAppointmentId, appointmentsList]);

  const currentGuide = useMemo(() => {
    return POST_OP_GUIDES.find((g) => g.id === selectedGuideId) || POST_OP_GUIDES[0];
  }, [selectedGuideId]);

  const filteredGuides = useMemo(() => {
    if (guideCategoryFilter === 'all') return POST_OP_GUIDES;
    return POST_OP_GUIDES.filter((g) => g.category.toLowerCase().includes(guideCategoryFilter.toLowerCase()));
  }, [guideCategoryFilter]);

  const handleCopyRef = (refText: string) => {
    navigator.clipboard.writeText(refText);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleDownloadCalendar = (apt: PatientAppointment) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Cabinet Dentaire Dr Rania Azzouzi//FR',
      'BEGIN:VEVENT',
      `SUMMARY:Rendez-vous Dentaire — ${apt.treatment}`,
      `DESCRIPTION:Praticien: ${apt.doctor}\\nLieu: ${apt.room}\\nCabinet Dr. Rania Azzouzi Tanger.\\nEn cas d'empêchement, merci de prévenir 24h à l'avance.`,
      `LOCATION:${CLINIC_CONTACT.address}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${apt.id}-consultation-tanger.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintGuide = () => {
    window.print();
  };

  return (
    <section id="espace-patient" className="py-24 md:py-32 px-5 md:px-12 bg-[#fbf9f9] border-t border-[#cfc4c5]/25">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 md:mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#efeded] text-[#4c4546] font-mono-code text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em] shadow-xs border border-[#cfc4c5]/30">
            <span className="material-symbols-outlined text-sm text-neutral-800">lock</span>
            <span>Espace Patient Sécurisé</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 uppercase tracking-wide font-normal leading-tight">
            Vos Rendez-vous & Consignes Digitales
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#4c4546] leading-relaxed">
            Consultez les détails de votre prochaine consultation à Tanger, préparez votre venue en toute sérénité et accédez à vos fiches post-opératoires 24h/24.
          </p>
        </div>

        {/* Primary Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#efeded] rounded-2xl border border-black/5 shadow-xs">
            <button
              onClick={() => setActiveTab('appointment')}
              className={`px-5 sm:px-8 py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'appointment'
                  ? 'bg-black text-white shadow-md'
                  : 'text-[#4c4546] hover:text-black hover:bg-white/40'
              }`}
            >
              <span className="material-symbols-outlined text-base">calendar_month</span>
              <span>Prochain Rendez-vous</span>
            </button>

            <button
              onClick={() => setActiveTab('post-op')}
              className={`px-5 sm:px-8 py-3 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'post-op'
                  ? 'bg-black text-white shadow-md'
                  : 'text-[#4c4546] hover:text-black hover:bg-white/40'
              }`}
            >
              <span className="material-symbols-outlined text-base">medical_services</span>
              <span>Fiches Post-Opératoires</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Upcoming Appointment Details */}
        {activeTab === 'appointment' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Patient Search & Demo Selector */}
            <div className="bg-[#f5f3f3] p-5 sm:p-6 rounded-2xl border border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono-code text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                  Dossiers de démonstration :
                </span>
                {appointmentsList.map((apt) => (
                  <button
                    key={apt.id}
                    onClick={() => {
                      setSelectedAppointmentId(apt.id);
                      setSearchRef('');
                    }}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                      selectedAppointmentId === apt.id && !searchRef
                        ? 'bg-black text-white shadow-xs'
                        : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-black/5'
                    }`}
                  >
                    {apt.patientName.split(' ')[0]} ({apt.id})
                  </button>
                ))}
              </div>

              {/* Reference Search Input */}
              <div className="w-full md:w-72 relative">
                <input
                  type="text"
                  value={searchRef}
                  onChange={(e) => setSearchRef(e.target.value)}
                  placeholder="Rechercher par référence (ex: RDV-...)"
                  className="w-full bg-white border border-[#cfc4c5]/40 rounded-xl py-2 pl-3 pr-8 text-xs text-black placeholder:text-neutral-400 focus:border-black outline-none shadow-xs"
                />
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 text-sm">
                  search
                </span>
              </div>
            </div>

            {/* Main Appointment Card */}
            {currentAppointment ? (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-xl relative overflow-hidden">
                {/* Top Status Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-black/10">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="font-mono-code text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      Rendez-vous Confirmé & Réservé
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-xs text-neutral-500">Dossier N° :</span>
                    <div className="inline-flex items-center gap-1.5 bg-[#f5f3f3] px-3 py-1 rounded-lg border border-black/5">
                      <span className="font-mono-code text-xs font-bold text-black tracking-wider">
                        {currentAppointment.id}
                      </span>
                      <button
                        onClick={() => handleCopyRef(currentAppointment.id)}
                        className="text-neutral-500 hover:text-black p-0.5"
                        title="Copier la référence"
                      >
                        <span className="material-symbols-outlined text-sm">
                          {copiedRef ? 'done' : 'content_copy'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Patient & Care Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                  {/* Left: Date, Time & Treatment */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <p className="font-mono-code text-xs uppercase tracking-widest text-neutral-500 mb-1">
                        Patient enregistré
                      </p>
                      <h3 className="font-cormorant text-2xl sm:text-3xl text-black font-semibold">
                        {currentAppointment.patientName}
                      </h3>
                      <p className="text-xs text-neutral-500 font-mono-code mt-0.5">
                        {currentAppointment.phone}
                      </p>
                    </div>

                    <div className="p-5 bg-[#fbf9f9] rounded-2xl border border-black/5">
                      <p className="font-mono-code text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold mb-1">
                        Soin programmé
                      </p>
                      <h4 className="font-cormorant text-xl sm:text-2xl text-black font-medium leading-snug">
                        {currentAppointment.treatment}
                      </h4>
                    </div>

                    {/* Date, Time & Practitioner Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 bg-[#f5f3f3] rounded-xl border border-black/5">
                        <span className="font-mono-code text-[10px] text-neutral-500 uppercase block mb-1">
                          Date de séance
                        </span>
                        <span className="font-sans font-bold text-sm text-black block">
                          {currentAppointment.date}
                        </span>
                      </div>

                      <div className="p-4 bg-[#f5f3f3] rounded-xl border border-black/5">
                        <span className="font-mono-code text-[10px] text-neutral-500 uppercase block mb-1">
                          Heure d'arrivée
                        </span>
                        <span className="font-sans font-bold text-sm text-black block">
                          {currentAppointment.time}
                        </span>
                      </div>

                      <div className="p-4 bg-[#f5f3f3] rounded-xl border border-black/5">
                        <span className="font-mono-code text-[10px] text-neutral-500 uppercase block mb-1">
                          Praticien responsable
                        </span>
                        <span className="font-sans font-bold text-sm text-black block">
                          {currentAppointment.doctor}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Venue & Preparation Checklist */}
                  <div className="lg:col-span-5 bg-[#f5f3f3] p-6 rounded-2xl border border-black/5 space-y-5">
                    <div>
                      <span className="font-mono-code text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                        Emplacement & Salle
                      </span>
                      <p className="font-sans font-semibold text-sm text-black">
                        {currentAppointment.room}
                      </p>
                      <p className="text-xs text-neutral-600 mt-1 flex items-start gap-1">
                        <span className="material-symbols-outlined text-sm text-black shrink-0 mt-0.5">
                          location_on
                        </span>
                        <span>{CLINIC_CONTACT.address}</span>
                      </p>
                    </div>

                    {/* Preparation checklist */}
                    <div className="pt-4 border-t border-black/10">
                      <h5 className="font-mono-code text-xs uppercase tracking-wider text-black font-semibold mb-3 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-[#d4af37]">checklist</span>
                        <span>Consignes avant votre venue</span>
                      </h5>
                      <ul className="space-y-2">
                        {currentAppointment.prepInstructions.map((inst, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700 leading-relaxed">
                            <span className="material-symbols-outlined text-sm text-green-700 shrink-0 mt-0.5">
                              check
                            </span>
                            <span>{inst}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => handleDownloadCalendar(currentAppointment)}
                      className="bg-black hover:bg-neutral-800 text-white font-sans text-xs font-semibold px-5 py-3 rounded-full flex items-center gap-2 shadow-sm transition-all"
                    >
                      <span className="material-symbols-outlined text-sm">event</span>
                      <span>Ajouter à mon agenda (.ics)</span>
                    </button>

                    <button
                      onClick={() => {
                        setSelectedGuideId(currentAppointment.postOpGuideId);
                        setActiveTab('post-op');
                      }}
                      className="border border-black/20 hover:border-black text-black font-sans text-xs font-semibold px-5 py-3 rounded-full flex items-center gap-2 transition-all bg-white"
                    >
                      <span className="material-symbols-outlined text-sm">description</span>
                      <span>Voir la fiche post-opératoire de ce soin</span>
                    </button>
                  </div>

                  <div className="text-xs text-neutral-500 font-sans flex items-center gap-3">
                    <span>Besoin de modifier l'horaire ?</span>
                    <a
                      href={`tel:${CLINIC_CONTACT.phone.replace(/\s+/g, '')}`}
                      className="text-black font-semibold underline hover:text-[#d4af37]"
                    >
                      Appeler le secrétariat
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-3xl border border-black/10">
                <span className="material-symbols-outlined text-4xl text-neutral-400 mb-2">error_outline</span>
                <p className="font-cormorant text-2xl text-black">Aucun dossier trouvé pour cette référence</p>
                <p className="text-xs text-neutral-500 mt-1 mb-4">
                  Vérifiez le numéro figurant sur votre confirmation ou contactez l'accueil.
                </p>
                <button
                  onClick={() => setSearchRef('')}
                  className="text-xs font-mono-code uppercase tracking-wider text-black underline underline-offset-4"
                >
                  Afficher les dossiers par défaut
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Digital Post-Operative Instructions */}
        {activeTab === 'post-op' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#efeded] rounded-xl">
                {[
                  { id: 'all', label: 'Toutes les interventions' },
                  { id: 'Implantologie', label: 'Implants & Greffes' },
                  { id: 'Chirurgie Orale', label: 'Dents de Sagesse' },
                  { id: 'Esthétique', label: 'Facettes & Blanchiment' },
                  { id: 'Orthodontie', label: 'Aligneurs' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setGuideCategoryFilter(cat.id)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      guideCategoryFilter === cat.id
                        ? 'bg-black text-white shadow-xs'
                        : 'text-[#4c4546] hover:text-black'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Symptom Checker Trigger */}
              <button
                onClick={() => setShowSymptomChecker(!showSymptomChecker)}
                className="text-xs font-semibold px-4 py-2 rounded-xl bg-white border border-[#d4af37]/40 text-black hover:border-black flex items-center gap-1.5 shadow-xs transition-all"
              >
                <span className="material-symbols-outlined text-sm text-[#d4af37]">health_and_safety</span>
                <span>{showSymptomChecker ? 'Masquer le vérificateur' : 'Vérificateur de symptômes'}</span>
              </button>
            </div>

            {/* Interactive Symptom Checker Card */}
            {showSymptomChecker && (
              <div className="bg-[#0b0f17] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-white/10 animate-in slide-in-from-top-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div>
                    <h4 className="font-cormorant text-2xl text-white font-medium">
                      Guide d'auto-évaluation post-opératoire
                    </h4>
                    <p className="text-xs text-white/70">
                      Sélectionnez votre symptôme pour vérifier s'il s'agit d'une réaction normale ou nécessitant un appel.
                    </p>
                  </div>
                  <span className="font-mono-code text-[11px] bg-[#d4af37]/20 text-[#d4af37] px-3 py-1 rounded-full uppercase tracking-wider self-start md:self-auto">
                    Conseil médical immédiat
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
                  {[
                    { id: 'swelling', label: 'Gonflement de la joue', icon: 'face' },
                    { id: 'bleeding', label: 'Traces de sang salive', icon: 'water_drop' },
                    { id: 'pain', label: 'Douleur pulsatile', icon: 'dentistry' },
                    { id: 'sensitivity', label: 'Sensibilité au froid', icon: 'ac_unit' }
                  ].map((sym) => (
                    <button
                      key={sym.id}
                      onClick={() => setSelectedSymptom(sym.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 ${
                        selectedSymptom === sym.id
                          ? 'border-[#d4af37] bg-white/10 text-white'
                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl text-[#d4af37]">{sym.icon}</span>
                      <span className="text-xs font-semibold">{sym.label}</span>
                    </button>
                  ))}
                </div>

                {/* Symptom evaluation outcome */}
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs sm:text-sm leading-relaxed">
                  {selectedSymptom === 'swelling' && (
                    <div>
                      <p className="font-bold text-[#d4af37] mb-1">Normal jusqu'à 48 à 72 heures :</p>
                      <p className="text-white/85">
                        L'œdème réactionnel atteint son pic au 2ème ou 3ème jour puis régresse progressivement. Appliquez de la glace 15 min par heure pendant les premières 24h et gardez la tête surélevée. Si le gonflement s'accompagne de difficultés à avaler ou à ouvrir la bouche, contactez le cabinet.
                      </p>
                    </div>
                  )}
                  {selectedSymptom === 'bleeding' && (
                    <div>
                      <p className="font-bold text-[#d4af37] mb-1">Fréquent les premières 24 heures :</p>
                      <p className="text-white/85">
                        Une salive teintée de rose est fréquente et non dangereuse. En cas de saignement continu, mordez fermement sur une compresse stérile pliée pendant 30 minutes sans cracher. Ne rincez pas la bouche.
                      </p>
                    </div>
                  )}
                  {selectedSymptom === 'pain' && (
                    <div>
                      <p className="font-bold text-[#d4af37] mb-1">Doit céder aux antalgiques prescrits :</p>
                      <p className="text-white/85">
                        La gêne post-opératoire est courante et doit être soulagée par la prescription remise. Si une douleur aiguë intense apparaît après 72h (douleur irradiant vers l'oreille), contactez notre permanence médicale pour éliminer une alvéolite.
                      </p>
                    </div>
                  )}
                  {selectedSymptom === 'sensitivity' && (
                    <div>
                      <p className="font-bold text-[#d4af37] mb-1">Transitoire après facettes ou soins :</p>
                      <p className="text-white/85">
                        Une sensibilité au contact du froid ou du chaud est habituelle pendant 3 à 7 jours. Utilisez un dentifrice reminéralisant et évitez les aliments glacés.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Guides Selection Grid & Detailed Viewer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Selector List (4 cols) */}
              <div className="lg:col-span-4 space-y-3">
                <span className="font-mono-code text-xs uppercase tracking-wider text-neutral-500 font-semibold block px-1">
                  Interventions disponibles ({filteredGuides.length})
                </span>

                <div className="space-y-2">
                  {filteredGuides.map((guide) => (
                    <button
                      key={guide.id}
                      onClick={() => setSelectedGuideId(guide.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        selectedGuideId === guide.id
                          ? 'bg-black text-white border-black shadow-md'
                          : 'bg-white hover:bg-[#f5f3f3] text-neutral-800 border-black/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`font-mono-code text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${
                            selectedGuideId === guide.id
                              ? 'bg-white/20 text-white'
                              : 'bg-[#efeded] text-neutral-600'
                          }`}
                        >
                          {guide.category}
                        </span>
                        <span className="material-symbols-outlined text-base">
                          {selectedGuideId === guide.id ? 'check_circle' : 'chevron_right'}
                        </span>
                      </div>
                      <h4 className="font-cormorant text-lg font-medium leading-snug">
                        {guide.title}
                      </h4>
                      <p
                        className={`text-[11px] line-clamp-1 mt-1 font-sans ${
                          selectedGuideId === guide.id ? 'text-white/80' : 'text-neutral-500'
                        }`}
                      >
                        {guide.procedure}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Detailed Guide Viewer (8 cols) */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-black/10 shadow-lg space-y-8">
                {/* Guide Title & Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-black/10">
                  <div>
                    <span className="font-mono-code text-xs uppercase tracking-wider text-[#d4af37] font-semibold block mb-1">
                      Fiche de Soins — {currentGuide.category}
                    </span>
                    <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl text-black font-semibold">
                      {currentGuide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      {currentGuide.procedure}
                    </p>
                  </div>

                  <button
                    onClick={handlePrintGuide}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-black/20 hover:bg-neutral-100 self-start sm:self-auto shrink-0"
                    title="Imprimer ou enregistrer en PDF"
                  >
                    <span className="material-symbols-outlined text-sm">print</span>
                    <span>Imprimer / PDF</span>
                  </button>
                </div>

                {/* Timeline Banner */}
                <div className="p-4 bg-[#fbf9f9] rounded-2xl border border-black/5 flex items-center gap-3">
                  <span className="material-symbols-outlined text-2xl text-[#d4af37] shrink-0">
                    schedule
                  </span>
                  <div>
                    <span className="font-mono-code text-[10px] text-neutral-500 uppercase tracking-wider block">
                      Chronologie de récupération
                    </span>
                    <p className="font-sans text-xs sm:text-sm font-semibold text-black">
                      {currentGuide.recoveryTimeline}
                    </p>
                  </div>
                </div>

                {/* Step 1: Immediate Care (Day 1) */}
                <div className="space-y-3">
                  <h4 className="font-mono-code text-xs uppercase tracking-widest text-black font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                      1
                    </span>
                    <span>Jour de l'intervention (Premières 24h)</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {currentGuide.immediateCare.map((step, idx) => (
                      <div key={idx} className="p-3.5 bg-[#f5f3f3] rounded-xl flex items-start gap-2.5 text-xs text-neutral-800 leading-relaxed">
                        <span className="material-symbols-outlined text-sm text-black shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 2: Days 2 to 7 */}
                <div className="space-y-3">
                  <h4 className="font-mono-code text-xs uppercase tracking-widest text-black font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                      2
                    </span>
                    <span>Du 2ème au 7ème jour (Période de cicatrisation)</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {currentGuide.days2to7.map((step, idx) => (
                      <div key={idx} className="p-3.5 bg-[#f5f3f3] rounded-xl flex items-start gap-2.5 text-xs text-neutral-800 leading-relaxed">
                        <span className="material-symbols-outlined text-sm text-black shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nutrition & Medication 2-Col Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Dietary Advice */}
                  <div className="p-5 bg-[#fbf9f9] rounded-2xl border border-black/5 space-y-2.5">
                    <h5 className="font-mono-code text-xs uppercase tracking-wider text-black font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-[#d4af37]">restaurant</span>
                      <span>Alimentation & Boissons</span>
                    </h5>
                    <ul className="space-y-2">
                      {currentGuide.dietaryAdvice.map((d, i) => (
                        <li key={i} className="text-xs text-neutral-700 flex items-start gap-2 leading-relaxed">
                          <span className="text-black font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Medication Tips */}
                  <div className="p-5 bg-[#fbf9f9] rounded-2xl border border-black/5 space-y-2.5">
                    <h5 className="font-mono-code text-xs uppercase tracking-wider text-black font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-[#d4af37]">medication</span>
                      <span>Ordonnance & Médication</span>
                    </h5>
                    <ul className="space-y-2">
                      {currentGuide.medicationTips.map((m, i) => (
                        <li key={i} className="text-xs text-neutral-700 flex items-start gap-2 leading-relaxed">
                          <span className="text-black font-bold">•</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Warning Signs Box */}
                <div className="p-5 bg-red-50/70 border border-red-200 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-red-900">
                    <span className="material-symbols-outlined text-xl">warning</span>
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider">
                      Signes nécessitant un contact d'urgence :
                    </h5>
                  </div>
                  <ul className="space-y-1.5">
                    {currentGuide.warningSigns.map((w, i) => (
                      <li key={i} className="text-xs text-red-950 flex items-start gap-2">
                        <span className="text-red-700 font-bold">!</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={onOpenEmergency}
                      className="bg-[#ba1a1a] hover:bg-red-800 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-sm">emergency</span>
                      <span>Ligne d'Urgence 24/7 ({CLINIC_CONTACT.emergencyPhone})</span>
                    </button>
                    <a
                      href={CLINIC_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      <span>Poser une question sur WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
