import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MENU_CATEGORIES, MenuCategoryData, BUSINESS_INFO, BRAND_ASSETS, assetUrl } from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';

const CATEGORY_TABS = [
  { key: 'all', label: 'All Courses' },
  { key: 'cat-drinks', label: 'Welcome Drinks & Coolers' },
  { key: 'cat-starters', label: 'Starters & Tandoor' },
  { key: 'cat-mains', label: 'Indian Main Course' },
  { key: 'cat-rice', label: 'Basmati & Biryani' },
  { key: 'cat-breads', label: 'Indian Breads' },
  { key: 'cat-live', label: 'Live Street Food Counters' },
  { key: 'cat-desserts', label: 'Mithai & Desserts' },
  { key: 'cat-special', label: 'Malwi & Special Feasts' },
];

// Official Client Signature Menu from client's brand PDF ("a Artboard 1 copy.pdf")
const CLIENT_SIGNATURE_MENU_ITEMS = [
  { number: '1', name: 'Veg Chowmein', category: 'Live Pan-Asian Wok Counter' },
  { number: '2', name: 'Butter Pav Bhaji', category: 'Sarafa Live Street Counter' },
  { number: '3', name: 'Shahi Paneer Gravy', category: 'Royal Main Course' },
  { number: '4', name: 'Dum Aloo Kashmiri', category: 'Clay Handi Preparation' },
  { number: '5', name: 'Dal Tadka (Desi Ghee)', category: 'Heritage Lentil Course' },
  { number: '6', name: 'Steamed Basmati Rice', category: 'Aged Long Grain Rice' },
  { number: '7', name: 'Indian Tandoori Breads', category: 'Naan, Paratha & Roti' },
  { number: '8', name: 'Spongy Kolkata Rasgulla', category: 'Mithai Pavilion' },
];

/**
 * Menu Page — Royal Caterers India (RCI).
 * Features the complete 8-course pure vegetarian repertoire,
 * client signature set menu, and WhatsApp / quote consultation.
 */
export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const visibleCategories: MenuCategoryData[] =
    selectedCategory === 'all'
      ? MENU_CATEGORIES
      : MENU_CATEGORIES.filter((cat) => cat.key === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && pdfModalOpen) {
        setPdfModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pdfModalOpen]);

  return (
    <div className="flex flex-col w-full bg-[#F6F1E6] text-[#2B2B2B]">
      {/* 1. Header */}
      <section className="w-full bg-[#F6F1E6] pt-10 pb-12 lg:py-20 border-b border-[#D8D0B9] relative overflow-hidden">
        {/* Seamless Textile Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none bg-repeat"
          style={{
            backgroundImage: `url(${assetUrl(BRAND_ASSETS.patternTilePurple)})`,
            backgroundSize: '95px 95px',
          }}
        />

        {/* Rotating Rangoli Mandala Watermark */}
        <div className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] opacity-[0.045] pointer-events-none select-none animate-spin-slow">
          <img
            src={assetUrl(BRAND_ASSETS.rangoliPurple)}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#692C90]" aria-hidden="true" />
                <span className="font-trajan text-[11.5px] font-bold uppercase tracking-[0.22em] text-[#692C90]">
                  100% PURE VEGETARIAN &middot; JAIN &middot; SATTVIQ
                </span>
              </div>
              <p className="font-cursive text-[34px] text-[#692C90] mb-1">
                Where Tradition Meets Taste
              </p>
              <h1 className="font-didot text-[40px] sm:text-[52px] lg:text-[62px] text-[#4A2366] font-bold leading-[1.1] mb-4">
                Regal Menus For Grand Celebrations.
              </h1>
              <p className="font-sans text-[15.5px] text-[#2B2B2B]/85 font-normal leading-relaxed">
                Explore our illustrative culinary repertoire across eight courses. Every celebration menu
                is custom-tailored with pure desi ghee, seasonal produce, and authentic Indore spices.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0 relative z-10">
              <a
                href={assetUrl(BRAND_ASSETS.menuPdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 btn-royal-outline text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm shadow-sm"
              >
                <span>Download Menu PDF (920 KB)</span>
                <span aria-hidden="true">&darr;</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-[#4DAF4E] text-[#2D6A2E] text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm hover:bg-[#FAF7F0] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-[#4DAF4E]" />
                <span>WhatsApp Menu Inquiry</span>
              </a>
              <Link
                to="/contact-booking"
                data-path="contact-booking"
                className="inline-flex items-center justify-center px-7 py-3.5 btn-royal-gold text-[12px] font-extrabold uppercase tracking-[0.16em] rounded-sm"
              >
                Request Custom Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OFFICIAL CLIENT SIGNATURE SET BANQUET (From client's PDF menu) */}
      <section className="w-full bg-[#FAF7F0] py-12 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-white border-2 border-[#F1A91E] rounded-md p-6 sm:p-8 lg:p-10 shadow-royal relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#D8D0B9]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center shrink-0 filter drop-shadow-md">
                  <img
                    src={assetUrl(BRAND_ASSETS.roundLogoTransparent)}
                    alt="Royal Caterers India Official Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.2em] text-[#692C90] block">
                    ROYAL CATERERS INDIA &middot; SINCE 1960
                  </span>
                  <h2 className="font-didot text-[26px] sm:text-[32px] text-[#4A2366] font-bold">
                    Classic 8-Course Royal Feast Menu
                  </h2>
                </div>
              </div>
              <span className="px-3.5 py-1.5 bg-[#4A2366] text-[#F1A91E] font-trajan text-[11px] font-bold uppercase tracking-widest rounded-full self-start lg:self-auto">
                Signature Popular Choice
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-7">
              {CLIENT_SIGNATURE_MENU_ITEMS.map((dish) => (
                <div
                  key={dish.number}
                  className="p-4 rounded-sm border border-[#D8D0B9]/80 bg-[#F6F1E6]/50 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-trajan text-[11px] font-bold text-[#692C90]">
                      0{dish.number}.
                    </span>
                    <h3 className="font-didot text-[18px] font-bold text-[#4A2366] mt-0.5">
                      {dish.name}
                    </h3>
                  </div>
                  <span className="font-sans text-[11px] text-[#2B2B2B]/70 font-semibold uppercase tracking-wider mt-2 block">
                    {dish.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Agency Printed Stationery Showcase */}
            <div className="mt-8 pt-8 border-t border-[#D8D0B9]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                  <span className="font-trajan text-[11px] font-bold uppercase text-[#692C90] tracking-wider block">
                    ROYAL BANQUET PRESENTATION &middot; EST. 1960
                  </span>
                  <h3 className="font-didot text-[20px] font-bold text-[#4A2366] mt-0.5">
                    Signature Printed Banquet Menu Presentation
                  </h3>
                </div>
                <a
                  href={assetUrl(BRAND_ASSETS.menuPdf)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A2366] text-[#F1A91E] rounded text-[11px] font-trajan font-bold uppercase tracking-wider hover:bg-[#692C90] transition-colors self-start sm:self-auto shadow-sm"
                >
                  <span>Open Full PDF Document</span>
                  <span>&darr;</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Front Cover Card */}
                <div
                  onClick={() =>
                    setSelectedCard({
                      src: assetUrl(BRAND_ASSETS.menuCardPage1),
                      title: 'Banquet Menu Front Cover',
                      subtitle: 'Regal Arch Motif with Gold Crown Seal & Imperial Typemark',
                    })
                  }
                  className="bg-[#FAF7F0] rounded border border-[#D8D0B9] p-3 hover:border-[#F1A91E] transition-all duration-300 cursor-pointer group flex flex-col items-center"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-white border border-[#D8D0B9]/60 mb-2">
                    <img
                      src={assetUrl(BRAND_ASSETS.menuCardPage1)}
                      alt="Front Cover Card"
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#4A2366]/0 group-hover:bg-[#4A2366]/15 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 bg-[#4A2366] text-[#F1A91E] text-[10px] font-trajan font-bold uppercase tracking-wider rounded">
                        Zoom View
                      </span>
                    </div>
                  </div>
                  <span className="font-trajan text-[10.5px] font-bold uppercase text-[#692C90] tracking-wider text-center">
                    Front Cover &middot; Arch
                  </span>
                </div>

                {/* Inside Spread Card */}
                <div
                  onClick={() =>
                    setSelectedCard({
                      src: assetUrl(BRAND_ASSETS.menuCardPage2),
                      title: 'Official 8-Course Inside Spread',
                      subtitle: 'Full 8-Course Banquet Set with 1960 Heritage Cloche Crest',
                    })
                  }
                  className="bg-[#FAF7F0] rounded border-2 border-[#F1A91E]/80 p-3 hover:border-[#692C90] transition-all duration-300 cursor-pointer group flex flex-col items-center relative"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-white border border-[#D8D0B9]/60 mb-2">
                    <img
                      src={assetUrl(BRAND_ASSETS.menuCardPage2)}
                      alt="Inside Spread Card"
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#4A2366]/0 group-hover:bg-[#4A2366]/15 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 bg-[#4A2366] text-[#F1A91E] text-[10px] font-trajan font-bold uppercase tracking-wider rounded">
                        Zoom View
                      </span>
                    </div>
                  </div>
                  <span className="font-trajan text-[10.5px] font-bold uppercase text-[#692C90] tracking-wider text-center">
                    Inside Spread &middot; 8 Courses
                  </span>
                </div>

                {/* Back Cover Card */}
                <div
                  onClick={() =>
                    setSelectedCard({
                      src: assetUrl(BRAND_ASSETS.menuCardPage3),
                      title: 'Banquet Menu Back Cover',
                      subtitle: 'Where Tradition Meets Taste · Serving Celebrations Since 1960',
                    })
                  }
                  className="bg-[#FAF7F0] rounded border border-[#D8D0B9] p-3 hover:border-[#F1A91E] transition-all duration-300 cursor-pointer group flex flex-col items-center"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded bg-white border border-[#D8D0B9]/60 mb-2">
                    <img
                      src={assetUrl(BRAND_ASSETS.menuCardPage3)}
                      alt="Back Cover Card"
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#4A2366]/0 group-hover:bg-[#4A2366]/15 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 bg-[#4A2366] text-[#F1A91E] text-[10px] font-trajan font-bold uppercase tracking-wider rounded">
                        Zoom View
                      </span>
                    </div>
                  </div>
                  <span className="font-trajan text-[10.5px] font-bold uppercase text-[#692C90] tracking-wider text-center">
                    Back Cover &middot; Est. 1960
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D8D0B9]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] text-[#2B2B2B]/80 font-medium">
              <p>
                Ph: <strong className="text-[#4A2366]">{BUSINESS_INFO.phoneDisplay}</strong> &middot;{' '}
                {BUSINESS_INFO.domain}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={assetUrl(BRAND_ASSETS.menuPdf)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#692C90] font-bold hover:underline"
                >
                  <span>Download Official Menu PDF</span>
                  <span>&darr;</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPdfModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[#692C90] font-bold hover:underline"
                >
                  <span>Quick Summary</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Compact Category Filter Tabs */}
      <div className="sticky top-20 z-30 bg-white border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div
            id="categoryTabs"
            role="tablist"
            aria-label="Menu course categories"
            className="flex items-center gap-6 overflow-x-auto scrollbar-none py-4"
          >
            {CATEGORY_TABS.map((tab) => {
              const active = selectedCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(tab.key)}
                  className={`category-btn relative shrink-0 pb-1.5 text-[13.5px] tracking-wide transition-colors ${
                    active
                      ? 'active text-[#4A2366] font-bold'
                      : 'text-[#2B2B2B]/75 font-semibold hover:text-[#692C90]'
                  }`}
                >
                  {tab.label}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#692C90] transition-transform duration-300 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Eight Menu Categories Cards */}
      <section className="w-full py-16 lg:py-24">
        <div
          id="menuCardsContainer"
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-16 lg:gap-24"
        >
          {visibleCategories.map((cat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={cat.key}
                data-category={cat.key}
                className="menu-section-card bg-white border border-[#D8D0B9] rounded-md p-6 sm:p-10 lg:p-12 shadow-subtle animate-fadeIn"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Category Image */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md border border-[#D8D0B9] bg-[#F6F1E6]">
                      <RoyalImage
                        priority={idx < 2}
                        src={cat.image}
                        alt={cat.alt}
                        fallbackLabel={cat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Dish List */}
                  <div className={`lg:col-span-7 flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="pb-5 mb-6 border-b border-[#D8D0B9]">
                      <span className="font-trajan text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#692C90] block mb-1">
                        Course {cat.number}
                      </span>
                      <h2 className="font-didot text-[30px] sm:text-[36px] text-[#4A2366] font-bold mb-1.5">
                        {cat.title}
                      </h2>
                      <p className="font-sans text-[15px] text-[#2B2B2B]/80 font-medium">
                        {cat.subtitle}
                      </p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                      {cat.items.map((dish) => (
                        <li
                          key={dish.name}
                          className="flex items-center justify-between gap-3 py-1.5 border-b border-[#D8D0B9]/60"
                        >
                          <span className="font-sans text-[15px] text-[#2B2B2B] font-semibold">
                            {dish.name}
                          </span>
                          {dish.tag && (
                            <span className="font-trajan text-[10px] font-bold uppercase tracking-[0.14em] text-[#4A2366] bg-[#FAF7F0] px-2 py-0.5 border border-[#F1A91E] rounded-sm shrink-0">
                              {dish.tag}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}

          <p className="text-center font-sans text-[14px] text-[#2B2B2B]/80 font-medium max-w-2xl mx-auto">
            Note: All courses are prepared using pure desi ghee, fresh milk and khoya, and stone-ground
            spices in Indore. Strict Jain (no onion, garlic, or root vegetables) options are available
            across all stations.
          </p>
        </div>
      </section>

      {/* 5. Custom Menu CTA */}
      <section className="w-full bg-[#4A2366] text-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
          <p className="font-cursive text-[36px] text-[#F1A91E] mb-1">
            Where Tradition Meets Taste
          </p>
          <h2 className="font-didot text-[34px] lg:text-[46px] text-white font-bold mb-4">
            Customise Your Event Menu.
          </h2>
          <p className="font-sans text-[16px] text-[#F6F1E6]/85 font-normal max-w-lg mb-9">
            Share your preferred courses and dietary requirements to receive a personalized menu proposal
            from our Indore culinary team.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact-booking"
              data-path="contact-booking"
              className="inline-flex items-center justify-center px-9 py-4 btn-royal-gold text-[12.5px] font-extrabold uppercase tracking-[0.18em] rounded-sm shadow-md"
            >
              Request Custom Menu
            </Link>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white hover:text-[#4A2366] text-white font-sans text-[12px] font-bold uppercase tracking-wider rounded-sm border border-[#F1A91E]/50 transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#4DAF4E]" />
              <span>WhatsApp Menu Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Printable Modal */}
      {pdfModalOpen && (
        <div
          id="pdfNotificationModal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-brochure-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPdfModalOpen(false);
          }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="bg-[#F6F1E6] border-2 border-[#692C90] rounded-md max-w-xl w-full p-7 sm:p-9 shadow-modal flex flex-col gap-5 text-[#2B2B2B]">
            <div className="flex items-start justify-between gap-4 border-b border-[#D8D0B9] pb-4">
              <div>
                <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.2em] text-[#692C90] block mb-1">
                  Royal Caterers India &middot; Since 1960
                </span>
                <h3 id="menu-brochure-modal-title" className="font-didot text-[26px] text-[#4A2366] font-bold">
                  Official Menu Repertoire
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setPdfModalOpen(false)}
                className="w-8 h-8 inline-flex items-center justify-center text-[#2B2B2B] hover:bg-[#D8D0B9]/40 rounded-sm"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  close
                </span>
              </button>
            </div>

            <p className="font-sans text-[15px] text-[#2B2B2B]/90 font-normal leading-relaxed">
              Serving celebrations in Indore since 1960. You can print this complete course overview
              or connect with our chef directly via WhatsApp to customize portions, dietary requirements,
              and live counter stations.
            </p>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-[#D8D0B9]">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-5 py-2.5 btn-royal-outline text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm"
              >
                Print Course Overview
              </button>
              <Link
                to="/contact-booking"
                onClick={() => setPdfModalOpen(false)}
                className="px-6 py-2.5 btn-royal-gold text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm"
              >
                Request Custom Menu
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Menu Card Lightbox Modal */}
      {selectedCard && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#FAF7F0] rounded-lg border-2 border-[#F1A91E] p-4 sm:p-6 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#D8D0B9]">
              <div>
                <span className="font-trajan text-[10px] font-bold uppercase tracking-widest text-[#692C90] block">
                  OFFICIAL ROYAL CATERERS INDIA STATIONERY
                </span>
                <h3 className="font-didot text-[20px] font-bold text-[#4A2366]">
                  {selectedCard.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full bg-[#4A2366] text-white hover:bg-[#692C90] flex items-center justify-center text-lg font-bold transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="my-4 flex justify-center bg-white rounded border border-[#D8D0B9] p-3 overflow-hidden max-h-[62vh]">
              <img
                src={selectedCard.src}
                alt={selectedCard.title}
                className="max-h-[58vh] w-auto object-contain rounded shadow-sm"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-[12px] text-[#2B2B2B]/80">
              <p className="italic">{selectedCard.subtitle}</p>
              <a
                href={assetUrl(BRAND_ASSETS.menuPdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#4A2366] text-[#F1A91E] rounded font-trajan font-bold text-[11px] uppercase tracking-wider hover:bg-[#692C90] transition-colors"
              >
                <span>Download Full Menu PDF</span>
                <span>&darr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};