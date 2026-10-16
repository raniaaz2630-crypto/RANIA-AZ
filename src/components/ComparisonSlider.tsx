import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
  className?: string;
  aspectRatioClass?: string;
  onOpenDetails?: () => void;
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  initialPosition = 50,
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
  onOpenDetails
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(clamped);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={`comp-slider relative w-full ${aspectRatioClass} rounded-xl overflow-hidden cursor-ew-resize group select-none shadow-sm border border-[#cfc4c5]/20 bg-[#efeded] ${className}`}
      style={{ '--position': `${position}%` } as React.CSSProperties}
      role="slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Comparaison avant et après"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPosition((prev) => Math.max(0, prev - 5));
        if (e.key === 'ArrowRight') setPosition((prev) => Math.min(100, prev + 5));
      }}
    >
      {/* Background Layer: "Après" (Result) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage}
          alt={afterLabel}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 bg-[#fbf9f9]/85 text-[#1b1c1c] font-mono text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded backdrop-blur-sm shadow-sm pointer-events-none z-0 border border-black/5">
          {afterLabel}
        </span>
      </div>

      {/* Clipped Top Layer: "Avant" (Initial) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute bottom-2 left-2 bg-[#fbf9f9]/85 text-[#1b1c1c] font-mono text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded backdrop-blur-sm shadow-sm pointer-events-none z-10 border border-black/5">
          {beforeLabel}
        </span>
      </div>

      {/* Divider Line & Circular Grab Handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)] z-20 pointer-events-none transition-transform"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white transition-transform group-hover:scale-110">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
      </div>

      {onOpenDetails && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails();
          }}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 hover:bg-black text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-md z-30 flex items-center gap-1"
          title="Voir la fiche clinique"
        >
          <span>Détails</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};
