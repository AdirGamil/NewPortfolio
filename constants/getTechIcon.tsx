// getTechIcon.tsx
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
import Node from '@/assets/svgs/Node'
import Reactjs from '@/assets/svgs/Reactjs'
import Redux from '@/assets/svgs/Redux'
import Sass from '@/assets/svgs/Sass'
import Tailwindcss from '@/assets/svgs/Tailwindcss'
import Typescript from '@/assets/svgs/Typescript'
import Vitejs from '@/assets/svgs/Vitejs'
import Vuejs from '@/assets/svgs/Vuejs'
import Wordpress from '@/assets/svgs/Wordpress'

import { JSX } from 'react'

// טיפוס עבור הרכיב
type IconMap = {
  [key: string]: JSX.Element
}

const iconMap: IconMap = {
  React: <Reactjs className="w-5 h-5" />,
  Nextjs: <Nextjs className="w-5 h-5" />,
  Redux: <Redux className="w-5 h-5" />, // אם אין SVG משל Redux, אפשר לשים זמני React או להסיר
  SASS: <Sass className="w-5 h-5" />,
  'Node.js': <Node className="w-5 h-5" />, // אם אין Node, השתמש בלוגו אחר זמני
  MongoDB: <Mongodb className="w-5 h-5" />,
  JavaScript: <Js className="w-5 h-5" />,
  HTML: <Html className="w-5 h-5" />,
  CSS: <Css3 className="w-5 h-5" />,
  TailwindCSS: <Tailwindcss className="w-5 h-5" />,
  Vite: <Vitejs className="w-5 h-5" />,
  TypeScript: <Typescript className="w-5 h-5" />,
  Vue: <Vuejs className="w-5 h-5" />,
  Firebase: <Firebase className="w-5 h-5" />,
  Git: <Git className="w-5 h-5" />,
  Github: <Github className="w-5 h-5" />,
  Docker: <Docker className="w-5 h-5" />,
  Netlify: <Netlify className="w-5 h-5" />,
  Wordpress: <Wordpress className="w-5 h-5" />,
  Figma: <Figma className="w-5 h-5" />,
  Cloudinary: <Cloudinary className="w-5 h-5" />,
  AWS: <Aws className="w-5 h-5" />,
}

export const getTechIcon = (tech: string): JSX.Element | null => {
  return iconMap[tech] ?? null
}
