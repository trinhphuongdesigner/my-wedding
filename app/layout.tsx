import type { Metadata } from 'next'
import { displayFont, serifFont, sansFont, eventFont } from '@/lib/fonts'
import './globals.css'

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
    <html lang="vi" className={`${displayFont.variable} ${serifFont.variable} ${sansFont.variable} ${eventFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
