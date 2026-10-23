import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/siteData';

/**
 * Minimal Global Header for Royal Caterers India.
 * Features Bold Black typography, the compact ROYAL CATERERS / INDIA · INDORE wordmark,
 * centered navigation, and a high-contrast Antique Gold "Request a Quote" button with Bold Black text.
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
    <header className="fixed top-0 left-0 right-0 z-40 h-20 bg-[#FAF8F2] border-b border-[#DCD3C2]">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-[60] btn-royal-gold px-4 py-2 rounded-sm text-eyebrow uppercase tracking-widest"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto h-full px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Compact Typographic Wordmark in Bold Black */}
        <Link
          to="/"
          data-path="home"
          aria-label="Royal Caterers India — Home"
          className="group inline-flex flex-col items-start justify-center py-1"
        >
          <span className="font-serif text-[18px] sm:text-[20px] font-bold tracking-[0.22em] text-black uppercase leading-none">
            ROYAL CATERERS
          </span>
          <span className="w-8 h-[1.5px] bg-[#C5A15A] my-1.5 transition-all duration-300 group-hover:w-full" />
          <span className="font-sans text-[10px] font-bold tracking-[0.28em] text-black uppercase leading-none">
            INDIA &middot; INDORE
          </span>
        </Link>

        {/* Centre: Minimal Desktop Navigation in Bold Black */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_LINKS.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                data-path={item.dataPath}
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 text-[14px] tracking-wide transition-colors duration-200 ${
                  active ? 'text-black font-bold' : 'text-black/80 font-semibold hover:text-black'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A15A] transition-transform duration-300 origin-left ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Gold-Accented Request a Quote Button (Bold Black Text) & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact-booking"
            data-path="contact-booking"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 btn-royal-gold text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm"
          >
            Request a Quote
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center text-black border border-[#173B70] bg-white rounded-sm hover:bg-[#EFE5CE] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px] text-black" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Accessible Slide-Out Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 top-20 bg-black/40 backdrop-blur-[1px] z-30 animate-fadeIn"
          />
          <nav
            id="mobile-navigation-drawer"
            aria-label="Mobile Navigation"
            className="lg:hidden fixed top-20 right-0 bottom-0 w-full max-w-xs bg-[#FAF8F2] border-l border-[#DCD3C2] shadow-modal z-40 px-7 py-8 flex flex-col justify-between overflow-y-auto animate-fadeIn"
          >
            <div className="flex flex-col divide-y divide-[#DCD3C2]">
              {NAV_LINKS.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    data-path={item.dataPath}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-4 flex items-center justify-between text-[15px] font-bold text-black tracking-wide"
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C5A15A]" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-8 border-t border-[#DCD3C2] flex flex-col gap-4">
              <Link
                to="/contact-booking"
                data-path="contact-booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-5 btn-royal-gold text-center text-[12px] font-bold uppercase tracking-[0.15em] rounded-sm"
              >
                Request a Quote
              </Link>
              <p className="text-[11px] font-bold text-black text-center tracking-wider uppercase">
                Pardesipura &middot; Indore
              </p>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};
