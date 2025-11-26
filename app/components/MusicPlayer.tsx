'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play on mount
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          // Auto-play might be blocked by browser
          console.log('Auto-play was prevented:', error);
          setIsPlaying(false);
        }
      }
    };

    playAudio();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
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
        className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
    </>
  );
}
