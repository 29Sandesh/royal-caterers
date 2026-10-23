import React, { useEffect, useRef } from 'react';
import { VideoGalleryItem, assetUrl } from '../data/siteData';

interface VideoPlayerModalProps {
  video: VideoGalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  onClose,
  onNext,
  onPrev,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose, onNext, onPrev]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative flex flex-col items-center max-w-5xl w-full max-h-[92vh] bg-[#121212] border border-[#C5A15A]/40 rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="w-full flex items-center justify-between px-5 py-3.5 bg-[#1A1A1A] border-b border-[#2A2A2A]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A15A] animate-pulse" />
            <div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A15A]">
                {video.badge || 'Live Event Video'}
              </span>
              <h3 className="font-serif text-[17px] sm:text-[20px] text-white font-bold tracking-tight line-clamp-1">
                {video.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-white/10 rounded text-white/80 font-mono text-[11px]">
              {video.duration}
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-sm bg-white/10 hover:bg-[#C5A15A] hover:text-black text-white transition-colors ml-2"
              aria-label="Close video player"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="relative w-full flex items-center justify-center bg-black overflow-hidden flex-1 max-h-[72vh]">
          <video
            ref={videoRef}
            src={assetUrl(video.videoSrc)}
            poster={assetUrl(video.poster)}
            controls
            autoPlay
            playsInline
            className={`w-full max-h-[70vh] object-contain ${
              video.orientation === 'portrait' ? 'max-w-[420px]' : 'max-w-full'
            }`}
          >
            Your browser does not support the video tag.
          </video>

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C5A15A] hover:text-black text-white flex items-center justify-center transition-colors border border-white/20"
              aria-label="Previous video"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C5A15A] hover:text-black text-white flex items-center justify-center transition-colors border border-white/20"
              aria-label="Next video"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Description Footer */}
        <div className="w-full px-5 py-3 bg-[#1A1A1A] border-t border-[#2A2A2A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-sans text-[13px] text-white/80 line-clamp-2">
            {video.description}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[11px] uppercase tracking-wider text-white/50">
              Use &larr; &rarr; to browse
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
