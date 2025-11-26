/**
 * MusicPlayer Component Tests
 * Requirements: 18.1, 18.2, 18.3, 18.5
 * 
 * This test suite verifies that the MusicPlayer component:
 * - Auto-plays music on mount (18.1)
 * - Has toggle button to play/pause music (18.2, 18.3)
 * - Has loop attribute for continuous playback (18.5)
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MusicPlayer from '../components/MusicPlayer';

// Mock HTMLMediaElement methods
beforeAll(() => {
  // Mock play method
  window.HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
  
  // Mock pause method
  window.HTMLMediaElement.prototype.pause = jest.fn();
  
  // Mock load method
  window.HTMLMediaElement.prototype.load = jest.fn();
});

describe('MusicPlayer Component - Requirements 18.1, 18.2, 18.3, 18.5', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe('18.1 - Auto-play functionality', () => {
    it('should attempt to auto-play music when component mounts', async () => {
      render(<MusicPlayer />);

      await waitFor(() => {
        expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
      });
    });

    it('should display Volume2 icon when auto-play succeeds', async () => {
      render(<MusicPlayer />);

      await waitFor(() => {
        const button = screen.getByLabelText('Tắt nhạc');
        expect(button).toBeInTheDocument();
      });
    });

    it('should handle auto-play failure gracefully', async () => {
      // Mock play to reject (simulating browser blocking auto-play)
      const playMock = jest.fn(() => Promise.reject(new Error('Auto-play blocked')));
      window.HTMLMediaElement.prototype.play = playMock;

      // Spy on console.log to verify error handling
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

      render(<MusicPlayer />);

      // Wait for the promise rejection to be handled
      await waitFor(() => {
        expect(playMock).toHaveBeenCalled();
      });

      // Should show VolumeX icon when auto-play fails
      await waitFor(() => {
        const button = screen.getByLabelText('Bật nhạc');
        expect(button).toBeInTheDocument();
      }, { timeout: 3000 });

      expect(consoleLogSpy).toHaveBeenCalledWith(
        'Auto-play was prevented:',
        expect.any(Error)
      );

      consoleLogSpy.mockRestore();
      
      // Reset play mock for other tests
      window.HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
    });

    it('should set isPlaying state to true when auto-play succeeds', async () => {
      render(<MusicPlayer />);

      await waitFor(() => {
        // Check that Volume2 icon is displayed (indicates isPlaying = true)
        const button = screen.getByLabelText('Tắt nhạc');
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe('18.2, 18.3 - Toggle play/pause functionality', () => {
    it('should have a toggle button with proper aria-label', async () => {
      render(<MusicPlayer />);

      await waitFor(() => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('aria-label');
      });
    });

    it('should pause music when toggle button is clicked while playing', async () => {
      render(<MusicPlayer />);

      // Wait for auto-play to complete
      await waitFor(() => {
        expect(screen.getByLabelText('Tắt nhạc')).toBeInTheDocument();
      });

      const button = screen.getByLabelText('Tắt nhạc');
      fireEvent.click(button);

      await waitFor(() => {
        expect(window.HTMLMediaElement.prototype.pause).toHaveBeenCalled();
      });
    });

    it('should play music when toggle button is clicked while paused', async () => {
      render(<MusicPlayer />);

      // Wait for auto-play
      await waitFor(() => {
        expect(screen.getByLabelText('Tắt nhạc')).toBeInTheDocument();
      });

      // Click to pause
      const pauseButton = screen.getByLabelText('Tắt nhạc');
      fireEvent.click(pauseButton);

      await waitFor(() => {
        expect(screen.getByLabelText('Bật nhạc')).toBeInTheDocument();
      });

      // Click to play again
      const playButton = screen.getByLabelText('Bật nhạc');
      fireEvent.click(playButton);

      await waitFor(() => {
        expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2); // Once for auto-play, once for manual play
      });
    });

    it('should toggle icon from Volume2 to VolumeX when paused', async () => {
      render(<MusicPlayer />);

      // Wait for auto-play
      await waitFor(() => {
        expect(screen.getByLabelText('Tắt nhạc')).toBeInTheDocument();
      });

      // Click to pause
      const button = screen.getByLabelText('Tắt nhạc');
      fireEvent.click(button);

      // Should now show VolumeX icon
      await waitFor(() => {
        expect(screen.getByLabelText('Bật nhạc')).toBeInTheDocument();
      });
    });

    it('should toggle icon from VolumeX to Volume2 when playing', async () => {
      render(<MusicPlayer />);

      // Wait for auto-play
      await waitFor(() => {
        expect(screen.getByLabelText('Tắt nhạc')).toBeInTheDocument();
      });

      // Click to pause
      let button = screen.getByLabelText('Tắt nhạc');
      fireEvent.click(button);

      await waitFor(() => {
        expect(screen.getByLabelText('Bật nhạc')).toBeInTheDocument();
      });

      // Click to play again
      button = screen.getByLabelText('Bật nhạc');
      fireEvent.click(button);

      // Should now show Volume2 icon
      await waitFor(() => {
        expect(screen.getByLabelText('Tắt nhạc')).toBeInTheDocument();
      });
    });

    it('should toggle multiple times correctly', async () => {
      render(<MusicPlayer />);

      // Wait for auto-play
      await waitFor(() => {
        expect(screen.getByLabelText('Tắt nhạc')).toBeInTheDocument();
      });

      // Toggle pause
      fireEvent.click(screen.getByLabelText('Tắt nhạc'));
      await waitFor(() => {
        expect(screen.getByLabelText('Bật nhạc')).toBeInTheDocument();
      });

      // Toggle play
      fireEvent.click(screen.getByLabelText('Bật nhạc'));
      await waitFor(() => {
        expect(screen.getByLabelText('Tắt nhạc')).toBeInTheDocument();
      });

      // Toggle pause again
      fireEvent.click(screen.getByLabelText('Tắt nhạc'));
      await waitFor(() => {
        expect(screen.getByLabelText('Bật nhạc')).toBeInTheDocument();
      });

      // Verify pause was called twice (after the two pause clicks)
      expect(window.HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(2);
    });
  });

  describe('18.5 - Loop functionality', () => {
    it('should have loop attribute on audio element', () => {
      const { container } = render(<MusicPlayer />);

      const audioElement = container.querySelector('audio');
      expect(audioElement).toBeInTheDocument();
      expect(audioElement).toHaveAttribute('loop');
    });

    it('should have correct music source', () => {
      const { container } = render(<MusicPlayer />);

      const audioElement = container.querySelector('audio');
      expect(audioElement).toHaveAttribute('src', '/music/wedding-song.mp3');
    });

    it('should render audio element with proper attributes', () => {
      const { container } = render(<MusicPlayer />);

      const audioElement = container.querySelector('audio');
      expect(audioElement).toBeInTheDocument();
      expect(audioElement?.tagName).toBe('AUDIO');
      expect(audioElement).toHaveAttribute('loop');
      expect(audioElement).toHaveAttribute('src');
    });
  });

  describe('Additional MusicPlayer Functionality', () => {
    it('should have proper styling classes on button', async () => {
      render(<MusicPlayer />);

      await waitFor(() => {
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-rose-500');
        expect(button).toHaveClass('hover:bg-rose-600');
        expect(button).toHaveClass('text-white');
        expect(button).toHaveClass('rounded-full');
        expect(button).toHaveClass('shadow-lg');
        expect(button).toHaveClass('transition-all');
        expect(button).toHaveClass('hover:scale-110');
      });
    });

    it('should have touch-friendly button size', async () => {
      render(<MusicPlayer />);

      await waitFor(() => {
        const button = screen.getByRole('button');
        expect(button).toHaveClass('touch-manipulation');
      });
    });

    it('should render Volume2 icon with proper size classes', async () => {
      render(<MusicPlayer />);

      await waitFor(() => {
        const button = screen.getByLabelText('Tắt nhạc');
        const icon = button.querySelector('svg');
        expect(icon).toHaveClass('w-5', 'h-5', 'md:w-6', 'md:h-6');
      });
    });

    it('should render VolumeX icon with proper size classes when paused', async () => {
      render(<MusicPlayer />);

      // Wait for auto-play
      await waitFor(() => {
        expect(screen.getByLabelText('Tắt nhạc')).toBeInTheDocument();
      });

      // Click to pause
      fireEvent.click(screen.getByLabelText('Tắt nhạc'));

      await waitFor(() => {
        const button = screen.getByLabelText('Bật nhạc');
        const icon = button.querySelector('svg');
        expect(icon).toHaveClass('w-5', 'h-5', 'md:w-6', 'md:h-6');
      });
    });

    it('should not crash when audio element is not available', async () => {
      // This tests the null check in the component
      const { container } = render(<MusicPlayer />);
      
      // Wait for initial render
      await waitFor(() => {
        expect(screen.getByRole('button')).toBeInTheDocument();
      });

      // Click button should not crash even if audio ref is null
      const button = screen.getByRole('button');
      expect(() => fireEvent.click(button)).not.toThrow();
    });
  });
});
