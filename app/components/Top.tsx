import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

const Top = () => {
  return (
    <a
      href="#top"
      className="fixed bottom-10 right-10 text-4xl text-gray-700 hover:text-black hover:translate-y-[-4px] transition-transform duration-300 z-50"
      aria-label="Back to Top"
    >
      <FaArrowCircleUp />
    </a>
  )
}

export default Top
