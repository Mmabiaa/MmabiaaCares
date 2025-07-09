// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'Mmabiaa Cares',
  description: 'A NGO foundation supporting kids and the needy.',
  generator: 'Tech-By-Mmabiaa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://i.pinimg.com/736x/2b/4d/e2/2b4de2f6e14f7c3f8410a66ebf15155c.jpg"
          type="image/jpeg"
        />
      </head>
      <body>
        {/* Wrap children with ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
