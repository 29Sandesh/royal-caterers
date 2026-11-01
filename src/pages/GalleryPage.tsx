import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS, EVENT_VIDEOS, BUSINESS_INFO, VideoGalleryItem, assetUrl } from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';
import { VideoPlayerModal } from '../components/VideoPlayerModal';

type MediaTypeFilter = 'all' | 'videos' | 'photos';

interface FilterTab {
  key: string;
  label: string;
}

const CATEGORY_FILTERS: FilterTab[] = [
  { key: 'all', label: 'All Categories' },
  { key: 'weddings', label: 'Weddings' },
  { key: 'live-counters', label: 'Live Counters & Chaat' },
  { key: 'buffets', label: 'Buffet & Dining' },
  { key: 'food', label: 'Culinary & Sweets' },
  { key: 'corporate', label: 'Corporate Galas' },
  { key: 'special-occasions', label: 'Special Feasts' },
  { key: 'stationery', label: 'Official Menu Cards & Brand Book' },
];

/**
 * Gallery Page — Royal Caterers India (RCI).
 * Displays real event video reels, high-resolution authentic photography,
 * AI-enhanced culinary centerpieces, and interactive full-screen video/photo lightboxes.
 */
export const GalleryPage: React.FC = () => {
  const [mediaType, setMediaType] = useState<MediaTypeFilter>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeVideo, setActiveVideo] = useState<VideoGalleryItem | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Filtered Videos
  const filteredVideos = EVENT_VIDEOS.filter((vid) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'weddings') return vid.category === 'weddings';
    if (activeCategory === 'live-counters') return vid.category === 'live-counters';
    if (activeCategory === 'buffets') return vid.category === 'weddings' || vid.category === 'corporate';
    if (activeCategory === 'food') return vid.category === 'food';
    if (activeCategory === 'corporate') return vid.category === 'corporate';
    if (activeCategory === 'special-occasions') return vid.category === 'weddings' || vid.category === 'live-counters';
    return true;
  });

  // Filtered Photos
  const filteredPhotos = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categories.includes(activeCategory);
  });

  // Photo Lightbox Controls
  const openPhotoLightbox = (id: number) => {
    setActivePhotoIndex(id);
    document.body.style.overflow = 'hidden';
  };

  const closePhotoLightbox = useCallback(() => {
    setActivePhotoIndex(null);
    document.body.style.overflow = '';
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev === null ? 0 : (prev + 1) % GALLERY_ITEMS.length));
  }, []);

  const prevPhoto = useCallback(() => {
    setActivePhotoIndex((prev) =>
      prev === null ? 0 : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  }, []);

  // Video Navigation in Modal
  const nextVideo = useCallback(() => {
    if (!activeVideo) return;
    const currentIndex = EVENT_VIDEOS.findIndex((v) => v.id === activeVideo.id);
    const nextIndex = (currentIndex + 1) % EVENT_VIDEOS.length;
    setActiveVideo(EVENT_VIDEOS[nextIndex]);
  }, [activeVideo]);

  const prevVideo = useCallback(() => {
    if (!activeVideo) return;
    const currentIndex = EVENT_VIDEOS.findIndex((v) => v.id === activeVideo.id);
    const prevIndex = (currentIndex - 1 + EVENT_VIDEOS.length) % EVENT_VIDEOS.length;
    setActiveVideo(EVENT_VIDEOS[prevIndex]);
  }, [activeVideo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex !== null) {
        if (e.key === 'Escape') closePhotoLightbox();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, closePhotoLightbox, nextPhoto, prevPhoto]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const currentPhoto =
    activePhotoIndex !== null
      ? GALLERY_ITEMS.find((item) => item.id === activePhotoIndex) || GALLERY_ITEMS[0]
      : null;

  return (
    <div className="flex flex-col w-full bg-[#F6F1E6] text-[#2B2B2B]">
      {/* 1. Header */}
      <section className="w-full bg-[#F6F1E6] pt-10 pb-10 lg:pt-14 lg:pb-12 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#692C90]" aria-hidden="true" />
                <span className="font-trajan text-[11.5px] font-bold uppercase tracking-[0.22em] text-[#692C90]">
                  ROYAL CATERERS INDIA &middot; SINCE 1960
                </span>
              </div>
              <p className="font-cursive text-[34px] sm:text-[38px] text-[#692C90] mb-1">
                Where Tradition Meets Taste
              </p>
              <h1 className="font-didot text-[38px] sm:text-[50px] lg:text-[60px] text-[#4A2366] font-bold leading-[1.08] mb-4">
                The Royal Caterers Exhibition.
              </h1>
              <p className="font-sans text-[15.5px] text-[#2B2B2B]/85 font-normal max-w-2xl leading-relaxed">
                Step into authentic Indore celebration lawns—from immersive video walkthroughs of
                opulent carved buffet stalls to crisp captures of live chaat theatre and royal Pangat feasts.
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap lg:flex-col gap-2.5 self-start lg:self-auto bg-white border border-[#D8D0B9] p-4 rounded-md shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#692C90]" />
                <span className="font-trajan text-[11px] font-bold tracking-wider text-[#4A2366]">
                  10 REAL EVENT VIDEOS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F1A91E]" />
                <span className="font-trajan text-[11px] font-bold tracking-wider text-[#4A2366]">
                  18 CURATED PHOTOGRAPHS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4DAF4E]" />
                <span className="font-trajan text-[11px] font-bold tracking-wider text-[#2D6A2E]">
                  100% PURE VEGETARIAN
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Media Type & Category Control Bar */}
      <div className="sticky top-20 z-30 bg-white border-b border-[#D8D0B9] shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Media Format Switcher */}
          <div className="flex items-center p-1 bg-[#F6F1E6] border border-[#D8D0B9] rounded-sm">
            <button
              onClick={() => setMediaType('all')}
              className={`px-4 py-2 font-sans text-[12px] font-bold uppercase tracking-[0.14em] transition-all rounded-sm ${
                mediaType === 'all'
                  ? 'bg-[#692C90] text-white shadow-sm'
                  : 'text-[#2B2B2B] hover:text-[#692C90]'
              }`}
            >
              All Media ({EVENT_VIDEOS.length + GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setMediaType('videos')}
              className={`px-4 py-2 font-sans text-[12px] font-bold uppercase tracking-[0.14em] transition-all rounded-sm flex items-center gap-1.5 ${
                mediaType === 'videos'
                  ? 'bg-[#692C90] text-white shadow-sm'
                  : 'text-[#2B2B2B] hover:text-[#692C90]'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm8 6l-5 3V7l5 3z" />
              </svg>
              <span>Videos ({EVENT_VIDEOS.length})</span>
            </button>
            <button
              onClick={() => setMediaType('photos')}
              className={`px-4 py-2 font-sans text-[12px] font-bold uppercase tracking-[0.14em] transition-all rounded-sm flex items-center gap-1.5 ${
                mediaType === 'photos'
                  ? 'bg-[#692C90] text-white shadow-sm'
                  : 'text-[#2B2B2B] hover:text-[#692C90]'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Photos ({GALLERY_ITEMS.length})</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none max-w-full pb-1 md:pb-0">
            {CATEGORY_FILTERS.map((tab) => {
              const active = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-3.5 py-1.5 font-trajan text-[11px] font-bold uppercase tracking-[0.14em] whitespace-nowrap transition-colors rounded-full border ${
                    active
                      ? 'bg-[#F1A91E] text-[#2D133E] border-[#F1A91E] font-extrabold shadow-sm'
                      : 'bg-white text-[#2B2B2B] hover:border-[#692C90] border-[#D8D0B9]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. VIDEO SHOWCASE SECTION */}
      {(mediaType === 'all' || mediaType === 'videos') && filteredVideos.length > 0 && (
        <section className="w-full bg-[#1A0B26] text-white py-16 lg:py-20 border-b border-[#3D1A57]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F1A91E] animate-pulse" />
                  <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.24em] text-[#F1A91E]">
                    LIVE EVENT EXPERIENCES
                  </span>
                </div>
                <h2 className="font-didot text-[30px] sm:text-[38px] lg:text-[44px] text-white font-bold leading-tight">
                  Banquet Walkthroughs &amp; Reel Highlights.
                </h2>
                <p className="font-sans text-[14.5px] text-white/70 max-w-xl mt-1">
                  Click any video to play full-screen with sound. Explore real wedding setups, live chaat theatre, and buffet illumination.
                </p>
              </div>

              <div className="text-[12px] font-mono text-[#F1A91E] self-start md:self-auto">
                Showing {filteredVideos.length} of {EVENT_VIDEOS.length} Videos
              </div>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="group relative flex flex-col bg-[#2A113D] border border-[#4A2366] hover:border-[#F1A91E] rounded-md overflow-hidden transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={assetUrl(video.poster)}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#4A2366]/90 backdrop-blur-sm border border-[#F1A91E]/40 text-[#F1A91E] font-trajan text-[10px] font-bold uppercase tracking-wider rounded">
                      {video.badge}
                    </span>

                    <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-white font-mono text-[11px] rounded">
                      {video.duration}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-13 h-13 rounded-full bg-[#F1A91E] text-[#2D133E] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xl">
                        <svg className="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <span className="font-trajan text-[10.5px] uppercase tracking-wider text-[#F1A91E]/80 block mb-1">
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
      )}

      {/* 4. PHOTOGRAPHY GALLERY */}
      {(mediaType === 'all' || mediaType === 'photos') && (
        <section className="w-full bg-[#F6F1E6] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <p className="font-cursive text-[32px] text-[#692C90] mb-1">
                  Stills of Excellence &amp; Grandeur
                </p>
                <h2 className="font-didot text-[32px] sm:text-[40px] text-[#4A2366] font-bold">
                  Curated Event Photography.
                </h2>
                <p className="font-sans text-[15px] text-[#2B2B2B]/80 max-w-xl mt-1">
                  Click any photograph to view in ultra-high-definition with full culinary details.
                </p>
              </div>

              <div className="font-mono text-[12px] text-[#4A2366] font-semibold">
                Displaying {filteredPhotos.length} of {GALLERY_ITEMS.length} Stills
              </div>
            </div>

            {/* Asymmetric Photographic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {filteredPhotos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openPhotoLightbox(item.id)}
                  className={`${item.colSpanClass} group relative ${item.aspectClass} overflow-hidden rounded-md border border-[#D8D0B9] bg-white cursor-pointer shadow-sm hover:shadow-xl transition-shadow`}
                >
                  <RoyalImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {item.isAiEnhanced && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#4A2366]/90 backdrop-blur-sm text-[#F1A91E] font-trajan text-[9.5px] font-bold uppercase tracking-wider rounded border border-[#F1A91E]/30">
                      Masterpiece Creation
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-[#F6F1E6]/95 border border-[#D8D0B9] px-4 py-2 rounded-sm shadow-md max-w-[85%]">
                      <span className="font-trajan text-[10px] font-bold uppercase tracking-[0.18em] text-[#692C90] block">
                        {item.categoryLabel}
                      </span>
                      <span className="font-didot text-[18px] sm:text-[20px] font-bold text-[#4A2366] line-clamp-1">
                        {item.title}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#692C90] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 ml-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Lightbox Modal */}
      {activePhotoIndex !== null && currentPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fadeIn"
          onClick={closePhotoLightbox}
        >
          <button
            type="button"
            onClick={closePhotoLightbox}
            className="absolute top-5 right-5 z-20 w-11 h-11 flex items-center justify-center rounded-sm bg-white/10 hover:bg-[#F1A91E] hover:text-[#2D133E] text-white transition-colors"
            aria-label="Close photo viewer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#F1A91E] hover:text-[#2D133E] text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#F1A91E] hover:text-[#2D133E] text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative flex flex-col items-center max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-md border border-white/10 bg-black">
              <img
                src={assetUrl(currentPhoto.image)}
                alt={currentPhoto.alt}
                className="max-w-full max-h-[75vh] object-contain select-none"
              />
            </div>

            <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#1A0B26] p-4 rounded-md border border-[#3D1A57]">
              <div>
                <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.2em] text-[#F1A91E] block">
                  {currentPhoto.categoryLabel}
                </span>
                <h3 className="font-didot text-[22px] sm:text-[24px] text-white font-bold">
                  {currentPhoto.title}
                </h3>
              </div>
              <span className="font-mono text-[12px] text-white/50 shrink-0">
                {activePhotoIndex + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 6. Video Player Modal */}
      <VideoPlayerModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onNext={nextVideo}
        onPrev={prevVideo}
      />

      {/* 7. Bottom CTA */}
      <section className="w-full bg-[#4A2366] text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="font-cursive text-[36px] text-[#F1A91E] mb-1">
            Where Tradition Meets Taste
          </p>
          <h2 className="font-didot text-[34px] sm:text-[46px] font-bold text-white mb-5 leading-tight">
            Ready to Plan an Unforgettable Royal Feast?
          </h2>
          <p className="font-sans text-[16px] text-[#F6F1E6]/85 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether an extravagant wedding lawn celebration, an executive conference, or an intimate
            family gathering in Indore, our team ensures unmatched hospitality and authentic taste.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-booking"
              className="px-8 py-4 btn-royal-gold text-[12.5px] font-extrabold uppercase tracking-[0.16em] rounded-sm shadow-md"
            >
              Inquire for Event Dates
            </Link>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-white/10 hover:bg-white hover:text-[#4A2366] text-white font-sans text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm border border-[#F1A91E]/50 transition-colors"
            >
              WhatsApp Direct Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
