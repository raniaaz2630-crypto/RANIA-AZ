/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ClinicalCase, DentalSpecialty, Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { ClinicalResults } from './components/ClinicalResults';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { PatientPortalSection } from './components/PatientPortalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { EmergencyModal } from './components/EmergencyModal';
import { AppointmentModal } from './components/AppointmentModal';
import { CaseDetailModal } from './components/CaseDetailModal';
import { ServiceModal } from './components/ServiceModal';

import { CLINIC_CONTACT } from './data/clinicData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('FR');
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [selectedCase, setSelectedCase] = useState<ClinicalCase | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<DentalSpecialty | null>(null);
  const [allServicesOpen, setAllServicesOpen] = useState(false);

  const [doctorPhoto, setDoctorPhoto] = useState<string>(() => {
    try {
      return localStorage.getItem('dr_azzouzi_photo') || CLINIC_CONTACT.doctorImage;
    } catch {
      return CLINIC_CONTACT.doctorImage;
    }
  });

  const handleUpdatePhoto = (newPhotoUrl: string) => {
    setDoctorPhoto(newPhotoUrl);
    try {
      localStorage.setItem('dr_azzouzi_photo', newPhotoUrl);
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  const handleOpenBooking = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setBookingOpen(true);
  };

  const isRTL = currentLang === 'AR';

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#fbf9f9] text-[#1b1c1c] selection:bg-[#e3e2e2] selection:text-[#1b1c1c] ${
        isRTL ? 'font-sans' : ''
      }`}
    >
      {/* Fixed Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenEmergency={() => setEmergencyOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Layout */}
      <main>
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
          doctorPhoto={doctorPhoto}
          onUpdatePhoto={handleUpdatePhoto}
        />

        {/* Stats & Trust Section */}
        <TrustStats currentLang={currentLang} />

        {/* About Section */}
        <AboutSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
          doctorPhoto={doctorPhoto}
          onUpdatePhoto={handleUpdatePhoto}
        />

        {/* Before / After Clinical Results */}
        <ClinicalResults
          currentLang={currentLang}
          onSelectCase={(clinicalCase) => setSelectedCase(clinicalCase)}
        />

        {/* Specialties / Services Bento Grid */}
        <SpecialtiesSection
          currentLang={currentLang}
          onSelectSpecialty={(specialty) => setSelectedSpecialty(specialty)}
          onOpenAllServices={() => setAllServicesOpen(true)}
        />

        {/* Testimonials */}
        <TestimonialsSection currentLang={currentLang} />

        {/* FAQ Section */}
        <FAQSection
          currentLang={currentLang}
          onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
        />

        {/* Espace Patient & Consignes Post-Opératoires */}
        <PatientPortalSection
          currentLang={currentLang}
          onOpenEmergency={() => setEmergencyOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Contact & Appointment Booking */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp & Phone) */}
      <FloatingActions onOpenEmergency={() => setEmergencyOpen(true)} />

      {/* Modals & Dialogs */}
      <EmergencyModal
        isOpen={emergencyOpen}
        onClose={() => setEmergencyOpen(false)}
        onOpenBooking={() => {
          setEmergencyOpen(false);
          handleOpenBooking('Urgence dentaire');
        }}
      />

      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={preselectedService}
      />

      <CaseDetailModal
        clinicalCase={selectedCase}
        onClose={() => setSelectedCase(null)}
        onBookTreatment={(title) => {
          setSelectedCase(null);
          handleOpenBooking(title);
        }}
      />

      <ServiceModal
        specialty={selectedSpecialty}
        isOpenAllServices={allServicesOpen}
        onClose={() => {
          setSelectedSpecialty(null);
          setAllServicesOpen(false);
        }}
        onBookSpecialty={(specialtyTitle) => {
          setSelectedSpecialty(null);
          setAllServicesOpen(false);
          handleOpenBooking(specialtyTitle);
        }}
      />
    </div>
  );
}
