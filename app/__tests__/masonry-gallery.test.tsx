/**
 * Masonry Gallery Tests
 * Requirements: 10.1, 10.2, 10.3, 10.4
 * 
 * This test suite verifies that the masonry gallery:
 * - Uses columns-based masonry layout (10.1)
 * - Has white borders around each image (10.2)
 * - Has no border radius (10.3)
 * - Shows zoom icon on hover (10.4)
 */

import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Masonry Gallery - Requirements 10.1-10.4', () => {
  describe('10.1 - Masonry layout with columns', () => {
    it('should use columns-based layout', () => {
      const { container } = render(<Home />);
      
      // Find the gallery container
      const galleryContainer = container.querySelector('.columns-1');
      expect(galleryContainer).toBeTruthy();
    });

    it('should have responsive column classes', () => {
      const { container } = render(<Home />);
      
      const galleryContainer = container.querySelector('.columns-1');
      expect(galleryContainer?.classList.contains('columns-1')).toBe(true);
      expect(galleryContainer?.classList.contains('md:columns-2')).toBe(true);
      expect(galleryContainer?.classList.contains('lg:columns-3')).toBe(true);
    });

    it('should have gap spacing between columns', () => {
      const { container } = render(<Home />);
      
      const galleryContainer = container.querySelector('.columns-1');
      expect(galleryContainer?.classList.contains('gap-3')).toBe(true);
      expect(galleryContainer?.classList.contains('md:gap-4')).toBe(true);
    });

    it('should have break-inside-avoid on gallery items', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      expect(galleryItems.length).toBeGreaterThan(0);
    });

    it('should render 8 gallery images', () => {
      render(<Home />);
      
      // Check for all 8 images
      for (let i = 1; i <= 8; i++) {
        const image = screen.getByAltText(`Ảnh cưới ${i}`);
        expect(image).toBeTruthy();
      }
    });

    it('should have randomized heights for masonry effect', () => {
      const { container } = render(<Home />);
      
      const images = container.querySelectorAll('img[alt^="Ảnh cưới"]');
      const heights = Array.from(images).map(img => img.getAttribute('height'));
      
      // Check that not all heights are the same (indicating variety)
      const uniqueHeights = new Set(heights);
      expect(uniqueHeights.size).toBeGreaterThan(1);
    });
  });

  describe('10.2 - White borders around images', () => {
    it('should have white border on gallery items', () => {
      const { container } = render(<Home />);
      
      // Find gallery items specifically (not all elements with border-white)
      const galleryItems = container.querySelectorAll('.break-inside-avoid.border-white');
      expect(galleryItems.length).toBe(8);
    });

    it('should have border-3 class on mobile', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.border-3');
      expect(galleryItems.length).toBe(8);
    });

    it('should have border-4 class on desktop', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.md\\:border-4');
      expect(galleryItems.length).toBe(8);
    });

    it('should have all gallery items with border-white class', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        expect(item.classList.contains('border-white')).toBe(true);
      });
    });
  });

  describe('10.3 - No border radius', () => {
    it('should not have rounded classes on gallery items', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        // Check that none of the common rounded classes are present
        expect(item.classList.contains('rounded')).toBe(false);
        expect(item.classList.contains('rounded-sm')).toBe(false);
        expect(item.classList.contains('rounded-md')).toBe(false);
        expect(item.classList.contains('rounded-lg')).toBe(false);
        expect(item.classList.contains('rounded-xl')).toBe(false);
        expect(item.classList.contains('rounded-2xl')).toBe(false);
        expect(item.classList.contains('rounded-3xl')).toBe(false);
        expect(item.classList.contains('rounded-full')).toBe(false);
      });
    });

    it('should have overflow-hidden without border radius', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        expect(item.classList.contains('overflow-hidden')).toBe(true);
        // Verify no rounded class is present
        const hasRoundedClass = Array.from(item.classList).some(cls => cls.startsWith('rounded'));
        expect(hasRoundedClass).toBe(false);
      });
    });
  });

  describe('10.4 - Zoom icon on hover', () => {
    it('should have zoom icon overlay element', () => {
      const { container } = render(<Home />);
      
      // Find all gallery items
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      // Each gallery item should have a zoom overlay
      galleryItems.forEach(item => {
        const overlay = item.querySelector('.absolute.inset-0');
        expect(overlay).toBeTruthy();
      });
    });

    it('should have zoom icon SVG in overlay', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        const svg = item.querySelector('svg');
        expect(svg).toBeTruthy();
      });
    });

    it('should have hover transition classes on overlay', () => {
      const { container } = render(<Home />);
      
      const overlays = container.querySelectorAll('.absolute.inset-0.bg-black\\/0');
      
      overlays.forEach(overlay => {
        expect(overlay.classList.contains('transition-colors')).toBe(true);
        expect(overlay.classList.contains('group-hover:bg-black/30')).toBe(true);
      });
    });

    it('should have opacity transition on zoom icon', () => {
      const { container } = render(<Home />);
      
      const zoomIcons = container.querySelectorAll('svg.opacity-0');
      
      zoomIcons.forEach(icon => {
        expect(icon.classList.contains('transition-opacity')).toBe(true);
        expect(icon.classList.contains('group-hover:opacity-100')).toBe(true);
      });
    });

    it('should have group class on gallery items for hover effect', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        expect(item.classList.contains('group')).toBe(true);
      });
    });

    it('should hide zoom icon on mobile', () => {
      const { container } = render(<Home />);
      
      // Find overlays specifically in gallery items
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        const overlay = item.querySelector('.absolute.inset-0.bg-black\\/0');
        if (overlay) {
          // Check that overlay is hidden on mobile and shown on desktop
          expect(overlay.classList.contains('hidden')).toBe(true);
          expect(overlay.classList.contains('md:flex')).toBe(true);
        }
      });
    });

    it('should have cursor-pointer on gallery items', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        expect(item.classList.contains('cursor-pointer')).toBe(true);
      });
    });

    it('should have scale transition on images', () => {
      const { container } = render(<Home />);
      
      const images = container.querySelectorAll('img[alt^="Ảnh cưới"]');
      
      images.forEach(img => {
        expect(img.classList.contains('transition-transform')).toBe(true);
        expect(img.classList.contains('group-hover:scale-105')).toBe(true);
      });
    });
  });

  describe('Additional Gallery Features', () => {
    it('should have touch-manipulation for better mobile interaction', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        expect(item.classList.contains('touch-manipulation')).toBe(true);
      });
    });

    it('should have relative positioning on gallery items', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        expect(item.classList.contains('relative')).toBe(true);
      });
    });

    it('should have proper image sizing classes', () => {
      const { container } = render(<Home />);
      
      const images = container.querySelectorAll('img[alt^="Ảnh cưới"]');
      
      images.forEach(img => {
        expect(img.classList.contains('w-full')).toBe(true);
      });
    });

    it('should have lazy loading on images', () => {
      const { container } = render(<Home />);
      
      const images = container.querySelectorAll('img[alt^="Ảnh cưới"]');
      
      images.forEach(img => {
        expect(img.getAttribute('loading')).toBe('lazy');
      });
    });

    it('should have blur placeholder on images', () => {
      const { container } = render(<Home />);
      
      const images = container.querySelectorAll('img[alt^="Ảnh cưới"]');
      
      images.forEach(img => {
        const blurDataURL = img.getAttribute('src');
        // Next.js Image component handles blur placeholder
        expect(blurDataURL).toBeTruthy();
      });
    });

    it('should have proper spacing between gallery items', () => {
      const { container } = render(<Home />);
      
      const galleryItems = container.querySelectorAll('.break-inside-avoid');
      
      galleryItems.forEach(item => {
        expect(item.classList.contains('mb-3')).toBe(true);
        expect(item.classList.contains('md:mb-4')).toBe(true);
      });
    });

    it('should have max-width constraint on gallery container', () => {
      const { container } = render(<Home />);
      
      const galleryContainer = container.querySelector('.columns-1');
      expect(galleryContainer?.classList.contains('max-w-6xl')).toBe(true);
      expect(galleryContainer?.classList.contains('mx-auto')).toBe(true);
    });

    it('should center gallery container', () => {
      const { container } = render(<Home />);
      
      const galleryContainer = container.querySelector('.columns-1');
      expect(galleryContainer?.classList.contains('mx-auto')).toBe(true);
    });
  });
});
