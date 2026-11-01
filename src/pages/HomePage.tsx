import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  SERVICE_OFFERINGS,
  MENU_CATEGORIES,
  GALLERY_ITEMS,
  EVENT_VIDEOS,
  BUSINESS_INFO,
  BRAND_ASSETS,
  VideoGalleryItem,
  assetUrl,
} from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';
import { VideoPlayerModal } from '../components/VideoPlayerModal';

const FEATURED_MENU_PREVIEWS = [
  MENU_CATEGORIES[0], // Welcome Drinks & Beverages
  MENU_CATEGORIES[1], // Starters & Appetisers
  MENU_CATEGORIES[2], // Indian Main Course
  MENU_CATEGORIES[6], // Desserts & Sweets
];

const HOMEPAGE_FEATURED_VIDEOS = [
  EVENT_VIDEOS[0], // Royal Wedding Grand Buffet Walkthrough
  EVENT_VIDEOS[1], // Royal Carved Catering Stalls & Chafing Counters
  EVENT_VIDEOS[2], // Live Chaat & Street Food Theatre
  EVENT_VIDEOS[3], // Grand Lawn Evening Banquet Spread
];

/**
 * Homepage for Royal Caterers India (RCI).
 * Fully aligned with client brand identity:
 * - Theme: Imperial Purple (#4A2366 / #692C90) & Saffron Gold (#F1A91E) on Warm Ivory (#F6F1E6)
 * - Official Tagline: "Where Tradition Meets Taste · Serving Celebrations Since 1960"
 * - Official Emblem Sub-tagline: "we serve taste of life"
 * - Brand Crest Showcase: 3 official concepts (Cloche Dome, Royal Crown, Handi Pot)
 */
export const HomePage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoGalleryItem | null>(null);
  const [activeConceptTab, setActiveConceptTab] = useState<'cloche' | 'crown' | 'handi'>('cloche');

  const nextVideo = useCallback(() => {
    if (!selectedVideo) return;
    const currentIndex = EVENT_VIDEOS.findIndex((v) => v.id === selectedVideo.id);
    const nextIndex = (currentIndex + 1) % EVENT_VIDEOS.length;
    setSelectedVideo(EVENT_VIDEOS[nextIndex]);
  }, [selectedVideo]);

  const prevVideo = useCallback(() => {
    if (!selectedVideo) return;
    const currentIndex = EVENT_VIDEOS.findIndex((v) => v.id === selectedVideo.id);
    const prevIndex = (currentIndex - 1 + EVENT_VIDEOS.length) % EVENT_VIDEOS.length;
    setSelectedVideo(EVENT_VIDEOS[prevIndex]);
  }, [selectedVideo]);

  return (
    <div className="flex flex-col w-full bg-[#F6F1E6] text-[#2B2B2B]">
      {/* 1. HERO — Editorial Imperial Purple & Ivory Two-Column Layout */}
      <section className="w-full bg-[#F6F1E6] pt-8 pb-16 lg:py-24 border-b border-[#D8D0B9] relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#692C90]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Brand Identity, Tagline & Action */}
            <div className="lg:col-span-6 flex flex-col items-start">
              {/* Official Heritage Eyebrow & Google Rating */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#4A2366] text-[#F1A91E] font-trajan text-[11px] font-bold tracking-[0.2em] uppercase rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F1A91E]" />
                  <span>Est. 1960 &middot; Indore</span>
                </span>
                <a
                  href={BUSINESS_INFO.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-[#D8D0B9] text-[11px] font-bold text-[#4A2366] rounded-full hover:border-[#692C90] transition-colors"
                >
                  <span className="text-[#F1A91E]">★</span>
                  <span>4.8 on Google My Business</span>
                </a>
              </div>

              {/* Official Tagline in Cursive script */}
              <p className="font-cursive text-[32px] sm:text-[38px] text-[#692C90] mb-1.5 leading-snug">
                Where Tradition Meets Taste
              </p>

              {/* Main Heading in Didot serif */}
              <h1 className="font-didot text-[40px] sm:text-[54px] lg:text-[64px] text-[#4A2366] font-bold leading-[1.08] tracking-tight mb-5">
                Serving Celebrations Since 1960.
              </h1>

              {/* Brand Description & Pure Veg Stamp */}
              <p className="font-sans text-[15.5px] sm:text-[16.5px] text-[#2B2B2B]/90 font-normal max-w-lg leading-relaxed mb-4">
                For over six decades, Royal Caterers India (RCI) has orchestrated regal, authentic
                pure vegetarian banquets across Indore and Central India—blending heirloom Malwi
                flavours, lavish presentation, and gracious hospitality.
              </p>

              {/* Emblem Sub-Tagline Quote */}
              <p className="font-didot italic text-[14px] text-[#692C90] font-semibold mb-8 flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#F1A91E]" />
                <span>&ldquo;{BUSINESS_INFO.emblemTagline}&rdquo;</span>
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <Link
                  to="/contact-booking"
                  data-path="contact-booking"
                  className="inline-flex items-center justify-center px-8 py-4 btn-royal-gold text-[12px] font-extrabold uppercase tracking-[0.16em] rounded-sm shadow-md"
                >
                  Book Your Event
                </Link>

                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-royal-outline text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-[#4DAF4E]" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  to="/gallery"
                  data-path="gallery"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 py-2 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#4A2366] hover:text-[#692C90] transition-colors border-b-2 border-[#692C90] pb-0.5 self-center"
                >
                  <span>Watch Reels</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Real Event Media with Official Seal */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-md border-2 border-[#D8D0B9] bg-white shadow-royal group">
                <RoyalImage
                  priority
                  src="/media/photos/royal_wedding_live_buffet_stall.jpg"
                  alt="Royal Caterers India carved catering stall and banquet carriage in Indore."
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Official Heritage Seal */}
                <div className="absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4A2366]/95 border-2 border-[#F1A91E] p-1.5 shadow-2xl flex items-center justify-center animate-fadeUp">
                  <img
                    src={assetUrl(BRAND_ASSETS.emblemClocheGold)}
                    alt="RCI 1960 Heritage Seal"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#F6F1E6]/95 backdrop-blur-sm border border-[#D8D0B9] px-4 py-2.5 rounded-sm shadow-md flex items-center justify-between">
                  <div>
                    <span className="font-trajan text-[10px] font-bold uppercase tracking-wider text-[#692C90] block">
                      Authentic Indore Event Setup
                    </span>
                    <span className="font-didot text-[16px] sm:text-[18px] font-bold text-[#4A2366]">
                      Ornate Royal Buffet Carriage &middot; Pardesipura
                    </span>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 bg-[#4DAF4E]/10 border border-[#4DAF4E]/30 text-[#2D6A2E] text-[10px] font-bold uppercase tracking-wider rounded">
                    100% Pure Veg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 3 BRAND CRESTS & LEGACY (From Official Brand Guidelines) */}
      <section className="w-full bg-[#FFFFFF] py-14 lg:py-16 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.22em] text-[#692C90] block mb-1">
              THE ROYAL CATERERS BRAND IDENTITY
            </span>
            <h2 className="font-didot text-[28px] sm:text-[36px] text-[#4A2366] font-bold">
              Three Royal Crests &middot; One Enduring Legacy.
            </h2>
            <p className="font-sans text-[14.5px] text-[#2B2B2B]/80 mt-2">
              Every emblem reflects our dedication since 1960: from culinary dome service to royal
              celebrations and authentic deg handis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Crest 1: Cloche Dome & Lotus Flame */}
            <div
              onClick={() => setActiveConceptTab('cloche')}
              className={`p-6 rounded-md border-2 transition-all cursor-pointer flex flex-col items-center text-center ${
                activeConceptTab === 'cloche'
                  ? 'border-[#692C90] bg-[#FAF7F0] shadow-md -translate-y-1'
                  : 'border-[#D8D0B9]/60 bg-white hover:border-[#692C90]/50'
              }`}
            >
              <div className="w-24 h-24 rounded-full bg-[#4A2366] border-2 border-[#F1A91E] p-2 mb-4 shadow-md flex items-center justify-center">
                <img
                  src={assetUrl(BRAND_ASSETS.emblemClocheGold)}
                  alt="Cloche Emblem"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="font-trajan text-[11px] font-bold uppercase tracking-widest text-[#692C90] mb-1">
                Official Crest 01
              </span>
              <h3 className="font-didot text-[20px] font-bold text-[#4A2366] mb-2">
                Imperial Cloche &middot; Taste of Life
              </h3>
              <p className="font-sans text-[13px] text-[#2B2B2B]/80 leading-relaxed">
                The royal banquet cloche with the 3-petal lotus crest, representing gourmet presentation,
                flawless hot service, and hospitality.
              </p>
            </div>

            {/* Crest 2: Royal Crown & Diamond Stars */}
            <div
              onClick={() => setActiveConceptTab('crown')}
              className={`p-6 rounded-md border-2 transition-all cursor-pointer flex flex-col items-center text-center ${
                activeConceptTab === 'crown'
                  ? 'border-[#692C90] bg-[#FAF7F0] shadow-md -translate-y-1'
                  : 'border-[#D8D0B9]/60 bg-white hover:border-[#692C90]/50'
              }`}
            >
              <div className="w-24 h-24 rounded-full bg-[#4A2366] border-2 border-[#F1A91E] p-2 mb-4 shadow-md flex items-center justify-center">
                <img
                  src={assetUrl(BRAND_ASSETS.emblemCrownGold)}
                  alt="Royal Crown Emblem"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="font-trajan text-[11px] font-bold uppercase tracking-widest text-[#692C90] mb-1">
                Official Crest 02
              </span>
              <h3 className="font-didot text-[20px] font-bold text-[#4A2366] mb-2">
                The Regal Crown &middot; Celebrations
              </h3>
              <p className="font-sans text-[13px] text-[#2B2B2B]/80 leading-relaxed">
                The majestic royal crown with radiant four-pointed stars, celebrating grand wedding
                ceremonies, bridal galas, and milestone feasts.
              </p>
            </div>

            {/* Crest 3: Handi Deg & Authentic Steam */}
            <div
              onClick={() => setActiveConceptTab('handi')}
              className={`p-6 rounded-md border-2 transition-all cursor-pointer flex flex-col items-center text-center ${
                activeConceptTab === 'handi'
                  ? 'border-[#692C90] bg-[#FAF7F0] shadow-md -translate-y-1'
                  : 'border-[#D8D0B9]/60 bg-white hover:border-[#692C90]/50'
              }`}
            >
              <div className="w-24 h-24 rounded-full bg-[#4A2366] border-2 border-[#F1A91E] p-2 mb-4 shadow-md flex items-center justify-center">
                <img
                  src={assetUrl(BRAND_ASSETS.emblemHandiGold)}
                  alt="Traditional Handi Emblem"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="font-trajan text-[11px] font-bold uppercase tracking-widest text-[#692C90] mb-1">
                Official Crest 03
              </span>
              <h3 className="font-didot text-[20px] font-bold text-[#4A2366] mb-2">
                Authentic Handi &middot; Desi Ghee
              </h3>
              <p className="font-sans text-[13px] text-[#2B2B2B]/80 leading-relaxed">
                The timeless Indian handi pot, honouring authentic Malwi Dal Bafla, slow-simmered
                shahi paneer gravies, and pure ghee mithai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE SERVICES — Image-Led Grid */}
      <section className="w-full bg-[#F6F1E6] py-18 lg:py-24 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-cursive text-[32px] text-[#692C90] mb-1">
                Crafted with Grace &amp; Precision
              </p>
              <h2 className="font-didot text-[32px] lg:text-[42px] text-[#4A2366] font-bold">
                Catering for Every Grand Occasion.
              </h2>
            </div>
            <Link
              to="/catering-services"
              data-path="catering-services"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-[#4A2366] hover:text-[#692C90] transition-colors border-b-2 border-[#692C90] pb-1 self-start md:self-auto"
            >
              <span>View All Services</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {SERVICE_OFFERINGS.map((service) => (
              <Link
                key={service.id}
                to={`/catering-services#${service.anchor}`}
                className="group flex flex-col bg-white rounded-md border border-[#D8D0B9] p-3.5 hover:shadow-royal transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-[#F6F1E6] mb-3.5">
                  <RoyalImage
                    src={service.image}
                    alt={service.alt}
                    fallbackLabel={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#4A2366]/90 text-[#F1A91E] font-trajan text-[10px] font-bold uppercase tracking-wider rounded">
                    {service.number}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-[#D8D0B9]/60 pb-2">
                  <div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#692C90] block mb-0.5">
                      {service.categoryTag}
                    </span>
                    <h3 className="font-didot text-[22px] text-[#4A2366] font-bold group-hover:text-[#692C90] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#D8D0B9] group-hover:bg-[#692C90] group-hover:text-white flex items-center justify-center transition-colors text-[14px]">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIVE EVENT VIDEO REELS — Real Indore Celebrations */}
      <section className="w-full bg-[#1A0B26] text-white py-20 lg:py-24 border-b border-[#3D1A57] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F1A91E] animate-pulse" />
                <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.24em] text-[#F1A91E]">
                  AUTHENTIC EVENT FOOTAGE &middot; 10 VIDEOS
                </span>
              </div>
              <h2 className="font-didot text-[32px] sm:text-[42px] lg:text-[46px] text-white font-bold leading-tight">
                Live Banquet Experience Reels.
              </h2>
              <p className="font-sans text-[15px] text-white/75 max-w-xl mt-2 leading-relaxed">
                Step inside our actual wedding banquet lawns and live counters in Indore. Click any reel
                to play full-screen with sound.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 btn-royal-gold text-[12px] font-extrabold uppercase tracking-[0.16em] rounded-sm shadow-md self-start md:self-auto"
            >
              <span>Explore All 10 Reels</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOMEPAGE_FEATURED_VIDEOS.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group relative flex flex-col bg-[#2A113D] border border-[#4A2366] hover:border-[#F1A91E] rounded-md overflow-hidden transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={assetUrl(video.poster)}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#4A2366]/90 backdrop-blur-sm border border-[#F1A91E]/40 text-[#F1A91E] font-trajan text-[9.5px] font-bold uppercase tracking-wider rounded">
                    {video.badge}
                  </span>

                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-white font-mono text-[10.5px] rounded">
                    {video.duration}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#F1A91E] text-[#2D133E] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xl">
                      <svg className="w-5 h-5 ml-0.5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-trajan text-[10px] uppercase tracking-wider text-[#F1A91E]/80 block mb-1">
                      {video.subtitle}
                    </span>
                    <h3 className="font-didot text-[17px] text-white font-bold leading-snug group-hover:text-[#F1A91E] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[12px] text-white/70 line-clamp-2 mt-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENT MENU HIGHLIGHTS (Featuring Authentic Client PDF Items) */}
      <section className="w-full bg-white py-20 lg:py-28 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="font-cursive text-[32px] text-[#692C90] mb-1">
                Heirloom Recipes &amp; Pure Vegetarian Craft
              </p>
              <h2 className="font-didot text-[32px] lg:text-[42px] text-[#4A2366] font-bold mb-3">
                Curated Banquet Menus.
              </h2>
              <p className="font-sans text-[15.5px] text-[#2B2B2B]/85">
                Authentic Malwi Dal Bafla, Shahi Paneer, Dum Aloo, Dal Tadka, Clay-Oven Naans, Indori
                Sarafa Chaat, Veg Chowmein, and Halwai Sweets.
              </p>
            </div>
            <Link
              to="/menu"
              data-path="menu"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-[#4A2366] hover:text-[#692C90] transition-colors border-b-2 border-[#692C90] pb-1 self-start md:self-auto"
            >
              <span>Explore Complete Menu</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {FEATURED_MENU_PREVIEWS.map((cat) => (
              <Link
                key={cat.key}
                to="/menu"
                className="group flex flex-col bg-[#FAF7F0] border border-[#D8D0B9] rounded-md p-3 hover:shadow-royal transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-white mb-3">
                  <RoyalImage
                    src={cat.image}
                    alt={cat.alt}
                    fallbackLabel={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.18em] text-[#692C90] mb-1">
                  Course {cat.number}
                </span>
                <h3 className="font-didot text-[22px] text-[#4A2366] font-bold group-hover:text-[#692C90] transition-colors">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW — Real Event Photography */}
      <section className="w-full bg-[#F6F1E6] py-20 lg:py-28 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-cursive text-[32px] text-[#692C90] mb-1">
                Unforgettable Banquets &amp; Celebrations
              </p>
              <h2 className="font-didot text-[32px] lg:text-[42px] text-[#4A2366] font-bold">
                Moments, Beautifully Served.
              </h2>
            </div>
            <Link
              to="/gallery"
              data-path="gallery"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-[#4A2366] hover:text-[#692C90] transition-colors border-b-2 border-[#692C90] pb-1 self-start md:self-auto"
            >
              <span>View Full Gallery (28 Media)</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <Link
              to="/gallery"
              className="md:col-span-7 group relative aspect-[16/11] overflow-hidden rounded-md border border-[#D8D0B9] bg-white shadow-sm"
            >
              <RoyalImage
                src={GALLERY_ITEMS[0].image}
                alt={GALLERY_ITEMS[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-[#F6F1E6]/95 border border-[#D8D0B9] px-4 py-2 rounded-sm shadow-md">
                <span className="font-didot text-[18px] sm:text-[20px] font-bold text-[#4A2366]">
                  {GALLERY_ITEMS[0].title}
                </span>
              </div>
            </Link>

            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              <Link
                to="/gallery"
                className="group relative aspect-[16/9] overflow-hidden rounded-md border border-[#D8D0B9] bg-white shadow-sm"
              >
                <RoyalImage
                  src={GALLERY_ITEMS[1].image}
                  alt={GALLERY_ITEMS[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-[#F6F1E6]/95 border border-[#D8D0B9] px-3.5 py-1.5 rounded-sm shadow-md">
                  <span className="font-didot text-[17px] font-bold text-[#4A2366]">
                    {GALLERY_ITEMS[1].title}
                  </span>
                </div>
              </Link>

              <Link
                to="/gallery"
                className="group relative aspect-[16/9] overflow-hidden rounded-md border border-[#D8D0B9] bg-white shadow-sm"
              >
                <RoyalImage
                  src={GALLERY_ITEMS[3].image}
                  alt={GALLERY_ITEMS[3].alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-[#F6F1E6]/95 border border-[#D8D0B9] px-3.5 py-1.5 rounded-sm shadow-md">
                  <span className="font-didot text-[17px] font-bold text-[#4A2366]">
                    {GALLERY_ITEMS[3].title}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL INVITATION CTA */}
      <section className="w-full bg-[#4A2366] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-[#F1A91E] text-[#2D133E] flex items-center justify-center p-3 mb-4 shadow-xl">
            <img
              src={assetUrl(BRAND_ASSETS.logomark)}
              alt="RCI Crest"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="font-cursive text-[36px] text-[#F1A91E] mb-1">
            Where Tradition Meets Taste
          </p>

          <h2 className="font-didot text-[34px] sm:text-[46px] lg:text-[54px] text-white font-bold leading-tight mb-4">
            Plan Your Grand Celebration With Us.
          </h2>

          <p className="font-sans text-[16px] text-[#F6F1E6]/85 font-normal max-w-xl mb-9 leading-relaxed">
            Founded in 1960 in Pardesipura, Indore. Share your celebration date and guest count to
            experience personalized royal menu curation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
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
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white hover:text-[#4A2366] text-white font-sans text-[12.5px] font-bold uppercase tracking-[0.14em] rounded-sm border border-[#F1A91E]/50 transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#4DAF4E]" />
              <span>WhatsApp Direct Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onNext={nextVideo}
        onPrev={prevVideo}
      />
    </div>
  );
};
