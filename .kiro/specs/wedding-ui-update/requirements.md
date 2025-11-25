# Requirements Document

## Introduction

Cập nhật giao diện website đám cưới để có phong cách tối giản, thanh lịch hơn dựa trên các hình ảnh tham khảo. Nội dung văn bản giữ nguyên như trong code hiện tại, chỉ cập nhật về mặt thiết kế UI/UX và font chữ. Đồng thời, tổ chức lại cấu trúc file ảnh theo hướng dẫn chuẩn.

## Glossary

- **Website**: Trang web đám cưới hiện tại được xây dựng bằng Next.js và Tailwind CSS
- **UI Reference Images**: Các hình ảnh tham khảo thiết kế được cung cấp bởi người dùng
- **Google Fonts**: Dịch vụ font chữ miễn phí của Google
- **IMAGES_GUIDE.md**: Tài liệu hướng dẫn chuẩn hóa tên file và cấu trúc thư mục ảnh
- **Hero Section**: Phần đầu trang web với ảnh nền và tiêu đề chính
- **Gallery**: Bộ sưu tập ảnh cưới hiển thị trên website
- **Tailwind CSS**: Framework CSS utility-first được sử dụng trong dự án

## Requirements

### Requirement 1

**User Story:** Là người dùng, tôi muốn website có giao diện thanh lịch và tối giản theo phong cách tham khảo, để tạo ấn tượng đẹp mắt và chuyên nghiệp cho khách mời.

#### Acceptance Criteria

1. WHEN người dùng truy cập website THEN hệ thống SHALL hiển thị giao diện với màu sắc pastel nhẹ nhàng (be, hồng nhạt, xám nhạt)
2. WHEN các section được render THEN hệ thống SHALL sử dụng khoảng trắng (whitespace) hợp lý để tạo cảm giác thoáng đãng
3. WHEN hiển thị thông tin sự kiện THEN hệ thống SHALL sử dụng layout đơn giản với typography rõ ràng
4. WHEN người dùng xem các phần tử trang trí THEN hệ thống SHALL hiển thị các đường kẻ mảnh, viền nhẹ thay vì shadow đậm
5. WHEN hiển thị ảnh THEN hệ thống SHALL sử dụng border radius nhỏ hoặc không có để giữ phong cách tối giản

### Requirement 2

**User Story:** Là người dùng, tôi muốn website sử dụng font chữ nghệ thuật và đẹp mắt, để tạo cảm giác lãng mạn và sang trọng cho website đám cưới.

#### Acceptance Criteria

1. WHEN website được load THEN hệ thống SHALL tải và áp dụng font iCiel Rift Regular từ public/fonts cho các tiêu đề và thông tin sự kiện
2. WHEN hiển thị tiêu đề chính THEN hệ thống SHALL sử dụng font chữ viết tay hoặc script font từ Google Fonts (ví dụ: Great Vibes, Parisienne, Dancing Script)
3. WHEN hiển thị nội dung văn bản THEN hệ thống SHALL sử dụng font serif thanh lịch từ Google Fonts (ví dụ: Playfair Display, Cormorant Garamond)
4. WHEN hiển thị thông tin chi tiết THEN hệ thống SHALL sử dụng font sans-serif dễ đọc từ Google Fonts (ví dụ: Montserrat, Lato)
5. WHEN hiển thị thông tin sự kiện (tháng, ngày, năm) THEN hệ thống SHALL sử dụng font iCiel Rift Regular
6. WHEN font được áp dụng THEN hệ thống SHALL đảm bảo font hiển thị đúng với tiếng Việt có dấu

### Requirement 3

**User Story:** Là người dùng, tôi muốn các file ảnh trong thư mục public/images được đặt tên theo chuẩn IMAGES_GUIDE.md, để dễ dàng quản lý và sử dụng trong code.

#### Acceptance Criteria

1. WHEN kiểm tra thư mục public/images THEN hệ thống SHALL chứa file hero-couple.jpg cho ảnh hero chính
2. WHEN kiểm tra thư mục public/images THEN hệ thống SHALL chứa các file gallery-1.jpg đến gallery-8.jpg cho ảnh album
3. WHEN kiểm tra thư mục public/images THEN hệ thống SHALL chứa file groom.jpg và bride.jpg cho ảnh chân dung
4. WHEN kiểm tra thư mục public/images THEN hệ thống SHALL chứa file qr-groom.png và qr-bride.png cho mã QR
6. WHEN kiểm tra thư mục public/images THEN hệ thống SHALL chứa file traitim.png cho icon trái tim trong lịch
5. WHEN các file ảnh cũ tồn tại THEN hệ thống SHALL đổi tên chúng theo chuẩn mới thay vì tạo bản sao

### Requirement 4

**User Story:** Là người dùng, tôi muốn code sử dụng đúng đường dẫn ảnh mới sau khi đổi tên, để website hiển thị ảnh chính xác.

#### Acceptance Criteria

1. WHEN render Hero Section THEN hệ thống SHALL sử dụng đường dẫn /images/hero-couple.jpg
2. WHEN render Gallery Section THEN hệ thống SHALL sử dụng đường dẫn /images/gallery-{index}.jpg với index từ 1 đến 8
3. WHEN render Couple Section THEN hệ thống SHALL sử dụng đường dẫn /images/groom.jpg và /images/bride.jpg
4. WHEN render Bank Account Section THEN hệ thống SHALL sử dụng đường dẫn /images/qr-groom.png và /images/qr-bride.png
5. WHEN ảnh không tồn tại THEN hệ thống SHALL hiển thị placeholder hoặc fallback image

### Requirement 5

**User Story:** Là người dùng, tôi muốn phần hiển thị lịch và thông tin sự kiện có thiết kế giống hình tham khảo, để website có tính nhất quán và chuyên nghiệp.

#### Acceptance Criteria

1. WHEN hiển thị thông tin sự kiện THEN hệ thống SHALL sử dụng layout dọc với typography phân cấp rõ ràng
2. WHEN hiển thị ngày tháng THEN hệ thống SHALL sử dụng số La Mã hoặc số thường với kích thước lớn
3. WHEN hiển thị lịch tháng THEN hệ thống SHALL highlight ngày cưới với màu sắc nổi bật
6. WHEN hiển thị ngày cưới trong lịch THEN hệ thống SHALL hiển thị icon trái tim từ file traitim.png
4. WHEN hiển thị địa chỉ THEN hệ thống SHALL format rõ ràng với icon chỉ đường
5. WHEN hiển thị thời gian THEN hệ thống SHALL sử dụng format 24 giờ với chữ in hoa

### Requirement 6

**User Story:** Là người dùng, tôi muốn phần gallery ảnh có layout đẹp mắt theo phong cách tham khảo, để khách mời có trải nghiệm xem ảnh tốt.

#### Acceptance Criteria

1. WHEN hiển thị gallery THEN hệ thống SHALL sử dụng grid layout với 3 ảnh trên một hàng
2. WHEN hiển thị ảnh trong gallery THEN hệ thống SHALL sử dụng aspect ratio 3:4 (portrait)
3. WHEN người dùng hover vào ảnh THEN hệ thống SHALL hiển thị hiệu ứng transition mượt mà
4. WHEN gallery được render THEN hệ thống SHALL đảm bảo khoảng cách đều giữa các ảnh
5. WHEN ảnh được load THEN hệ thống SHALL sử dụng lazy loading để tối ưu performance

### Requirement 7

**User Story:** Là người dùng, tôi muốn nội dung văn bản hiện tại được giữ nguyên, để thông tin đám cưới không bị thay đổi.

#### Acceptance Criteria

1. WHEN cập nhật UI THEN hệ thống SHALL giữ nguyên tất cả nội dung tiếng Việt hiện có
2. WHEN cập nhật UI THEN hệ thống SHALL giữ nguyên thông tin ngày giờ địa điểm
3. WHEN cập nhật UI THEN hệ thống SHALL giữ nguyên cấu trúc các section
4. WHEN cập nhật UI THEN hệ thống SHALL giữ nguyên các link và chức năng hiện có
5. WHEN cập nhật UI THEN hệ thống SHALL chỉ thay đổi styling và font chữ

### Requirement 8

**User Story:** Là người dùng, tôi muốn website responsive tốt trên mọi thiết bị, để khách mời có thể xem trên điện thoại và máy tính.

#### Acceptance Criteria

1. WHEN truy cập trên mobile THEN hệ thống SHALL hiển thị layout 1 cột
2. WHEN truy cập trên tablet THEN hệ thống SHALL hiển thị layout 2 cột cho các section phù hợp
3. WHEN truy cập trên desktop THEN hệ thống SHALL hiển thị layout 3 cột cho gallery
4. WHEN thay đổi kích thước màn hình THEN hệ thống SHALL điều chỉnh font size phù hợp
5. WHEN hiển thị trên mobile THEN hệ thống SHALL đảm bảo các button và link dễ nhấn

### Requirement 9

**User Story:** Là người dùng, tôi muốn xem ảnh ở chế độ toàn màn hình với các tính năng điều hướng, để có trải nghiệm xem ảnh tốt hơn.

#### Acceptance Criteria

1. WHEN người dùng click vào một ảnh THEN hệ thống SHALL mở chế độ xem toàn màn hình với ảnh đó
2. WHEN ở chế độ toàn màn hình THEN hệ thống SHALL hiển thị ảnh vừa khít trong màn hình
3. WHEN ở chế độ toàn màn hình THEN hệ thống SHALL hiển thị nút Previous và Next để chuyển ảnh
4. WHEN ở chế độ toàn màn hình THEN hệ thống SHALL hiển thị danh sách thumbnail ảnh bên dưới với khả năng scroll
5. WHEN ở chế độ toàn màn hình THEN hệ thống SHALL hiển thị icon đóng ở góc phải trên cùng
6. WHEN người dùng nhấn phím mũi tên trái THEN hệ thống SHALL chuyển sang ảnh trước đó
7. WHEN người dùng nhấn phím mũi tên phải THEN hệ thống SHALL chuyển sang ảnh tiếp theo
8. WHEN người dùng nhấn phím ESC THEN hệ thống SHALL thoát chế độ toàn màn hình
9. WHEN chuyển đổi giữa các ảnh THEN hệ thống SHALL hiển thị animation mượt mà

### Requirement 10

**User Story:** Là người dùng, tôi muốn gallery hiển thị ảnh theo kiểu masonry ngẫu nhiên, để tạo cảm giác sinh động và không nhàm chán.

#### Acceptance Criteria

1. WHEN hiển thị gallery THEN hệ thống SHALL sắp xếp ảnh theo kiểu masonry với chiều cao ngẫu nhiên
2. WHEN hiển thị ảnh THEN hệ thống SHALL có viền trắng xung quanh mỗi ảnh
3. WHEN hiển thị ảnh THEN hệ thống SHALL không áp dụng border radius
4. WHEN người dùng hover vào ảnh THEN hệ thống SHALL hiển thị icon zoom/phóng to

### Requirement 11

**User Story:** Là người dùng, tôi muốn icon trái tim trong lịch lớn hơn và bao trọn ngày cưới, để dễ nhận biết ngày quan trọng.

#### Acceptance Criteria

1. WHEN hiển thị lịch THEN hệ thống SHALL hiển thị icon trái tim với kích thước lớn hơn hiện tại
2. WHEN hiển thị icon trái tim THEN hệ thống SHALL đặt icon bao trọn toàn bộ ô ngày cưới

### Requirement 12

**User Story:** Là người dùng, tôi muốn phần "Chúng Mình Là" có nền full screen và hiển thị tên theo font chữ đặc biệt, để tạo điểm nhấn cho phần giới thiệu cô dâu chú rể.

#### Acceptance Criteria

1. WHEN hiển thị section "Chúng Mình Là" THEN hệ thống SHALL hiển thị nền full screen theo chiều rộng màn hình
2. WHEN hiển thị tên cô dâu và chú rể THEN hệ thống SHALL sử dụng font chữ và màu chữ giống "The Groom" và "The Bride"
3. WHEN hiển thị thông tin cô dâu chú rể THEN hệ thống SHALL không hiển thị text "The Groom" và "The Bride"

### Requirement 13

**User Story:** Là người dùng, tôi muốn bộ đếm ngược hoạt động chính xác, để biết còn bao lâu đến ngày cưới.

#### Acceptance Criteria

1. WHEN hiển thị bộ đếm ngược THEN hệ thống SHALL tính toán và cập nhật thời gian còn lại mỗi giây
2. WHEN thời gian thay đổi THEN hệ thống SHALL cập nhật số ngày, giờ, phút, giây còn lại
3. WHEN đến ngày cưới THEN hệ thống SHALL hiển thị giá trị 00 cho tất cả các đơn vị

### Requirement 14

**User Story:** Là developer, tôi muốn có constant cho font chữ, để dễ dàng thay đổi font trong tương lai.

#### Acceptance Criteria

1. WHEN cấu hình font THEN hệ thống SHALL định nghĩa font constants trong một file riêng bao gồm cả Google Fonts và local fonts
2. WHEN sử dụng font THEN hệ thống SHALL sử dụng font constants thay vì hardcode tên font
3. WHEN cần thay đổi font THEN developer SHALL chỉ cần cập nhật file constants
4. WHEN load local font THEN hệ thống SHALL sử dụng Next.js localFont để load iCiel Rift Regular từ public/fonts

### Requirement 15

**User Story:** Là người dùng, tôi muốn tất cả các phần tử có hiệu ứng chuyển động mượt mà, để website có cảm giác chuyên nghiệp và hiện đại.

#### Acceptance Criteria

1. WHEN người dùng hover vào button THEN hệ thống SHALL hiển thị transition mượt mà
2. WHEN người dùng hover vào icon THEN hệ thống SHALL hiển thị transition mượt mà
3. WHEN người dùng hover vào ảnh THEN hệ thống SHALL hiển thị transition mượt mà
4. WHEN chuyển đổi giữa các ảnh trong lightbox THEN hệ thống SHALL hiển thị animation fade hoặc slide

### Requirement 16

**User Story:** Là người dùng, tôi muốn thấy animation trái tim và cánh hoa rơi trên website, để tạo không khí lãng mạn cho trang web đám cưới.

#### Acceptance Criteria

1. WHEN website được load THEN hệ thống SHALL hiển thị animation trái tim rơi từ trên xuống
2. WHEN website được load THEN hệ thống SHALL hiển thị animation cánh hoa rơi từ trên xuống
3. WHEN animation chạy THEN hệ thống SHALL đảm bảo không ảnh hưởng đến performance
4. WHEN animation chạy THEN hệ thống SHALL lặp lại liên tục trong suốt thời gian người dùng xem trang

### Requirement 17

**User Story:** Là người dùng, tôi muốn địa chỉ Google Maps được cập nhật chính xác, để khách mời có thể tìm đường đến địa điểm tổ chức.

#### Acceptance Criteria

1. WHEN hiển thị thông tin Vu Quy THEN hệ thống SHALL sử dụng link "https://maps.app.goo.gl/5nGBPV6fn27ouonG8"
2. WHEN hiển thị thông tin Tân Hôn THEN hệ thống SHALL sử dụng link "https://maps.app.goo.gl/XEVbDMVyagu8itUZ6"
3. WHEN người dùng click vào link CHỈ ĐƯỜNG THEN hệ thống SHALL mở Google Maps trong tab mới

### Requirement 18

**User Story:** Là người dùng, tôi muốn website có nhạc nền tự động phát khi truy cập, để tạo không khí lãng mạn cho trang web đám cưới.

#### Acceptance Criteria

1. WHEN người dùng truy cập website THEN hệ thống SHALL tự động phát nhạc nền wedding
2. WHEN nhạc đang phát THEN hệ thống SHALL hiển thị icon điều khiển nhạc ở góc dưới bên phải màn hình
3. WHEN người dùng click vào icon nhạc THEN hệ thống SHALL tắt hoặc bật nhạc nền
4. WHEN developer cần thay nhạc THEN hệ thống SHALL có hướng dẫn trong README.md để thay nhạc offline hoặc online
5. WHEN nhạc kết thúc THEN hệ thống SHALL tự động phát lại từ đầu

### Requirement 19

**User Story:** Là người dùng, tôi muốn icon scroll lên đầu trang luôn hiển thị ở vị trí cố định, để dễ dàng quay lại đầu trang.

#### Acceptance Criteria

1. WHEN người dùng scroll xuống THEN hệ thống SHALL hiển thị icon scroll to top ở góc dưới bên phải
2. WHEN hiển thị icon scroll to top THEN hệ thống SHALL đặt nó phía trên icon điều khiển nhạc
3. WHEN người dùng click vào icon THEN hệ thống SHALL scroll mượt mà lên đầu trang
4. WHEN cả hai icon hiển thị THEN hệ thống SHALL sắp xếp chúng theo chiều dọc với khoảng cách hợp lý
