/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Màu nền chính - kem nhạt
        cream: {
          50: '#FAF8F5',
          100: '#F5F1ED',
        },
        // Màu be nhạt
        beige: {
          50: '#F5F1ED',
          100: '#EBE5DD',
        },
        // Hồng pastel như trong ảnh
        rose: {
          50: '#fef7f7',
          100: '#FCE7E9',
          200: '#f9d1d1',
          300: '#f4a8a8',
          400: '#E8B4B8',
          500: '#E39FA4',
          600: '#D88B91',
          700: '#b12a2a',
          800: '#942525',
          900: '#7c2525',
        },
        // Xanh nhẹ như trong ảnh
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Vàng đồng thanh lịch
        gold: {
          50: '#fefbf3',
          100: '#fef6e7',
          200: '#fdebc4',
          300: '#fbd88a',
          400: '#E5C77F',
          500: '#D4AF37',
          600: '#C19B2E',
          700: '#c17817',
          800: '#9d5e19',
          900: '#804f18',
        },
        // Màu xám nhẹ cho text
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        display: ['var(--font-display)'],
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}
