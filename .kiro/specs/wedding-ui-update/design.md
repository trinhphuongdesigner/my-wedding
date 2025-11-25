# Design Document - Wedding UI Update

## Overview

Dự án cập nhật giao diện website đám cưới nhằm tạo ra một trải nghiệm người dùng thanh lịch, tối giản và chuyên nghiệp hơn. Thiết kế mới lấy cảm hứng từ các hình ảnh tham khảo với phong cách minimalist, sử dụng màu sắc pastel nhẹ nhàng, typography nghệ thuật từ Google Fonts, và layout thoáng đãng. Dự án cũng bao gồm việc tổ chức lại cấu trúc file ảnh theo chuẩn để dễ quản lý và bảo trì.

## Architecture

### Technology Stack
- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS 3.3
- **Fonts**: Google Fonts API
- **Images**: Next.js Image component với optimization
- **Language**: TypeScript

### Component Structure
```
app/
├── layout.tsx          # Root layout với font configuration
├── page.tsx            # Main page với tất cả sections
└── globals.css         # Global styles và custom CSS
```

### Design System

#### Color Palette
```css
Primary Colors:
- Cream: #FAF8F5 (background)
- Beige: #F5F1ED (secondary background)
- Rose: #E8B4B8 (accent)
- Gold: #D4AF37 (highlights)
- Gray: #6B7280 (text)
- Dark Gray: #374151 (headings)
```

#### Typography Scale
```
- Hero Title: 4rem - 5rem (font-display)
- Section Title: 2rem - 2.5rem (font-serif)
- Subtitle: 1.25rem - 1.5rem (font-sans)
- Body: 1rem (font-sans)
- Small: 0.875rem (font-sans)
```

## Components and Interfaces

### 1. Font Configuration Component

**Location**: `app/layout.tsx`

**Font Selection**:
- **Display Font**: "Great Vibes" hoặc "Parisienne" - Cho tiêu đề chính, chữ viết tay nghệ thuật
- **Serif Font**: "Playfair Display" hoặc "Cormorant Garamond" - Cho tiêu đề section
- **Sans-serif Font**: "Montserrat" hoặc "Lato" - Cho nội dung chi tiết
- **Event Font**: "iCiel Rift Regular" - Cho thông tin sự kiện (tháng, ngày, năm)

**Implementation**:
```typescript
import { Great_Vibes, Playfair_Display, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

const displayFont = Great_Vibes({ 
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  variable: '--font-display'
})

const serifFont = Playfair_Display({ 
  weight: ['400', '600', '700'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-serif'
})

const sansFont = Montserrat({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans'
})

const eventFont = localFont({
  src: '../public/fonts/ICIEL-Rift-Regular.otf',
  variable: '--font-event',
  display: 'swap'
})
```

### 2. Hero Section

**Design Changes**:
- Giảm opacity của overlay để ảnh nền rõ hơn
- Sử dụng display font cho tiêu đề chính
- Layout đơn giản hơn, tập trung vào typography
- Màu chữ nhẹ nhàng hơn (beige/cream thay vì gold đậm)

**Image Path**: `/images/hero-couple.jpg`

**Styling**:
```css
- Background overlay: from-cream-50/80 to-beige-50/90
- Title font: font-display text-6xl
- Subtitle: font-serif text-xl tracking-widest
- Color scheme: text-rose-400 for title, text-gray-600 for subtitle
```

### 3. Photo Gallery Section

**Layout**: Grid 3 cột trên desktop, 1 cột trên mobile

**Image Specifications**:
- Aspect ratio: 3:4 (portrait)
- Border radius: 4px (minimal)
- Gap: 1rem
- Hover effect: subtle scale (1.02) và brightness

**Image Paths**: `/images/gallery-1.jpg` đến `/images/gallery-8.jpg`

**Heart Icon**: `/images/traitim.png` - Icon trái tim để đánh dấu ngày cưới trong calendar

**Implementation**:
```typescript
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
    <div key={index} className="relative aspect-[3/4] overflow-hidden rounded">
      <Image
        src={`/images/gallery-${index}.jpg`}
        alt={`Ảnh cưới ${index}`}
        fill
        className="object-cover transition-transform hover:scale-102"
      />
    </div>
  ))}
</div>
```

### 4. Wedding Events Section

**Design Inspiration**: Theo hình tham khảo với layout dọc

**Components**:
- Event header với typography phân cấp
- Date display với số lớn
- Calendar widget với highlight
- Venue information với icon
- CTA button cho chỉ đường

**Styling**:
```css
- Background: bg-cream-50
- Card: bg-white với border mỏng
- Date numbers: text-5xl font-event (iCiel Rift Regular)
- Month/Day/Year labels: font-event uppercase
- Highlight color: bg-rose-100 text-rose-600
- Border: border-gray-200 (1px)
- Heart icon: absolute positioned trên ngày cưới (11)
- Text color: text-gray-300 (light beige/gray)
```

**Heart Icon Implementation**:
```typescript
{day === 11 && (
  <Image
    src="/images/traitim.png"
    alt="Wedding day"
    width={24}
    height={24}
    className="absolute top-1 left-1/2 transform -translate-x-1/2"
  />
)}
```

### 5. Couple Introduction Section

**Image Paths**: 
- `/images/groom.jpg`
- `/images/bride.jpg`

**Design Changes**:
- Ảnh tròn với border mỏng thay vì shadow đậm
- Typography đơn giản hơn
- Spacing rộng hơn giữa hai profile
- Background trắng tinh

**Styling**:
```css
- Avatar: rounded-full border-2 border-gray-200
- Name: font-serif text-2xl text-gray-700
- Role: font-display text-lg text-rose-400
- Info: font-sans text-sm text-gray-600
```

### 6. Love Story Timeline

**Design Changes**:
- Timeline line mỏng hơn (1px)
- Dots nhỏ hơn và màu pastel
- Cards với border thay vì shadow
- Spacing đều hơn

**Styling**:
```css
- Timeline line: w-px bg-gray-200
- Dots: w-3 h-3 với màu pastel (rose, blue, gold)
- Cards: bg-white border border-gray-200 rounded-lg
- Text: font-sans text-sm
```

### 7. Countdown Section

**Design Changes**:
- Cards đơn giản với border mỏng
- Số đếm với màu pastel
- Background cream nhẹ

**Styling**:
```css
- Container: bg-cream-50 border border-gray-200
- Numbers: font-serif text-4xl với màu pastel
- Labels: font-sans text-xs uppercase tracking-wide
```

### 8. Bank Account Section

**Image Paths**:
- `/images/qr-groom.png`
- `/images/qr-bride.png`

**Design Changes**:
- Cards với border thay vì shadow
- QR code trong khung trắng với border
- Typography rõ ràng cho thông tin tài khoản
- Layout 2 cột trên desktop

**Styling**:
```css
- Card: bg-white border border-gray-200 rounded-lg
- QR container: bg-white border border-gray-100
- Info section: bg-cream-50 rounded
- Text: font-mono cho số tài khoản
```

## Data Models

### Image File Structure

```typescript
interface ImageAssets {
  hero: {
    path: '/images/hero-couple.jpg',
    alt: 'Cô dâu và chú rể',
    dimensions: { width: 1920, height: 1080 }
  },
  couple: {
    groom: {
      path: '/images/groom.jpg',
      alt: 'Chú rể',
      dimensions: { width: 800, height: 800 }
    },
    bride: {
      path: '/images/bride.jpg',
      alt: 'Cô dâu',
      dimensions: { width: 800, height: 800 }
    }
  },
  gallery: Array<{
    path: `/images/gallery-${number}.jpg`,
    alt: string,
    dimensions: { width: 800, height: 800 }
  }>,
  qr: {
    groom: {
      path: '/images/qr-groom.png',
      alt: 'QR chuyển khoản chú rể'
    },
    bride: {
      path: '/images/qr-bride.png',
      alt: 'QR chuyển khoản cô dâu'
    }
  },
  icons: {
    heart: {
      path: '/images/traitim.png',
      alt: 'Wedding day heart icon',
      dimensions: { width: 24, height: 24 }
    }
  }
}
```

### Font Configuration

```typescript
interface FontConfig {
  display: {
    family: 'Great Vibes' | 'Parisienne',
    weights: ['400'],
    variable: '--font-display',
    usage: 'Hero titles, decorative text'
  },
  serif: {
    family: 'Playfair Display' | 'Cormorant Garamond',
    weights: ['400', '600', '700'],
    variable: '--font-serif',
    usage: 'Section headings, names'
  },
  sans: {
    family: 'Montserrat' | 'Lato',
    weights: ['300', '400', '500', '600'],
    variable: '--font-sans',
    usage: 'Body text, details'
  },
  event: {
    family: 'iCiel Rift Regular',
    source: 'local',
    path: '/fonts/ICIEL-Rift-Regular.otf',
    variable: '--font-event',
    usage: 'Event information (month, day, year)'
  }
}
```

### Tailwind Configuration Extension

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F1ED',
        },
        beige: {
          50: '#F5F1ED',
          100: '#EBE5DD',
        },
        rose: {
          100: '#FCE7E9',
          400: '#E8B4B8',
          500: '#E39FA4',
          600: '#D88B91',
        },
        gold: {
          400: '#E5C77F',
          500: '#D4AF37',
          600: '#C19B2E',
        }
      },
      fontFamily: {
        display: ['var(--font-display)'],
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
        event: ['var(--font-event)'],
      },
      aspectRatio: {
        '3/4': '3 / 4',
      }
    }
  }
}
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Dựa trên phân tích prework, hầu hết các acceptance criteria trong dự án này là các example tests cụ thể về UI/styling thay vì universal properties. Điều này phù hợp với bản chất của dự án - một UI update với các yêu cầu cụ thể về styling và layout.

### Testable Examples

Các acceptance criteria sau đây sẽ được test thông qua unit tests kiểm tra implementation cụ thể:

**Example 1: Font Configuration**
*For the* layout.tsx file, Google Fonts should be imported and configured with Vietnamese language support
**Validates: Requirements 2.1, 2.5**

**Example 2: Image Path Correctness**
*For the* Hero Section, the Image component should use src="/images/hero-couple.jpg"
**Validates: Requirements 4.1**

**Example 3: Gallery Image Paths**
*For the* Gallery Section, all Image components should use src pattern "/images/gallery-{1-8}.jpg"
**Validates: Requirements 4.2**

**Example 4: Couple Images**
*For the* Couple Section, Image components should use src="/images/groom.jpg" and "/images/bride.jpg"
**Validates: Requirements 4.3**

**Example 5: QR Code Images**
*For the* Bank Account Section, Image components should use src="/images/qr-groom.png" and "/images/qr-bride.png"
**Validates: Requirements 4.4**

**Example 6: File Structure**
*For the* public/images directory, it should contain all required files: hero-couple.jpg, groom.jpg, bride.jpg, gallery-1.jpg through gallery-8.jpg, qr-groom.png, qr-bride.png, traitim.png
**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.6**

**Example 7: Pastel Color Scheme**
*For the* main page, CSS classes should use cream, beige, rose, and gold color variants instead of bright colors
**Validates: Requirements 1.1**

**Example 8: Minimal Borders**
*For the* decorative elements, CSS classes should use border-1 or border instead of shadow-lg or shadow-xl
**Validates: Requirements 1.4**

**Example 9: Minimal Border Radius**
*For the* image elements, CSS classes should use rounded or rounded-sm instead of rounded-lg or rounded-xl
**Validates: Requirements 1.5**

**Example 10: Display Font Usage**
*For the* hero title elements, CSS class font-display should be applied
**Validates: Requirements 2.2**

**Example 11: Serif Font Usage**
*For the* section heading elements, CSS class font-serif should be applied
**Validates: Requirements 2.3**

**Example 12: Sans Font Usage**
*For the* body text elements, CSS class font-sans should be applied
**Validates: Requirements 2.4**

**Example 13: Gallery Grid Layout**
*For the* gallery container, CSS classes should include grid-cols-1 md:grid-cols-3
**Validates: Requirements 6.1, 8.1, 8.3**

**Example 14: Gallery Aspect Ratio**
*For the* gallery image containers, CSS class aspect-[3/4] should be applied
**Validates: Requirements 6.2**

**Example 15: Gallery Hover Effects**
*For the* gallery images, CSS classes should include transition and hover:scale
**Validates: Requirements 6.3**

**Example 16: Gallery Spacing**
*For the* gallery grid, CSS class gap-4 or similar should be applied
**Validates: Requirements 6.4**

**Example 17: Content Preservation**
*For the* updated page, all Vietnamese text content from the original should be preserved
**Validates: Requirements 7.1, 7.2**

**Example 18: Section Structure**
*For the* updated page, all original sections (Hero, Gallery, Events, Couple, Story, Countdown, Bank, Footer) should exist in the same order
**Validates: Requirements 7.3**

**Example 19: Link Preservation**
*For the* updated page, all href attributes and onClick handlers from the original should be preserved
**Validates: Requirements 7.4**

**Example 20: Responsive Typography**
*For the* text elements, CSS classes should include responsive variants like text-xl md:text-2xl
**Validates: Requirements 8.4**

**Example 21: Touch-Friendly Buttons**
*For the* button and link elements, CSS classes should provide adequate padding (minimum p-3 or px-6 py-2)
**Validates: Requirements 8.5**

**Example 22: Wedding Date Highlight**
*For the* calendar display, the wedding date (11th) should have CSS classes bg-rose-100 or similar highlight color
**Validates: Requirements 5.3**

**Example 26: Heart Icon on Wedding Date**
*For the* calendar display, the wedding date (11th) should display a heart icon from /images/traitim.png
**Validates: Requirements 5.6**

**Example 23: Large Date Display**
*For the* date numbers in event section, CSS classes should include text-4xl or text-5xl
**Validates: Requirements 5.2**

**Example 24: Venue Icon**
*For the* venue address section, it should include an icon element and a link with text "CHỈ ĐƯỜNG"
**Validates: Requirements 5.4**

**Example 25: Time Format**
*For the* time display, text should be in format "XX GIỜ XX PHÚT" with uppercase
**Validates: Requirements 5.5**

### Non-Testable Requirements

Các requirements sau không thể test tự động vì chúng liên quan đến cảm nhận chủ quan về UI/UX:
- Requirements 1.2 (whitespace "hợp lý")
- Requirements 1.3 (layout "đơn giản", typography "rõ ràng")
- Requirements 5.1 (typography "phân cấp rõ ràng")
- Requirements 7.5 (tổng hợp của các requirements khác)

Các requirements này sẽ được đánh giá thông qua manual review và user acceptance testing.

## Error Handling

### Image Loading Errors

**Strategy**: Sử dụng Next.js Image component với placeholder và error handling

```typescript
<Image
  src="/images/hero-couple.jpg"
  alt="Cô dâu và chú rể"
  fill
  className="object-cover"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  onError={(e) => {
    // Fallback to default image
    e.currentTarget.src = '/images/placeholder.jpg'
  }}
/>
```

**Error Cases**:
1. Image file không tồn tại → Hiển thị placeholder blur
2. Image load chậm → Hiển thị blur placeholder trong lúc loading
3. Image format không đúng → Console warning, hiển thị alt text

### Font Loading Errors

**Strategy**: Sử dụng font-display: swap và fallback fonts

```css
font-family: 'Great Vibes', cursive, system-ui;
font-display: swap;
```

**Error Cases**:
1. Google Fonts không load được → Fallback sang system fonts
2. Vietnamese characters không support → Fallback sang Latin subset
3. Font load chậm → Hiển thị fallback font trước, swap khi ready

### Responsive Layout Issues

**Strategy**: Mobile-first approach với progressive enhancement

**Error Cases**:
1. Viewport quá nhỏ (< 320px) → Maintain minimum readable size
2. Viewport quá lớn (> 2560px) → Max-width container để giữ readability
3. Orientation change → Re-render với layout phù hợp

## Testing Strategy

### Unit Testing Approach

Vì đây là UI update project, testing sẽ tập trung vào:

1. **Component Structure Tests**: Kiểm tra các components render đúng với props và classes mong đợi
2. **CSS Class Tests**: Kiểm tra các elements có đúng Tailwind classes
3. **Image Path Tests**: Kiểm tra tất cả image sources đúng với naming convention
4. **Content Preservation Tests**: Kiểm tra nội dung văn bản không bị thay đổi
5. **File System Tests**: Kiểm tra các file ảnh tồn tại với tên đúng

**Testing Framework**: Jest + React Testing Library

**Example Test Structure**:
```typescript
describe('Hero Section', () => {
  it('should use correct image path', () => {
    render(<Home />)
    const heroImage = screen.getByAlt('Cô dâu và chú rể')
    expect(heroImage).toHaveAttribute('src', expect.stringContaining('/images/hero-couple.jpg'))
  })

  it('should apply display font to title', () => {
    render(<Home />)
    const title = screen.getByText(/Thân mời/i)
    expect(title).toHaveClass('font-display')
  })
})

describe('Gallery Section', () => {
  it('should render 8 gallery images with correct paths', () => {
    render(<Home />)
    for (let i = 1; i <= 8; i++) {
      const image = screen.getByAlt(`Ảnh cưới ${i}`)
      expect(image).toHaveAttribute('src', expect.stringContaining(`/images/gallery-${i}.jpg`))
    }
  })

  it('should use 3:4 aspect ratio', () => {
    render(<Home />)
    const galleryContainers = screen.getAllByTestId('gallery-item')
    galleryContainers.forEach(container => {
      expect(container).toHaveClass('aspect-[3/4]')
    })
  })
})

describe('Font Configuration', () => {
  it('should load Google Fonts with Vietnamese support', () => {
    // Test font imports in layout.tsx
    const layoutContent = fs.readFileSync('app/layout.tsx', 'utf-8')
    expect(layoutContent).toContain('next/font/google')
    expect(layoutContent).toContain('vietnamese')
  })
})

describe('File Structure', () => {
  it('should have all required image files', () => {
    const requiredFiles = [
      'public/images/hero-couple.jpg',
      'public/images/groom.jpg',
      'public/images/bride.jpg',
      'public/images/qr-groom.png',
      'public/images/qr-bride.png',
      ...Array.from({length: 8}, (_, i) => `public/images/gallery-${i+1}.jpg`)
    ]
    
    requiredFiles.forEach(file => {
      expect(fs.existsSync(file)).toBe(true)
    })
  })
})
```

### Manual Testing Checklist

Các aspects cần manual testing:

1. **Visual Design**
   - [ ] Màu sắc pastel nhẹ nhàng, hài hòa
   - [ ] Whitespace tạo cảm giác thoáng đãng
   - [ ] Typography phân cấp rõ ràng
   - [ ] Phong cách tối giản, thanh lịch

2. **Responsive Design**
   - [ ] Test trên iPhone (375px)
   - [ ] Test trên iPad (768px)
   - [ ] Test trên Desktop (1920px)
   - [ ] Test landscape và portrait orientation

3. **Font Rendering**
   - [ ] Font hiển thị đẹp trên Chrome, Firefox, Safari
   - [ ] Tiếng Việt có dấu hiển thị đúng
   - [ ] Font load nhanh, không bị FOUT (Flash of Unstyled Text)

4. **Image Quality**
   - [ ] Ảnh hiển thị sắc nét
   - [ ] Không bị pixelated khi zoom
   - [ ] Lazy loading hoạt động tốt
   - [ ] Placeholder hiển thị mượt mà

5. **Performance**
   - [ ] Page load < 3 seconds
   - [ ] Smooth scrolling
   - [ ] No layout shift (CLS)
   - [ ] Images optimized

### Browser Compatibility Testing

**Target Browsers**:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

**Testing Focus**:
- Font rendering consistency
- CSS Grid support
- Image optimization
- Touch interactions on mobile

### Accessibility Testing

**WCAG 2.1 Level AA Compliance**:
- [ ] Color contrast ratio ≥ 4.5:1 for text
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Semantic HTML structure

**Tools**:
- Lighthouse accessibility audit
- axe DevTools
- WAVE browser extension

### 9. Image Lightbox Component

**Design**: Full-screen image viewer với navigation controls

**Features**:
- Click vào ảnh để mở lightbox
- Ảnh hiển thị vừa khít màn hình (contain)
- Navigation: Previous/Next buttons
- Thumbnail strip ở dưới với horizontal scroll
- Close button ở góc phải trên
- Keyboard navigation (Arrow keys, ESC)
- Smooth transitions giữa các ảnh

**Implementation**:
```typescript
interface LightboxProps {
  images: string[]
  initialIndex: number
  onClose: () => void
}

const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])
  
  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
      {/* Close button */}
      <button className="absolute top-4 right-4 text-white">
        <X size={32} />
      </button>
      
      {/* Main image */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Image
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      {/* Navigation buttons */}
      <button onClick={goToPrevious} className="absolute left-4 top-1/2">
        <ChevronLeft size={48} />
      </button>
      <button onClick={goToNext} className="absolute right-4 top-1/2">
        <ChevronRight size={48} />
      </button>
      
      {/* Thumbnail strip */}
      <div className="h-24 bg-black/50 overflow-x-auto flex gap-2 p-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`flex-shrink-0 w-20 h-20 cursor-pointer ${
              idx === currentIndex ? 'ring-2 ring-white' : ''
            }`}
          >
            <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
```

**Styling**:
```css
- Background: bg-black/95
- Image: object-contain max-h-full max-w-full
- Buttons: text-white hover:text-rose-400 transition
- Thumbnails: w-20 h-20 với ring-2 ring-white cho active
- Transitions: transition-opacity duration-300
```

### 10. Masonry Gallery Layout

**Design**: Gallery với chiều cao ngẫu nhiên, không có border radius

**Implementation**:
```typescript
const galleryImages = [
  { src: '/images/gallery-1.jpg', height: 'tall' },
  { src: '/images/gallery-2.jpg', height: 'medium' },
  { src: '/images/gallery-3.jpg', height: 'short' },
  // ... randomized heights
]

<div className="columns-1 md:columns-2 lg:columns-3 gap-4">
  {galleryImages.map((img, idx) => (
    <div
      key={idx}
      className="mb-4 break-inside-avoid relative group cursor-pointer border-4 border-white"
      onClick={() => openLightbox(idx)}
    >
      <Image
        src={img.src}
        alt={`Gallery ${idx + 1}`}
        width={400}
        height={img.height === 'tall' ? 600 : img.height === 'medium' ? 500 : 400}
        className="w-full"
      />
      {/* Zoom icon on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
      </div>
    </div>
  ))}
</div>
```

**Styling**:
```css
- Layout: columns-1 md:columns-2 lg:columns-3
- Border: border-4 border-white (no radius)
- Hover overlay: bg-black/30
- Zoom icon: opacity-0 group-hover:opacity-100
```

### 11. Enhanced Calendar Heart Icon

**Design**: Icon trái tim lớn hơn, bao trọn ô ngày

**Implementation**:
```typescript
{day === 4 && (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <Image
      src="/images/traitim.png"
      alt="Wedding day"
      width={40}
      height={40}
      className="w-8 h-8 md:w-10 md:h-10 opacity-80"
    />
  </div>
)}
```

**Styling**:
```css
- Position: absolute inset-0
- Size: w-8 h-8 md:w-10 md:h-10 (larger than before)
- Opacity: opacity-80 để không che khuất số ngày
- Z-index: z-10 để hiển thị trên background
```

### 12. Full-Width Couple Section

**Design**: Section với background full-width, tên sử dụng font đặc biệt

**Implementation**:
```typescript
<section className="w-full bg-white reveal">
  <div className="section-container-centered">
    <div className="text-center mb-12">
      <h2 className="font-serif text-2xl md:text-3xl text-gray-700 mb-4">Chúng Mình Là</h2>
      <div className="w-16 h-px bg-gold-400 mx-auto"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
      {/* Groom */}
      <div className="text-center reveal">
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-200">
          <Image src="/images/groom.jpg" alt="Chú rể" fill className="object-cover" />
        </div>
        <h3 className="font-display text-3xl md:text-4xl mb-3 text-rose-400">Đình Phương</h3>
        {/* Removed "The Groom" text */}
        <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
          Con ông: Trịnh Đình Bình<br />
          Con bà: Đinh Thị Thơm
        </p>
      </div>

      {/* Bride */}
      <div className="text-center reveal">
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-200">
          <Image src="/images/bride.jpg" alt="Cô dâu" fill className="object-cover" />
        </div>
        <h3 className="font-display text-3xl md:text-4xl mb-3 text-rose-400">Phương Hiền</h3>
        {/* Removed "The Bride" text */}
        <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
          Con ông: Trần Phú<br />
          Con bà: Đỗ Thanh Liêm
        </p>
      </div>
    </div>
  </div>
</section>
```

**Styling**:
```css
- Section: w-full (full width background)
- Names: font-display text-3xl md:text-4xl text-rose-400
- Removed: "The Groom" và "The Bride" text
```

### 13. Font Constants Configuration

**Location**: `lib/fonts.ts` (new file)

**Implementation**:
```typescript
import { Great_Vibes, Playfair_Display, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const FONT_CONFIG = {
  display: {
    name: 'Great Vibes',
    font: Great_Vibes({ 
      weight: '400',
      subsets: ['latin', 'vietnamese'],
      variable: '--font-display'
    })
  },
  serif: {
    name: 'Playfair Display',
    font: Playfair_Display({ 
      weight: ['400', '600', '700'],
      subsets: ['latin', 'vietnamese'],
      variable: '--font-serif'
    })
  },
  sans: {
    name: 'Montserrat',
    font: Montserrat({ 
      weight: ['300', '400', '500', '600'],
      subsets: ['latin', 'vietnamese'],
      variable: '--font-sans'
    })
  },
  event: {
    name: 'iCiel Rift Regular',
    font: localFont({
      src: '../public/fonts/ICIEL-Rift-Regular.otf',
      variable: '--font-event',
      display: 'swap'
    })
  }
}

// Export for easy access
export const displayFont = FONT_CONFIG.display.font
export const serifFont = FONT_CONFIG.serif.font
export const sansFont = FONT_CONFIG.sans.font
export const eventFont = FONT_CONFIG.event.font
```

### 14. Falling Hearts and Petals Animation

**Design**: CSS animation cho trái tim và cánh hoa rơi

**Implementation**:
```typescript
// Component: FallingElements.tsx
const FallingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Hearts */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`heart-${i}`}
          className="falling-heart absolute"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          ❤️
        </div>
      ))}
      
      {/* Petals */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`petal-${i}`}
          className="falling-petal absolute"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 5}s`
          }}
        >
          🌸
        </div>
      ))}
    </div>
  )
}
```

**CSS Animation**:
```css
@keyframes fall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes sway {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}

.falling-heart {
  animation: fall linear infinite, sway 3s ease-in-out infinite;
  font-size: 1.5rem;
}

.falling-petal {
  animation: fall linear infinite, sway 4s ease-in-out infinite;
  font-size: 1.2rem;
}
```

### 15. Background Music Player

**Design**: Auto-play music với toggle control

**Implementation**:
```typescript
// Component: MusicPlayer.tsx
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  
  useEffect(() => {
    // Auto-play on mount (may be blocked by browser)
    audioRef.current?.play().catch(() => {
      setIsPlaying(false)
    })
  }, [])
  
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  
  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/wedding-song.mp3" type="audio/mpeg" />
      </audio>
      
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </>
  )
}
```

**README.md Instructions**:
```markdown
## Thay đổi nhạc nền

### Sử dụng file offline:
1. Đặt file nhạc (.mp3) vào thư mục `public/music/`
2. Đổi tên file thành `wedding-song.mp3` hoặc cập nhật path trong `MusicPlayer.tsx`

### Sử dụng link online:
1. Mở file `components/MusicPlayer.tsx`
2. Thay đổi src trong thẻ audio:
   ```typescript
   <source src="https://your-music-url.com/song.mp3" type="audio/mpeg" />
   ```
```

### 16. Fixed Position Controls

**Design**: Scroll to top và music control stacked vertically

**Implementation**:
```typescript
<div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
  {/* Scroll to top - on top */}
  {showScrollTop && (
    <button
      onClick={scrollToTop}
      className="bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
    >
      <ChevronUp size={24} />
    </button>
  )}
  
  {/* Music control - below */}
  <button
    onClick={toggleMusic}
    className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
  >
    {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
  </button>
</div>
```

**Styling**:
```css
- Container: fixed bottom-4 right-4 flex flex-col gap-3
- Buttons: p-3 rounded-full shadow-lg
- Scroll button: bg-gold-500 hover:bg-gold-600
- Music button: bg-rose-500 hover:bg-rose-600
- Hover effect: hover:scale-110 transition-all
```

## Implementation Notes

### Migration Strategy

1. **Phase 1: Font Setup**
   - Update layout.tsx với Google Fonts
   - Update tailwind.config.js với font variables
   - Update globals.css với font classes

2. **Phase 2: Image Renaming**
   - Rename existing images theo IMAGES_GUIDE.md
   - Verify tất cả files tồn tại
   - Update image paths trong code

3. **Phase 3: UI Update**
   - Update color scheme sang pastel
   - Update spacing và whitespace
   - Update borders và shadows
   - Update typography classes

4. **Phase 4: New Features**
   - Implement lightbox component
   - Implement masonry gallery
   - Add falling animations
   - Add music player
   - Update calendar heart icon
   - Update couple section styling

5. **Phase 5: Testing & Refinement**
   - Run unit tests
   - Manual testing trên các devices
   - Performance optimization
   - Final adjustments

### Rollback Plan

Nếu có issues sau deployment:
1. Git revert về commit trước update
2. Restore original image files nếu cần
3. Clear CDN cache cho fonts và images

### Performance Considerations

- **Font Loading**: Sử dụng font-display: swap để tránh FOIT
- **Image Optimization**: Next.js Image component tự động optimize
- **Code Splitting**: Next.js tự động code split theo routes
- **Caching**: Leverage browser caching cho static assets
- **Animations**: Sử dụng CSS transforms và opacity để tránh repaints
- **Music**: Lazy load audio file, chỉ load khi cần

### SEO Considerations

- Giữ nguyên metadata trong layout.tsx
- Giữ nguyên alt text cho images
- Giữ nguyên semantic HTML structure
- Không thay đổi URL structure
