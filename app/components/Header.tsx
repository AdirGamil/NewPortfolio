import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Header = () => {
  return (
    <>
      <div
        id="top"
        className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4"
      >
        <div>
          <Image
            src={assets.profile_img}
            alt="profile"
            className="rounded-full w-32"
          />
        </div>
        <h3 className="flex items-end text-xl md:text-2xl mb-3 gap-2">
          Hi, My name is <span className="font-bold">Adir Gamil</span>{' '}
          <Image src={assets.hand_icon} alt="profile" className=" w-6" />
        </h3>
        <h1 className="text-5xl md:text-6xl h-[120px]">
          I'm a{' '}
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'React & Next.js Developer',
              2000,
              'Frontend Focused',
              2000,
              'Turning Design into Code',
              2000,
              'TailwindCSS Enthusiast',
              2000,
              'Always Learning',
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 hover:scale-110 transition-all duration-200 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            contact me{' '}
            <Image src={assets.right_arrow_white} alt="" className=" w-4" />
          </a>
          <a
            href="/Adir-Resume.pdf"
            download={true}
            className="px-10 hover:scale-110 transition-all duration-200 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            my resume{' '}
            <Image src={assets.download_icon} alt="" className=" w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
