'use client'

import { navbarLinks } from '@/constants/contacts'
import { motion } from 'framer-motion'

const NavbarMobile = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[9999]">
      {/* רקע כהה מטושטש */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* תפריט מחליק פנימה */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg p-6 flex flex-col items-start"
      >
        {/* כפתור סגירה */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-5 right-5 text-2xl font-bold"
        >
          ✕
        </button>

        {/* קישורים */}
        <ul className="mt-20 space-y-6 text-lg font-medium w-full">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={onClose}
                className="block w-full py-2 px-2 hover:bg-gray-100 rounded-md"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default NavbarMobile
