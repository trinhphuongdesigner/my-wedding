import type { Metadata } from 'next'
import { Great_Vibes, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const displayFont = Great_Vibes({ 
  weight: '400',
  subsets: ['latin', 'vietnamese'],
  variable: '--font-display',
  display: 'swap',
})

const serifFont = Playfair_Display({ 
  weight: ['400', '600', '700'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-serif',
  display: 'swap',
})

const sansFont = Montserrat({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Đám Cưới Của Chúng Mình',
  description: 'Chúng mình sắp kết hôn! Hân hạnh được đón tiếp quý khách.',
  openGraph: {
    title: 'Đám Cưới Của Chúng Mình',
    description: 'Chúng mình sắp kết hôn! Hân hạnh được đón tiếp quý khách.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${displayFont.variable} ${serifFont.variable} ${sansFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
