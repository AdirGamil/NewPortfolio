import Image from 'next/image'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const portfolio = [
  {
    id: 1,
    title: 'Worksapce Landing',
    image:
      'https://res.cloudinary.com/drejchdwh/image/upload/v1742561995/8e14459fb3fdde9b3e0eff279161e77d.webp',
    description: 'StarterKit',
    liveLink: 'https://project1.com',
  },
  {
    id: 1,
    title: 'Worksapce Landing',
    image:
      'https://res.cloudinary.com/drejchdwh/image/upload/v1742561995/8e14459fb3fdde9b3e0eff279161e77d.webp',
    description: 'Frontend development',
    githubLink: 'https://github.com/username/project1',
    liveLink: 'https://project1.com',
  },
  {
    id: 1,
    title: 'Worksapce Landing',
    image:
      'https://res.cloudinary.com/drejchdwh/image/upload/v1742561995/8e14459fb3fdde9b3e0eff279161e77d.webp',
    description: 'Mern Stack',
    githubLink: 'https://github.com/username/project1',
    liveLink: 'https://project1.com',
  },
  {
    id: 1,
    title: 'Worksapce Landing',
    image:
      'https://res.cloudinary.com/drejchdwh/image/upload/v1742561995/8e14459fb3fdde9b3e0eff279161e77d.webp',
    description: 'StarterKit',
    githubLink: 'https://github.com/username/project1',
    liveLink: 'https://project1.com',
  },
  {
    id: 1,
    title: 'Worksapce Landing',
    image:
      'https://res.cloudinary.com/drejchdwh/image/upload/v1742561995/8e14459fb3fdde9b3e0eff279161e77d.webp',
    description: 'Frontend development',
    githubLink: 'https://github.com/username/project1',
    liveLink: 'https://project1.com',
  },
  {
    id: 1,
    title: 'Worksapce Landing',
    image:
      'https://res.cloudinary.com/drejchdwh/image/upload/v1742561995/8e14459fb3fdde9b3e0eff279161e77d.webp',
    description: 'Mern Stack',
    githubLink: 'https://github.com/username/project1',
    liveLink: 'https://project1.com',
  },
]

const LatestWorks = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h5 className="text-2xl">My portfolio</h5>
        <h1 className="text-6xl">My Latest Works</h1>
        <p className="mt-4 text-lg max-w-[70%] text-center">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>
      </div>
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 mt-10">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className="relative w-[90%] max-w-[335px] h-[335px] mx-auto"
            >
              {/* תמונה מלאה */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-lg object-cover"
              />

              {/* שכבת מידע בתחתית */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[270px] rounded-lg border border-black bg-white px-4 py-3 flex items-center justify-between shadow-md">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-800 truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex gap-1">

                  {item.githubLink && (
                    <button
                      className="w-8 h-8 flex items-center justify-center bg-[#D8FC68] border border-gray-400 rounded-full transition hover:bg-[#c6eb59] hover:-translate-y-1"
                      aria-label="Open"
                    >
                      <FiGithub className="text-xl" />
                    </button>
                  )}
                  <button
                    className="w-8 h-8 flex items-center justify-center bg-[#D8FC68] border border-gray-400 rounded-full transition hover:bg-[#c6eb59] hover:-translate-y-1"
                    aria-label="Open"
                  >
                    <FiExternalLink className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestWorks
