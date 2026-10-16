import React, { useState } from 'react';
import { Language, PatientReview } from '../types';
import { INITIAL_REVIEWS, DICTIONARY } from '../data/clinicData';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const [reviews, setReviews] = useState<PatientReview[]>(INITIAL_REVIEWS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newText, setNewText] = useState('');
  const [newTreatment, setNewTreatment] = useState('Soins esthétiques');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const t = DICTIONARY[currentLang].testimonials;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newRev: PatientReview = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      text: newText.trim(),
      rating,
      date: "À l'instant",
      treatment: newTreatment,
      verified: true
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowAddModal(false);
      setNewAuthor('');
      setNewText('');
    }, 1600);
  };

  return (
    <section id="temoignages" className="py-24 md:py-32 px-5 md:px-12 bg-[#fbf9f9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-black mb-4 uppercase tracking-wide font-normal">
            {t.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4c4546] leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* 3 Review Cards (or 4 responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#f5f3f3] p-8 rounded-xl shadow-xs border border-[#cfc4c5]/20 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex text-[#d4af37] mb-4 text-xl">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="font-sans text-[#4c4546] mb-6 italic leading-relaxed text-sm sm:text-[15px]">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <div>
                  <div className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest text-black">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-[#7e7576] font-mono-code mt-0.5">
                    {item.treatment}
                  </div>
                </div>
                <span className="material-symbols-outlined text-green-700 text-lg" title="Avis vérifié">
                  verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action to share a review */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-[#4c4546] hover:text-black border-b border-black/20 hover:border-black pb-1 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">rate_review</span>
            <span>{t.leaveReview}</span>
          </button>
        </div>
      </div>

      {/* Modal to leave a review */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-black/10">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <span className="material-symbols-outlined text-5xl text-emerald-600">check_circle</span>
                <h3 className="font-cormorant text-2xl text-black">Merci pour votre retour !</h3>
                <p className="text-sm text-neutral-600">Votre avis a été ajouté avec succès.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <h3 className="font-cormorant text-2xl text-black">Partager votre avis</h3>
                <p className="text-xs text-neutral-500">
                  Votre retour d'expérience aide les futurs patients dans leur démarche de soins.
                </p>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1">
                    Votre Nom ou Initiales
                  </label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="Ex: Nadia R."
                    className="w-full bg-[#f5f3f3] border border-black/10 rounded-lg p-3 text-sm focus:border-black outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1">
                    Traitement réalisé
                  </label>
                  <input
                    type="text"
                    value={newTreatment}
                    onChange={(e) => setNewTreatment(e.target.value)}
                    placeholder="Ex: Blanchiment, Implants, Soins..."
                    className="w-full bg-[#f5f3f3] border border-black/10 rounded-lg p-3 text-sm focus:border-black outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1">
                    Note globale
                  </label>
                  <div className="flex gap-2 text-2xl text-[#d4af37] cursor-pointer">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="hover:scale-110 transition-transform"
                      >
                        {star <= rating ? '★' : '☆'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase tracking-wider text-neutral-600 mb-1">
                    Votre commentaire
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Parlez de votre prise en charge, du confort et du résultat..."
                    className="w-full bg-[#f5f3f3] border border-black/10 rounded-lg p-3 text-sm focus:border-black outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-sans text-xs font-semibold py-3 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Publier l'avis
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
