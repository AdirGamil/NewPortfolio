// components/Navbar/NavbarMobile.tsx
'use client'

import { navbarLinks } from '@/constants/contacts'

const NavbarMobile = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center space-y-6">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-xl font-bold"
      >
        ✕
      </button>
      <ul className="text-center text-2xl font-medium space-y-4">
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} onClick={onClose}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavbarMobile
