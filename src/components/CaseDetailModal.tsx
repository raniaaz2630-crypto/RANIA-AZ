import React from 'react';
import { ClinicalCase } from '../types';
import { ComparisonSlider } from './ComparisonSlider';

interface CaseDetailModalProps {
  clinicalCase: ClinicalCase | null;
  onClose: () => void;
  onBookTreatment: (title: string) => void;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  clinicalCase,
  onClose,
  onBookTreatment
}) => {
  if (!clinicalCase) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative border border-black/10 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-black/10 flex items-center justify-between bg-[#fbf9f9]">
          <div>
            <span className="font-mono-code text-[11px] text-[#7e7576] uppercase tracking-wider block">
              {clinicalCase.categoryLabel}
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl text-black font-medium">
              {clinicalCase.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-black p-1 rounded-full hover:bg-neutral-100"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Comparison Slider */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <ComparisonSlider
              beforeImage={clinicalCase.beforeImage}
              afterImage={clinicalCase.afterImage}
              initialPosition={50}
              aspectRatioClass="aspect-[16/10]"
            />
          </div>
          <p className="text-center text-xs font-mono-code text-neutral-400">
            Faites glisser la barre centrale pour comparer l'état initial et le résultat final
          </p>

          {/* Description */}
          <div className="space-y-4">
            <div>
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                Diagnostic & Objectifs
              </h4>
              <p className="font-sans text-sm text-[#4c4546] leading-relaxed">
                {clinicalCase.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-[#f5f3f3] rounded-xl border border-black/5">
                <span className="font-mono-code uppercase tracking-wider text-neutral-500 block text-[10px] mb-1">
                  Technique employée
                </span>
                <span className="font-medium text-black">
                  {clinicalCase.technique}
                </span>
              </div>
              <div className="p-3.5 bg-[#f5f3f3] rounded-xl border border-black/5">
                <span className="font-mono-code uppercase tracking-wider text-neutral-500 block text-[10px] mb-1">
                  Durée globale du traitement
                </span>
                <span className="font-medium text-black">
                  {clinicalCase.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookTreatment(clinicalCase.title);
              }}
              className="flex-1 bg-black text-white font-sans text-xs font-semibold py-3.5 px-6 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Demander une consultation pour ce soin</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              onClick={onClose}
              className="sm:w-auto px-6 py-3.5 border border-black/20 text-black text-xs font-semibold rounded-full hover:bg-neutral-100"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
