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
      <head>
        <link rel="icon" href="https://i.pinimg.com/736x/2b/4d/e2/2b4de2f6e14f7c3f8410a66ebf15155c.jpg" type="image/jpeg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
