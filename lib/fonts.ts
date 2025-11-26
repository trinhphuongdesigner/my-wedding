import localFont from 'next/font/local'

// Font loaders must be called at module scope
// Title font - Great Vibes
const greatVibesFont = localFont({
  src: '../public/fonts/GreatVibes-Regular.ttf',
  variable: '--font-display',
  display: 'swap',
})

// Names font - UVF Verner
const uvfVernerFont = localFont({
  src: '../public/fonts/UVF Verner.ttf',
  variable: '--font-names',
  display: 'swap',
})

// Content font - VL AmpleSoft
const ampleSoftFont = localFont({
  src: '../public/fonts/VL_AmpleSoft.otf',
  variable: '--font-sans',
  display: 'swap',
})

// Calendar/Event font - iCiel Rift Regular
const icielRiftFont = localFont({
  src: '../public/fonts/ICIEL-Rift-Regular.otf',
  variable: '--font-event',
  display: 'swap'
})

// Font configuration object
export const FONT_CONFIG = {
  display: {
    name: 'Great Vibes',
    font: greatVibesFont
  },
  names: {
    name: 'UVF Verner',
    font: uvfVernerFont
  },
  sans: {
    name: 'VL AmpleSoft',
    font: ampleSoftFont
  },
  event: {
    name: 'iCiel Rift Regular',
    font: icielRiftFont
  }
}

// Export for easy access
export const displayFont = FONT_CONFIG.display.font
export const namesFont = FONT_CONFIG.names.font
export const sansFont = FONT_CONFIG.sans.font
export const eventFont = FONT_CONFIG.event.font
