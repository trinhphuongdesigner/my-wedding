import type { Metadata } from 'next'
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
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
