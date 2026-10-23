import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_OFFERINGS } from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';

/**
 * Services Page — Less Text, Better Imagery (Section 8).
 * Features 4K internet photography, Bold Black typography, cursive subheadings,
 * and alternating editorial compositions.
 */
export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-[#FAF8F2] text-black">
      {/* 1. Editorial Header */}
      <section className="w-full bg-[#FAF8F2] pt-12 pb-14 lg:py-20 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#173B70]" aria-hidden="true" />
              <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.22em] text-black">
                BESPOKE CATERING SERVICES
              </span>
            </div>
            <p className="font-cursive text-[32px] text-[#173B70] mb-1">
              Curated Banqueting for Every Milestone
            </p>
            <h1 className="font-serif text-[42px] sm:text-[52px] lg:text-[62px] text-black font-bold leading-[1.1] mb-5">
              The Perfect Catering for Every Occasion.
            </h1>
            <p className="font-sans text-[16px] text-black font-medium max-w-xl leading-relaxed">
              Tailored menus, refined buffet styling, and attentive hospitality curated for weddings,
              corporate gatherings, and private celebrations in Indore.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Six Services — Alternating 4K Editorial Compositions */}
      <div className="w-full divide-y divide-[#DCD3C2]">
        {SERVICE_OFFERINGS.map((service, index) => {
          const isEven = index % 2 === 0;
          const surfaceBg = isEven ? 'bg-white' : 'bg-[#FAF8F2]';

          return (
            <section
              key={service.id}
              id={service.anchor}
              className={`w-full ${surfaceBg} py-16 lg:py-24 scroll-mt-20`}
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* 4K Image Column */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm border border-[#DCD3C2] bg-[#FAF8F2]">
                      <RoyalImage
                        priority={index === 0}
                        src={service.image}
                        alt={service.alt}
                        fallbackLabel={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Concise Bold Black Text & Cursive Tag Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col items-start ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.2em] text-black mb-1">
                      Service {service.number}
                    </span>
                    <p className="font-cursive text-[28px] text-[#173B70] mb-1">
                      {service.categoryTag}
                    </p>

                    <h2 className="font-serif text-[32px] lg:text-[40px] text-black font-bold mb-4">
                      {service.title}
                    </h2>

                    <p className="font-sans text-[16px] text-black font-medium leading-relaxed mb-8">
                      {service.shortSentence}
                    </p>

                    <Link
                      to={`/contact-booking?eventType=${encodeURIComponent(service.eventTypeParam)}`}
                      data-path="contact-booking"
                      className="inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.16em] text-black hover:text-[#173B70] transition-colors border-b-2 border-[#173B70] pb-1"
                    >
                      <span>Enquire About {service.title}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. Single Elegant Enquiry Section at the Bottom */}
      <section className="w-full bg-[#EFE5CE] text-black py-20 lg:py-24 border-t-2 border-[#173B70]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
          <p className="font-cursive text-[32px] text-[#173B70] mb-1">
            Bespoke Event Consultation
          </p>
          <h2 className="font-serif text-[34px] lg:text-[44px] text-black font-bold mb-4">
            Planning an Upcoming Event?
          </h2>
          <p className="font-sans text-[16px] text-black font-medium max-w-lg mb-9">
            Tell us about your celebration and let our team prepare a tailored menu proposal for your
            guests.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
            <Link
              to="/contact-booking"
              data-path="contact-booking"
              className="inline-flex items-center justify-center px-9 py-4 btn-royal-gold text-[12.5px] font-bold uppercase tracking-[0.18em] rounded-sm"
            >
              Request a Catering Quote
            </Link>
            <Link
              to="/menu"
              data-path="menu"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-black hover:text-[#173B70] transition-colors border-b-2 border-[#173B70] pb-1"
            >
              <span>Browse Sample Menu</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
