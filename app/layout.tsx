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
  description: '',
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
