import React, { useState, useEffect } from 'react';


import { BrandLogo } from './BrandLogo';



export type CarpetPhase = 'closed' | 'opening' | 'done';



interface RoyalCarpetIntroProps {

  onPhaseChange?: (phase: CarpetPhase) => void;

}



/**

 * Royal Velvet Palace Curtain Reveal Animation.

 * Features Imperial Purple (#4A2366 / #692C90) pleated palace curtains with

 * gold brocade borders and the official Royal Caterers India (RCI) heritage plaque.

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



    // Hold closed briefly so the centered brand emblem is enjoyed, then part curtains

    const tOpen = window.setTimeout(() => {

      setPhase('opening');

    }, 850);



    // Unmount completely after curtains sweep off-screen

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



  // Realistic vertical velvet curtain pleat shading in Imperial Purple (#4A2366 / #692C90)

  const curtainPleatStyle: React.CSSProperties = {

    backgroundImage: `

      repeating-linear-gradient(

        90deg,

        #2D133E 0px,

        #4A2366 28px,

        #692C90 48px,

        #3D1954 72px,

        #240D33 96px

      )

    `,

  };



  return (

    <div

      id="royal-carpet-intro"

      aria-hidden="true"

      className="fixed inset-0 z-50 pointer-events-none overflow-hidden flex items-stretch justify-between"

    >

      {/* Top Royal Pelmet Trim in Gold & Imperial Purple */}

      <div

        className={`absolute top-0 left-0 right-0 h-6 z-30 border-b-2 border-[#F1A91E] transition-transform duration-700 ease-in-out ${

          isOpening ? '-translate-y-full' : 'translate-y-0'

        }`}

        style={{

          background: 'linear-gradient(90deg, #2D133E 0%, #692C90 50%, #2D133E 100%)',

          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.55)',

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

        className={`relative w-1/2 h-full border-r-4 border-[#F1A91E] shadow-[18px_0_45px_rgba(0,0,0,0.65)] transition-transform ${

          isOpening ? '-translate-x-full' : 'translate-x-0'

        }`}

      >

        <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-[#F1A91E]/50 via-[#D8D0B9]/30 to-transparent border-l border-[#F1A91E]/60" />

        <div className="absolute inset-y-0 right-3 w-[1.5px] bg-[#F1A91E]" />

      </div>



      {/* RIGHT CURTAIN — Sweeps Right */}

      <div

        id="royal-curtain-right"

        style={{

          ...curtainPleatStyle,

          transitionDuration: '1450ms',

          transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.25, 1)',

        }}

        className={`relative w-1/2 h-full border-l-4 border-[#F1A91E] shadow-[-18px_0_45px_rgba(0,0,0,0.65)] transition-transform ${

          isOpening ? 'translate-x-full' : 'translate-x-0'

        }`}

      >

        <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-[#F1A91E]/50 via-[#D8D0B9]/30 to-transparent border-r border-[#F1A91E]/60" />

        <div className="absolute inset-y-0 left-3 w-[1.5px] bg-[#F1A91E]" />

      </div>



      {/* CENTER HERITAGE PLAQUE */}

      <div

        className={`absolute inset-0 z-40 flex items-center justify-center p-4 transition-all duration-700 ease-out ${

          isOpening ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'

        }`}

      >

        <div className="relative px-8 py-9 sm:px-14 sm:py-11 bg-[#F6F1E6] border-2 border-[#F1A91E] rounded-md shadow-2xl flex flex-col items-center text-center max-w-md w-full">

          {/* Inner Double Gold Border */}

          <div className="absolute inset-2 border border-[#692C90]/30 rounded-sm pointer-events-none" />



          {/* Official Royal Seal Medallion from RCI Concepts */}

          <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 flex items-center justify-center">

            <BrandLogo variant="seal" sealVariant="concept3" theme="light" className="w-full h-full" />

          </div>



          <span className="font-didot italic text-[13px] text-[#692C90] font-semibold tracking-widest uppercase mb-1">

            Where Tradition Meets Taste

          </span>



          <h2 className="font-trajan text-[22px] sm:text-[26px] font-extrabold text-[#4A2366] tracking-[0.2em] uppercase leading-tight">

            ROYAL CATERERS

          </h2>



          <div className="flex items-center gap-3 my-2 w-full justify-center">

            <span className="w-10 h-[1.5px] bg-[#F1A91E]" />

            <span className="font-didot italic text-[13px] text-[#2B2B2B] font-semibold tracking-wider">

              India &middot; Since 1960

            </span>

            <span className="w-10 h-[1.5px] bg-[#F1A91E]" />

          </div>



          <p className="font-cursive text-[24px] text-[#692C90] mt-1">

            we serve taste of life

          </p>



          <span className="mt-4 px-3 py-1 bg-[#4A2366] text-[#F1A91E] font-trajan text-[10px] font-bold tracking-[0.25em] uppercase rounded-full">

            Indore &middot; Pure Vegetarian

          </span>

        </div>

      </div>

    </div>

  );

};

