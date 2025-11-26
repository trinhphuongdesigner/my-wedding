'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from './components/Lightbox';
import FallingElements from './components/FallingElements';
import MusicPlayer from './components/MusicPlayer';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [heartBursts, setHeartBursts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const galleryImages = Array.from({ length: 8 }, (_, i) => `/images/gallery-${i + 1}.jpg`);

  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo(0, 0);
    
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Scroll to top button visibility and trigger music
    let hasTriggeredMusic = false;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
      
      // Trigger music when user scrolls past 300px (same threshold as scroll-to-top button)
      if (scrollY > 300 && !hasTriggeredMusic) {
        hasTriggeredMusic = true;
        window.dispatchEvent(new CustomEvent('triggerMusic'));
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Heart burst effect on click - Reduced on mobile for performance
    const handleClick = (e: MouseEvent) => {
      // Limit heart bursts on mobile (only 1 in 3 clicks)
      const isMobile = window.innerWidth < 768;
      if (isMobile && Math.random() > 0.33) return;
      
      const newHeart = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setHeartBursts(prev => [...prev, newHeart]);
      
      // Remove heart after animation completes
      setTimeout(() => {
        setHeartBursts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 1000);
    };

    document.addEventListener('click', handleClick);

    // Countdown timer - Updated to 4/4/2026 (Saturday) - Vu Quy event
    const countdownDate = new Date('2026-04-04T11:45:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const daysElement = document.getElementById('days');
      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
      } else {
        // When wedding date arrives, display 00 for all values
        if (daysElement) daysElement.textContent = '00';
        if (hoursElement) hoursElement.textContent = '00';
        if (minutesElement) minutesElement.textContent = '00';
        if (secondsElement) secondsElement.textContent = '00';
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => {
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Sticky Header - Shows when scrolling */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-blue-600/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ${showScrollTop ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="font-display text-2xl md:text-3xl text-white">
              Phương & Hiền
            </div>
            <div className="hidden md:block h-6 w-px bg-white/30"></div>
            <div className="hidden md:flex flex-col">
              <span className="font-event text-xs text-white/80 uppercase tracking-wider">Save Our Date</span>
              <span className="font-event text-sm text-white">04.04.2026</span>
            </div>
          </div>
          <div className="md:hidden font-event text-sm text-white">04.04.2026</div>
        </div>
      </div>
      
      {/* Falling Hearts and Petals Animation */}
      <FallingElements />
      
      {/* Heart Burst Effect on Click */}
      {heartBursts.map(heart => (
        <div
          key={heart.id}
          className="heart-burst"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`
          }}
        >
          ❤️
        </div>
      ))}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blue overlay for better text contrast */}
        <div className="absolute inset-0 bg-blue-400/40 z-10"></div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-couple.jpg"
            alt="Cô dâu và chú rể"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          {/* Text container with blue background box */}
          <div className="inline-block relative">
            {/* Fireworks around the box - More and Bigger */}
            <div className="firework-container">
              {/* Top left fireworks - 16 rays */}
              {[...Array(16)].map((_, i) => (
                <div
                  key={`tl-${i}`}
                  className="firework bg-yellow-300"
                  style={{
                    top: '-80px',
                    left: '-80px',
                    width: '6px',
                    height: '6px',
                    '--tx': `${Math.cos(i * Math.PI / 8) * 80}px`,
                    '--ty': `${Math.sin(i * Math.PI / 8) * 80}px`,
                    animationDelay: `${i * 0.08}s`
                  } as React.CSSProperties}
                />
              ))}
              
              {/* Top right fireworks - 16 rays */}
              {[...Array(16)].map((_, i) => (
                <div
                  key={`tr-${i}`}
                  className="firework bg-pink-300"
                  style={{
                    top: '-80px',
                    right: '-80px',
                    width: '6px',
                    height: '6px',
                    '--tx': `${Math.cos(i * Math.PI / 8) * 80}px`,
                    '--ty': `${Math.sin(i * Math.PI / 8) * 80}px`,
                    animationDelay: `${i * 0.08 + 0.4}s`
                  } as React.CSSProperties}
                />
              ))}
              
              {/* Bottom left fireworks - 16 rays */}
              {[...Array(16)].map((_, i) => (
                <div
                  key={`bl-${i}`}
                  className="firework bg-blue-300"
                  style={{
                    bottom: '-80px',
                    left: '-80px',
                    width: '6px',
                    height: '6px',
                    '--tx': `${Math.cos(i * Math.PI / 8) * 80}px`,
                    '--ty': `${Math.sin(i * Math.PI / 8) * 80}px`,
                    animationDelay: `${i * 0.08 + 0.8}s`
                  } as React.CSSProperties}
                />
              ))}
              
              {/* Bottom right fireworks - 16 rays */}
              {[...Array(16)].map((_, i) => (
                <div
                  key={`br-${i}`}
                  className="firework bg-purple-300"
                  style={{
                    bottom: '-80px',
                    right: '-80px',
                    width: '6px',
                    height: '6px',
                    '--tx': `${Math.cos(i * Math.PI / 8) * 80}px`,
                    '--ty': `${Math.sin(i * Math.PI / 8) * 80}px`,
                    animationDelay: `${i * 0.08 + 1.2}s`
                  } as React.CSSProperties}
                />
              ))}
              
              {/* Center top fireworks */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`ct-${i}`}
                  className="firework bg-red-300"
                  style={{
                    top: '-100px',
                    left: '50%',
                    width: '6px',
                    height: '6px',
                    '--tx': `${Math.cos(i * Math.PI / 6) * 70}px`,
                    '--ty': `${Math.sin(i * Math.PI / 6) * 70}px`,
                    animationDelay: `${i * 0.1}s`
                  } as React.CSSProperties}
                />
              ))}
              
              {/* Center bottom fireworks */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`cb-${i}`}
                  className="firework bg-green-300"
                  style={{
                    bottom: '-100px',
                    left: '50%',
                    width: '6px',
                    height: '6px',
                    '--tx': `${Math.cos(i * Math.PI / 6) * 70}px`,
                    '--ty': `${Math.sin(i * Math.PI / 6) * 70}px`,
                    animationDelay: `${i * 0.1 + 0.6}s`
                  } as React.CSSProperties}
                />
              ))}
            </div>
            
            {/* Blue box behind couple names with tilt animation */}
            <div className="bg-blue-600/90 px-6 md:px-10 lg:px-12 py-4 md:py-6 mb-4 md:mb-6 animate-fade-in-up animate-tilt">
              <div className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
                Phương & Hiền
              </div>
            </div>
            
            {/* Save Our Date Text */}
            <h1 className="font-event text-sm md:text-base lg:text-lg tracking-[0.3em] mb-3 md:mb-4 text-white animate-fade-in-up uppercase" style={{ animationDelay: '0.2s', textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}>
              SAVE OUR DATE
            </h1>
            
            {/* Wedding Date */}
            <div className="font-event text-3xl md:text-4xl lg:text-5xl text-white animate-fade-in-up" style={{ animationDelay: '0.4s', textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}>
              04.04.2026
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-rose-400 transition-all duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Couple Introduction */}
      <section className="section-container-centered bg-white reveal">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-gray-700 mb-4">Chúng Mình Là</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Groom */}
          <div className="text-center reveal">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/images/groom.jpg"
                alt="Chú rể"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                loading="lazy"
              />
            </div>
            <h3 className="font-names text-2xl md:text-3xl mb-3 text-gray-700">Đình Phương</h3>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              Con ông: Trịnh Đình Bình<br />
              Con bà: Đinh Thị Thơm
            </p>
          </div>

          {/* Bride */}
          <div className="text-center reveal">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/images/bride.jpg"
                alt="Cô dâu"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                loading="lazy"
              />
            </div>
            <h3 className="font-names text-2xl md:text-3xl mb-3 text-gray-700">Phương Hiền</h3>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              Con ông: Trần Phú<br />
              Con bà: Đỗ Thanh Liêm
            </p>
          </div>
        </div>
      </section>

      {/* Love Story - MOVED BEFORE CALENDAR */}
      <section className="section-container-centered bg-cream-50 reveal">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-gray-700 mb-4">Câu Chuyện Tình Yêu</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>

            {/* Story Item 1 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-sans text-base md:text-lg mb-2 text-gray-700 font-semibold">Lần Đầu Gặp Gỡ</h3>
                  <p className="font-sans text-xs md:text-sm text-gray-500 mb-2">Mùa Thu 2020</p>
                  <p className="font-sans text-xs md:text-sm text-gray-600">
                    Chúng mình gặp nhau lần đầu vào một buổi chiều mùa thu, khi cả hai đều không ngờ rằng đó sẽ là khởi đầu cho một câu chuyện tình yêu đẹp.
                  </p>
                </div>
              </div>
              <div className="w-3 h-3 bg-rose-400 rounded-full border-4 border-white z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>

            {/* Story Item 2 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full border-4 border-white z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-sans text-base md:text-lg mb-2 text-gray-700 font-semibold">Ngày Kỷ Niệm</h3>
                  <p className="font-sans text-xs md:text-sm text-gray-500 mb-2">14/02/2021</p>
                  <p className="font-sans text-xs md:text-sm text-gray-600">
                    Ngày Valentine đánh dấu mốc quan trọng khi chúng mình chính thức bắt đầu hành trình cùng nhau.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Item 3 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-sans text-base md:text-lg mb-2 text-gray-700 font-semibold">Lời Cầu Hôn</h3>
                  <p className="font-sans text-xs md:text-sm text-gray-500 mb-2">Hè 2024</p>
                  <p className="font-sans text-xs md:text-sm text-gray-600">
                    Dưới ánh hoàng hôn, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất đời anh. Và em đã nói "Có".
                  </p>
                </div>
              </div>
              <div className="w-3 h-3 bg-gold-400 rounded-full border-4 border-white z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>

            {/* Story Item 4 */}
            <div className="flex items-center reveal">
              <div className="w-1/2 pr-8"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-rose-400 to-blue-400 rounded-full border-4 border-white z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-sans text-base md:text-lg mb-2 text-gray-700 font-semibold">Đám Cưới</h3>
                  <p className="font-sans text-xs md:text-sm text-gray-500 mb-2">04/04/2026</p>
                  <p className="font-sans text-xs md:text-sm text-gray-600">
                    Ngày mà chúng mình chính thức trở thành vợ chồng, bắt đầu chương mới của cuộc đời.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {/* Story Item 1 */}
            <div className="reveal">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-rose-400 rounded-full flex-shrink-0"></div>
                  <h3 className="font-sans text-base text-gray-700 font-semibold">Lần Đầu Gặp Gỡ</h3>
                </div>
                <p className="font-sans text-xs text-gray-500 mb-2">Mùa Thu 2020</p>
                <p className="font-sans text-sm text-gray-600">
                  Chúng mình gặp nhau lần đầu vào một buổi chiều mùa thu, khi cả hai đều không ngờ rằng đó sẽ là khởi đầu cho một câu chuyện tình yêu đẹp.
                </p>
              </div>
            </div>

            {/* Story Item 2 */}
            <div className="reveal">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <h3 className="font-sans text-base text-gray-700 font-semibold">Ngày Kỷ Niệm</h3>
                </div>
                <p className="font-sans text-xs text-gray-500 mb-2">14/02/2021</p>
                <p className="font-sans text-sm text-gray-600">
                  Ngày Valentine đánh dấu mốc quan trọng khi chúng mình chính thức bắt đầu hành trình cùng nhau.
                </p>
              </div>
            </div>

            {/* Story Item 3 */}
            <div className="reveal">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-gold-400 rounded-full flex-shrink-0"></div>
                  <h3 className="font-sans text-base text-gray-700 font-semibold">Lời Cầu Hôn</h3>
                </div>
                <p className="font-sans text-xs text-gray-500 mb-2">Hè 2024</p>
                <p className="font-sans text-sm text-gray-600">
                  Dưới ánh hoàng hôn, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất đời anh. Và em đã nói "Có".
                </p>
              </div>
            </div>

            {/* Story Item 4 */}
            <div className="reveal">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-gradient-to-br from-rose-400 to-blue-400 rounded-full flex-shrink-0"></div>
                  <h3 className="font-sans text-base text-gray-700 font-semibold">Đám Cưới</h3>
                </div>
                <p className="font-sans text-xs text-gray-500 mb-2">04/04/2026</p>
                <p className="font-sans text-sm text-gray-600">
                  Ngày mà chúng mình chính thức trở thành vợ chồng, bắt đầu chương mới của cuộc đời.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Optimized for mobile */}
      <section className="section-container-centered reveal bg-white">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-3 md:gap-4 max-w-6xl mx-auto mb-16">
          {[
            { index: 1, height: 600 },
            { index: 2, height: 500 },
            { index: 3, height: 550 },
            { index: 4, height: 650 },
            { index: 5, height: 500 },
            { index: 6, height: 600 },
            { index: 7, height: 550 },
            { index: 8, height: 500 }
          ].map(({ index, height }) => (
            <div
              key={index}
              className="mb-3 md:mb-4 break-inside-avoid relative overflow-hidden cursor-pointer border-3 md:border-4 border-white group touch-manipulation"
              onClick={() => {
                setLightboxIndex(index - 1);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={`/images/gallery-${index}.jpg`}
                alt={`Ảnh cưới ${index}`}
                width={400}
                height={height}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* Wedding Events Section - Reorganized Layout */}
      <section className="section-container bg-cream-50 reveal">
        <div className="max-w-4xl mx-auto">

          {/* Calendar Section */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-gray-700 mb-8">Tháng 4</h2>
            
            {/* Calendar */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm max-w-2xl mx-auto">
              {/* Calendar Header */}
              <div className="grid grid-cols-7 mb-4">
                {['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'].map((day, index) => (
                  <div key={index} className="text-center font-sans text-xs text-gray-400 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Body */}
              <div className="grid grid-cols-7 gap-2">
                {/* March padding: 30, 31 */}
                {[30, 31].map((day) => (
                  <div key={`mar-${day}`} className="aspect-square flex items-center justify-center text-gray-300 text-sm font-sans">
                    {day}
                  </div>
                ))}

                {/* April days 1-30 */}
                {Array.from({length: 30}, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className={`aspect-square flex items-center justify-center text-sm font-sans relative
                      ${(day === 4 || day === 11) ? 'text-gray-700 font-semibold' : 'text-gray-600'}
                    `}
                  >
                    {/* Heart icon for both day 4 and day 11 */}
                    {(day === 4 || day === 11) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/images/traitim.png"
                          alt="Wedding day"
                          width={50}
                          height={50}
                          className="w-full h-full object-contain opacity-30 animate-heartbeat"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <span className="relative z-10">{day}</span>
                  </div>
                ))}

                {/* May padding to complete the grid */}
                {[1, 2, 3].map((day) => (
                  <div key={`may-${day}`} className="aspect-square flex items-center justify-center text-gray-300 text-sm font-sans">
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event 1: TIỆC THÂN MẬT NHÀ GÁI - 4/4/2026 */}
          <div className="mb-12">
            <p className="font-event text-gray-400 text-sm md:text-base text-center mb-6 tracking-widest">
              TIỆC THÂN MẬT NHÀ GÁI ĐƯỢC TỔ CHỨC<br />
              VÀO LÚC 11 GIỜ 45 PHÚT
            </p>

            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
              {/* Date Display - THÁNG | THỨ BẢY | NĂM */}
              <div className="flex items-center justify-center gap-6 md:gap-12 mb-8">
                <div className="text-center">
                  <div className="font-event text-gray-400 text-sm md:text-base mb-2 tracking-widest">THÁNG</div>
                  <div className="font-event text-6xl md:text-7xl text-gray-300">4</div>
                </div>
                
                <div className="h-20 md:h-24 w-px bg-gray-200"></div>
                
                <div className="text-center">
                  <div className="font-event text-gray-400 text-sm md:text-base mb-2 tracking-widest">THỨ BẢY</div>
                  <div className="font-event text-6xl md:text-7xl text-gray-300">4</div>
                </div>
                
                <div className="h-20 md:h-24 w-px bg-gray-200"></div>
                
                <div className="text-center">
                  <div className="font-event text-gray-400 text-sm md:text-base mb-2 tracking-widest">NĂM</div>
                  <div className="font-event text-6xl md:text-7xl text-gray-300">2026</div>
                </div>
              </div>

              {/* Lunar Date */}
              <p className="text-center font-sans text-sm md:text-base text-gray-500 mb-8">
                (Tức ngày 17 tháng 2 năm Bính Ngọ âm lịch)
              </p>

              {/* Venue Title */}
              <h3 className="text-center font-event text-xl md:text-2xl text-gray-400 tracking-widest mb-6">
                TẠI TƯ GIA NHÀ GÁI
              </h3>

              {/* Address */}
              <p className="text-center font-sans text-base md:text-lg text-gray-600 leading-relaxed mb-8 px-4">
                Địa chỉ: 56 Phạm Phú Thứ, Vĩnh Điện, Quảng Nam
              </p>

              {/* Direction Button */}
              <div className="text-center">
                <a
                  href="https://maps.app.goo.gl/5nGBPV6fn27ouonG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-rose-500 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="font-sans text-sm md:text-base tracking-wider">CHỈ ĐƯỜNG</span>
                </a>
              </div>
            </div>
          </div>

          {/* Event 2: TIỆC THÂN MẬT NHÀ TRAI - 11/4/2026 */}
          <div className="mb-12">
            <p className="font-event text-gray-400 text-sm md:text-base text-center mb-6 tracking-widest">
              TIỆC THÂN MẬT NHÀ TRAI ĐƯỢC TỔ CHỨC<br />
              VÀO LÚC 11 GIỜ 00 PHÚT
            </p>

            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
              {/* Date Display - THÁNG | THỨ BẢY | NĂM */}
              <div className="flex items-center justify-center gap-6 md:gap-12 mb-8">
                <div className="text-center">
                  <div className="font-event text-gray-400 text-sm md:text-base mb-2 tracking-widest">THÁNG</div>
                  <div className="font-event text-6xl md:text-7xl text-gray-300">4</div>
                </div>
                
                <div className="h-20 md:h-24 w-px bg-gray-200"></div>
                
                <div className="text-center">
                  <div className="font-event text-gray-400 text-sm md:text-base mb-2 tracking-widest">THỨ BẢY</div>
                  <div className="font-event text-6xl md:text-7xl text-gray-300">11</div>
                </div>
                
                <div className="h-20 md:h-24 w-px bg-gray-200"></div>
                
                <div className="text-center">
                  <div className="font-event text-gray-400 text-sm md:text-base mb-2 tracking-widest">NĂM</div>
                  <div className="font-event text-6xl md:text-7xl text-gray-300">2026</div>
                </div>
              </div>

              {/* Lunar Date */}
              <p className="text-center font-sans text-sm md:text-base text-gray-500 mb-8">
                (Tức ngày 24 tháng 3 năm Bính Ngọ âm lịch)
              </p>

              {/* Venue Title */}
              <h3 className="text-center font-event text-xl md:text-2xl text-gray-400 tracking-widest mb-6">
                TẠI TƯ GIA NHÀ TRAI
              </h3>

              {/* Address */}
              <p className="text-center font-sans text-base md:text-lg text-gray-600 leading-relaxed mb-8 px-4">
                Địa chỉ: 3 Thị trấn Chư Ty, Đức Cơ, Gia Lai
              </p>

              {/* Direction Button */}
              <div className="text-center">
                <a
                  href="https://maps.app.goo.gl/XEVbDMVyagu8itUZ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-rose-500 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="font-sans text-sm md:text-base tracking-wider">CHỈ ĐƯỜNG</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Countdown */}
      <section className="section-container-centered bg-white text-center reveal">
        <h2 className="font-display text-4xl md:text-5xl text-gray-700 mb-4">Đếm Ngược Đến Ngày Trọng Đại</h2>
        <div className="w-16 h-px bg-gold-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
          <div className="bg-cream-50 rounded-lg p-4 md:p-6 border border-gray-200">
            <div id="days" className="font-serif text-3xl md:text-4xl text-rose-400 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Ngày</div>
          </div>
          <div className="bg-cream-50 rounded-lg p-4 md:p-6 border border-gray-200">
            <div id="hours" className="font-serif text-3xl md:text-4xl text-blue-400 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Giờ</div>
          </div>
          <div className="bg-cream-50 rounded-lg p-4 md:p-6 border border-gray-200">
            <div id="minutes" className="font-serif text-3xl md:text-4xl text-gold-400 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Phút</div>
          </div>
          <div className="bg-cream-50 rounded-lg p-4 md:p-6 border border-gray-200">
            <div id="seconds" className="font-serif text-3xl md:text-4xl text-rose-400 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Giây</div>
          </div>
        </div>
      </section>

      {/* Bank Account Section */}
      <section className="section-container-centered bg-cream-50 reveal">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-gray-700 mb-4">Mừng Cưới</h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mb-4"></div>
          <p className="font-sans text-sm md:text-base text-gray-600">
            Thay lời cảm ơn sâu sắc, chúng mình xin trân trọng gửi đến quý khách
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Groom Bank Account */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 text-center reveal">
            <div className="mb-6">
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-gray-700">Chú Rể</h3>
              <p className="font-serif text-lg font-medium">Trịnh Đình Phương</p>
            </div>

            <div className="bg-cream-50 rounded-lg p-6 mb-6">
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-600">Ngân hàng:</span>
                  <span className="font-sans font-medium">Techcombank</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-600">Chi nhánh:</span>
                  <span className="font-sans font-medium text-xs">Hải Châu Đà Nẵng</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-600">Số tài khoản:</span>
                  <span className="font-mono font-medium">9386592529</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-600">Chủ tài khoản:</span>
                  <span className="font-sans font-medium uppercase text-xs">TRỊNH ĐÌNH PHƯƠNG</span>
                </div>
              </div>
            </div>

            <div className="relative w-48 h-48 mx-auto bg-white p-3 rounded-lg border border-gray-100">
              <Image
                src="/images/qr-groom.png"
                alt="QR chuyển khoản chú rể"
                fill
                className="object-contain p-2"
                loading="lazy"
              />
            </div>
            <p className="font-sans text-xs text-gray-500 mt-3">Quét mã QR để chuyển khoản</p>
          </div>

          {/* Bride Bank Account */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 text-center reveal">
            <div className="mb-6">
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-gray-700">Cô Dâu</h3>
              <p className="font-serif text-lg font-medium">Trần Đỗ Phương Hiền</p>
            </div>

            <div className="bg-cream-50 rounded-lg p-6 mb-6">
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-600">Ngân hàng:</span>
                  <span className="font-sans font-medium">Techcombank</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-600">Chi nhánh:</span>
                  <span className="font-sans font-medium text-xs">Hải Châu Đà Nẵng</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-600">Số tài khoản:</span>
                  <span className="font-mono font-medium">9386592529</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-sm text-gray-600">Chủ tài khoản:</span>
                  <span className="font-sans font-medium uppercase text-xs">TRẦN ĐỖ PHƯƠNG HIỀN</span>
                </div>
              </div>
            </div>

            <div className="relative w-48 h-48 mx-auto bg-white p-3 rounded-lg border border-gray-100">
              <Image
                src="/images/qr-bride.png"
                alt="QR chuyển khoản cô dâu"
                fill
                className="object-contain p-2"
                loading="lazy"
              />
            </div>
            <p className="font-sans text-xs text-gray-500 mt-3">Quét mã QR để chuyển khoản</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 text-center reveal border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-display text-3xl md:text-4xl mb-4 text-rose-400">
            Thank You
          </p>
          <div className="w-16 h-px bg-gold-400 mx-auto mb-6"></div>
          <p className="font-sans text-sm md:text-base text-gray-600 mb-6">
            Sự hiện diện của quý khách là niềm vui và vinh hạnh cho gia đình chúng tôi
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-500 hover:text-rose-500 transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-500 transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p className="font-sans text-xs text-gray-500">
            © 2026 Phương Hiền & Đình Phương. Made with ❤️
          </p>
        </div>
      </footer>

      {/* Fixed Position Controls - Optimized for mobile */}
      <div className="fixed bottom-3 right-3 md:bottom-4 md:right-4 flex flex-col gap-2 md:gap-3 z-40">
        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`bg-gold-500 hover:bg-gold-600 text-white p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 touch-manipulation ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>

        {/* Music Player */}
        <MusicPlayer />
      </div>
    </main>
  );
}