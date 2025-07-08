import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mmabiaa Cares',
  description: 'A NGO foundation supporting kids and the needy.',
  generator: 'Tech-By-Mmabiaa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
