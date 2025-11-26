'use client';

import { useEffect, useState } from 'react';

interface FallingElement {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
  type: 'heart' | 'petal';
}

export default function FallingElements() {
  const [elements, setElements] = useState<FallingElement[]>([]);

  useEffect(() => {
    // Detect if mobile device for performance optimization
    const isMobile = window.innerWidth < 768;
    
    // Reduce elements on mobile: hearts 6 -> 3, petals 21 -> 10
    const heartCount = isMobile ? 3 : 6;
    const petalCount = isMobile ? 10 : 21;
    
    // Generate hearts
    const hearts: FallingElement[] = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${8 + Math.random() * 4}s`,
      type: 'heart' as const
    }));

    // Generate cherry blossom petals
    const petals: FallingElement[] = Array.from({ length: petalCount }, (_, i) => ({
      id: i + 10,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${10 + Math.random() * 8}s`,
      type: 'petal' as const
    }));

    setElements([...hearts, ...petals]);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 15 }}
    >
      {elements.map((element) => (
        <div
          key={element.id}
          className={element.type === 'heart' ? 'falling-heart' : 'falling-petal'}
          style={{
            left: element.left,
            animationDelay: element.animationDelay,
            animationDuration: element.animationDuration
          }}
        >
          {element.type === 'heart' ? (
            '❤️'
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2C10 2 8 4 8 6C8 8 10 10 10 10C10 10 12 8 12 6C12 4 10 2 10 2Z" fill="#FFE4E8" opacity="0.9"/>
              <path d="M10 10C10 10 8 12 8 14C8 16 10 18 10 18C10 18 12 16 12 14C12 12 10 10 10 10Z" fill="#FFC9D4" opacity="0.9"/>
              <path d="M2 10C2 10 4 8 6 8C8 8 10 10 10 10C10 10 8 12 6 12C4 12 2 10 2 10Z" fill="#FFD4DC" opacity="0.9"/>
              <path d="M18 10C18 10 16 8 14 8C12 8 10 10 10 10C10 10 12 12 14 12C16 12 18 10 18 10Z" fill="#FFB8C6" opacity="0.9"/>
              <path d="M4 6C4 6 6 5 7 6C8 7 8 9 8 9C8 9 6 9 5 8C4 7 4 6 4 6Z" fill="#FFAEC0" opacity="0.8"/>
              <path d="M16 6C16 6 14 5 13 6C12 7 12 9 12 9C12 9 14 9 15 8C16 7 16 6 16 6Z" fill="#FFA3B8" opacity="0.8"/>
              <path d="M4 14C4 14 6 15 7 14C8 13 8 11 8 11C8 11 6 11 5 12C4 13 4 14 4 14Z" fill="#FF98B0" opacity="0.8"/>
              <path d="M16 14C16 14 14 15 13 14C12 13 12 11 12 11C12 11 14 11 15 12C16 13 16 14 16 14Z" fill="#FF8DA8" opacity="0.8"/>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
