'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from './components/Lightbox';
import FallingElements from './components/FallingElements';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = Array.from({ length: 8 }, (_, i) => `/images/gallery-${i + 1}.jpg`);

  useEffect(() => {
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

    // Scroll to top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // Countdown timer
    const countdownDate = new Date('2026-04-04T11:45:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => {
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Falling Hearts and Petals Animation */}
      <FallingElements />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50/70 to-beige-50/80 z-10"></div>

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

        <div className="relative z-20 text-center px-6">
          <div className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 text-rose-400 animate-fade-in-up">
            Thân mời
          </div>
          <h1 className="font-serif text-base md:text-lg lg:text-xl tracking-[0.3em] mb-12 text-gray-600 animate-fade-in-up uppercase" style={{ animationDelay: '0.2s' }}>
            ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-rose-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-container-centered reveal bg-white">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto mb-16">
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
              className="mb-4 break-inside-avoid relative overflow-hidden cursor-pointer border-4 border-white"
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
                className="w-full transition-transform duration-300 hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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

      {/* Wedding Events Section - Inspired by reference image */}
      <section className="section-container bg-cream-50 reveal">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-rose-400 mb-6">
              Tháng 4
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden max-w-lg mx-auto mb-16">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 bg-gray-50 text-gray-500 text-[10px] md:text-xs font-medium uppercase tracking-wider">
              {['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'].map((day, index) => (
                <div key={index} className="p-2 md:p-3 text-center border-r border-gray-200 last:border-r-0">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Body */}
            <div className="grid grid-cols-7">
              {/* March days (padding) */}
              {[31].map((day) => (
                <div key={`mar-${day}`} className="h-10 md:h-12 flex items-center justify-center text-gray-300 text-xs md:text-sm border-r border-b border-gray-100 last:border-r-0">
                  {day}
                </div>
              ))}

              {/* April days */}
              {Array.from({length: 30}, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className={`h-10 md:h-12 flex items-center justify-center text-xs md:text-sm border-r border-b border-gray-100 last:border-r-0 relative
                    ${day === 4 || day === 7 ? 'bg-rose-100 text-rose-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'}
                  `}
                >
                  {day}
                  {day === 4 && (
                    <Image
                      src="/images/traitim.png"
                      alt="Wedding day"
                      width={40}
                      height={40}
                      className="absolute inset-0 w-8 h-8 md:w-10 md:h-10 opacity-80 m-auto animate-heartbeat"
                    />
                  )}
                  {day === 7 && (
                    <Image
                      src="/images/traitim.png"
                      alt="Wedding day"
                      width={40}
                      height={40}
                      className="absolute inset-0 w-8 h-8 md:w-10 md:h-10 opacity-80 m-auto animate-heartbeat"
                    />
                  )}
                </div>
              ))}

              {/* May days (padding) */}
              {[1, 2, 3, 4].map((day) => (
                <div key={`may-${day}`} className="h-10 md:h-12 flex items-center justify-center text-gray-300 text-xs md:text-sm border-r border-b border-gray-100 last:border-r-0">
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Event Details - Vu Quy */}
          <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16">
            <div>
              <h3 className="font-serif text-base md:text-lg font-medium text-gray-700 mb-2">LỄ VU QUY</h3>
              <p className="text-sm md:text-base text-gray-600">VÀO LÚC 11 GIỜ 45 PHÚT</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 max-w-md mx-auto">
              <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                <div>
                  <div className="text-base md:text-xl lg:text-2xl font-light text-gray-700">THÁNG</div>
                  <div className="text-3xl md:text-4xl font-light text-rose-500">4</div>
                </div>
                <div>
                  <div className="text-base md:text-xl lg:text-2xl font-light text-gray-700">THỨ NĂM</div>
                  <div className="text-4xl md:text-5xl font-light text-rose-500">4</div>
                </div>
                <div>
                  <div className="text-base md:text-xl lg:text-2xl font-light text-gray-700">NĂM</div>
                  <div className="text-3xl md:text-4xl font-light text-rose-500">2026</div>
                </div>
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6 text-center">
                (Nhằm ngày 17 tháng 2 năm Bính Ngọ âm lịch)
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="font-serif text-lg md:text-xl text-gray-700">TẠI GRAND PALACE</h4>
              <p className="text-sm md:text-base text-gray-600 px-4">
                Địa chỉ: 56 Phạm Phú Thứ, Vĩnh Điện, Quảng Nam
              </p>
              <a
                href="https://maps.app.goo.gl/GrandPalaceQuangNam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm md:text-base px-6 md:px-8 py-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                CHỈ ĐƯỜNG
              </a>
            </div>
          </div>

          {/* Event Details - Tan Hon */}
          <div className="text-center space-y-6 md:space-y-8">
            <div>
              <h3 className="font-serif text-base md:text-lg font-medium text-gray-700 mb-2">LỄ TÂN HÔN</h3>
              <p className="text-sm md:text-base text-gray-600">VÀO LÚC 11 GIỜ 00 PHÚT</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 max-w-md mx-auto">
              <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
                <div>
                  <div className="text-base md:text-xl lg:text-2xl font-light text-gray-700">THÁNG</div>
                  <div className="text-3xl md:text-4xl font-light text-rose-500">4</div>
                </div>
                <div>
                  <div className="text-base md:text-xl lg:text-2xl font-light text-gray-700">CHỦ NHẬT</div>
                  <div className="text-4xl md:text-5xl font-light text-rose-500">7</div>
                </div>
                <div>
                  <div className="text-base md:text-xl lg:text-2xl font-light text-gray-700">NĂM</div>
                  <div className="text-3xl md:text-4xl font-light text-rose-500">2026</div>
                </div>
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6 text-center">
                (Nhằm ngày 20 tháng 2 năm Bính Ngọ âm lịch)
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="font-serif text-lg md:text-xl text-gray-700">TẠI GRAND PALACE</h4>
              <p className="text-sm md:text-base text-gray-600 px-4">
                Địa chỉ: 3 Thị trấn Chư Ty, Đức Cơ, Gia Lai
              </p>
              <a
                href="https://maps.app.goo.gl/GrandPalaceGiaLai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm md:text-base px-6 md:px-8 py-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                CHỈ ĐƯỜNG
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Couple Introduction */}
      <section className="section-container-centered bg-white reveal">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-700 mb-4">Chúng Mình Là</h2>
          <div className="w-16 h-px bg-gold-400 mx-auto"></div>
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
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl mb-3 text-gray-700">Đình Phương</h3>
            <p className="text-rose-400 font-display text-lg mb-4">The Groom</p>
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
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl mb-3 text-gray-700">Phương Hiền</h3>
            <p className="text-rose-400 font-display text-lg mb-4">The Bride</p>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              Con ông: Trần Phú<br />
              Con bà: Đỗ Thanh Liêm
            </p>
          </div>
        </div>
      </section>

      {/* Love Story */}
      <section className="section-container-centered bg-cream-50 reveal">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-700 mb-4">Câu Chuyện Của Chúng Mình</h2>
          <div className="w-16 h-px bg-gold-400 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>

            {/* Story Item 1 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-serif text-base md:text-lg mb-2 text-gray-700">Lần Đầu Gặp Gỡ</h3>
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
                  <h3 className="font-serif text-base md:text-lg mb-2 text-gray-700">Ngày Kỷ Niệm</h3>
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
                  <h3 className="font-serif text-base md:text-lg mb-2 text-gray-700">Lời Cầu Hôn</h3>
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
                  <h3 className="font-serif text-base md:text-lg mb-2 text-gray-700">Đám Cưới</h3>
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
                  <h3 className="font-serif text-base text-gray-700">Lần Đầu Gặp Gỡ</h3>
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
                  <h3 className="font-serif text-base text-gray-700">Ngày Kỷ Niệm</h3>
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
                  <h3 className="font-serif text-base text-gray-700">Lời Cầu Hôn</h3>
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
                  <h3 className="font-serif text-base text-gray-700">Đám Cưới</h3>
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

      {/* Countdown */}
      <section className="section-container-centered bg-white text-center reveal">
        <h2 className="font-serif text-2xl md:text-3xl text-gray-700 mb-4">Đếm Ngược Đến Ngày Trọng Đại</h2>
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
          <h2 className="font-serif text-2xl md:text-3xl text-gray-700 mb-4">Mừng Cưới</h2>
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
            <a href="#" className="text-gray-500 hover:text-rose-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-rose-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p className="font-sans text-xs text-gray-500">
            © 2026 Phương Hiền & Đình Phương. Made with ❤️
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </main>
  );
}