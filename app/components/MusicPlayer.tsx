'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    let shouldPlayOnNextInteraction = false;

    const fadeInAudio = (audio: HTMLAudioElement, duration: number = 2000) => {
      audio.volume = 0;
      const steps = 50;
      const stepDuration = duration / steps;
      const volumeIncrement = 1 / steps;
      let currentStep = 0;

      const fadeInterval = setInterval(() => {
        currentStep++;
        const newVolume = Math.min(currentStep * volumeIncrement, 1);
        audio.volume = newVolume;

        if (currentStep >= steps) {
          clearInterval(fadeInterval);
          audio.volume = 1;
        }
      }, stepDuration);

      return fadeInterval;
    };

    const tryPlayAudio = async () => {
      if (audioRef.current && !hasPlayedRef.current) {
        try {
          await audioRef.current.play();
          
          // Start fade-in effect
          fadeInAudio(audioRef.current, 2000);
          
          setIsPlaying(true);
          hasPlayedRef.current = true;
          shouldPlayOnNextInteraction = false;
        } catch (error) {
          // Mark that we should play on next real interaction
          shouldPlayOnNextInteraction = true;
        }
      }
    };

    // Try to play on first user interaction
    const handleFirstInteraction = () => {
      if (!hasPlayedRef.current || shouldPlayOnNextInteraction) {
        tryPlayAudio();
      }
    };

    // Listen for custom music trigger event from scroll
    const handleMusicTrigger = () => {
      if (!hasPlayedRef.current) {
        tryPlayAudio();
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('triggerMusic', handleMusicTrigger);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('triggerMusic', handleMusicTrigger);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // When manually playing, set volume to full immediately
        audioRef.current.volume = 1;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/wedding-song.mp3"
      />
      <button
        onClick={togglePlay}
        className="bg-rose-500 hover:bg-rose-600 text-white p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 touch-manipulation"
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>
    </>
  );
}
