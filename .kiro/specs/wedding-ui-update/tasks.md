# Implementation Plan - Wedding UI Update

- [x] 1. Đổi tên các file ảnh theo chuẩn IMAGES_GUIDE.md





  - Đổi tên các file ảnh hiện có trong public/images/ theo naming convention
  - Đảm bảo có đủ các file: hero-couple.jpg, groom.jpg, bride.jpg, gallery-1.jpg đến gallery-8.jpg, qr-groom.png, qr-bride.png
  - Nếu thiếu file, tạo placeholder hoặc sử dụng ảnh tạm
  - Trái tim trong lịch sử dụng "traitim.png"
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 2. Cấu hình Google Fonts và local fonts trong layout.tsx





  - Import các font từ next/font/google: Great Vibes (display), Playfair Display (serif), Montserrat (sans)
  - Import iCiel Rift Regular từ public/fonts sử dụng next/font/local
  - Cấu hình với Vietnamese language support (subsets: ['latin', 'vietnamese'])
  - Thêm font variables vào HTML element
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

- [x] 3. Cập nhật Tailwind configuration





  - Thêm custom colors: cream, beige, rose, gold với các shades
  - Thêm font family variables: font-display, font-serif, font-sans, font-event
  - Thêm custom aspect ratio: 3/4
  - _Requirements: 1.1, 2.2, 2.3, 2.4, 2.5, 6.2_

- [x] 4. Cập nhật globals.css với font classes





  - Định nghĩa CSS variables cho fonts
  - Thêm base styles cho typography
  - Đảm bảo font-display: swap cho performance
  - _Requirements: 2.1, 2.5_

- [x] 5. Cập nhật Hero Section





  - Thay đổi image path sang /images/hero-couple.jpg
  - Áp dụng font-display cho tiêu đề chính
  - Cập nhật color scheme sang pastel (cream, rose)
  - Giảm opacity của overlay
  - Giữ nguyên nội dung văn bản tiếng Việt
  - _Requirements: 1.1, 2.2, 4.1, 7.1_

- [x] 6. Cập nhật Photo Gallery Section





  - Thay đổi image paths sang /images/gallery-{1-8}.jpg
  - Áp dụng grid layout: grid-cols-1 md:grid-cols-3
  - Áp dụng aspect ratio 3:4 cho containers
  - Thêm hover effects: transition và scale
  - Cập nhật spacing: gap-4
  - Thay rounded-lg thành rounded (minimal border radius)
  - _Requirements: 1.5, 4.2, 6.1, 6.2, 6.3, 6.4, 8.1, 8.3_

- [x] 6.1. Cập nhật thông tin cô dâu chú rể và sự kiện cưới





  - Cập nhật thông tin chú rể: Đình Phương, con ông Trịnh Đình Bình và bà Đinh Thị Thơm
  - Cập nhật thông tin cô dâu: Phương Hiền, con ông Trần Phú và bà Đỗ Thanh Liêm
  - Cập nhật thông tin sự kiện Vu quy: 11h45 ngày 4/4/2026 (Thứ 5) nhằm 17/2/2026 âm lịch tại Grand Palace, 56 Phạm Phú Thứ, Vĩnh Điện, Quảng Nam
  - Cập nhật thông tin sự kiện Tân hôn: 11h00 ngày 7/4/2026 (Chủ nhật) nhằm 20/2/2026 âm lịch tại Grand Palace, 3 Thị trấn Chư Ty, Đức Cơ, Gia Lai
  - Cập nhật thông tin ngân hàng chú rể: Trịnh Đình Phương, STK 9386592529, Techcombank Chi nhánh Hải Châu Đà Nẵng
  - Cập nhật thông tin ngân hàng cô dâu: Trần Đỗ Phương Hiền, STK 9386592529, Techcombank Chi nhánh Hải Châu Đà Nẵng
  - Cập nhật countdown date sang 4/4/2026
  - Cập nhật calendar hiển thị tháng 4/2026 với highlight ngày 4 và 7
  - Cập nhật links Google Maps cho cả hai địa điểm
  - _Requirements: 7.1, 7.2, 5.2, 5.3, 5.4, 5.5_

- [x] 7. Cập nhật Wedding Events Section





  - Áp dụng font-serif cho section headings
  - Áp dụng font-event (iCiel Rift Regular) cho tháng, ngày, năm
  - Cập nhật color scheme sang pastel (text-gray-300 cho labels)
  - Thay shadow bằng border mỏng (border border-gray-200)
  - Highlight ngày cưới (11) với bg-rose-100
  - Thêm icon trái tim từ /images/traitim.png trên ngày cưới (11) trong calendar
  - Áp dụng text-4xl hoặc text-5xl cho date numbers với font-event
  - Đảm bảo có icon và link "CHỈ ĐƯỜNG"
  - Format thời gian: "XX GIỜ XX PHÚT" uppercase
  - Giữ nguyên nội dung văn bản
  - _Requirements: 1.1, 1.4, 2.3, 2.5, 5.2, 5.3, 5.4, 5.5, 5.6, 7.1, 7.2_

- [x] 8. Cập nhật Couple Introduction Section





  - Thay đổi image paths sang /images/groom.jpg và /images/bride.jpg
  - Áp dụng font-serif cho tên
  - Áp dụng font-display cho role text
  - Thay shadow-lg bằng border-2 border-gray-200 cho avatars
  - Cập nhật color scheme sang pastel
  - Giữ nguyên nội dung văn bản
  - _Requirements: 1.4, 2.2, 2.3, 4.3, 7.1_

- [x] 9. Cập nhật Love Story Timeline Section





  - Áp dụng font-serif cho story titles
  - Áp dụng font-sans cho story content
  - Làm mỏng timeline line (w-px bg-gray-200)
  - Làm nhỏ timeline dots (w-3 h-3)
  - Thay shadow bằng border cho cards
  - Cập nhật màu dots sang pastel
  - Giữ nguyên nội dung văn bản
  - _Requirements: 1.1, 1.4, 2.3, 2.4, 7.1_

- [x] 10. Cập nhật Countdown Section





  - Áp dụng font-serif cho numbers
  - Áp dụng font-sans cho labels
  - Thay shadow bằng border cho cards
  - Cập nhật màu numbers sang pastel
  - Background: bg-cream-50
  - Giữ nguyên nội dung văn bản
  - _Requirements: 1.1, 1.4, 2.3, 2.4, 7.1_

- [x] 11. Cập nhật Bank Account Section





  - Thay đổi image paths sang /images/qr-groom.png và /images/qr-bride.png
  - Áp dụng font-serif cho names
  - Áp dụng font-sans cho account info
  - Áp dụng font-mono cho account numbers
  - Thay shadow bằng border cho cards
  - Background cho info section: bg-cream-50
  - Responsive: grid-cols-1 md:grid-cols-2
  - Giữ nguyên nội dung văn bản
  - _Requirements: 1.1, 1.4, 2.3, 2.4, 4.4, 7.1, 8.2_

- [x] 12. Cập nhật Footer Section





  - Áp dụng font-display cho "Thank You"
  - Áp dụng font-sans cho body text
  - Cập nhật color scheme sang pastel
  - Thêm border-t border-gray-200
  - Giữ nguyên links và social icons
  - Giữ nguyên nội dung văn bản
  - _Requirements: 1.1, 1.4, 2.2, 2.4, 7.1, 7.4_

- [x] 13. Cập nhật Scroll to Top Button





  - Cập nhật màu sang gold-500/gold-600
  - Giữ nguyên functionality
  - Đảm bảo touch-friendly size (p-3)
  - _Requirements: 7.4, 8.5_

- [x] 14. Đảm bảo responsive design





  - Kiểm tra tất cả sections có responsive classes
  - Kiểm tra typography có responsive variants (text-xl md:text-2xl)
  - Kiểm tra buttons có adequate padding cho mobile
  - Test layout trên mobile (1 cột), tablet (2 cột), desktop (3 cột)
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 15. Kiểm tra và đảm bảo content preservation





  - Verify tất cả nội dung tiếng Việt được giữ nguyên
  - Verify thông tin ngày giờ địa điểm không thay đổi
  - Verify cấu trúc sections không thay đổi
  - Verify tất cả links và hrefs hoạt động
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ]* 16. Viết unit tests cho image paths
  - Test Hero Section sử dụng đúng image path
  - Test Gallery Section sử dụng đúng 8 image paths
  - Test Couple Section sử dụng đúng 2 image paths
  - Test Bank Section sử dụng đúng 2 QR image paths
  - **Example 2, 3, 4, 5**
  - **Validates: Requirements 4.1, 4.2, 4.3, 4.4**

- [ ]* 17. Viết unit tests cho font configuration
  - Test layout.tsx imports Google Fonts
  - Test font config có Vietnamese support
  - Test hero title có class font-display
  - Test section headings có class font-serif
  - Test body text có class font-sans
  - **Example 1, 10, 11, 12**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**

- [ ]* 18. Viết unit tests cho styling
  - Test pastel color classes được sử dụng
  - Test border thay vì shadow
  - Test minimal border radius
  - Test gallery grid layout
  - Test gallery aspect ratio
  - Test gallery hover effects
  - Test gallery spacing
  - **Example 7, 8, 9, 13, 14, 15, 16**
  - **Validates: Requirements 1.1, 1.4, 1.5, 6.1, 6.2, 6.3, 6.4**

- [ ]* 19. Viết unit tests cho responsive design
  - Test mobile layout (grid-cols-1)
  - Test tablet layout (md:grid-cols-2)
  - Test desktop layout (md:grid-cols-3)
  - Test responsive typography
  - Test touch-friendly button sizes
  - **Example 13, 20, 21**
  - **Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5**

- [ ]* 20. Viết unit tests cho content preservation
  - Test Vietnamese text content preserved
  - Test section structure preserved
  - Test links preserved
  - **Example 17, 18, 19**
  - **Validates: Requirements 7.1, 7.2, 7.3, 7.4**

- [ ]* 21. Viết unit tests cho event section specifics
  - Test wedding date highlight
  - Test heart icon on wedding date
  - Test large date display
  - Test venue icon and link
  - Test time format
  - **Example 22, 23, 24, 25, 26**
  - **Validates: Requirements 5.2, 5.3, 5.4, 5.5, 5.6**

- [ ]* 22. Viết file system tests
  - Test tất cả required image files tồn tại (bao gồm traitim.png)
  - Test file naming convention đúng
  - **Example 6**
  - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.6**

- [ ] 23. Manual testing và refinement
  - Test visual design trên browser
  - Test responsive trên các devices
  - Test font rendering
  - Test image quality
  - Test performance (Lighthouse)
  - Điều chỉnh nếu cần
  - _Requirements: All_

- [x] 24. Tạo font constants configuration file





  - Tạo file lib/fonts.ts với FONT_CONFIG object
  - Import Google Fonts và local font (iCiel Rift Regular)
  - Export displayFont, serifFont, sansFont, eventFont
  - Cập nhật layout.tsx để sử dụng fonts từ lib/fonts.ts
  - _Requirements: 14.1, 14.2, 14.3, 14.4_

- [x] 25. Implement Image Lightbox component





  - Tạo component Lightbox với full-screen view
  - Implement Previous/Next navigation buttons
  - Implement thumbnail strip với horizontal scroll
  - Implement close button ở góc phải trên
  - Implement keyboard navigation (Arrow keys, ESC)
  - Thêm smooth transitions giữa các ảnh
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9_

- [x] 26. Cập nhật Gallery thành Masonry layout





  - Thay đổi gallery layout sang columns-based masonry
  - Thêm viền trắng (border-4 border-white) cho mỗi ảnh
  - Xóa border radius (không dùng rounded)
  - Thêm zoom icon khi hover
  - Thêm onClick handler để mở lightbox
  - Randomize chiều cao ảnh để tạo hiệu ứng đan xen
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 27. Cập nhật Calendar heart icon





  - Tăng kích thước icon trái tim (w-8 h-8 md:w-10 md:h-10)
  - Đặt icon absolute inset-0 để bao trọn ô ngày
  - Thêm opacity-80 để không che khuất số ngày
  - _Requirements: 11.1, 11.2_

- [x] 28. Cập nhật Couple Section styling





  - Thay đổi section container thành w-full để full-width background
  - Cập nhật tên cô dâu chú rể sử dụng font-display với text-3xl md:text-4xl
  - Cập nhật màu tên thành text-rose-400
  - Xóa text "The Groom" và "The Bride"
  - _Requirements: 12.1, 12.2, 12.3_

- [x] 29. Implement Falling Hearts and Petals animation





  - Tạo component FallingElements với hearts và petals
  - Implement CSS keyframes cho fall và sway animations
  - Randomize vị trí, delay, và duration cho mỗi element
  - Đảm bảo pointer-events-none để không ảnh hưởng interactions
  - _Requirements: 16.1, 16.2, 16.3, 16.4_

- [x] 30. Implement Background Music Player








  - Tạo component MusicPlayer với audio element
  - Implement auto-play on mount
  - Implement toggle button với icon Volume2/VolumeX
  - Thêm loop attribute cho audio
  - Style button: fixed bottom-4 right-4, bg-rose-500
  - _Requirements: 18.1, 18.2, 18.3, 18.5_

- [x] 31. Cập nhật README.md với hướng dẫn thay nhạc




  - Thêm section "Thay đổi nhạc nền"
  - Hướng dẫn sử dụng file offline
  - Hướng dẫn sử dụng link online
  - _Requirements: 18.4_

- [x] 32. Implement Fixed Position Controls layout





  - Tạo container flex flex-col gap-3 cho cả hai buttons
  - Đặt scroll to top button phía trên
  - Đặt music control button phía dưới
  - Thêm hover:scale-110 transition cho cả hai buttons
  - _Requirements: 19.1, 19.2, 19.3, 19.4_

- [x] 33. Cập nhật Google Maps links





  - Cập nhật link Vu Quy: https://maps.app.goo.gl/5nGBPV6fn27ouonG8
  - Cập nhật link Tân Hôn: https://maps.app.goo.gl/XEVbDMVyagu8itUZ6
  - Đảm bảo target="_blank" và rel="noopener noreferrer"
  - _Requirements: 17.1, 17.2, 17.3_

- [x] 34. Thêm smooth transitions cho tất cả interactive elements





  - Thêm transition classes cho buttons
  - Thêm transition classes cho icons
  - Thêm transition classes cho images
  - Thêm hiệu ứng trái tim bung ra tại vị trí con trỏ chuột.
  - Thêm hiệu ứng cánh hoa rơi trên website.
  - Verify tất cả hover effects mượt mà
  - _Requirements: 15.1, 15.2, 15.3, 15.4_

- [x] 35. Verify countdown timer hoạt động





  - Kiểm tra countdown đang tính toán đúng
  - Kiểm tra cập nhật mỗi giây
  - Kiểm tra hiển thị 00 khi đến ngày cưới
  - _Requirements: 13.1, 13.2, 13.3_

- [ ] 36. Tối ưu responsive design cho các tính năng mới
  - Test lightbox trên mobile
  - Test masonry gallery trên mobile
  - Test falling animations không ảnh hưởng performance mobile
  - Test music player và scroll button không che khuất nội dung
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ]* 37. Viết unit tests cho lightbox component
  - Test lightbox opens với correct image
  - Test keyboard navigation
  - Test thumbnail click navigation
  - Test close functionality
  - _Requirements: 9.1-9.9_

- [ ]* 38. Viết unit tests cho music player
  - Test auto-play functionality
  - Test toggle play/pause
  - Test loop functionality
  - _Requirements: 18.1, 18.2, 18.3, 18.5_

- [ ]* 39. Viết unit tests cho masonry gallery
  - Test gallery layout
  - Test white borders
  - Test no border radius
  - Test zoom icon on hover
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [ ] 40. Manual testing và refinement cho tính năng mới
  - Test lightbox trên các browsers
  - Test animations performance
  - Test music player trên các devices
  - Test masonry layout trên các screen sizes
  - Điều chỉnh nếu cần
  - _Requirements: All new requirements_

- [ ] 41. Final review và deployment preparation
  - Review tất cả changes
  - Đảm bảo tất cả tests pass
  - Optimize images nếu cần
  - Thêm wedding music file vào public/music/
  - Clear cache và test production build
  - _Requirements: All_
