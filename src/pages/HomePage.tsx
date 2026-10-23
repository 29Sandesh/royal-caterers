import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_OFFERINGS, MENU_CATEGORIES, GALLERY_ITEMS, EVENT_VIDEOS, VideoGalleryItem, assetUrl } from '../data/siteData';
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
 * Homepage — Minimal Royal Experience ("A Royal Welcome").
 * Features real authentic event photography and live event video highlights.
 */
export const HomePage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoGalleryItem | null>(null);

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
    <div className="flex flex-col w-full bg-[#FAF8F2] text-black">
      {/* 1. HERO — Editorial Two-Column Layout */}
      <section className="w-full bg-[#FAF8F2] pt-10 pb-16 lg:py-24 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Bold Black Typography & Cursive Subheading */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#173B70]" aria-hidden="true" />
                <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.22em] text-black">
                  BESPOKE CATERING &middot; INDORE
                </span>
              </div>

              <p className="font-cursive text-[30px] sm:text-[34px] text-[#173B70] mb-2">
                A Royal Welcome to Fine Dining
              </p>

              <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[66px] text-black font-bold leading-[1.08] tracking-tight mb-6">
                Every Celebration Deserves a Royal Feast.
              </h1>

              <p className="font-sans text-[16px] text-black font-medium max-w-lg leading-relaxed mb-10">
                Thoughtfully curated pure vegetarian and regional Malwi banquets presented with
                gracious Indian hospitality for grand weddings, leadership galas, and private celebrations.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 w-full sm:w-auto">
                <Link
                  to="/contact-booking"
                  data-path="contact-booking"
                  className="inline-flex items-center justify-center px-8 py-4 btn-royal-gold text-[12.5px] font-bold uppercase tracking-[0.16em] rounded-sm shadow-md"
                >
                  Plan Your Event
                </Link>
                <Link
                  to="/gallery"
                  data-path="gallery"
                  className="inline-flex items-center justify-center sm:justify-start gap-2.5 py-2 text-[13px] font-bold uppercase tracking-[0.15em] text-black hover:text-[#173B70] transition-colors border-b-2 border-[#173B70] pb-1 self-center"
                >
                  <span>Watch Event Videos</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Authentic Real Event Photo */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-sm border-2 border-[#C5A15A] bg-white shadow-elevated group">
                <RoyalImage
                  priority
                  src="/media/photos/royal_wedding_live_buffet_stall.jpg"
                  alt="Ornate royal wedding catering wagon and live culinary counter in Indore."
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-[#FAF8F2]/95 border border-[#C5A15A] px-4 py-2 rounded-sm shadow-md">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#173B70] block">
                    Authentic Indore Event Setup
                  </span>
                  <span className="font-serif text-[17px] font-bold text-black">
                    Ornate Royal Buffet Carriage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND HIGHLIGHTS — Single Elegant Horizontal Row in Bold Black */}
      <section className="w-full bg-white py-10 lg:py-12 border-b border-[#DCD3C2]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 md:gap-16 text-center">
            <span className="font-serif text-[24px] md:text-[27px] text-black font-bold tracking-wide">
              100% Pure Vegetarian
            </span>
            <span className="hidden sm:block w-8 h-[2px] bg-[#C5A15A]" aria-hidden="true" />
            <span className="sm:hidden w-8 h-[2px] bg-[#C5A15A]" aria-hidden="true" />
            <span className="font-serif text-[24px] md:text-[27px] text-black font-bold tracking-wide">
              Live Interactive Counters
            </span>
            <span className="hidden sm:block w-8 h-[2px] bg-[#C5A15A]" aria-hidden="true" />
            <span className="sm:hidden w-8 h-[2px] bg-[#C5A15A]" aria-hidden="true" />
            <span className="font-serif text-[24px] md:text-[27px] text-black font-bold tracking-wide">
              Royal Silver Service
            </span>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW — 4K Image-Led Three-Column Grid */}
      <section className="w-full bg-[#FAF8F2] py-20 lg:py-28 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-cursive text-[30px] text-[#173B70] mb-1">
                Crafted with Grace &amp; Precision
              </p>
              <h2 className="font-serif text-[32px] lg:text-[42px] text-black font-bold">
                Catering for Every Occasion.
              </h2>
            </div>
            <Link
              to="/catering-services"
              data-path="catering-services"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-black hover:text-[#173B70] transition-colors border-b-2 border-[#173B70] pb-1 self-start md:self-auto"
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
                className="group flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border border-[#DCD3C2] bg-white mb-4">
                  <RoyalImage
                    src={service.image}
                    alt={service.alt}
                    fallbackLabel={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between pt-1 border-b border-[#DCD3C2] pb-3 group-hover:border-[#173B70] transition-colors">
                  <h3 className="font-serif text-[24px] text-black font-bold group-hover:text-[#173B70] transition-colors">
                    {service.title}
                  </h3>
                  <span
                    className="text-[12px] font-bold uppercase tracking-[0.14em] text-black group-hover:text-[#173B70] transition-colors inline-flex items-center gap-1"
                    aria-hidden="true"
                  >
                    <span>Explore</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIVE EVENT VIDEO HIGHLIGHTS — Sophisticated Reel Section */}
      <section className="w-full bg-[#121212] text-white py-20 lg:py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#C5A15A]">
                  AUTHENTIC EVENT FOOTAGE
                </span>
              </div>
              <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[46px] text-white font-bold leading-tight">
                Live Banquet Experience Reels.
              </h2>
              <p className="font-sans text-[15px] text-white/70 max-w-xl mt-2 leading-relaxed">
                Step into our actual event lawns in Indore. Watch real buffet walkthroughs, live tandoor action, and illuminated royal counters.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A15A] text-black font-sans text-[12px] font-bold uppercase tracking-[0.16em] hover:bg-white transition-colors rounded-sm shadow-md self-start md:self-auto"
            >
              <span>Explore All 10 Videos</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOMEPAGE_FEATURED_VIDEOS.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group relative flex flex-col bg-[#1A1A1A] border border-[#2D2D2D] hover:border-[#C5A15A] rounded-sm overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={assetUrl(video.poster)}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-sm border border-[#C5A15A]/40 text-[#C5A15A] font-sans text-[9.5px] font-bold uppercase tracking-wider rounded">
                    {video.badge}
                  </span>

                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-white font-mono text-[10.5px] rounded">
                    {video.duration}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#C5A15A]/90 text-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xl">
                      <svg className="w-5 h-5 ml-0.5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                      {video.subtitle}
                    </span>
                    <h3 className="font-serif text-[16px] text-white font-bold leading-snug group-hover:text-[#C5A15A] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[11.5px] text-white/60 line-clamp-2 mt-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MENU PREVIEW — Visual Culinary Introduction */}
      <section className="w-full bg-white py-20 lg:py-28 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="font-cursive text-[30px] text-[#173B70] mb-1">
                Heirloom Recipes &amp; Pure Vegetarian Craft
              </p>
              <h2 className="font-serif text-[32px] lg:text-[42px] text-black font-bold mb-3">
                A Taste of Something Special.
              </h2>
              <p className="font-sans text-[16px] text-black font-medium">
                Pure vegetarian, traditional Malwi Dal Bafla, and strict Jain courses tailored to your palate.
              </p>
            </div>
            <Link
              to="/menu"
              data-path="menu"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-black hover:text-[#173B70] transition-colors border-b-2 border-[#173B70] pb-1 self-start md:self-auto"
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
                className="group flex flex-col"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-[#DCD3C2] bg-[#FAF8F2] mb-4">
                  <RoyalImage
                    src={cat.image}
                    alt={cat.alt}
                    fallbackLabel={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#173B70] mb-1">
                  Course {cat.number}
                </span>
                <h3 className="font-serif text-[23px] text-black font-bold group-hover:text-[#173B70] transition-colors">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW — Real Event Photographic Composition */}
      <section className="w-full bg-[#FAF8F2] py-20 lg:py-28 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-cursive text-[30px] text-[#173B70] mb-1">
                Unforgettable Banquets &amp; Celebrations
              </p>
              <h2 className="font-serif text-[32px] lg:text-[42px] text-black font-bold">
                Moments, Beautifully Served.
              </h2>
            </div>
            <Link
              to="/gallery"
              data-path="gallery"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.15em] text-black hover:text-[#173B70] transition-colors border-b-2 border-[#173B70] pb-1 self-start md:self-auto"
            >
              <span>View Event Gallery</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <Link
              to="/gallery"
              className="md:col-span-7 group relative aspect-[16/11] overflow-hidden rounded-sm border border-[#DCD3C2] bg-white"
            >
              <RoyalImage
                src={GALLERY_ITEMS[0].image}
                alt={GALLERY_ITEMS[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-[#FAF8F2]/95 border border-[#C5A15A] px-4 py-2 rounded-sm shadow-md">
                <span className="font-serif text-[20px] font-bold text-black">
                  {GALLERY_ITEMS[0].title}
                </span>
              </div>
            </Link>

            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              <Link
                to="/gallery"
                className="group relative aspect-[16/9] overflow-hidden rounded-sm border border-[#DCD3C2] bg-white"
              >
                <RoyalImage
                  src={GALLERY_ITEMS[1].image}
                  alt={GALLERY_ITEMS[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-[#FAF8F2]/95 border border-[#C5A15A] px-3.5 py-1.5 rounded-sm shadow-md">
                  <span className="font-serif text-[18px] font-bold text-black">
                    {GALLERY_ITEMS[1].title}
                  </span>
                </div>
              </Link>

              <Link
                to="/gallery"
                className="group relative aspect-[16/9] overflow-hidden rounded-sm border border-[#DCD3C2] bg-white"
              >
                <RoyalImage
                  src={GALLERY_ITEMS[2].image}
                  alt={GALLERY_ITEMS[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-[#FAF8F2]/95 border border-[#C5A15A] px-3.5 py-1.5 rounded-sm shadow-md">
                  <span className="font-serif text-[18px] font-bold text-black">
                    {GALLERY_ITEMS[2].title}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="w-full bg-[#EFE5CE] text-black py-20 lg:py-28 border-t-2 border-[#173B70]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col items-center">
          <p className="font-cursive text-[34px] text-[#173B70] mb-1">
            A Royal Welcome Awaits Your Guests
          </p>
          <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[50px] text-black font-bold leading-tight mb-5">
            Your Occasion. Our Hospitality.
          </h2>
          <p className="font-sans text-[16px] text-black font-medium max-w-xl mb-10">
            Share your event date and guest count to begin planning a tailored menu with our Indore
            catering team.
          </p>
          <Link
            to="/contact-booking"
            data-path="contact-booking"
            className="inline-flex items-center justify-center px-9 py-4 btn-royal-gold text-[12.5px] font-bold uppercase tracking-[0.18em] rounded-sm shadow-md"
          >
            Request a Quote
          </Link>
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
