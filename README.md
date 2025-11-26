# Wedding Website - Website Đám Cưới

Website đám cưới hiện đại, responsive với phong cách Việt Nam nhẹ nhàng, được xây dựng bằng Next.js 14 và Tailwind CSS.

## ✨ Tính Năng

- 🎨 Thiết kế responsive cho desktop, tablet và mobile
- 💝 Hero section với ảnh cô dâu chú rể
- 👰🤵 Giới thiệu cô dâu và chú rể
- 📖 Timeline câu chuyện tình yêu
- ⏰ Đếm ngược đến ngày cưới
- 📅 4 sự kiện cưới: Lễ Vu Quy, Tiệc Cưới (Nhà Gái), Lễ Thành Hôn, Tiệc Cưới (Nhà Trai)
- 🗺️ Tích hợp Google Maps cho từng địa điểm
- 📸 Gallery ảnh cưới
- 💰 Thông tin tài khoản ngân hàng với QR code
- 🎭 Hiệu ứng animation mượt mà
- 🎨 Sử dụng Tailwind CSS dễ maintain

## 🚀 Cài Đặt

### Yêu Cầu
- Node.js 18.17 trở lên
- npm hoặc yarn

### Các Bước Cài Đặt

1. **Clone hoặc download project**
```bash
cd wedding-website
```

2. **Cài đặt dependencies**
```bash
npm install
# hoặc
yarn install
```

3. **Chạy development server**
```bash
npm run dev
# hoặc
yarn dev
```

4. **Mở trình duyệt**
Truy cập http://localhost:3000

## 📁 Cấu Trúc Thư Mục

```
wedding-website/
├── app/
│   ├── globals.css          # Global styles và Tailwind directives
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Trang chính
├── public/
│   └── images/              # Thư mục chứa ảnh
│       ├── hero-couple.jpg  # Ảnh hero section
│       ├── groom.jpg        # Ảnh chú rể
│       ├── bride.jpg        # Ảnh cô dâu
│       ├── gallery-1.jpg    # Ảnh gallery
│       ├── gallery-2.jpg
│       ├── ...
│       ├── qr-groom.png     # QR code chú rể
│       └── qr-bride.png     # QR code cô dâu
├── tailwind.config.js       # Cấu hình Tailwind
├── postcss.config.js        # Cấu hình PostCSS
├── next.config.js           # Cấu hình Next.js
└── package.json
```

## 🖼️ Chuẩn Bị Ảnh

Tạo thư mục `public/images/` và thêm các ảnh sau:

1. **hero-couple.jpg** - Ảnh cô dâu chú rể cho hero section (khuyến nghị: 1920x1080px)
2. **groom.jpg** - Ảnh chú rể (khuyến nghị: 800x800px, hình vuông)
3. **bride.jpg** - Ảnh cô dâu (khuyến nghị: 800x800px, hình vuông)
4. **gallery-1.jpg đến gallery-8.jpg** - Ảnh album cưới (khuyến nghị: 800x800px, hình vuông)
5. **qr-groom.png** - QR code tài khoản chú rể
6. **qr-bride.png** - QR code tài khoản cô dâu

## ✏️ Tùy Chỉnh Nội Dung

Mở file `app/page.tsx` và thay đổi các nội dung sau:

### 1. Tên Cô Dâu Chú Rể
Tìm và thay thế:
- `[TÊN CHÚ RỂ]` → Tên chú rể của bạn
- `[TÊN CÔ DÂU]` → Tên cô dâu của bạn

### 2. Ngày Cưới
Tìm dòng:
```javascript
const countdownDate = new Date('2024-12-31T10:00:00').getTime();
```
Thay đổi thành ngày cưới của bạn.

### 3. Thông Tin Cha Mẹ
Tìm và cập nhật:
```javascript
Con ông: [Tên bố]
Con bà: [Tên mẹ]
```

### 4. Thông Tin Sự Kiện
Cập nhật thời gian và địa điểm cho 4 sự kiện:
- Lễ Vu Quy (Nhà Gái)
- Tiệc Cưới (Nhà Gái)
- Lễ Thành Hôn (Nhà Trai)
- Tiệc Cưới (Nhà Trai)

Thay thế:
```javascript
[Địa chỉ nhà gái - ...]
[Tên nhà hàng/Trung tâm tiệc cưới - ...]
```

### 5. Link Google Maps
Tìm:
```javascript
href="https://maps.google.com/?q=[địa chỉ]"
```
Thay bằng link Google Maps thật của từng địa điểm.

### 6. Câu Chuyện Tình Yêu
Tùy chỉnh timeline câu chuyện trong phần "Love Story".

### 7. Thông Tin Ngân Hàng
Cập nhật thông tin tài khoản:
```javascript
[Tên Ngân Hàng]
[Số TK]
[TÊN CHỦ TK]
```

### 8. Social Media Links
Thêm link Facebook và Instagram vào footer:
```javascript
<a href="#" className="...">  // Thay # bằng link của bạn
```

## 🎵 Thay Đổi Nhạc Nền

Website hỗ trợ phát nhạc nền tự động khi người dùng truy cập. Bạn có thể thay đổi nhạc nền theo 2 cách:

### Cách 1: Sử dụng File Nhạc Offline (Khuyến nghị)

1. **Chuẩn bị file nhạc**
   - Định dạng hỗ trợ: MP3, WAV, OGG
   - Khuyến nghị: MP3 với bitrate 128-192kbps để tối ưu dung lượng
   - Đặt tên file: `wedding-song.mp3` (hoặc tên bạn muốn)

2. **Upload file nhạc**
   - Đặt file nhạc vào thư mục `public/music/`
   - Ví dụ: `public/music/wedding-song.mp3`

3. **Cập nhật code**
   - Mở file `app/components/MusicPlayer.tsx`
   - Tìm dòng:
   ```typescript
   <audio ref={audioRef} loop>
     <source src="/music/wedding-song.mp3" type="audio/mpeg" />
   </audio>
   ```
   - Thay đổi đường dẫn `/music/wedding-song.mp3` thành tên file của bạn

**Ưu điểm:**
- ✅ Tốc độ load nhanh
- ✅ Không phụ thuộc vào dịch vụ bên ngoài
- ✅ Hoạt động ổn định

**Lưu ý:**
- File nhạc sẽ được deploy cùng website
- Nên compress file nhạc để giảm dung lượng (khuyến nghị < 5MB)

### Cách 2: Sử dụng Link Nhạc Online

1. **Upload nhạc lên hosting**
   - Sử dụng dịch vụ như Google Drive, Dropbox, hoặc hosting riêng
   - Lấy direct link đến file nhạc (phải là link trực tiếp, không phải link xem)

2. **Cập nhật code**
   - Mở file `app/components/MusicPlayer.tsx`
   - Tìm dòng:
   ```typescript
   <audio ref={audioRef} loop>
     <source src="/music/wedding-song.mp3" type="audio/mpeg" />
   </audio>
   ```
   - Thay đổi thành:
   ```typescript
   <audio ref={audioRef} loop>
     <source src="https://your-hosting.com/path/to/song.mp3" type="audio/mpeg" />
   </audio>
   ```

**Ưu điểm:**
- ✅ Không tăng dung lượng website
- ✅ Dễ thay đổi nhạc mà không cần redeploy

**Nhược điểm:**
- ⚠️ Phụ thuộc vào dịch vụ hosting bên ngoài
- ⚠️ Có thể bị chậm nếu hosting không tốt
- ⚠️ Link có thể hết hạn hoặc bị xóa

### Lưu Ý Quan Trọng

- 🔊 **Auto-play**: Một số trình duyệt chặn auto-play nhạc. Người dùng có thể cần click vào icon nhạc để bật.
- 📱 **Mobile**: Trên mobile, auto-play thường bị chặn. Người dùng cần tương tác với trang trước.
- 🎼 **Bản quyền**: Đảm bảo bạn có quyền sử dụng nhạc trên website.
- 🔁 **Loop**: Nhạc sẽ tự động lặp lại khi kết thúc.

### Tắt Nhạc Nền

Nếu bạn không muốn có nhạc nền, xóa hoặc comment component `<MusicPlayer />` trong file `app/page.tsx`:

```typescript
{/* <MusicPlayer /> */}
```

## 🎨 Tùy Chỉnh Màu Sắc

Mở `tailwind.config.js` để thay đổi bảng màu:

```javascript
colors: {
  cream: {
    50: '#fefdfb',    // Màu kem sáng nhất
    100: '#fdf8f3',
    // ...
  },
  rose: {
    50: '#fff1f2',    // Màu hồng sáng
    // ...
  }
}
```

## 🚀 Deploy Lên Vercel

### Cách 1: Deploy qua Git

1. **Tạo repository trên GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/wedding-website.git
git push -u origin main
```

2. **Import vào Vercel**
   - Truy cập https://vercel.com
   - Click "New Project"
   - Import repository từ GitHub
   - Vercel sẽ tự động detect Next.js và deploy

### Cách 2: Deploy qua Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Custom Domain
Sau khi deploy, bạn có thể thêm custom domain trong Vercel Dashboard:
- Settings → Domains → Add Domain

## 📱 Responsive Design

Website được tối ưu cho:
- 📱 Mobile: 320px - 767px
- 📱 Tablet: 768px - 1023px
- 💻 Desktop: 1024px trở lên

## 🎯 Tối Ưu Hóa

### Tối Ưu Ảnh
1. Compress ảnh trước khi upload (sử dụng TinyPNG hoặc Squoosh)
2. Khuyến nghị định dạng: WebP hoặc JPEG
3. Kích thước tối đa: 2MB/ảnh

### SEO
Cập nhật metadata trong `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Đám Cưới [Tên Cô Dâu] & [Tên Chú Rể]',
  description: 'Chúng mình sắp kết hôn...',
}
```

## 🐛 Troubleshooting

### Lỗi ảnh không hiển thị
- Kiểm tra đường dẫn ảnh trong thư mục `public/images/`
- Đảm bảo tên file khớp với code

### Lỗi khi build
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Countdown không chạy
- Kiểm tra định dạng ngày trong `countdownDate`
- Đảm bảo ngày cưới chưa qua

## 📝 License

Dự án này được tạo ra cho mục đích cá nhân. Bạn có thể tự do sử dụng và chỉnh sửa.

## 🙏 Credits

- Design inspired by modern Vietnamese wedding aesthetics
- Built with Next.js 14 and Tailwind CSS
- Icons from Heroicons

## 📞 Support

Nếu bạn cần hỗ trợ, vui lòng tạo issue trên GitHub repository.

---

Made with ❤️ for your special day!
