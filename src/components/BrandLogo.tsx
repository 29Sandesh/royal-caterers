import React from 'react';
import { BRAND_ASSETS, assetUrl } from '../data/siteData';

export type BrandLogoVariant = 'horizontal' | 'stacked' | 'seal' | 'mark';
export type BrandLogoTheme = 'light' | 'dark';

export interface BrandLogoProps {
  variant?: BrandLogoVariant;
  theme?: BrandLogoTheme;
  className?: string;
  sealVariant?: 'concept1' | 'concept2' | 'concept3';
  showTagline?: boolean;
}

/**
 * Official Brand Logo Component for Royal Caterers India (RCI).
 * Renders the authentic client vector brand identity derived from official agency assets:
 * - 'horizontal': Perfect for Navbar & sticky headers. Features the crisp cloche crest & Trajan/Didot branding.
 * - 'stacked': Master vertical lockup (Dome + 1960 + ROYAL CATERERS INDIA) from RCI MAIN LOGO.
 * - 'seal': Royal circular heritage medallion from the RCI Concepts brand book.
 * - 'mark': Compact circular crest badge.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  sealVariant = 'concept3',
  showTagline = true,
}) => {
  const isDark = theme === 'dark';

  // 1. HORIZONTAL LOCKUP (Header / Navbar Default)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
        {/* Royal Crest Medallion with Cloche Logomark */}
        <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#4A2366] via-[#3B1B54] to-[#2D133E] border-2 border-[#F1A91E] flex items-center justify-center p-2 shadow-md flex-shrink-0 group-hover:scale-105 group-hover:border-[#FCD34D] transition-all duration-300">
          {/* Subtle Inner Ring */}
          <div className="absolute inset-0.5 rounded-full border border-[#F1A91E]/30 pointer-events-none" />
          <img
            src={assetUrl(BRAND_ASSETS.logomarkWhiteTight)}
            alt="Royal Caterers Cloche Emblem"
            className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
            loading="eager"
          />
        </div>

        {/* Official Typography Hierarchy */}
        <div className="flex flex-col items-start justify-center">
          <span
            className={`font-trajan text-[16px] sm:text-[19px] lg:text-[20px] font-bold tracking-[0.16em] sm:tracking-[0.18em] uppercase leading-none transition-colors ${
              isDark ? 'text-[#FFFFFF]' : 'text-[#4A2366]'
            }`}
          >
            ROYAL CATERERS
          </span>

          {showTagline && (
            <div className="flex items-center gap-2 mt-1.5 leading-none">
              <span className="w-4 sm:w-5 h-[1.5px] bg-[#F1A91E]" />
              <span
                className={`font-didot italic text-[11px] sm:text-[12.5px] font-semibold tracking-wider ${
                  isDark ? 'text-[#D8D0B9]' : 'text-[#692C90]'
                }`}
              >
                India
              </span>
              <span className="w-1 h-1 rounded-full bg-[#F1A91E]" />
              <span
                className={`font-didot italic text-[11px] sm:text-[12px] font-medium tracking-wide ${
                  isDark ? 'text-[#F1A91E]' : 'text-[#692C90]/90'
                }`}
              >
                Since 1960
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 2. STACKED / MASTER LOCKUP (Dome + 1960 + ROYAL + CATERERS + INDIA)
  if (variant === 'stacked') {
    const logoSrc = isDark
      ? assetUrl(BRAND_ASSETS.mainLogoWhiteTight)
      : assetUrl(BRAND_ASSETS.mainLogoTight);

    return (
      <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
        <img
          src={logoSrc}
          alt="Royal Caterers India Master Logo"
          className="w-auto h-full max-h-36 object-contain filter drop-shadow-sm"
          loading="eager"
        />
      </div>
    );
  }

  // 3. CIRCULAR SEAL MEDALLION (from RCI Concepts Guide)
  if (variant === 'seal') {
    let sealSrc = isDark
      ? assetUrl(BRAND_ASSETS.sealConcept3Gold)
      : assetUrl(BRAND_ASSETS.sealConcept3Purple);

    if (sealVariant === 'concept1') {
      sealSrc = isDark
        ? assetUrl(BRAND_ASSETS.sealConcept1Gold)
        : assetUrl(BRAND_ASSETS.sealConcept1Purple);
    } else if (sealVariant === 'concept2') {
      sealSrc = isDark
        ? assetUrl(BRAND_ASSETS.sealConcept2Gold)
        : assetUrl(BRAND_ASSETS.sealConcept2Purple);
    }

    return (
      <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        <img
          src={sealSrc}
          alt="Royal Caterers India Heritage Seal"
          className="w-full h-full object-contain filter drop-shadow-md"
          loading="eager"
        />
      </div>
    );
  }

  // 4. STANDALONE CLOCHE CREST MARK
  return (
    <div
      className={`relative rounded-full bg-gradient-to-br from-[#4A2366] via-[#3B1B54] to-[#2D133E] border-2 border-[#F1A91E] flex items-center justify-center p-2 shadow-md ${className}`}
    >
      <div className="absolute inset-0.5 rounded-full border border-[#F1A91E]/30 pointer-events-none" />
      <img
        src={assetUrl(BRAND_ASSETS.logomarkWhiteTight)}
        alt="Royal Caterers Cloche Emblem"
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  );
};
