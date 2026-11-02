import React from 'react';
import { BRAND_ASSETS, assetUrl } from '../data/siteData';

export type BrandLogoVariant = 'horizontal' | 'stacked' | 'seal' | 'mark' | 'round';
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
 * Renders the authentic client vector and round transparent brand identity:
 * - 'horizontal': Perfect for Navbar & sticky headers. Features the official round transparent seal + Trajan/Didot branding.
 * - 'stacked': Master vertical lockup from official assets.
 * - 'seal' / 'round': The authentic RCI round transparent medallion logo.
 * - 'mark': Compact round emblem mark.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  showTagline = true,
}) => {
  const isDark = theme === 'dark';

  // 1. HORIZONTAL LOCKUP (Header / Navbar / Footer Default)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
        {/* Official Main Round Transparent Logo Medallion */}
        <div
          className={`relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 ${
            isDark
              ? 'filter drop-shadow-[0_2px_10px_rgba(241,169,30,0.4)] rounded-full'
              : 'drop-shadow-md'
          }`}
        >
          <img
            src={assetUrl(BRAND_ASSETS.roundLogoTransparent)}
            alt="Royal Caterers India Official Logo"
            className="w-full h-full object-contain"
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
    return (
      <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
        <img
          src={assetUrl(BRAND_ASSETS.roundLogoTransparent)}
          alt="Royal Caterers India Master Round Logo"
          className="w-auto h-full max-h-36 object-contain filter drop-shadow-sm"
          loading="eager"
        />
      </div>
    );
  }

  // 3. CIRCULAR SEAL MEDALLION / ROUND LOGO
  if (variant === 'seal' || variant === 'round') {
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        <img
          src={assetUrl(BRAND_ASSETS.roundLogoTransparent)}
          alt="Royal Caterers India Official Heritage Seal"
          className="w-full h-full object-contain filter drop-shadow-md"
          loading="eager"
        />
      </div>
    );
  }

  // 4. STANDALONE ROUND EMBLEM MARK
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <img
        src={assetUrl(BRAND_ASSETS.roundLogoTransparent)}
        alt="Royal Caterers India Official Emblem"
        className="w-full h-full object-contain filter drop-shadow-md"
        loading="eager"
      />
    </div>
  );
};
