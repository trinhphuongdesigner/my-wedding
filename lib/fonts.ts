import { Great_Vibes, Playfair_Display, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

// Font loaders must be called at module scope
const greatVibesFont = Great_Vibes({ 
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  variable: '--font-display',
  display: 'swap',
})

const playfairDisplayFont = Playfair_Display({ 
  weight: ['400', '600', '700'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-serif',
  display: 'swap',
})

const montserratFont = Montserrat({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
  display: 'swap',
})

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
  serif: {
    name: 'Playfair Display',
    font: playfairDisplayFont
  },
  sans: {
    name: 'Montserrat',
    font: montserratFont
  },
  event: {
    name: 'iCiel Rift Regular',
    font: icielRiftFont
  }
}

// Export for easy access
export const displayFont = FONT_CONFIG.display.font
export const serifFont = FONT_CONFIG.serif.font
export const sansFont = FONT_CONFIG.sans.font
export const eventFont = FONT_CONFIG.event.font
