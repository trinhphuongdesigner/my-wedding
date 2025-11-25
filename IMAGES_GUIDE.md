# Hướng Dẫn Chuẩn Bị Ảnh

## Cấu Trúc Thư Mục

Tạo thư mục `public/images/` với cấu trúc như sau:

```
public/
└── images/
    ├── hero-couple.jpg      # Ảnh hero (cô dâu chú rể chính)
    ├── groom.jpg            # Ảnh chú rể (portrait)
    ├── bride.jpg            # Ảnh cô dâu (portrait)
    ├── gallery-1.jpg        # Ảnh album 1
    ├── gallery-2.jpg        # Ảnh album 2
    ├── gallery-3.jpg        # Ảnh album 3
    ├── gallery-4.jpg        # Ảnh album 4
    ├── gallery-5.jpg        # Ảnh album 5
    ├── gallery-6.jpg        # Ảnh album 6
    ├── gallery-7.jpg        # Ảnh album 7
    ├── gallery-8.jpg        # Ảnh album 8
    ├── qr-groom.png         # QR code tài khoản chú rể
    └── qr-bride.png         # QR code tài khoản cô dâu
```

## Khuyến Nghị Kích Thước

### Hero Image (hero-couple.jpg)
- **Kích thước:** 1920 x 1080px (16:9 ratio)
- **Định dạng:** JPEG hoặc WebP
- **Dung lượng:** < 500KB (sau khi compress)
- **Mô tả:** Ảnh đẹp nhất của cô dâu chú rể, có thể là ảnh cưới chính thức

### Portrait Images (groom.jpg, bride.jpg)
- **Kích thước:** 800 x 800px (1:1 ratio - hình vuông)
- **Định dạng:** JPEG hoặc WebP
- **Dung lượng:** < 200KB mỗi ảnh
- **Mô tả:** Ảnh chân dung riêng của từng người, nên có background đẹp

### Gallery Images (gallery-1.jpg đến gallery-8.jpg)
- **Kích thước:** 800 x 800px (1:1 ratio - hình vuông)
- **Định dạng:** JPEG hoặc WebP
- **Dung lượng:** < 200KB mỗi ảnh
- **Mô tả:** Các ảnh đẹp trong album cưới, có thể là:
  - Ảnh couple
  - Ảnh tại địa điểm chụp
  - Ảnh khoảnh khắc đẹp
  - Ảnh với gia đình

### QR Code Images (qr-groom.png, qr-bride.png)
- **Kích thước:** 500 x 500px (1:1 ratio)
- **Định dạng:** PNG (để giữ chất lượng QR code)
- **Dung lượng:** < 100KB
- **Mô tả:** QR code chuyển khoản ngân hàng

## Cách Tạo QR Code Chuyển Khoản

### Ngân Hàng Việt Nam
1. Mở app ngân hàng của bạn
2. Tìm chức năng "Nhận tiền" hoặc "Tạo mã QR"
3. Chọn "Tạo mã QR động" (có thể nhập số tiền)
4. Lưu ảnh QR code
5. Đổi tên file thành `qr-groom.png` hoặc `qr-bride.png`

### Sử dụng VietQR
- Truy cập: https://vietqr.io/
- Chọn ngân hàng
- Nhập số tài khoản
- Nhập tên chủ tài khoản (không dấu)
- Download QR code

## Tips Chọn Ảnh

### Hero Image
✅ **Nên:**
- Ảnh có độ phân giải cao
- Ánh sáng đẹp, không quá tối
- Cô dâu chú rể là điểm nhấn chính
- Background đơn giản hoặc đẹp mắt

❌ **Không nên:**
- Ảnh mờ, bị nhiễu
- Ảnh quá tối hoặc quá sáng
- Ảnh có quá nhiều chi tiết rối
- Ảnh có góc chụp kỳ lạ

### Portrait
✅ **Nên:**
- Ảnh cận mặt rõ nét
- Nụ cười tự nhiên
- Background blur hoặc đơn giản
- Trang phục đẹp

❌ **Không nên:**
- Ảnh toàn thân (khó nhìn khuôn mặt)
- Ảnh có nhiều người khác
- Ảnh có ánh sáng chiếu từ phía sau (backlight quá mức)

### Gallery
✅ **Nên:**
- Đa dạng góc chụp
- Kết hợp ảnh couple và ảnh riêng
- Có ảnh vui vẻ và ảnh nghiêm túc
- Có ảnh tại địa điểm đặc biệt

❌ **Không nên:**
- Toàn ảnh giống nhau
- Ảnh bị duplicate
- Ảnh chất lượng kém

## Công Cụ Compress Ảnh

### Online Tools (Miễn Phí)
1. **TinyPNG** - https://tinypng.com/
   - Compress JPEG và PNG
   - Giữ chất lượng tốt
   - Miễn phí tới 20 ảnh/lần

2. **Squoosh** - https://squoosh.app/
   - Của Google
   - Nhiều tùy chọn compress
   - So sánh trước/sau

3. **iLoveIMG** - https://www.iloveimg.com/compress-image
   - Compress nhiều ảnh cùng lúc
   - Hỗ trợ nhiều định dạng

### Desktop Tools
- **ImageOptim** (Mac)
- **RIOT** (Windows)
- **GIMP** (Cross-platform)

## Chuyển Đổi Định Dạng

### Chuyển sang WebP (Tối ưu hơn)
```bash
# Sử dụng cwebp (Linux/Mac)
cwebp -q 80 input.jpg -o output.webp

# Sử dụng online tool
https://cloudconvert.com/jpg-to-webp
```

## Checklist Trước Khi Upload

- [ ] Tất cả ảnh đã được compress
- [ ] Kích thước ảnh phù hợp với khuyến nghị
- [ ] Tên file chính xác (không có khoảng trắng, dấu tiếng Việt)
- [ ] QR code được test và hoạt động
- [ ] Ảnh không bị xoay ngược
- [ ] Tổng dung lượng tất cả ảnh < 5MB

## Thay Đổi Số Lượng Ảnh Gallery

Nếu bạn muốn thêm/bớt ảnh trong gallery:

1. Mở file `app/page.tsx`
2. Tìm dòng:
```javascript
{[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
```
3. Thay đổi array: Ví dụ nếu muốn 12 ảnh:
```javascript
{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
```
4. Thêm các file ảnh tương ứng: `gallery-9.jpg`, `gallery-10.jpg`, ...

---

💡 **Lưu ý:** Nếu bạn không có đủ ảnh, bạn có thể tìm ảnh mockup miễn phí tại:
- Unsplash: https://unsplash.com/s/photos/wedding
- Pexels: https://www.pexels.com/search/wedding/
- Pixabay: https://pixabay.com/images/search/wedding/
