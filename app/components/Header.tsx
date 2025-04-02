import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4'>
        <div>
          <Image
            src={assets.profile_img}
            alt="profile"
            className="rounded-full w-32"
          />
        </div>
        <h3 className="flex items-end text-xl md:text-2xl mb-3 gap-2">
          Adir Gamil{' '}
          <Image src={assets.hand_icon} alt="profile" className=" w-6" />
        </h3>
        <h1 className="text-5xl md:text-6xl">Fullstack / Frontend Developer</h1>
        <p className="max-w-2xl mx-auto">
          Im a front-end developer with a passion for creating engaging and
          user-friendly web experiences.
        </p>
        <div className='flex flex-col md:flex-row items-center gap-4 mt-4'>
          <a
            href="#contact"
            className="px-10 hover:scale-110 transition-all duration-200 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            contact me{' '}
            <Image src={assets.right_arrow_white} alt="" className=" w-4" />
          </a>
          <a
            href="/adir_gamil_resume.pdf"
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
