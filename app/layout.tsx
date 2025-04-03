import type { Metadata } from 'next'
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
      <Navbar />
      <body className="scroll-smooth">{children}</body>
      <Toaster position="top-center" />
      <Top />
      <Footer />
    </html>
  )
}
