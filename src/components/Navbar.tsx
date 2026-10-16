import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data/clinicData';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenEmergency: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenEmergency,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = DICTIONARY[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#fbf9f9]/92 backdrop-blur-md shadow-sm border-[#cfc4c5]/30 py-3'
          : 'bg-[#fbf9f9]/80 backdrop-blur-md border-transparent py-4'
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-12 max-w-7xl mx-auto">
        {/* Brand */}
        <a
          href="#"
          className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-black tracking-tight font-medium hover:opacity-80 transition-opacity"
        >
          Dr. Rania Azzouzi
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#propos"
            className="text-[#4c4546] hover:text-black transition-colors duration-200 font-mono-code text-xs uppercase tracking-widest font-medium"
          >
            {t.about}
          </a>
          <a
            href="#services"
            className="text-[#4c4546] hover:text-black transition-colors duration-200 font-mono-code text-xs uppercase tracking-widest font-medium"
          >
            {t.services}
          </a>
          <a
            href="#galerie"
            className="text-[#4c4546] hover:text-black transition-colors duration-200 font-mono-code text-xs uppercase tracking-widest font-medium"
          >
            {t.results}
          </a>
          <a
            href="#temoignages"
            className="text-[#4c4546] hover:text-black transition-colors duration-200 font-mono-code text-xs uppercase tracking-widest font-medium"
          >
            {DICTIONARY[currentLang].testimonials.title.split(' ')[0]}
          </a>
          <a
            href="#faq"
            className="text-[#4c4546] hover:text-black transition-colors duration-200 font-mono-code text-xs uppercase tracking-widest font-medium"
          >
            {t.faq}
          </a>
          <a
            href="#espace-patient"
            className="text-[#4c4546] hover:text-black transition-colors duration-200 font-mono-code text-xs uppercase tracking-widest font-medium"
          >
            Espace Patient
          </a>
          <a
            href="#contact"
            className="text-[#4c4546] hover:text-black transition-colors duration-200 font-mono-code text-xs uppercase tracking-widest font-medium"
          >
            {t.contact}
          </a>
        </div>

        {/* Right Actions: Emergency Button, Lang Selector, Mobile toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenEmergency}
            className="hidden sm:inline-flex items-center gap-2 text-[#ba1a1a] font-sans text-xs font-semibold px-3.5 py-1.5 border border-[#ba1a1a]/30 rounded-full hover:bg-[#ba1a1a]/10 transition-colors animate-pulse whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">emergency</span>
            <span>{t.emergency}</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-[#efeded] p-1 rounded-full text-xs font-mono-code">
            {(['FR', 'AR', 'ES'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-2 py-0.5 rounded-full transition-all text-[11px] font-medium ${
                  currentLang === lang
                    ? 'bg-black text-white shadow-xs'
                    : 'text-[#4c4546] hover:text-black'
                }`}
                title={`Changer de langue vers ${lang}`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Quick Booking CTA */}
          <button
            onClick={onOpenBooking}
            className="hidden lg:inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
          >
            Prendre RDV
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black p-1 hover:bg-neutral-200/50 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf9f9] border-b border-[#cfc4c5]/40 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3 font-mono-code text-sm uppercase tracking-wider">
            <a
              href="#propos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1b1c1c] py-2 border-b border-black/5"
            >
              {t.about}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1b1c1c] py-2 border-b border-black/5"
            >
              {t.services}
            </a>
            <a
              href="#galerie"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1b1c1c] py-2 border-b border-black/5"
            >
              {t.results}
            </a>
            <a
              href="#temoignages"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1b1c1c] py-2 border-b border-black/5"
            >
              {DICTIONARY[currentLang].testimonials.title}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1b1c1c] py-2 border-b border-black/5"
            >
              {t.faq}
            </a>
            <a
              href="#espace-patient"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1b1c1c] py-2 border-b border-black/5 font-semibold text-black"
            >
              Espace Patient
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1b1c1c] py-2 border-b border-black/5"
            >
              {t.contact}
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmergency();
              }}
              className="w-full flex items-center justify-center gap-2 text-[#ba1a1a] font-sans text-xs font-semibold px-4 py-2.5 border border-[#ba1a1a]/30 rounded-full hover:bg-[#ba1a1a]/10"
            >
              <span className="material-symbols-outlined text-base">emergency</span>
              <span>{t.emergency}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-black text-white font-sans text-xs font-semibold px-4 py-3 rounded-full shadow-md"
            >
              Prendre rendez-vous en ligne
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
