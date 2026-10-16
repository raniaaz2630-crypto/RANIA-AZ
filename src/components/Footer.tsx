import React, { useState } from 'react';
import { CLINIC_CONTACT } from '../data/clinicData';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#e3e2e2] text-[#1b1c1c] w-full pt-20 pb-10 border-t border-[#cfc4c5]/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-12 max-w-7xl mx-auto mb-14">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="font-cormorant text-3xl text-black mb-3 font-medium">
              {CLINIC_CONTACT.name}
            </div>
            <p className="font-sans text-sm text-[#4c4546] leading-relaxed">
              Dentisterie d'excellence à Tanger. Alliant expertise clinique de pointe et approche profondément humaine.
            </p>
          </div>

          {/* Informations */}
          <div>
            <h4 className="font-mono-code text-xs text-black mb-5 uppercase tracking-widest font-semibold">
              Informations
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#4c4546]">
              <li>
                <button
                  onClick={() => setCertModalOpen(true)}
                  className="hover:text-black transition-colors text-left"
                >
                  Expertise & Certifications
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition-colors">
                  Horaires d'ouverture
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-black transition-colors">
                  Galerie Avant / Après
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-black transition-colors">
                  Questions Fréquentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#espace-patient" className="hover:text-black transition-colors font-medium text-black">
                  Espace Patient & Suivi Post-Op
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-mono-code text-xs text-black mb-5 uppercase tracking-widest font-semibold">
              Légal
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#4c4546]">
              <li>
                <button
                  onClick={() => setLegalModalOpen(true)}
                  className="hover:text-black transition-colors text-left"
                >
                  Mentions Légales & Déontologie
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModalOpen(true)}
                  className="hover:text-black transition-colors text-left"
                >
                  Protection des données patient
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Plan du site
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-code text-xs text-black mb-5 uppercase tracking-widest font-semibold">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#4c4546]">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-black">location_on</span>
                <span>Tanger, Maroc</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-black">mail</span>
                <a href={`mailto:${CLINIC_CONTACT.email}`} className="hover:text-black transition-colors">
                  {CLINIC_CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-black">call</span>
                <a href={`tel:${CLINIC_CONTACT.phone.replace(/\s+/g, '')}`} className="hover:text-black transition-colors">
                  {CLINIC_CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center font-mono-code text-xs text-[#7e7576] pt-8 border-t border-[#cfc4c5]/30 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2024 Cabinet Dentaire Dr. Rania Azzouzi - Tanger. Tous droits réservés.</p>
          <p className="text-[11px]">Ordre National des Médecins Dentistes du Maroc</p>
        </div>
      </footer>

      {/* Legal Information Modal */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-black/10 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-cormorant text-2xl text-black mb-4">
              Mentions Légales & Charte Déontologique
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#4c4546] font-sans leading-relaxed">
              <p>
                <strong>Cabinet Dentaire Dr. Rania Azzouzi</strong><br />
                Adresse : 123 Boulevard Mohammed V, Tanger, Maroc.<br />
                Inscrite au Conseil Régional de l'Ordre des Médecins Dentistes du Nord.
              </p>
              <p>
                <strong>Protection des Données Personnelles :</strong><br />
                Les dossiers médicaux et informations recueillies font l'objet d'un traitement strictement confidentiel conforme aux règles du secret médical et aux recommandations de la CNDP au Maroc.
              </p>
              <p>
                <strong>Stérilisation et Sécurité Sanitaire :</strong><br />
                Le cabinet applique les protocoles hospitaliers les plus rigoureux avec traçabilité informatique de chaque cycle d'autoclave de classe B.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Certifications Modal */}
      {certModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-black/10 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setCertModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black p-1"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-cormorant text-2xl text-black mb-4">
              Certifications & Qualifications Médicales
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#4c4546] font-sans leading-relaxed">
              <div className="p-3 bg-[#f5f3f3] rounded-lg">
                <span className="font-semibold text-black block">Doctorat en Chirurgie Dentaire</span>
                <span className="text-xs text-neutral-600">Faculté de Médecine Dentaire</span>
              </div>
              <div className="p-3 bg-[#f5f3f3] rounded-lg">
                <span className="font-semibold text-black block">Diplôme Universitaire en Implantologie Orale</span>
                <span className="text-xs text-neutral-600">Techniques avancées de régénération osseuse et guidage 3D</span>
              </div>
              <div className="p-3 bg-[#f5f3f3] rounded-lg">
                <span className="font-semibold text-black block">Masterclass Esthétique du Sourire & DSD</span>
                <span className="text-xs text-neutral-600">Facettes céramiques non-invasives et réhabilitation biomimétique</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
