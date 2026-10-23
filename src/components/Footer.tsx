import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, BUSINESS_INFO } from '../data/siteData';

/**
 * Compact Global Footer with Bold Black typography, cursive tagline accent,
 * and Royal Blue / Antique Gold framing.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EFE5CE] text-black border-t-2 border-[#173B70]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#C5A15A]">
          {/* Brand Wordmark & Cursive Subheading */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link to="/" className="inline-flex flex-col items-start">
              <span className="font-serif text-[22px] font-bold tracking-[0.22em] text-black uppercase leading-none">
                ROYAL CATERERS
              </span>
              <span className="w-10 h-[2px] bg-[#173B70] my-2" />
              <span className="font-sans text-[10.5px] font-bold tracking-[0.28em] text-black uppercase leading-none">
                INDIA &middot; INDORE
              </span>
            </Link>
            <p className="font-cursive text-[28px] text-[#173B70] leading-snug">
              A Royal Welcome for Every Celebration
            </p>
            <p className="text-[14.5px] text-black font-medium max-w-sm leading-relaxed">
              Bespoke wedding, corporate, and private event catering crafted with thoughtful menus
              and gracious Indian hospitality in Indore.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-black">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 pt-1">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    data-path={item.dataPath}
                    className="text-[14.5px] text-black font-bold hover:text-[#173B70] underline-offset-4 hover:underline transition-colors"
                  >
                    {item.footerLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-black">
              Indore Office &amp; Enquiries
            </h3>
            <div className="flex flex-col gap-2.5 pt-1 text-[14.5px] text-black font-medium">
              <p className="font-bold text-black">{BUSINESS_INFO.fullAddress}</p>
              <p className="text-black font-semibold">{BUSINESS_INFO.tastingHours}</p>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-[16px] text-black font-bold hover:text-[#173B70] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                <p className="text-[12px] text-black/80 font-medium mt-0.5">
                  {BUSINESS_INFO.phoneVerificationNote}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact-booking"
                  className="inline-flex items-center gap-2 px-5 py-2.5 btn-royal-gold text-[12px] font-bold uppercase tracking-[0.16em] rounded-sm"
                >
                  <span>Request a Quote</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Domain Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] font-bold text-black">
          <p>&copy; {new Date().getFullYear()} Royal Caterers India. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[11.5px] font-bold text-black">
            {BUSINESS_INFO.domain} &middot; {BUSINESS_INFO.shortLocality}
          </p>
        </div>
      </div>
    </footer>
  );
};
