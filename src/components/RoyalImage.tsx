import React, { useState, useRef, useEffect } from 'react';

export interface RoyalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Set to true for above-the-fold hero images to load eagerly */
  priority?: boolean;
  /** Optional fallback caption displayed if the image fails to load */
  fallbackLabel?: string;
}

/**
 * Layout-stable image component with genuine network loading skeleton and
 * graceful fallback state. Never introduces artificial delays when cached.
 */
export const RoyalImage: React.FC<RoyalImageProps> = ({
  src,
  alt = '',
  className = '',
  priority = false,
  fallbackLabel,
  onLoad,
  onError,
  ...rest
}) => {
  const resolvedSrc =
    !src || src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')
      ? src
      : `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${src.replace(/^\//, '')}`;

  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [resolvedSrc]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setFailed(true);
    setLoaded(true);
    onError?.(e);
  };

  if (failed) {
    return (
      <div
        className={`w-full h-full bg-ivory border border-border-subtle flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
        role="img"
        aria-label={alt || fallbackLabel || 'Royal Caterers India culinary presentation'}
      >
        <span className="w-8 h-[1px] bg-gold mb-3" aria-hidden="true" />
        <span className="font-serif text-[20px] text-royal font-medium line-clamp-2">
          {fallbackLabel || alt || 'Royal Caterers India'}
        </span>
        <span className="font-sans text-eyebrow uppercase tracking-widest text-muted mt-1.5">
          Culinary Presentation
        </span>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#EFEAE0] animate-skeleton pointer-events-none"
        />
      )}
      <img
        ref={imgRef}
        src={resolvedSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...rest}
      />
    </>
  );
};
