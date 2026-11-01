import React from 'react';

import { Link } from 'react-router-dom';

import { NAV_LINKS, BUSINESS_INFO, BRAND_ASSETS, assetUrl } from '../data/siteData';

import { BrandLogo } from './BrandLogo';

/**

 * Global Luxury Footer for Royal Caterers India (RCI).

 * Styled in Imperial Deep Plum (#4A2366), Champagne Gold (#D8D0B9), and Saffron Amber (#F1A91E).

 * Includes verified Google Reviews / GMB link, WedMeGood, WeddingWire, JustDial, Instagram, Facebook, and YouTube.

 */

export const Footer: React.FC = () => {

  return (

    <footer className="bg-[#2D133E] text-[#F6F1E6] border-t-4 border-[#F1A91E] relative overflow-hidden">

      {/* Official Royal Caterers Brocade Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url(${assetUrl(BRAND_ASSETS.patternTileGold)})`,
          backgroundSize: '95px 95px',
        }}
      />

      {/* Official Royal Rangoli Mandala Watermark */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-[0.05] pointer-events-none select-none">
        <img
          src={assetUrl(BRAND_ASSETS.rangoliGold)}
          alt="Royal Rangoli Watermark"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#F1A91E]/30">

          {/* Brand Identity & Legacy Column */}

          <div className="md:col-span-5 flex flex-col items-start gap-4">

            <Link to="/" aria-label="Royal Caterers India — Home" className="inline-flex items-center group">

              <BrandLogo variant="horizontal" theme="dark" />

            </Link>

            <p className="font-cursive text-[28px] text-[#F1A91E] leading-snug">

              Where Tradition Meets Taste

            </p>

            <p className="text-[14px] text-[#F6F1E6]/85 font-normal max-w-sm leading-relaxed">

              Serving celebrations since 1960. Bespoke pure vegetarian wedding banquets, corporate

              galas, and authentic Indori hospitality crafted across Indore and Central India.

            </p>

            {/* Sub-tagline badge & Official PDF links */}
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A2366] border border-[#F1A91E]/40 rounded-full text-[11px] font-didot italic text-[#D8D0B9]">
                <span>&ldquo;{BUSINESS_INFO.emblemTagline}&rdquo;</span>
              </div>
              <a
                href={assetUrl(BRAND_ASSETS.menuPdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F1A91E]/15 border border-[#F1A91E]/50 rounded-full text-[11px] font-trajan font-bold text-[#F1A91E] hover:bg-[#F1A91E] hover:text-[#2D133E] transition-colors"
              >
                <span>Official Menu PDF</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </div>

          </div>

          {/* Quick Navigation Links */}

          <div className="md:col-span-3 flex flex-col gap-3">

            <h3 className="font-trajan text-[13px] font-bold uppercase tracking-[0.18em] text-[#F1A91E]">

              Navigation

            </h3>

            <ul className="flex flex-col gap-2.5 pt-1">

              {NAV_LINKS.map((item) => (

                <li key={item.path}>

                  <Link

                    to={item.path}

                    data-path={item.dataPath}

                    className="text-[14px] text-[#F6F1E6]/85 font-medium hover:text-[#F1A91E] underline-offset-4 hover:underline transition-colors"

                  >

                    {item.footerLabel}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact, Indore Office & Certified Profiles */}

          <div className="md:col-span-4 flex flex-col gap-3">

            <h3 className="font-trajan text-[13px] font-bold uppercase tracking-[0.18em] text-[#F1A91E]">

              Indore Office &amp; Booking

            </h3>

            <div className="flex flex-col gap-2.5 pt-1 text-[14px] text-[#F6F1E6]/90 font-normal">

              <p className="font-semibold text-white flex items-start gap-2">

                <span className="material-symbols-outlined text-[18px] text-[#F1A91E] shrink-0 mt-0.5">

                  location_on

                </span>

                <span>{BUSINESS_INFO.fullAddress}</span>

              </p>

              <p className="text-[#D8D0B9] text-[13px] flex items-center gap-2">

                <span className="material-symbols-outlined text-[16px] text-[#F1A91E]">schedule</span>

                <span>{BUSINESS_INFO.tastingHours}</span>

              </p>

              <div className="pt-2 flex flex-col gap-1.5">

                <a

                  href={BUSINESS_INFO.phoneHref}

                  className="inline-flex items-center gap-2 text-[16px] text-[#FFFFFF] font-bold hover:text-[#F1A91E] transition-colors"

                >

                  <span className="material-symbols-outlined text-[18px] text-[#F1A91E]">call</span>

                  <span>{BUSINESS_INFO.phoneDisplay}</span>

                </a>

                <a

                  href={BUSINESS_INFO.whatsappHref}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#4DAF4E] hover:underline"

                >

                  <span className="w-2 h-2 rounded-full bg-[#4DAF4E]" />

                  <span>Direct WhatsApp Enquiry (+91 98272 86535)</span>

                </a>

              </div>

              {/* Verified Badges & Directory Links */}

              <div className="pt-3 flex flex-wrap items-center gap-2">

                <a

                  href={BUSINESS_INFO.mapsHref}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="px-2.5 py-1 bg-white/10 hover:bg-[#F1A91E] hover:text-[#2D133E] text-[11px] font-bold uppercase tracking-wider rounded-sm border border-white/15 transition-colors"

                >

                  Google Maps &middot; 4.8★

                </a>

                <a

                  href={BUSINESS_INFO.socials.wedMeGood}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="px-2.5 py-1 bg-white/10 hover:bg-[#F1A91E] hover:text-[#2D133E] text-[11px] font-bold uppercase tracking-wider rounded-sm border border-white/15 transition-colors"

                >

                  WedMeGood

                </a>

                <a

                  href={BUSINESS_INFO.socials.weddingWire}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="px-2.5 py-1 bg-white/10 hover:bg-[#F1A91E] hover:text-[#2D133E] text-[11px] font-bold uppercase tracking-wider rounded-sm border border-white/15 transition-colors"

                >

                  WeddingWire

                </a>

                <a

                  href={BUSINESS_INFO.socials.justDial}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="px-2.5 py-1 bg-white/10 hover:bg-[#F1A91E] hover:text-[#2D133E] text-[11px] font-bold uppercase tracking-wider rounded-sm border border-white/15 transition-colors"

                >

                  JustDial

                </a>

              </div>

              {/* Social Channels Row */}

              <div className="pt-3 flex items-center gap-3">

                <a

                  href={BUSINESS_INFO.socials.instagram}

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="Royal Caterers Instagram"

                  className="w-8 h-8 rounded-full bg-[#4A2366] border border-[#F1A91E]/40 flex items-center justify-center hover:bg-[#F1A91E] hover:text-[#2D133E] text-white transition-colors"

                >

                  <span className="text-[13px] font-bold">IG</span>

                </a>

                <a

                  href={BUSINESS_INFO.socials.facebook}

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="Royal Caterers Facebook"

                  className="w-8 h-8 rounded-full bg-[#4A2366] border border-[#F1A91E]/40 flex items-center justify-center hover:bg-[#F1A91E] hover:text-[#2D133E] text-white transition-colors"

                >

                  <span className="text-[13px] font-bold">FB</span>

                </a>

                <a

                  href={BUSINESS_INFO.socials.youtube}

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="Royal Caterers YouTube"

                  className="w-8 h-8 rounded-full bg-[#4A2366] border border-[#F1A91E]/40 flex items-center justify-center hover:bg-[#F1A91E] hover:text-[#2D133E] text-white transition-colors"

                >

                  <span className="text-[13px] font-bold">YT</span>

                </a>

                <a

                  href={BUSINESS_INFO.socials.linkedIn}

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="Royal Caterers LinkedIn"

                  className="w-8 h-8 rounded-full bg-[#4A2366] border border-[#F1A91E]/40 flex items-center justify-center hover:bg-[#F1A91E] hover:text-[#2D133E] text-white transition-colors"

                >

                  <span className="text-[13px] font-bold">IN</span>

                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Legal & Legacy Note */}

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] font-medium text-[#D8D0B9]">

          <p>

            &copy; 1960 &ndash; {new Date().getFullYear()} Royal Caterers India (RCI). All rights

            reserved.

          </p>

          <p className="tracking-widest uppercase text-[11px] font-trajan text-[#F1A91E]">

            {BUSINESS_INFO.domain} &middot; {BUSINESS_INFO.shortLocality}

          </p>

        </div>

      </div>

    </footer>

  );

};

