'use client'

import { navbarLinks } from '@/constants/contacts'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const NavbarMobile = () => {
  return (
    <div className="block md:hidden px-5 py-4">
      <ul className="space-y-4 bg-white shadow-md p-6 rounded-lg">
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="block text-lg font-medium text-gray-800"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavbarMobile
