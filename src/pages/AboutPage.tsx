import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, BRAND_ASSETS, assetUrl } from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Heirloom Culinary Craft',
    description:
      'Since 1960, our master chefs have preserved time-tested Malwi traditions—using pure desi ghee, stone-ground whole spices, and unhurried preparation.',
  },
  {
    number: '02',
    title: 'Royal Regal Presentation',
    description:
      'From ornate hand-carved catering carriages to traditional silver-style Pangat thali service, every banquet layout is an exhibition of grandeur.',
  },
  {
    number: '03',
    title: 'Disciplined Hospitality',
    description:
      'Uniformed catering stewards, dedicated captains, and seamless kitchen logistics ensure every guest is received with gracious warmth and punctuality.',
  },
];

/**
 * About Us — Royal Caterers India (RCI).
 * Chronicles over 6 decades of heritage since 1960 in Pardesipura, Indore.
 */
export const AboutPage: React.FC = () => {
  const [selectedBrandSheet, setSelectedBrandSheet] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  return (
    <div className="flex flex-col w-full bg-[#F6F1E6] text-[#2B2B2B]">
      {/* 1. Page Header & Large Event Photography */}
      <section className="w-full bg-[#F6F1E6] pt-12 pb-16 lg:py-24 border-b border-[#D8D0B9] relative overflow-hidden">
        {/* Seamless Textile Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none bg-repeat"
          style={{
            backgroundImage: `url(${assetUrl(BRAND_ASSETS.patternTilePurple)})`,
            backgroundSize: '95px 95px',
          }}
        />

        {/* Rotating Rangoli Mandala Watermark */}
        <div className="absolute -top-32 -right-32 sm:-top-44 sm:-right-44 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] opacity-[0.05] pointer-events-none select-none animate-spin-slow">
          <img
            src={assetUrl(BRAND_ASSETS.rangoliPurple)}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#692C90]" aria-hidden="true" />
              <span className="font-trajan text-[11.5px] font-bold uppercase tracking-[0.22em] text-[#692C90]">
                FOUNDED IN 1960 &middot; PARDESIPURA, INDORE
              </span>
            </div>
            <p className="font-cursive text-[34px] text-[#692C90] mb-1">
              Where Tradition Meets Taste
            </p>
            <h1 className="font-didot text-[42px] sm:text-[54px] lg:text-[64px] text-[#4A2366] font-bold leading-[1.1] mb-6">
              Six Decades of Royal Banqueting Heritage.
            </h1>
            <p className="font-sans text-[16px] text-[#2B2B2B]/90 font-normal leading-relaxed">
              Established in <strong className="font-bold text-[#4A2366]">1960</strong> in Indore, Royal
              Caterers India (RCI) has defined the standard of luxury pure vegetarian celebrations across
              Madhya Pradesh. Guided by our founding philosophy&mdash;<em className="font-didot italic font-semibold text-[#692C90]">&ldquo;we serve taste of life&rdquo;</em>&mdash;we
              combine heirloom culinary secrets with flawless modern event execution.
            </p>
          </div>

          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-md border-2 border-[#D8D0B9] bg-white shadow-royal">
            <RoyalImage
              priority
              src="/media/photos/ornate_food_stall_night_lighting.jpg"
              alt="Royal Caterers India grand banquet setup with illuminated carved food stalls."
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4A2366]/90 border-2 border-[#F1A91E] p-2 flex items-center justify-center shadow-lg">
              <img
                src={assetUrl(BRAND_ASSETS.emblemClocheGold)}
                alt="RCI 1960"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Three Guiding Principles */}
      <section className="w-full bg-white py-20 lg:py-28 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="font-cursive text-[32px] text-[#692C90] mb-1">
              Our Commitments to Excellence
            </p>
            <h2 className="font-didot text-[32px] lg:text-[42px] text-[#4A2366] font-bold">
              Guided by Three Core Pillars.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {PRINCIPLES.map((item) => (
              <div
                key={item.number}
                className="flex flex-col pt-6 border-t-2 border-[#692C90]"
              >
                <span className="font-trajan text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#692C90] mb-3">
                  Pillar {item.number}
                </span>
                <h3 className="font-didot text-[25px] text-[#4A2366] font-bold mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] text-[#2B2B2B]/85 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Culinary Vision & Alternating Layout */}
      <section className="w-full bg-[#F6F1E6] py-20 lg:py-28 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-20 lg:gap-28">
          {/* Row 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md border border-[#D8D0B9] bg-white shadow-sm">
                <RoyalImage
                  src="/media/ai-enhanced/royal_silver_pangat_thali_deluxe.jpg"
                  alt="Authentic vegetarian Indian silver thali feast and regional Malwi Dal Bafla."
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-trajan text-[11px] font-bold uppercase tracking-wider text-[#692C90] mb-1">
                PURE VEGETARIAN HERITAGE
              </span>
              <p className="font-cursive text-[32px] text-[#692C90] mb-1">
                Culinary Vision &amp; Authenticity
              </p>
              <h2 className="font-didot text-[32px] lg:text-[40px] text-[#4A2366] font-bold mb-5 leading-tight">
                Honouring Regional Malwa Flavours &amp; Pure Desi Ghee.
              </h2>
              <p className="font-sans text-[15.5px] text-[#2B2B2B]/85 leading-relaxed mb-6">
                From authentic Dal Bafla and rich Shahi Paneer to fragrant Basmati Dum Biryani and
                spongy Kolkata Rasgullas, our kitchens adhere to strict purity, authentic seasonal
                ingredients, and sacred culinary disciplines (including custom Jain menus with zero root vegetables).
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-[#4A2366] hover:text-[#692C90] transition-colors border-b-2 border-[#692C90] pb-1"
              >
                <span>Explore Curated Menus</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
              <span className="font-trajan text-[11px] font-bold uppercase tracking-wider text-[#692C90] mb-1">
                CENTRAL INDIA &middot; PAN-INDIA DESTINATIONS
              </span>
              <p className="font-cursive text-[32px] text-[#692C90] mb-1">
                Coordination from Pardesipura
              </p>
              <h2 className="font-didot text-[32px] lg:text-[40px] text-[#4A2366] font-bold mb-5 leading-tight">
                Seamless Service for 100 to 10,000+ Guests.
              </h2>
              <p className="font-sans text-[15.5px] text-[#2B2B2B]/85 leading-relaxed mb-6">
                Whether orchestrating a multi-day palace wedding in Indore, a leadership corporate summit,
                or a family celebration, our operations team manages complete live stall fabrication,
                chafing dish alignment, and table hospitality with flawless coordination.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/catering-services"
                  className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-[#4A2366] hover:text-[#692C90] transition-colors border-b-2 border-[#692C90] pb-1"
                >
                  <span>View Catering Services</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#4DAF4E] text-[#2D6A2E] text-[12px] font-bold uppercase tracking-wider rounded-sm hover:bg-[#FAF7F0] transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#4DAF4E]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md border border-[#D8D0B9] bg-white shadow-sm">
                <RoyalImage
                  src="/media/photos/wedding_dining_reception_lawn.jpg"
                  alt="Evening outdoor banquet lawn dining arrangement with ambient floral decor."
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3B. BRAND HERITAGE & ROYAL IDENTITY SYSTEM */}
      <section className="w-full bg-[#FAF7F0] py-20 lg:py-28 border-b border-[#D8D0B9] relative overflow-hidden">
        {/* Subtle Brocade Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
          style={{
            backgroundImage: `url(${assetUrl(BRAND_ASSETS.patternTilePurple)})`,
            backgroundSize: '95px 95px',
          }}
        />

        {/* Rotating Rangoli Watermark */}
        <div className="absolute -bottom-28 -left-28 w-[450px] h-[450px] opacity-[0.045] pointer-events-none select-none">
          <img
            src={assetUrl(BRAND_ASSETS.rangoliPurple)}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.22em] text-[#692C90] block mb-1">
                ROYAL CATERERS INDIA &middot; BRAND SPECIFICATION MANUAL
              </span>
              <p className="font-cursive text-[32px] text-[#692C90] mb-0.5">
                Authentic Agency Brand Architecture
              </p>
              <h2 className="font-didot text-[30px] sm:text-[42px] text-[#4A2366] font-bold leading-tight">
                Crafted for Heritage, Regality &amp; Longevity.
              </h2>
              <p className="font-sans text-[15px] text-[#2B2B2B]/80 mt-2.5 leading-relaxed">
                Directly from our design studio archives. Every shade of imperial purple, sunlight gold,
                Didot and Trajan typography, sacred Rangoli petal geometry, and damask brocade pattern
                was crafted to represent six decades of culinary royalty.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={assetUrl(BRAND_ASSETS.brandGuidelinesPdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 btn-royal-outline text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm shadow-sm"
              >
                <span>Download Brand Manual PDF</span>
                <span aria-hidden="true">&darr;</span>
              </a>
              <a
                href={assetUrl(BRAND_ASSETS.menuPdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 btn-royal-gold text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm shadow-md"
              >
                <span>Download Menu PDF</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </div>
          </div>

          {/* 4 Brand Guideline Sheets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sheet 1: Royal Color System */}
            <div
              onClick={() =>
                setSelectedBrandSheet({
                  src: assetUrl(BRAND_ASSETS.brandGuidelinePage1),
                  title: 'Primary & Secondary Color System',
                  subtitle: 'Imperial Purple (#4A2366), Royal Purple (#692C90), Sunlight Gold (#F1A91E), Rich Gold (#CB9936), Ivory (#F6F1E6)',
                })
              }
              className="bg-white rounded-md border-2 border-[#D8D0B9] p-4 shadow-royal hover:border-[#F1A91E] transition-all duration-300 group flex flex-col cursor-pointer hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded border border-[#D8D0B9]/60 bg-[#FAF7F0] mb-3">
                <img
                  src={assetUrl(BRAND_ASSETS.brandGuidelinePage1)}
                  alt="Brand Color Harmonies"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#4A2366]/0 group-hover:bg-[#4A2366]/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-[#4A2366] text-[#F1A91E] text-[11px] font-trajan font-bold uppercase tracking-wider rounded shadow-md">
                    Click to Zoom
                  </span>
                </div>
              </div>
              <span className="font-trajan text-[11px] font-bold uppercase text-[#692C90] tracking-wider">
                Identity Sheet 01
              </span>
              <h3 className="font-didot text-[17px] font-bold text-[#4A2366] mt-0.5">
                Imperial Color Harmonies
              </h3>
              <p className="text-[12px] text-[#2B2B2B]/70 mt-1">
                Imperial purple, rich gold leaf, and warm ivory banqueting palette.
              </p>
            </div>

            {/* Sheet 2: Typography Architecture */}
            <div
              onClick={() =>
                setSelectedBrandSheet({
                  src: assetUrl(BRAND_ASSETS.brandGuidelinePage2),
                  title: 'Brand Typography Architecture',
                  subtitle: 'Didot LT Pro (Editorial Heritage Display) & Trajan Pro 3 (Imperial Classical Roman Inscriptions)',
                })
              }
              className="bg-white rounded-md border-2 border-[#D8D0B9] p-4 shadow-royal hover:border-[#F1A91E] transition-all duration-300 group flex flex-col cursor-pointer hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded border border-[#D8D0B9]/60 bg-[#FAF7F0] mb-3">
                <img
                  src={assetUrl(BRAND_ASSETS.brandGuidelinePage2)}
                  alt="Brand Typography Architecture"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#4A2366]/0 group-hover:bg-[#4A2366]/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-[#4A2366] text-[#F1A91E] text-[11px] font-trajan font-bold uppercase tracking-wider rounded shadow-md">
                    Click to Zoom
                  </span>
                </div>
              </div>
              <span className="font-trajan text-[11px] font-bold uppercase text-[#692C90] tracking-wider">
                Identity Sheet 02
              </span>
              <h3 className="font-didot text-[17px] font-bold text-[#4A2366] mt-0.5">
                Didot &amp; Trajan Typography
              </h3>
              <p className="text-[12px] text-[#2B2B2B]/70 mt-1">
                Editorial luxury serif hierarchy and classical Roman uppercase inscriptions.
              </p>
            </div>

            {/* Sheet 3: Sacred Rangoli Geometry */}
            <div
              onClick={() =>
                setSelectedBrandSheet({
                  src: assetUrl(BRAND_ASSETS.brandGuidelinePage3),
                  title: 'Sacred Rangoli Mandala Geometry',
                  subtitle: 'Authentic 16-point Indian Royal Rangoli Mandala Motif crafted for royal invitations & backdrops',
                })
              }
              className="bg-white rounded-md border-2 border-[#F1A91E] p-4 shadow-royal hover:border-[#692C90] transition-all duration-300 group flex flex-col relative cursor-pointer hover:-translate-y-1"
            >
              <div className="absolute -top-3 right-4 px-3 py-0.5 bg-[#4A2366] text-[#F1A91E] font-trajan text-[10px] font-bold uppercase tracking-wider rounded-full shadow">
                Indian Motif
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded border border-[#D8D0B9]/60 bg-[#FAF7F0] mb-3">
                <img
                  src={assetUrl(BRAND_ASSETS.brandGuidelinePage3)}
                  alt="Sacred Rangoli Geometry"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#4A2366]/0 group-hover:bg-[#4A2366]/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-[#4A2366] text-[#F1A91E] text-[11px] font-trajan font-bold uppercase tracking-wider rounded shadow-md">
                    Click to Zoom
                  </span>
                </div>
              </div>
              <span className="font-trajan text-[11px] font-bold uppercase text-[#692C90] tracking-wider">
                Identity Sheet 03
              </span>
              <h3 className="font-didot text-[17px] font-bold text-[#4A2366] mt-0.5">
                Sacred Rangoli Mandala
              </h3>
              <p className="text-[12px] text-[#2B2B2B]/70 mt-1">
                Centuries-old Indian welcoming symmetry woven into event backdrops.
              </p>
            </div>

            {/* Sheet 4: Brocade Pattern System */}
            <div
              onClick={() =>
                setSelectedBrandSheet({
                  src: assetUrl(BRAND_ASSETS.brandGuidelinePage4),
                  title: 'Royal Damask Brocade Pattern System',
                  subtitle: 'Seamless repeating luxury textile pattern tile for wallpapers, linen, and event stationery',
                })
              }
              className="bg-white rounded-md border-2 border-[#D8D0B9] p-4 shadow-royal hover:border-[#F1A91E] transition-all duration-300 group flex flex-col cursor-pointer hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded border border-[#D8D0B9]/60 bg-[#FAF7F0] mb-3">
                <img
                  src={assetUrl(BRAND_ASSETS.brandGuidelinePage4)}
                  alt="Brocade Pattern System"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#4A2366]/0 group-hover:bg-[#4A2366]/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-[#4A2366] text-[#F1A91E] text-[11px] font-trajan font-bold uppercase tracking-wider rounded shadow-md">
                    Click to Zoom
                  </span>
                </div>
              </div>
              <span className="font-trajan text-[11px] font-bold uppercase text-[#692C90] tracking-wider">
                Identity Sheet 04
              </span>
              <h3 className="font-didot text-[17px] font-bold text-[#4A2366] mt-0.5">
                Seamless Brocade Pattern
              </h3>
              <p className="text-[12px] text-[#2B2B2B]/70 mt-1">
                Luxury damask tile repeating across our website, table runners, and menu covers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Booking CTA */}
      <section className="w-full bg-[#4A2366] text-white py-20 lg:py-24 relative overflow-hidden">
        {/* Repeating Brocade Pattern */}
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none bg-repeat"
          style={{
            backgroundImage: `url(${assetUrl(BRAND_ASSETS.patternTileGold)})`,
            backgroundSize: '95px 95px',
          }}
        />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
          <p className="font-cursive text-[36px] text-[#F1A91E] mb-1">
            Where Tradition Meets Taste
          </p>
          <h2 className="font-didot text-[34px] lg:text-[46px] text-white font-bold mb-4">
            Begin Planning Your Royal Celebration.
          </h2>
          <p className="font-sans text-[16px] text-[#F6F1E6]/85 font-normal max-w-lg mb-9">
            Connect with our catering team in Pardesipura, Indore to discuss your upcoming event,
            review tasting dates, and receive a customized proposal.
          </p>
          <Link
            to="/contact-booking"
            data-path="contact-booking"
            className="inline-flex items-center justify-center px-9 py-4 btn-royal-gold text-[12.5px] font-extrabold uppercase tracking-[0.18em] rounded-sm shadow-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>
      {/* Brand Sheet Lightbox Modal */}
      {selectedBrandSheet && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedBrandSheet(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#FAF7F0] rounded-lg border-2 border-[#F1A91E] p-4 sm:p-6 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#D8D0B9]">
              <div>
                <span className="font-trajan text-[10px] font-bold uppercase tracking-widest text-[#692C90] block">
                  ROYAL CATERERS INDIA &middot; BRAND MANUAL ARCHIVE
                </span>
                <h3 className="font-didot text-[20px] font-bold text-[#4A2366]">
                  {selectedBrandSheet.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBrandSheet(null)}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full bg-[#4A2366] text-white hover:bg-[#692C90] flex items-center justify-center text-lg font-bold transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="my-4 flex justify-center bg-white rounded border border-[#D8D0B9] p-3 overflow-hidden max-h-[62vh]">
              <img
                src={selectedBrandSheet.src}
                alt={selectedBrandSheet.title}
                className="max-h-[58vh] w-auto object-contain rounded shadow-sm"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-[12px] text-[#2B2B2B]/80">
              <p className="italic">{selectedBrandSheet.subtitle}</p>
              <a
                href={assetUrl(BRAND_ASSETS.brandGuidelinesPdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#4A2366] text-[#F1A91E] rounded font-trajan font-bold text-[11px] uppercase tracking-wider hover:bg-[#692C90] transition-colors"
              >
                <span>Download Brand Manual PDF</span>
                <span>&darr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};