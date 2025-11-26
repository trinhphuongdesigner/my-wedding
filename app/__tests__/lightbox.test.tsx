/**
 * Lightbox Component Tests
 * Requirements: 9.1-9.9
 * 
 * This test suite verifies that the Lightbox component:
 * - Opens with the correct image (9.1)
 * - Displays images properly in full-screen (9.2)
 * - Has Previous/Next navigation buttons (9.3)
 * - Has thumbnail strip with scroll (9.4)
 * - Has close button in top-right corner (9.5)
 * - Supports keyboard navigation with Arrow keys (9.6, 9.7)
 * - Supports ESC key to close (9.8)
 * - Has smooth transitions between images (9.9)
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Lightbox from '../components/Lightbox';

describe('Lightbox Component - Requirements 9.1-9.9', () => {
  const mockImages = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
  ];
  
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  describe('9.1 - Lightbox opens with correct image', () => {
    it('should display the initial image at index 0', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const mainImage = screen.getByAltText('Gallery 1');
      expect(mainImage).toBeInTheDocument();
      expect(mainImage).toHaveAttribute('src', expect.stringContaining('gallery-1.jpg'));
    });

    it('should display the initial image at index 2', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={2}
          onClose={mockOnClose}
        />
      );

      const mainImage = screen.getByAltText('Gallery 3');
      expect(mainImage).toBeInTheDocument();
      expect(mainImage).toHaveAttribute('src', expect.stringContaining('gallery-3.jpg'));
    });

    it('should display the initial image at last index', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={4}
          onClose={mockOnClose}
        />
      );

      const mainImage = screen.getByAltText('Gallery 5');
      expect(mainImage).toBeInTheDocument();
      expect(mainImage).toHaveAttribute('src', expect.stringContaining('gallery-5.jpg'));
    });
  });

  describe('9.2 - Full-screen display with proper image fitting', () => {
    it('should render lightbox with full-screen overlay', () => {
      const { container } = render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const lightboxContainer = container.firstChild as HTMLElement;
      expect(lightboxContainer).toHaveClass('fixed', 'inset-0', 'bg-black/95', 'z-50');
    });

    it('should display image with object-contain class for proper fitting', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const mainImage = screen.getByAltText('Gallery 1');
      expect(mainImage).toHaveClass('object-contain');
    });

    it('should prevent body scroll when lightbox is open', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      expect(document.body.style.overflow).toBe('hidden');
    });
  });

  describe('9.3 - Previous and Next navigation buttons', () => {
    it('should have Previous button', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const prevButton = screen.getByLabelText('Previous image');
      expect(prevButton).toBeInTheDocument();
    });

    it('should have Next button', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const nextButton = screen.getByLabelText('Next image');
      expect(nextButton).toBeInTheDocument();
    });

    it('should navigate to next image when Next button is clicked', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const nextButton = screen.getByLabelText('Next image');
      fireEvent.click(nextButton);

      const mainImage = screen.getByAltText('Gallery 2');
      expect(mainImage).toBeInTheDocument();
      expect(mainImage).toHaveAttribute('src', expect.stringContaining('gallery-2.jpg'));
    });

    it('should navigate to previous image when Previous button is clicked', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={2}
          onClose={mockOnClose}
        />
      );

      const prevButton = screen.getByLabelText('Previous image');
      fireEvent.click(prevButton);

      const mainImage = screen.getByAltText('Gallery 2');
      expect(mainImage).toBeInTheDocument();
      expect(mainImage).toHaveAttribute('src', expect.stringContaining('gallery-2.jpg'));
    });

    it('should wrap to last image when clicking Previous on first image', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const prevButton = screen.getByLabelText('Previous image');
      fireEvent.click(prevButton);

      const mainImage = screen.getByAltText('Gallery 5');
      expect(mainImage).toBeInTheDocument();
      expect(mainImage).toHaveAttribute('src', expect.stringContaining('gallery-5.jpg'));
    });

    it('should wrap to first image when clicking Next on last image', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={4}
          onClose={mockOnClose}
        />
      );

      const nextButton = screen.getByLabelText('Next image');
      fireEvent.click(nextButton);

      const mainImage = screen.getByAltText('Gallery 1');
      expect(mainImage).toBeInTheDocument();
      expect(mainImage).toHaveAttribute('src', expect.stringContaining('gallery-1.jpg'));
    });
  });

  describe('9.4 - Thumbnail strip with horizontal scroll', () => {
    it('should display all thumbnails', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      mockImages.forEach((_, idx) => {
        const thumbnail = screen.getByAltText(`Thumbnail ${idx + 1}`);
        expect(thumbnail).toBeInTheDocument();
      });
    });

    it('should have horizontal scroll container', () => {
      const { container } = render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const scrollContainer = container.querySelector('.overflow-x-auto');
      expect(scrollContainer).toBeInTheDocument();
    });

    it('should highlight current thumbnail with ring', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={2}
          onClose={mockOnClose}
        />
      );

      const currentThumbnail = screen.getByLabelText('Go to image 3');
      expect(currentThumbnail).toHaveClass('ring-2', 'ring-white', 'scale-110');
    });

    it('should navigate to clicked thumbnail image', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const thumbnail3 = screen.getByLabelText('Go to image 3');
      fireEvent.click(thumbnail3);

      const mainImage = screen.getByAltText('Gallery 3');
      expect(mainImage).toBeInTheDocument();
      expect(mainImage).toHaveAttribute('src', expect.stringContaining('gallery-3.jpg'));
    });

    it('should update highlighted thumbnail when navigating', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      // Initially, first thumbnail should be highlighted
      let currentThumbnail = screen.getByLabelText('Go to image 1');
      expect(currentThumbnail).toHaveClass('ring-2', 'ring-white');

      // Click next button
      const nextButton = screen.getByLabelText('Next image');
      fireEvent.click(nextButton);

      // Now second thumbnail should be highlighted
      currentThumbnail = screen.getByLabelText('Go to image 2');
      expect(currentThumbnail).toHaveClass('ring-2', 'ring-white');
    });
  });

  describe('9.5 - Close button in top-right corner', () => {
    it('should have close button', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const closeButton = screen.getByLabelText('Close lightbox');
      expect(closeButton).toBeInTheDocument();
    });

    it('should position close button in top-right corner', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const closeButton = screen.getByLabelText('Close lightbox');
      expect(closeButton).toHaveClass('absolute', 'top-2', 'right-2');
    });

    it('should call onClose when close button is clicked', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const closeButton = screen.getByLabelText('Close lightbox');
      fireEvent.click(closeButton);

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('9.6, 9.7 - Keyboard navigation with Arrow keys', () => {
    it('should navigate to next image when ArrowRight is pressed', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      // Initially showing first image
      expect(screen.getByAltText('Gallery 1')).toBeInTheDocument();

      // Press ArrowRight
      fireEvent.keyDown(window, { key: 'ArrowRight' });

      // Should now show second image
      expect(screen.getByAltText('Gallery 2')).toBeInTheDocument();
    });

    it('should navigate to previous image when ArrowLeft is pressed', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={2}
          onClose={mockOnClose}
        />
      );

      // Initially showing third image
      expect(screen.getByAltText('Gallery 3')).toBeInTheDocument();

      // Press ArrowLeft
      fireEvent.keyDown(window, { key: 'ArrowLeft' });

      // Should now show second image
      expect(screen.getByAltText('Gallery 2')).toBeInTheDocument();
    });

    it('should wrap to last image when pressing ArrowLeft on first image', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      fireEvent.keyDown(window, { key: 'ArrowLeft' });

      expect(screen.getByAltText('Gallery 5')).toBeInTheDocument();
    });

    it('should wrap to first image when pressing ArrowRight on last image', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={4}
          onClose={mockOnClose}
        />
      );

      fireEvent.keyDown(window, { key: 'ArrowRight' });

      expect(screen.getByAltText('Gallery 1')).toBeInTheDocument();
    });

    it('should navigate multiple times with arrow keys', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      // Press ArrowRight twice
      fireEvent.keyDown(window, { key: 'ArrowRight' });
      fireEvent.keyDown(window, { key: 'ArrowRight' });

      expect(screen.getByAltText('Gallery 3')).toBeInTheDocument();

      // Press ArrowLeft once
      fireEvent.keyDown(window, { key: 'ArrowLeft' });

      expect(screen.getByAltText('Gallery 2')).toBeInTheDocument();
    });
  });

  describe('9.8 - ESC key closes lightbox', () => {
    it('should call onClose when Escape key is pressed', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      fireEvent.keyDown(window, { key: 'Escape' });

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('should not call onClose when other keys are pressed', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      fireEvent.keyDown(window, { key: 'Enter' });
      fireEvent.keyDown(window, { key: 'Space' });
      fireEvent.keyDown(window, { key: 'Tab' });

      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe('9.9 - Smooth transitions between images', () => {
    it('should have transition classes on main image container', () => {
      const { container } = render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const imageContainer = container.querySelector('.transition-opacity');
      expect(imageContainer).toBeInTheDocument();
      expect(imageContainer).toHaveClass('duration-300');
    });

    it('should have transition classes on navigation buttons', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const prevButton = screen.getByLabelText('Previous image');
      const nextButton = screen.getByLabelText('Next image');

      expect(prevButton).toHaveClass('transition-colors');
      expect(nextButton).toHaveClass('transition-colors');
    });

    it('should have transition classes on thumbnails', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const thumbnail = screen.getByLabelText('Go to image 1');
      expect(thumbnail).toHaveClass('transition-all');
    });
  });

  describe('Additional Lightbox Functionality', () => {
    it('should restore body scroll when unmounted', () => {
      const { unmount } = render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      expect(document.body.style.overflow).toBe('hidden');

      unmount();

      expect(document.body.style.overflow).toBe('unset');
    });

    it('should display image counter on mobile', () => {
      const { container } = render(
        <Lightbox
          images={mockImages}
          initialIndex={2}
          onClose={mockOnClose}
        />
      );

      const counter = container.querySelector('.md\\:hidden');
      expect(counter).toBeInTheDocument();
      expect(counter?.textContent).toContain('3 / 5');
    });

    it('should update image counter when navigating', () => {
      const { container } = render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      let counter = container.querySelector('.md\\:hidden');
      expect(counter?.textContent).toContain('1 / 5');

      const nextButton = screen.getByLabelText('Next image');
      fireEvent.click(nextButton);

      counter = container.querySelector('.md\\:hidden');
      expect(counter?.textContent).toContain('2 / 5');
    });

    it('should have proper aria labels for accessibility', () => {
      render(
        <Lightbox
          images={mockImages}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      expect(screen.getByLabelText('Close lightbox')).toBeInTheDocument();
      expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
      expect(screen.getByLabelText('Next image')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to image 1')).toBeInTheDocument();
    });

    it('should handle single image gracefully', () => {
      const singleImage = ['/images/gallery-1.jpg'];
      
      render(
        <Lightbox
          images={singleImage}
          initialIndex={0}
          onClose={mockOnClose}
        />
      );

      const mainImage = screen.getByAltText('Gallery 1');
      expect(mainImage).toBeInTheDocument();

      // Navigation should wrap to same image
      const nextButton = screen.getByLabelText('Next image');
      fireEvent.click(nextButton);
      expect(screen.getByAltText('Gallery 1')).toBeInTheDocument();

      const prevButton = screen.getByLabelText('Previous image');
      fireEvent.click(prevButton);
      expect(screen.getByAltText('Gallery 1')).toBeInTheDocument();
    });
  });
});
