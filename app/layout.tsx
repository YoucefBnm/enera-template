import type { Metadata } from 'next'
import { Geist_Mono, Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-heading',
})
export const metadata: Metadata = {
  title: 'Enera Corporate',
  description: 'Systaliko UI template for corporate website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'font-sans',
        inter.variable,
        merriweather.variable,
        geistMono.variable
      )}
    >
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
