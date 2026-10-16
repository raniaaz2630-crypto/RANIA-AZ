export type Language = 'FR' | 'AR' | 'ES';

export interface ClinicalCase {
  id: string;
  title: string;
  category: 'esthetic' | 'implant' | 'ortho' | 'periodontics' | 'conservative';
  categoryLabel: string;
  beforeImage: string;
  afterImage: string;
  defaultPosition?: number;
  description: string;
  duration: string;
  technique: string;
}

export interface DentalSpecialty {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  rotationClass: string;
  tiltDegree: number;
  badge: string;
  benefits: string[];
  durationEstimate: string;
  anesthesiaType: string;
}

export interface PatientReview {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  treatment: string;
  verified: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface FAQItem {
  id: string;
  category: 'procedures' | 'insurance' | 'post-op';
  question: string;
  answer: string;
  keyPoints?: string[];
}

export interface PatientAppointment {
  id: string;
  patientName: string;
  phone: string;
  treatment: string;
  date: string;
  time: string;
  doctor: string;
  room: string;
  status: 'confirmed' | 'pending' | 'completed';
  prepInstructions: string[];
  postOpGuideId: string;
}

export interface PostOpGuide {
  id: string;
  title: string;
  procedure: string;
  category: string;
  recoveryTimeline: string;
  immediateCare: string[];
  days2to7: string[];
  dietaryAdvice: string[];
  medicationTips: string[];
  warningSigns: string[];
  printableSummary: string;
}
