import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, BUSINESS_INFO, BRAND_ASSETS, assetUrl } from '../data/siteData';

/**
 * Global Header for Royal Caterers India (RCI).
 * Features the official client vector logo & logomark, Didot/Trajan typography,
 * Imperial Purple & Saffron Gold theme, and quick quote/WhatsApp actions.
 */
export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-20 bg-[#F6F1E6]/95 backdrop-blur-md border-b border-[#D8D0B9] transition-all">
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[60] btn-royal-gold px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Official Vector Brand Logo */}
        <Link
          to="/"
          data-path="home"
          aria-label="Royal Caterers India — Home"
          className="group inline-flex items-center gap-3 py-1"
        >
          {/* Official Cloche Logomark */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4A2366] border border-[#F1A91E] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-200">
            <img
              src={assetUrl(BRAND_ASSETS.logomarkWhite)}
              alt="RCI Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col items-start justify-center">
            <span className="font-trajan text-[15px] sm:text-[18px] font-bold tracking-[0.18em] text-[#4A2366] uppercase leading-none">
              ROYAL CATERERS
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-5 h-[1.5px] bg-[#F1A91E]" />
              <span className="font-didot italic text-[11px] sm:text-[12px] font-semibold tracking-wider text-[#692C90] leading-none">
                India &middot; Since 1960
              </span>
            </div>
          </div>
        </Link>

        {/* Centre: Desktop Navigation with Imperial Purple Active Highlights */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 xl:gap-9">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                data-path={item.dataPath}
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 text-[14px] font-medium tracking-wide transition-colors duration-200 ${
                  active ? 'text-[#4A2366] font-bold' : 'text-[#2B2B2B]/85 hover:text-[#692C90]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#692C90] transition-transform duration-300 origin-left ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Direct WhatsApp Chat & Request a Quote Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={BUSINESS_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Enquiry"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-[12px] font-bold text-[#4A2366] hover:text-[#692C90] border border-[#D8D0B9] bg-white rounded-sm hover:border-[#692C90] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#4DAF4E] animate-pulse" />
            <span>WhatsApp</span>
          </a>

          <Link
            to="/contact-booking"
            data-path="contact-booking"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 btn-royal-gold text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm"
          >
            Book Event
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center text-[#4A2366] border border-[#692C90]/30 bg-white rounded-sm hover:bg-[#FAF8F2] transition-colors"
          >
            <span className="material-symbols-outlined text-[24px] text-[#4A2366]" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Slide-Out Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 top-20 bg-[#2B2B2B]/50 backdrop-blur-sm z-30 animate-fadeIn"
          />
          <nav
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            className="lg:hidden fixed top-20 right-0 bottom-0 w-full max-w-xs bg-[#F6F1E6] border-l border-[#D8D0B9] shadow-modal z-40 px-6 py-7 flex flex-col justify-between overflow-y-auto animate-fadeIn"
          >
            <div className="flex flex-col divide-y divide-[#D8D0B9]/70">
              {NAV_LINKS.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    data-path={item.dataPath}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3.5 flex items-center justify-between text-[15px] font-bold text-[#2B2B2B] tracking-wide"
                  >
                    <span className={active ? 'text-[#692C90]' : ''}>{item.label}</span>
                    {active && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#692C90]" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[#D8D0B9] flex flex-col gap-3">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-center text-[12px] font-bold uppercase tracking-wider text-[#4A2366] bg-white border border-[#4DAF4E] rounded-sm hover:bg-[#FAF8F2] flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#4DAF4E]" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/contact-booking"
                data-path="contact-booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-5 btn-royal-gold text-center text-[12px] font-bold uppercase tracking-[0.15em] rounded-sm"
              >
                Request a Quote
              </Link>

              <div className="text-center pt-1">
                <p className="text-[11px] font-trajan font-bold text-[#4A2366] tracking-wider uppercase">
                  Where Tradition Meets Taste
                </p>
                <p className="text-[10px] text-[#2B2B2B]/70 font-semibold mt-0.5">
                  Serving Celebrations Since 1960 &middot; Pardesipura, Indore
                </p>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};
