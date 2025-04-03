// RootLayout.tsx

import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from './components/Navbar'
import Top from './components/Top'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Adir Gamil Portfolio',
  description: 'Full Stack Developer with a passion for building beautiful, accessible, and responsive web applications using React, Next.js, TailwindCSS and more.',
  keywords: ['Adir Gamil','Adir', 'Full Stack Developer', 'React Developer', 'Next.js', 'Portfolio', 'TailwindCSS', 'Frontend Developer'],
  authors: [{ name: 'Adir Gamil', url: 'https://adirg.dev/' }],
  creator: 'Adir Gamil',
  themeColor: '#ffffff',
  colorScheme: 'light dark',
  openGraph: {
    title: 'Adir Gamil Portfolio',
    description: 'Explore my portfolio showcasing React, Next.js, and TailwindCSS projects.',
    url: 'https://adirg.dev/',
    siteName: 'Adir Gamil Portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/drejchdwh/image/upload/v1743682504/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2025-04-03_151434_meo03n.png',
        width: 1200,
        height: 630,
        alt: 'Adir Gamil Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adir Gamil Portfolio',
    description: 'Check out my work as a Full Stack Developer.',
    creator: '@adirgamil',
    images: [
      'https://res.cloudinary.com/drejchdwh/image/upload/v1743682504/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2025-04-03_151434_meo03n.png',
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ הוספת הסקריפט כאן */}
        <Script
          src="https://cdn.enable.co.il/licenses/enable-L24245psuckyng21-0124-55089/init.js"
          strategy="afterInteractive"
        />
      </head>

      <body className="scroll-smooth">
        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Top />
        <Footer />
      </body>
    </html>
  )
}
