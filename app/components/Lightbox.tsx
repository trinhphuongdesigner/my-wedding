'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex flex-col"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close button - Larger touch target on mobile */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-rose-400 transition-colors z-50 p-3 md:p-2 touch-manipulation"
        aria-label="Close lightbox"
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      {/* Main image container - Adjusted padding for mobile */}
      <div className="flex-1 flex items-center justify-center p-2 md:p-8 pb-0 relative">
        <div className="relative w-full h-full max-w-6xl max-h-[70vh] md:max-h-[80vh] transition-opacity duration-300">
          <Image
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Image counter - helpful on mobile */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm md:hidden">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Navigation buttons - Larger touch targets on mobile */}
      <button
        onClick={goToPrevious}
        className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-400 transition-colors p-3 md:p-2 touch-manipulation bg-black/30 md:bg-transparent rounded-full"
        aria-label="Previous image"
      >
        <svg
          className="w-8 h-8 md:w-12 md:h-12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rose-400 transition-colors p-3 md:p-2 touch-manipulation bg-black/30 md:bg-transparent rounded-full"
        aria-label="Next image"
      >
        <svg
          className="w-8 h-8 md:w-12 md:h-12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      {/* Thumbnail strip - Optimized for mobile scrolling */}
      <div className="h-20 md:h-32 bg-black/50 overflow-x-auto flex gap-2 p-2 md:p-4 scrollbar-hide">
        <div className="flex gap-2 mx-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 w-14 h-14 md:w-20 md:h-20 relative cursor-pointer transition-all touch-manipulation ${
                idx === currentIndex ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover rounded"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
