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
    // Generate hearts
    const hearts: FallingElement[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${8 + Math.random() * 4}s`,
      type: 'heart' as const
    }));

    // Generate petals
    const petals: FallingElement[] = Array.from({ length: 15 }, (_, i) => ({
      id: i + 10,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${10 + Math.random() * 5}s`,
      type: 'petal' as const
    }));

    setElements([...hearts, ...petals]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
          {element.type === 'heart' ? '❤️' : '🌸'}
        </div>
      ))}
    </div>
  );
}
