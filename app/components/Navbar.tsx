'use client'

import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import { navbarLinks } from '@/constants/contacts'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header-bg"
          className="w-full"
        />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <h1 className="text-3xl font-bold">
            Adir<span className="text-red-700">.</span>
          </h1>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 shadow-md bg-white bg-opacity-50 rounded-full px-12 py-3">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2 border rounded-full ml-4 border-gray-500"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="block md:hidden ml-3 cursor-pointer"
          >
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>
      </nav>

      {isMobileOpen && <NavbarMobile onClose={() => setIsMobileOpen(false)} />}
    </>
  )
}

export default Navbar
