import { assets, infoList } from '@/assets/assets'
import Aws from '@/assets/svgs/Aws'
import Cloudinary from '@/assets/svgs/Cloudinary'
import Css3 from '@/assets/svgs/Css3'
import Docker from '@/assets/svgs/Docker'
import Figma from '@/assets/svgs/Figma'
import Firebase from '@/assets/svgs/Firebase'
import Git from '@/assets/svgs/Git'
import Github from '@/assets/svgs/Github'
import Html from '@/assets/svgs/Html'
import Js from '@/assets/svgs/Js'
import Mongodb from '@/assets/svgs/Mongodb'
import Netlify from '@/assets/svgs/Netlify'
import Nextjs from '@/assets/svgs/Nextjs'
import Reactjs from '@/assets/svgs/Reactjs'
import Sass from '@/assets/svgs/Sass'
import Tailwindcss from '@/assets/svgs/Tailwindcss'
import Typescript from '@/assets/svgs/Typescript'
import Vitejs from '@/assets/svgs/Vitejs'
import Vuejs from '@/assets/svgs/Vuejs'
import Wordpress from '@/assets/svgs/Wordpress'
import Image from 'next/image'
import React from 'react'

export const toolsData = [
  Html,
  Css3,
  Sass,
  Tailwindcss,
  Js,
  Typescript,
  Reactjs,
  Nextjs,
  Vuejs,
  Vitejs,
  Firebase,
  Mongodb,
  Wordpress,
  Aws,
  Cloudinary,
  Netlify,
  Docker,
  Git,
  Github,
  Figma,
]

const About = () => {
  return (
    <div id='about' className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-5xl text-center">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user profile"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            Im a front-end developer with a passion for creating engaging and
            user-friendly web experiences. I enjoy using modern web technologies
            like React, Next.js, and Tailwind CSS to build fast, scalable, and
            maintainable web applications. When Im not coding, I enjoy playing
            video games, watching movies, and traveling to new places. Im also
            interested in learning about different cultures and trying new
            foods. Im always looking for new challenges and opportunities to
            grow as a developer, so feel free to reach out to me if you have any
            projects or ideas youd like to discuss.
          </p>

          {/* <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 hover:shadow-md hover:bg-[#F6F1FF] hover:-translate-y-1 duration-500 rounded-xl p-6 cursor-pointer"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul> */}
          <h4 className="text-2xl my-6 text-gray-600">Tools I Use</h4>
          <ul className="flex flex-wrap xl:max-w-[60%] gap-4 items-center mt-4">
            {toolsData.map((ToolIcon, index) => (
              <li key={index} className="w-10 h-10 md:w-12 md:h-12">
                <ToolIcon className="w-full h-full hover:-translate-y-1 duration-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
