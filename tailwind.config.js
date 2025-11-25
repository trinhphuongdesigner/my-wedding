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
          50: '#fefdfb',
          100: '#fdf8f3',
          200: '#f9f0e8',
          300: '#f5e8dd',
        },
        // Hồng pastel như trong ảnh
        rose: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#f9d1d1',
          300: '#f4a8a8',
          400: '#ec7c7c',
          500: '#e25555',
          600: '#d13838',
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
          400: '#f9c74f',
          500: '#f7b32b',
          600: '#e8991c',
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
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
        'love-light': ['Love Light', 'cursive'],
      },
    },
  },
  plugins: [],
}
