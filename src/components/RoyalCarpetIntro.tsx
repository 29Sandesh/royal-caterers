import React, { useState, useEffect } from 'react';

export type CarpetPhase = 'closed' | 'opening' | 'done';

interface RoyalCarpetIntroProps {
  onPhaseChange?: (phase: CarpetPhase) => void;
}

/**
 * Royal Curtain-Opening Welcome Animation ("A Royal Welcome").
 *
 * - Plays fresh on every browser page load / refresh (no sessionStorage suppression).
 * - Features full-screen Left & Right pleated Royal Blue & Champagne-Gold palace curtains.
 * - Displays the website name ("ROYAL CATERERS INDIA") in a central Warm Ivory & Gold plaque.
 * - Smoothly parts the Left curtain to the left and Right curtain to the right to reveal the website.
 */
export const RoyalCarpetIntro: React.FC<RoyalCarpetIntroProps> = ({ onPhaseChange }) => {
  const [phase, setPhase] = useState<CarpetPhase>(() => {
    if (typeof window === 'undefined') return 'done';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return 'done';
    return 'closed';
  });

  useEffect(() => {
    onPhaseChange?.(phase);
  }, [phase, onPhaseChange]);

  useEffect(() => {
    if (phase === 'done') return;

    // Hold closed briefly so the centered website name is clearly read, then part curtains left & right
    const tOpen = window.setTimeout(() => {
      setPhase('opening');
    }, 850);

    // Unmount completely after the curtains have swept off-screen left & right
    const tDone = window.setTimeout(() => {
      setPhase('done');
    }, 2450);

    return () => {
      window.clearTimeout(tOpen);
      window.clearTimeout(tDone);
    };
  }, []);

  if (phase === 'done') {
    return null;
  }

  const isOpening = phase === 'opening';

  // Realistic vertical velvet curtain pleat shading in Royal Blue (#173B70 / #0E2547) & Champagne Gold
  const curtainPleatStyle: React.CSSProperties = {
    backgroundImage: `
      repeating-linear-gradient(
        90deg,
        #0E2547 0px,
        #173B70 28px,
        #214D8F 48px,
        #13315E 72px,
        #0B1E3B 96px
      )
    `,
  };

  return (
    <div
      id="royal-carpet-intro"
      aria-hidden="true"
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden flex items-stretch justify-between"
    >
      {/* Top Royal Valance / Pelmet Trim */}
      <div
        className={`absolute top-0 left-0 right-0 h-5 z-30 border-b-2 border-[#D4AF37] transition-transform duration-700 ease-in-out ${
          isOpening ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{
          background: 'linear-gradient(90deg, #0E2547 0%, #173B70 50%, #0E2547 100%)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.45)',
        }}
      />

      {/* LEFT CURTAIN — Sweeps Left */}
      <div
        id="royal-curtain-left"
        style={{
          ...curtainPleatStyle,
          transitionDuration: '1450ms',
          transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.25, 1)',
        }}
        className={`relative w-1/2 h-full border-r-4 border-[#D4AF37] shadow-[18px_0_45px_rgba(0,0,0,0.55)] transition-transform ${
          isOpening ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Warm Champagne-Gold Inner Brocade Trim along the parting edge */}
        <div className="absolute inset-y-0 right-0 w-6 sm:w-10 bg-gradient-to-l from-[#EFE5CE]/90 via-[#D4AF37]/40 to-transparent border-l border-[#D4AF37]/60" />
        <div className="absolute inset-y-0 right-2.5 w-[1.5px] bg-[#173B70]" />
        {/* Subtle Horizontal Gold Cord Accent */}
        <div className="absolute inset-x-0 bottom-10 h-[2px] bg-[#D4AF37]/65" />
      </div>

      {/* RIGHT CURTAIN — Sweeps Right */}
      <div
        id="royal-curtain-right"
        style={{
          ...curtainPleatStyle,
          transitionDuration: '1450ms',
          transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.25, 1)',
        }}
        className={`relative w-1/2 h-full border-l-4 border-[#D4AF37] shadow-[-18px_0_45px_rgba(0,0,0,0.55)] transition-transform ${
          isOpening ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Warm Champagne-Gold Inner Brocade Trim along the parting edge */}
        <div className="absolute inset-y-0 left-0 w-6 sm:w-10 bg-gradient-to-r from-[#EFE5CE]/90 via-[#D4AF37]/40 to-transparent border-r border-[#D4AF37]/60" />
        <div className="absolute inset-y-0 left-2.5 w-[1.5px] bg-[#173B70]" />
        {/* Subtle Horizontal Gold Cord Accent */}
        <div className="absolute inset-x-0 bottom-10 h-[2px] bg-[#D4AF37]/65" />
      </div>

      {/* CENTER WEBSITE NAME PLAQUE — Positioned Right in the Middle */}
      <div
        className={`absolute inset-0 z-40 flex items-center justify-center px-5 transition-all duration-700 ease-out ${
          isOpening ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="bg-[#FAF8F2] border-2 border-[#D4AF37] outline outline-4 outline-[#173B70] px-8 sm:px-14 py-8 sm:py-10 rounded-sm shadow-[0_24px_60px_rgba(0,0,0,0.65)] text-center flex flex-col items-center max-w-lg w-full">
          <span className="font-cursive text-[32px] sm:text-[38px] text-[#173B70] leading-none mb-2">
            A Royal Welcome
          </span>

          <div className="w-16 h-[2px] bg-[#D4AF37] mb-4" />

          <span className="font-serif text-[28px] sm:text-[40px] font-bold tracking-[0.18em] text-black uppercase leading-tight">
            ROYAL CATERERS INDIA
          </span>

          <span className="font-sans text-[11px] sm:text-[12px] font-bold tracking-[0.3em] text-black uppercase mt-3">
            PARDESIPURA &middot; INDORE
          </span>
        </div>
      </div>
    </div>
  );
};
