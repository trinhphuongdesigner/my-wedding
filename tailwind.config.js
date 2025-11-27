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
        // Hồng đỏ - màu chủ đạo
        rose: {
          50: '#fef5f7',
          100: '#fde8ec',
          200: '#fcd1d9',
          300: '#f9a8b9',
          400: '#EF5C76',
          500: '#e73d5e',
          600: '#d42548',
          700: '#b21a3c',
          800: '#951838',
          900: '#7f1834',
        },
        // Hồng tím
        pink: {
          50: '#faf5f8',
          100: '#f5ebf1',
          200: '#ead8e4',
          300: '#dbbdce',
          400: '#B85985',
          500: '#a8476f',
          600: '#93375b',
          700: '#7c2d4c',
          800: '#692841',
          900: '#582538',
        },
        // Tím đậm
        purple: {
          50: '#f6f5f9',
          100: '#edeaf3',
          200: '#dcd8e8',
          300: '#c2bbd6',
          400: '#a399c0',
          500: '#8a7dab',
          600: '#5D3B78',
          700: '#5a3570',
          800: '#4c2e5e',
          900: '#40284f',
        },
        // Tím xám
        violet: {
          50: '#f8f8fb',
          100: '#f1f1f6',
          200: '#e5e4ed',
          300: '#d3d1df',
          400: '#908CB1',
          500: '#7e799d',
          600: '#6d6688',
          700: '#5d5571',
          800: '#4f485f',
          900: '#433e50',
        },
        // Xanh xám nhạt
        slate: {
          50: '#f8f9fb',
          100: '#f2f4f7',
          200: '#e7eaef',
          300: '#d6dbe4',
          400: '#BBC6D9',
          500: '#a3b0c5',
          600: '#8897af',
          700: '#6f7e98',
          800: '#5c687d',
          900: '#4d5666',
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
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
