import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_OFFERINGS, BUSINESS_INFO } from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';

/**
 * Services Page — Royal Caterers India (RCI).
 * Highlighting Wedding, Corporate, Private, Social, Buffet/Live Counters & Custom Menus.
 */
export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-[#F6F1E6] text-[#2B2B2B]">
      {/* 1. Header */}
      <section className="w-full bg-[#F6F1E6] pt-10 pb-14 lg:py-20 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#692C90]" aria-hidden="true" />
              <span className="font-trajan text-[11.5px] font-bold uppercase tracking-[0.22em] text-[#692C90]">
                SINCE 1960 &middot; PARDESIPURA, INDORE
              </span>
            </div>
            <p className="font-cursive text-[34px] text-[#692C90] mb-1">
              Where Tradition Meets Taste
            </p>
            <h1 className="font-didot text-[40px] sm:text-[52px] lg:text-[62px] text-[#4A2366] font-bold leading-[1.1] mb-5">
              Curated Banqueting For Every Grand Occasion.
            </h1>
            <p className="font-sans text-[15.5px] text-[#2B2B2B]/85 font-normal max-w-xl leading-relaxed">
              Tailored pure vegetarian menus, carved royal buffet wagons, live food theatres, and attentive
              uniformed hospitality curated for celebrations across Central India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Six Services with Alternating Compositions */}
      <div className="w-full divide-y divide-[#D8D0B9]">
        {SERVICE_OFFERINGS.map((service, index) => {
          const isEven = index % 2 === 0;
          const surfaceBg = isEven ? 'bg-white' : 'bg-[#FAF7F0]';

          return (
            <section
              key={service.id}
              id={service.anchor}
              className={`w-full ${surfaceBg} py-16 lg:py-24 scroll-mt-20`}
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Image Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md border border-[#D8D0B9] bg-[#F6F1E6] shadow-sm">
                      <RoyalImage
                        priority={index === 0}
                        src={service.image}
                        alt={service.alt}
                        fallbackLabel={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col items-start ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <span className="font-trajan text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#692C90] mb-1">
                      Service {service.number}
                    </span>
                    <p className="font-cursive text-[30px] text-[#692C90] mb-1">
                      {service.categoryTag}
                    </p>

                    <h2 className="font-didot text-[30px] lg:text-[38px] text-[#4A2366] font-bold mb-4">
                      {service.title}
                    </h2>

                    <p className="font-sans text-[15.5px] text-[#2B2B2B]/85 font-normal leading-relaxed mb-6">
                      {service.shortSentence}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to={`/contact-booking?eventType=${encodeURIComponent(service.eventTypeParam)}`}
                        data-path="contact-booking"
                        className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#4A2366] hover:text-[#692C90] transition-colors border-b-2 border-[#692C90] pb-1"
                      >
                        <span>Enquire About {service.title}</span>
                        <span aria-hidden="true">&rarr;</span>
                      </Link>

                      <a
                        href={`https://wa.me/919827286535?text=${encodeURIComponent(
                          `Hello Royal Caterers India, I am interested in inquiring about ${service.title} for our upcoming celebration.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-[#2D6A2E] bg-white border border-[#4DAF4E] rounded-sm hover:bg-[#FAF7F0] transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#4DAF4E]" />
                        <span>Quick WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. Bottom CTA Section */}
      <section className="w-full bg-[#4A2366] text-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
          <p className="font-cursive text-[36px] text-[#F1A91E] mb-1">
            Where Tradition Meets Taste
          </p>
          <h2 className="font-didot text-[34px] lg:text-[46px] text-white font-bold mb-4">
            Planning An Upcoming Grand Event?
          </h2>
          <p className="font-sans text-[16px] text-[#F6F1E6]/85 font-normal max-w-lg mb-9">
            Contact our team in Pardesipura, Indore to discuss live food stations, table setups,
            and custom menu options for your celebration.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Link
              to="/contact-booking"
              data-path="contact-booking"
              className="inline-flex items-center justify-center px-9 py-4 btn-royal-gold text-[12.5px] font-extrabold uppercase tracking-[0.18em] rounded-sm shadow-md"
            >
              Request a Custom Quote
            </Link>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white hover:text-[#4A2366] text-white font-sans text-[12px] font-bold uppercase tracking-wider rounded-sm border border-[#F1A91E]/50 transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#4DAF4E]" />
              <span>WhatsApp Direct Enquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
