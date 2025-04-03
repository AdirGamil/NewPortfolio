import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Top from './components/Top'
import Footer from './components/Footer'

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
      <Top />
      <Footer />
    </html>
  )
}
