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
    };
  }, []);

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50/90 to-cream-100/95 z-10"></div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Cô dâu và chú rể"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <div className="font-love-light text-5xl md:text-6xl lg:text-7xl mb-8 text-gold-600 animate-fade-in-up">
            Thân mời
          </div>
          <h1 className="font-serif text-lg md:text-xl tracking-[0.3em] mb-12 text-gray-600 animate-fade-in-up uppercase" style={{ animationDelay: '0.2s' }}>
            ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-gold-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-container-centered reveal bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Ảnh cưới 1"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt="Ảnh cưới 2"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Ảnh cưới 3"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </section>

      {/* Wedding Events Section - Inspired by reference image */}
      <section className="section-container bg-cream-50 reveal">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="font-love-light text-4xl md:text-5xl text-gold-600 mb-6">
              Tháng 11
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden max-w-lg mx-auto mb-16">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 bg-gray-50 text-gray-500 text-xs font-medium uppercase tracking-wider">
              {['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'].map((day, index) => (
                <div key={index} className="p-3 text-center border-r border-gray-200 last:border-r-0">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Body */}
            <div className="grid grid-cols-7">
              {/* October days (padding) */}
              {[28, 29, 30, 31].map((day) => (
                <div key={`oct-${day}`} className="h-12 flex items-center justify-center text-gray-300 text-sm border-r border-b border-gray-100 last:border-r-0">
                  {day}
                </div>
              ))}

              {/* November days */}
              {Array.from({length: 30}, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className={`h-12 flex items-center justify-center text-sm border-r border-b border-gray-100 last:border-r-0 relative
                    ${day === 11 ? 'bg-rose-100 text-rose-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'}
                  `}
                >
                  {day}
                  {day === 11 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full"></div>
                  )}
                </div>
              ))}

              {/* December days (padding) */}
              {[1, 2].map((day) => (
                <div key={`dec-${day}`} className="h-12 flex items-center justify-center text-gray-300 text-sm border-r border-b border-gray-100 last:border-r-0">
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">TIỆC THÂN MẬT NHÀ TRAI ĐƯỢC TỔ CHỨC</h3>
              <p className="text-gray-600">VÀO LÚC 11 GIỜ 00 PHÚT</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 max-w-md mx-auto">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-light text-gray-700">THÁNG</div>
                  <div className="text-4xl font-light text-rose-500">11</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-gray-700">THỨ HAI</div>
                  <div className="text-4xl font-light text-rose-500">11</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-gray-700">NĂM</div>
                  <div className="text-4xl font-light text-rose-500">2024</div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-6 text-center">
                (Tức ngày 11 tháng 10 năm Giáp Thìn)
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-xl text-gray-700">TẠI TƯ GIA NHÀ TRAI</h4>
              <p className="text-gray-600">
                Địa chỉ: Xóm 6, xã Nghĩa Đồng, huyện Tân Kỳ, tỉnh Nghệ An.
              </p>
              <a
                href="https://maps.app.goo.gl/WmW7ZRaCvtGv9hXc8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white text-sm px-6 py-2 rounded-full transition-colors duration-300"
              >
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
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Chú rể"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl mb-3 text-gray-700">[Tên Chú Rể]</h3>
            <p className="text-gray-600 font-script text-lg mb-4">The Groom</p>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              Con ông: [Tên bố]<br />
              Con bà: [Tên mẹ]
            </p>
          </div>

          {/* Bride */}
          <div className="text-center reveal">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1494790108755-2616c5e8d31d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Cô dâu"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            <h3 className="font-serif text-xl md:text-2xl mb-3 text-gray-700">[Tên Cô Dâu]</h3>
            <p className="text-gray-600 font-script text-lg mb-4">The Bride</p>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              Con ông: [Tên bố]<br />
              Con bà: [Tên mẹ]
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

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>

            {/* Story Item 1 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-serif text-lg mb-2 text-gray-700">Lần Đầu Gặp Gỡ</h3>
                  <p className="text-sm text-gray-500 mb-2">Mùa Thu 2020</p>
                  <p className="text-sm text-gray-600">
                    Chúng mình gặp nhau lần đầu vào một buổi chiều mùa thu, khi cả hai đều không ngờ rằng đó sẽ là khởi đầu cho một câu chuyện tình yêu đẹp.
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 bg-rose-400 rounded-full border-4 border-white z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>

            {/* Story Item 2 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-full border-4 border-white z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-serif text-lg mb-2 text-gray-700">Ngày Kỷ Niệm</h3>
                  <p className="text-sm text-gray-500 mb-2">14/02/2021</p>
                  <p className="text-sm text-gray-600">
                    Ngày Valentine đánh dấu mốc quan trọng khi chúng mình chính thức bắt đầu hành trình cùng nhau.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Item 3 */}
            <div className="mb-12 flex items-center reveal">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-serif text-lg mb-2 text-gray-700">Lời Cầu Hôn</h3>
                  <p className="text-sm text-gray-500 mb-2">Hè 2024</p>
                  <p className="text-sm text-gray-600">
                    Dưới ánh hoàng hôn, anh đã quỳ gối và hỏi em câu hỏi quan trọng nhất đời anh. Và em đã nói "Có".
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 bg-gold-400 rounded-full border-4 border-white z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>

            {/* Story Item 4 */}
            <div className="flex items-center reveal">
              <div className="w-1/2 pr-8"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-blue-400 rounded-full border-4 border-white z-10"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-serif text-lg mb-2 text-gray-700">Đám Cưới</h3>
                  <p className="text-sm text-gray-500 mb-2">11/11/2024</p>
                  <p className="text-sm text-gray-600">
                    Ngày mà chúng mình chính thức trở thành vợ chồng, bắt đầu chương mới của cuộc đời.
                  </p>
                </div>
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
            <div id="days" className="font-serif text-3xl md:text-4xl text-rose-500 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Ngày</div>
          </div>
          <div className="bg-cream-50 rounded-lg p-4 md:p-6 border border-gray-200">
            <div id="hours" className="font-serif text-3xl md:text-4xl text-blue-500 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Giờ</div>
          </div>
          <div className="bg-cream-50 rounded-lg p-4 md:p-6 border border-gray-200">
            <div id="minutes" className="font-serif text-3xl md:text-4xl text-gold-500 mb-2">00</div>
            <div className="font-sans text-xs md:text-sm text-gray-600 uppercase tracking-wide">Phút</div>
          </div>
          <div className="bg-cream-50 rounded-lg p-4 md:p-6 border border-gray-200">
            <div id="seconds" className="font-serif text-3xl md:text-4xl text-rose-500 mb-2">00</div>
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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Groom Bank Account */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 text-center reveal border border-gray-200">
            <div className="mb-6">
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-gray-700">Chú Rể</h3>
              <p className="font-sans text-lg font-medium">[Tên Chú Rể]</p>
            </div>

            <div className="bg-cream-50 rounded-lg p-6 mb-6">
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
              <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-500">
                QR Code
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Quét mã QR để chuyển khoản</p>
          </div>

          {/* Bride Bank Account */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 text-center reveal border border-gray-200">
            <div className="mb-6">
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-gray-700">Cô Dâu</h3>
              <p className="font-sans text-lg font-medium">[Tên Cô Dâu]</p>
            </div>

            <div className="bg-cream-50 rounded-lg p-6 mb-6">
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
              <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-500">
                QR Code
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Quét mã QR để chuyển khoản</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 text-center reveal border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-script text-3xl md:text-4xl mb-4 text-gold-600">
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
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
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
        className="fixed bottom-8 right-8 bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </main>
  );
}