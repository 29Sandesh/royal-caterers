import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Thoughtful Planning',
    description:
      'Every celebration begins with a personal consultation to align courses, regional tastes, and dietary traditions with your occasion.',
  },
  {
    number: '02',
    title: 'Quality Presentation',
    description:
      'From polished chafing vessels to well-appointed live counters, our service layouts are composed to elevate your venue.',
  },
  {
    number: '03',
    title: 'Professional Coordination',
    description:
      'Disciplined kitchen scheduling and attentive service staff ensure every course arrives fresh, warm, and on time.',
  },
];

/**
 * About Page — Editorial and Refined (Section 7).
 * Uses 4K internet photography, Bold Black typography, cursive subheadings,
 * and alternating image-and-text alignment.
 */
export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-[#FAF8F2] text-black">
      {/* 1. Editorial Page Header & Large 4K Catering Photograph */}
      <section className="w-full bg-[#FAF8F2] pt-12 pb-16 lg:py-24 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#173B70]" aria-hidden="true" />
              <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.22em] text-black">
                ABOUT ROYAL CATERERS INDIA
              </span>
            </div>
            <p className="font-cursive text-[32px] text-[#173B70] mb-1">
              Our Heritage of Royal Banqueting
            </p>
            <h1 className="font-serif text-[42px] sm:text-[52px] lg:text-[62px] text-black font-bold leading-[1.1] mb-6">
              A Tradition of Gracious Hospitality.
            </h1>
            <p className="font-sans text-[16px] text-black font-medium leading-relaxed">
              Based in <strong className="font-bold text-black">{BUSINESS_INFO.shortLocality}</strong>, Royal
              Caterers India brings together time-honoured vegetarian culinary craft, bespoke menu
              curation, and composed event service for celebrations across Central India.
            </p>
          </div>

          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-sm border-2 border-[#C5A15A] bg-white shadow-elevated">
            <RoyalImage
              priority
              src="/media/photos/ornate_food_stall_night_lighting.jpg"
              alt="Royal Caterers India grand banquet setup with illuminated carved food stalls."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Three Concise Principles in Bold Black */}
      <section className="w-full bg-white py-20 lg:py-28 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <p className="font-cursive text-[30px] text-[#173B70] mb-1">
              Our Commitments to Excellence
            </p>
            <h2 className="font-serif text-[32px] lg:text-[42px] text-black font-bold">
              Guided by Three Principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {PRINCIPLES.map((item) => (
              <div
                key={item.number}
                className="flex flex-col pt-6 border-t-2 border-[#173B70]"
              >
                <span className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#173B70] mb-3">
                  Principle {item.number}
                </span>
                <h3 className="font-serif text-[26px] text-black font-bold mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-[15.5px] text-black font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Restrained Vision Section — Alternating 4K Image & Text Alignment */}
      <section className="w-full bg-[#FAF8F2] py-20 lg:py-28 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-20 lg:gap-28">
          {/* Row 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border border-[#DCD3C2] bg-white">
                <RoyalImage
                  src="/media/ai-enhanced/royal_silver_pangat_thali_deluxe.jpg"
                  alt="Authentic vegetarian Indian silver thali feast and regional Malwi Dal Bafla."
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col items-start">
              <p className="font-cursive text-[30px] text-[#173B70] mb-1">
                Culinary Vision &amp; Authenticity
              </p>
              <h2 className="font-serif text-[32px] lg:text-[40px] text-black font-bold mb-5">
                Honouring Regional Taste &amp; Pure Vegetarian Craft.
              </h2>
              <p className="font-sans text-[16px] text-black font-medium leading-relaxed mb-6">
                Whether preparing an authentic Malwi wedding feast, a strict Jain and Sattvic menu,
                or a multi-cuisine reception spread, our kitchens focus on fresh seasonal produce,
                balanced spices, and unhurried preparation.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-black hover:text-[#173B70] transition-colors border-b-2 border-[#173B70] pb-1"
              >
                <span>Explore Our Menu</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
              <p className="font-cursive text-[30px] text-[#173B70] mb-1">
                Bespoke Coordination in Indore
              </p>
              <h2 className="font-serif text-[32px] lg:text-[40px] text-black font-bold mb-5">
                Composed Service for Intimate &amp; Grand Gatherings.
              </h2>
              <p className="font-sans text-[16px] text-black font-medium leading-relaxed mb-6">
                From private residence soirées to grand wedding receptions and corporate conferences,
                we coordinate menu planning, live counter placement, and attentive hospitality around
                your schedule.
              </p>
              <Link
                to="/catering-services"
                className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-black hover:text-[#173B70] transition-colors border-b-2 border-[#173B70] pb-1"
              >
                <span>View Catering Services</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border border-[#DCD3C2] bg-white">
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

      {/* 4. Clear Enquiry CTA in Bold Black */}
      <section className="w-full bg-[#EFE5CE] text-black py-20 lg:py-24 border-t-2 border-[#173B70]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
          <p className="font-cursive text-[32px] text-[#173B70] mb-1">
            Personalised Menu Consultations
          </p>
          <h2 className="font-serif text-[34px] lg:text-[44px] text-black font-bold mb-4">
            Begin Planning Your Celebration.
          </h2>
          <p className="font-sans text-[16px] text-black font-medium max-w-lg mb-9">
            Connect with our team in Pardesipura, Indore to discuss your upcoming event and schedule
            a menu consultation.
          </p>
          <Link
            to="/contact-booking"
            data-path="contact-booking"
            className="inline-flex items-center justify-center px-9 py-4 btn-royal-gold text-[12.5px] font-bold uppercase tracking-[0.18em] rounded-sm"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};
