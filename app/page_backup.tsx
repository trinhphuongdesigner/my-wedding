'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
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

    // Countdown timer
    const countdownDate = new Date('2024-12-31T10:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days')!.textContent = days.toString().padStart(2, '0');
        document.getElementById('hours')!.textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes')!.textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds')!.textContent = seconds.toString().padStart(2, '0');
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/50 to-cream-50/80 z-10"></div>
        
        {/* Hero Image - Replace with your photo */}
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

        <div className="relative z-20 text-center px-4">
          <h1 className="heading-script mb-4 animate-fade-in-up">
            Đám Cưới Của Chúng Mình
          </h1>
          <div className="divider"></div>
          <p className="font-serif text-xl md:text-2xl mt-6 tracking-widest animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            [TÊN CHÚ RỂ] & [TÊN CÔ DÂU]
          </p>
          <p className="font-sans text-sm md:text-base mt-4 text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            31 . 12 . 2024
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-rose-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Couple Introduction */}
      <section className="section-container reveal">
        <div className="text-center mb-12">
          <h2 className="heading-serif mb-2">Chúng Mình Là</h2>
          <div className="divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Groom */}
          <div className="text-center reveal">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/groom.jpg"
                alt="Chú rể"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-3">[Tên Chú Rể]</h3>
            <p className="text-rose-400 font-script text-xl mb-4">The Groom</p>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              Con ông: [Tên bố]<br />
              Con bà: [Tên mẹ]
            </p>
          </div>

          {/* Bride */}
          <div className="text-center reveal">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/bride.jpg"
                alt="Cô dâu"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-3">[Tên Cô Dâu]</h3>
            <p className="text-rose-400 font-script text-xl mb-4">The Bride</p>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              Con ông: [Tên bố]<br />
              Con bà: [Tên mẹ]
            </p>
          </div>
        </div>
      </section>

      {/* Love Story */}
      <section className="section-container bg-cream-100 reveal">
        <div className="text-center mb-12">
          <h2 className="heading-serif mb-2">Câu Chuyện Của Chúng Mình</h2>
          <div className="divider"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200"></div>
            
            {/* Story Item 1 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-serif text-xl mb-2 text-rose-400">Lần Đầu Gặp Gỡ</h3>
                  <p className="text-sm text-gray-600 mb-2">Mùa Thu 2020</p>
                  <p className="text-sm text-gray-700">
                    Chúng mình gặp nhau lần đầu vào một buổi chiều mùa thu, khi cả hai đều không ngờ rằng đó sẽ là khởi đầu cho một câu chuyện tình yêu đẹp.
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 bg-rose-400 rounded-full border-4 border-cream-100 z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>

            {/* Story Item 2 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8"></div>
              <div className="w-8 h-8 bg-rose-400 rounded-full border-4 border-cream-100 z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-serif text-xl mb-2 text-rose-400">Ngày Kỷ Niệm</h3>
                  <p className="text-sm text-gray-600 mb-2">14/02/2021</p>
                  <p className="text-sm text-gray-700">
                    Ngày Valentine đánh dấu mốc quan trọng khi chúng mình chính thức bắt đầu hành trình cùng nhau.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Item 3 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-serif text-xl mb-2 text-rose-400">Lời Cầu Hôn</h3>
                  <p className="text-sm text-gray-600 mb-2">Hè 2024</p>
                  <p className="text-sm text-gray-700">
                    Dưới ánh hoàng hôn, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất đời anh. Và em đã nói "Có".
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 bg-rose-400 rounded-full border-4 border-cream-100 z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>

            {/* Story Item 4 */}
            <div className="flex items-center reveal">
              <div className="w-1/2 pr-8"></div>
              <div className="w-8 h-8 bg-rose-400 rounded-full border-4 border-cream-100 z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-serif text-xl mb-2 text-rose-400">Đám Cưới</h3>
                  <p className="text-sm text-gray-600 mb-2">31/12/2024</p>
                  <p className="text-sm text-gray-700">
                    Ngày mà chúng mình chính thức trở thành vợ chồng, bắt đầu chương mới của cuộc đời.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden max-w-md mx-auto space-y-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm reveal">
            <h3 className="font-serif text-xl mb-2 text-rose-400">Lần Đầu Gặp Gỡ</h3>
            <p className="text-sm text-gray-600 mb-2">Mùa Thu 2020</p>
            <p className="text-sm text-gray-700">
              Chúng mình gặp nhau lần đầu vào một buổi chiều mùa thu, khi cả hai đều không ngờ rằng đó sẽ là khởi đầu cho một câu chuyện tình yêu đẹp.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm reveal">
            <h3 className="font-serif text-xl mb-2 text-rose-400">Ngày Kỷ Niệm</h3>
            <p className="text-sm text-gray-600 mb-2">14/02/2021</p>
            <p className="text-sm text-gray-700">
              Ngày Valentine đánh dấu mốc quan trọng khi chúng mình chính thức bắt đầu hành trình cùng nhau.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm reveal">
            <h3 className="font-serif text-xl mb-2 text-rose-400">Lời Cầu Hôn</h3>
            <p className="text-sm text-gray-600 mb-2">Hè 2024</p>
            <p className="text-sm text-gray-700">
              Dưới ánh hoàng hôn, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất đời anh. Và em đã nói "Có".
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm reveal">
            <h3 className="font-serif text-xl mb-2 text-rose-400">Đám Cưới</h3>
            <p className="text-sm text-gray-600 mb-2">31/12/2024</p>
            <p className="text-sm text-gray-700">
              Ngày mà chúng mình chính thức trở thành vợ chồng, bắt đầu chương mới của cuộc đời.
            </p>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="section-container text-center reveal">
        <h2 className="heading-serif mb-2">Đếm Ngược Đến Ngày Trọng Đại</h2>
        <div className="divider"></div>
        
        <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div id="days" className="font-serif text-3xl md:text-5xl text-rose-400 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Ngày</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div id="hours" className="font-serif text-3xl md:text-5xl text-rose-400 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Giờ</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div id="minutes" className="font-serif text-3xl md:text-5xl text-rose-400 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Phút</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div id="seconds" className="font-serif text-3xl md:text-5xl text-rose-400 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Giây</div>
          </div>
        </div>
      </section>

      {/* Wedding Events */}
      <section className="section-container bg-gradient-to-b from-water-50 to-earth-50 reveal">
        <div className="section-container-centered">
          <div className="text-center mb-16">
            <h2 className="font-serif-playfair text-3xl md:text-5xl font-semibold text-water-700 mb-4">
              Thân mời
            </h2>
            <p className="font-serif-crimson text-lg md:text-xl text-earth-600 mb-8">
              đến dự lễ cưới của chúng mình
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-water-400 to-earth-400 mx-auto mb-8"></div>
          </div>

          {/* Calendar Display */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-water-100">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-water-600 to-earth-600 text-white px-6 py-4">
                <h3 className="text-center font-serif-playfair text-2xl font-semibold">Tháng 12, 2024</h3>
              </div>

              {/* Days of week */}
              <div className="grid grid-cols-7 bg-water-50 border-b border-water-200">
                {['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'].map((day, index) => (
                  <div key={index} className="p-3 text-center font-sans text-sm font-medium text-gray-600 border-r border-water-200 last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-0">
                {/* December days */}
                {Array.from({length: 31}, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className={`h-16 md:h-20 border-r border-b border-gray-200 p-2 relative hover:bg-water-50 transition-colors
                      ${day === 31 ? 'bg-gradient-to-br from-earth-100 to-water-100 ring-2 ring-terracotta-400' : ''}
                    `}
                  >
                    <span className={`font-sans text-sm ${day === 31 ? 'font-bold text-terracotta-700' : 'text-gray-700'}`}>
                      {day}
                    </span>
                    {day === 31 && (
                      <div className="absolute bottom-1 left-1 right-1">
                        <div className="bg-terracotta-500 text-white text-xs px-1 py-0.5 rounded text-center font-medium">
                          Cưới
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Wedding Date Highlight */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-water-600 to-earth-600 text-white px-8 py-4 rounded-full shadow-lg">
                <svg className="w-6 h-6 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <div className="text-center">
                  <div className="font-serif-playfair text-2xl font-bold">Thứ Ba, 31 tháng 12</div>
                  <div className="font-sans text-sm opacity-90">năm 2024 (Tức ngày 1 tháng 11 năm Giáp Thìn)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Event 1: Lễ Vu Quy - Nhà Gái */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-water-200 reveal hover:shadow-xl transition-shadow">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-rose-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-rose-400 mb-1">Lễ Vu Quy</h3>
                <p className="text-sm text-gray-500">Nhà Gái</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>Thứ Ba, 31/12/2024</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>08:00 Sáng</span>
              </div>
              
              <div className="flex items-start text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>[Địa chỉ nhà gái - Số nhà, Đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố]</span>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=[địa chỉ]" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full bg-rose-400 hover:bg-rose-500 text-white font-sans text-sm py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              Xem Bản Đồ
            </a>
          </div>

          {/* Event 2: Tiệc Cưới - Nhà Gái */}
          <div className="card-event reveal">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-rose-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-rose-400 mb-1">Tiệc Cưới</h3>
                <p className="text-sm text-gray-500">Nhà Gái</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>Thứ Ba, 31/12/2024</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>11:00 Trưa</span>
              </div>
              
              <div className="flex items-start text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <span>[Tên nhà hàng/Trung tâm tiệc cưới - Địa chỉ đầy đủ]</span>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=[địa chỉ]" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full bg-rose-400 hover:bg-rose-500 text-white font-sans text-sm py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              Xem Bản Đồ
            </a>
          </div>

          {/* Event 3: Lễ Thành Hôn - Nhà Trai */}
          <div className="card-event reveal">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-rose-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-rose-400 mb-1">Lễ Thành Hôn</h3>
                <p className="text-sm text-gray-500">Nhà Trai</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>Thứ Ba, 31/12/2024</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>14:00 Chiều</span>
              </div>
              
              <div className="flex items-start text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>[Địa chỉ nhà trai - Số nhà, Đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố]</span>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=[địa chỉ]" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full bg-rose-400 hover:bg-rose-500 text-white font-sans text-sm py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              Xem Bản Đồ
            </a>
          </div>

          {/* Event 4: Tiệc Cưới - Nhà Trai */}
          <div className="card-event reveal">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-rose-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-rose-400 mb-1">Tiệc Cưới</h3>
                <p className="text-sm text-gray-500">Nhà Trai</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>Thứ Ba, 31/12/2024</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>17:00 Chiều</span>
              </div>
              
              <div className="flex items-start text-gray-700">
                <svg className="w-5 h-5 mr-3 text-rose-300 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <span>[Tên nhà hàng/Trung tâm tiệc cưới - Địa chỉ đầy đủ]</span>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=[địa chỉ]" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full bg-rose-400 hover:bg-rose-500 text-white font-sans text-sm py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              Xem Bản Đồ
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-container reveal">
        <div className="text-center mb-12">
          <h2 className="heading-serif mb-2">Album Ảnh Cưới</h2>
          <div className="divider"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 reveal group">
              <Image
                src={`/images/gallery-${index}.jpg`}
                alt={`Ảnh cưới ${index}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bank Account Section */}
      <section className="section-container bg-cream-100 reveal">
        <div className="text-center mb-12">
          <h2 className="heading-serif mb-2">Mừng Cưới</h2>
          <div className="divider"></div>
          <p className="font-sans text-sm md:text-base text-gray-600 mt-4">
            Thay lời cảm ơn sâu sắc, chúng mình xin trân trọng gửi đến quý khách
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Groom Bank Account */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center reveal">
            <div className="mb-6">
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-rose-400">Chú Rể</h3>
              <p className="font-sans text-lg font-medium">[Tên Chú Rể]</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-cream-100 rounded-lg p-6 mb-6">
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Ngân hàng:</span>
                  <span className="font-medium">[Tên Ngân Hàng]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Số tài khoản:</span>
                  <span className="font-mono font-medium">[Số TK]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Chủ tài khoản:</span>
                  <span className="font-medium uppercase">[TÊN CHỦ TK]</span>
                </div>
              </div>
            </div>

            <div className="relative w-48 h-48 mx-auto bg-white p-3 rounded-lg shadow-sm">
              <Image
                src="/images/qr-groom.png"
                alt="QR Code mừng cưới chú rể"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-gray-500 mt-3">Quét mã QR để chuyển khoản</p>
          </div>

          {/* Bride Bank Account */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center reveal">
            <div className="mb-6">
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-rose-400">Cô Dâu</h3>
              <p className="font-sans text-lg font-medium">[Tên Cô Dâu]</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-cream-100 rounded-lg p-6 mb-6">
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Ngân hàng:</span>
                  <span className="font-medium">[Tên Ngân Hàng]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Số tài khoản:</span>
                  <span className="font-mono font-medium">[Số TK]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Chủ tài khoản:</span>
                  <span className="font-medium uppercase">[TÊN CHỦ TK]</span>
                </div>
              </div>
            </div>

            <div className="relative w-48 h-48 mx-auto bg-white p-3 rounded-lg shadow-sm">
              <Image
                src="/images/qr-bride.png"
                alt="QR Code mừng cưới cô dâu"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-gray-500 mt-3">Quét mã QR để chuyển khoản</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-cream-50 to-cream-200 py-12 text-center reveal">
        <div className="max-w-2xl mx-auto px-4">
          <p className="heading-script text-3xl md:text-4xl mb-4 text-rose-400">
            Thank You
          </p>
          <div className="divider"></div>
          <p className="font-sans text-sm md:text-base text-gray-600 mb-6">
            Sự hiện diện của quý khách là niềm vui và vinh hạnh cho gia đình chúng tôi
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-rose-400 hover:text-rose-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-rose-400 hover:text-rose-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © 2024 [Tên Cô Dâu Chú Rể]. Made with ❤️
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-rose-400 hover:bg-rose-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </main>
  );
}
