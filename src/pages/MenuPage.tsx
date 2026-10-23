import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MENU_CATEGORIES, MenuCategoryData } from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';

const CATEGORY_TABS = [
  { key: 'all', label: 'All Courses' },
  { key: 'cat-drinks', label: 'Welcome Drinks & Beverages' },
  { key: 'cat-starters', label: 'Starters & Appetisers' },
  { key: 'cat-mains', label: 'Indian Main Course' },
  { key: 'cat-rice', label: 'Rice & Biryani' },
  { key: 'cat-breads', label: 'Indian Breads' },
  { key: 'cat-live', label: 'Live Food Counters' },
  { key: 'cat-desserts', label: 'Desserts & Sweets' },
  { key: 'cat-special', label: 'Special Menu Options' },
];

/**
 * Menu Page — Clean and Image-Led (Section 9).
 * Features 4K Unsplash food photography, Bold Black dish names & headings,
 * cursive subheadings, and high-contrast buttons.
 */
export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

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
    <div className="flex flex-col w-full bg-[#FAF8F2] text-black">
      {/* 1. Editorial Header */}
      <section className="w-full bg-[#FAF8F2] pt-12 pb-12 lg:py-20 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#173B70]" aria-hidden="true" />
                <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.22em] text-black">
                  ILLUSTRATIVE CULINARY REPERTOIRE
                </span>
              </div>
              <p className="font-cursive text-[32px] text-[#173B70] mb-1">
                Pure Vegetarian, Malwi &amp; Jain Gastronomy
              </p>
              <h1 className="font-serif text-[42px] sm:text-[52px] lg:text-[62px] text-black font-bold leading-[1.1] mb-4">
                A Menu for Every Occasion.
              </h1>
              <p className="font-sans text-[16px] text-black font-medium leading-relaxed">
                Explore sample vegetarian, regional Malwi, and pure Jain selections across eight
                signature courses. Every event menu is individually curated during consultation.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact-booking"
                data-path="contact-booking"
                className="inline-flex items-center justify-center px-7 py-3.5 btn-royal-gold text-[12px] font-bold uppercase tracking-[0.16em] rounded-sm"
              >
                Request a Custom Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Compact Category Navigation in Bold Black */}
      <div className="sticky top-20 z-30 bg-white border-b border-[#DCD3C2]">
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
                  data-cat={tab.key}
                  onClick={() => setSelectedCategory(tab.key)}
                  className={`category-btn relative shrink-0 pb-1.5 text-[13.5px] tracking-wide transition-colors ${
                    active ? 'active text-black font-bold' : 'text-black/75 font-semibold hover:text-black'
                  }`}
                >
                  {tab.label}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#173B70] transition-transform duration-300 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Eight Menu Categories — Clean & 4K Image-Led */}
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
                className="menu-section-card bg-white border border-[#DCD3C2] rounded-sm p-6 sm:p-10 lg:p-12 shadow-subtle animate-fadeIn"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* 4K Category Food Photograph */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border border-[#DCD3C2] bg-[#FAF8F2]">
                      <RoyalImage
                        priority={idx < 2}
                        src={cat.image}
                        alt={cat.alt}
                        fallbackLabel={cat.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Concise Dish List in Bold Black */}
                  <div
                    className={`lg:col-span-7 flex flex-col ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="pb-5 mb-6 border-b border-[#DCD3C2]">
                      <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#173B70] block mb-1">
                        Course {cat.number}
                      </span>
                      <h2 className="font-serif text-[30px] sm:text-[36px] text-black font-bold mb-1.5">
                        {cat.title}
                      </h2>
                      <p className="font-sans text-[15px] text-black font-medium">
                        {cat.subtitle}
                      </p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                      {cat.items.map((dish) => (
                        <li
                          key={dish.name}
                          className="flex items-center justify-between gap-3 py-1.5 border-b border-[#DCD3C2]/80"
                        >
                          <span className="font-sans text-[15px] text-black font-bold">
                            {dish.name}
                          </span>
                          {dish.tag && (
                            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-black bg-[#EFE5CE] px-2 py-0.5 border border-[#C5A15A] rounded-sm shrink-0">
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

          {/* Subtle Illustrative Note */}
          <p className="text-center font-sans text-[14.5px] text-black font-semibold max-w-2xl mx-auto">
            Note: The selections above are illustrative of our culinary repertoire. Final course
            combinations, seasonal items, and strict Jain or Sattvic preparations are tailored to
            your event.
          </p>
        </div>
      </section>

      {/* 4. Minimal "Download Our Menu" Area */}
      <section className="w-full bg-white py-16 lg:py-20 border-t border-[#DCD3C2]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="border-2 border-[#C5A15A] bg-[#FAF8F2] p-8 sm:p-12 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="font-cursive text-[28px] text-[#173B70] mb-1">
                Seasonal Course Brochure
              </p>
              <h2 className="font-serif text-[28px] sm:text-[34px] text-black font-bold mb-2">
                Download Our Menu
              </h2>
              <p className="font-sans text-[15px] text-black font-medium leading-relaxed">
                Preview our eight-course repertoire summary or request the official PDF brochure once
                approved for your season.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                id="downloadPdfBtn"
                type="button"
                onClick={() => setPdfModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 btn-royal-outline text-[12px] font-bold uppercase tracking-[0.15em] rounded-sm"
              >
                <span>Download Our Menu (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Request a Custom Menu CTA */}
      <section className="w-full bg-[#EFE5CE] text-black py-20 lg:py-24 border-t-2 border-[#173B70]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
          <p className="font-cursive text-[32px] text-[#173B70] mb-1">
            Tailored for Your Palate
          </p>
          <h2 className="font-serif text-[34px] lg:text-[44px] text-black font-bold mb-4">
            Curate a Menu for Your Guests.
          </h2>
          <p className="font-sans text-[16px] text-black font-medium max-w-lg mb-9">
            Share your preferred courses and dietary requirements to receive a tailored menu
            recommendation.
          </p>
          <Link
            to="/contact-booking"
            data-path="contact-booking"
            className="inline-flex items-center justify-center px-9 py-4 btn-royal-gold text-[12.5px] font-bold uppercase tracking-[0.18em] rounded-sm"
          >
            Request a Custom Menu
          </Link>
        </div>
      </section>

      {/* Minimal Menu PDF / Printable Summary Modal */}
      {pdfModalOpen && (
        <div
          id="pdfNotificationModal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-brochure-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPdfModalOpen(false);
          }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px] flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="bg-[#FAF8F2] border-2 border-[#173B70] rounded-sm max-w-xl w-full p-7 sm:p-9 shadow-modal flex flex-col gap-5 text-black">
            <div className="flex items-start justify-between gap-4 border-b border-[#DCD3C2] pb-4">
              <div>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#173B70] block mb-1">
                  Royal Caterers India
                </span>
                <h3
                  id="menu-brochure-modal-title"
                  className="font-serif text-[26px] text-black font-bold"
                >
                  Official Menu Brochure
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setPdfModalOpen(false)}
                className="w-8 h-8 inline-flex items-center justify-center text-black hover:bg-[#EFE5CE] rounded-sm"
              >
                <span className="material-symbols-outlined text-[20px] text-black" aria-hidden="true">
                  close
                </span>
              </button>
            </div>

            <p className="font-sans text-[15px] text-black font-medium leading-relaxed">
              The downloadable PDF menu brochure will be linked here once the final seasonal edition
              is approved. In the meantime, you can print this course overview or request a custom
              menu proposal directly.
            </p>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-[#DCD3C2]">
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
                Request a Custom Menu
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
