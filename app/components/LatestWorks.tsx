import { portfolio } from '@/constants/contacts'
import { getTechIcon } from '@/constants/getTechIcon'
import Image from 'next/image'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export type PortfolioItem = {
  id: number
  title: string
  image: string
  description: string
  stack: string[]
  githubLink?: string
  liveLink: string
}

const LatestWorks = () => {
  return (
    <div id="work" className='min-h-screen'>
      <div className="flex flex-col gap-3 items-center justify-center">
        <h5 className="text-2xl">My portfolio</h5>
        <h1 className="text-6xl text-center">My Latest Works</h1>
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
              className="relative w-[90%] max-w-[335px] h-[335px] mx-auto border border-gray-400 rounded-lg overflow-hidden"
            >
              {/* תמונה מלאה */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-lg object-cover"
              />

              {/* שכבת מידע בתחתית */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] rounded-lg border border-black bg-white px-4 py-3 flex items-center justify-between shadow-md">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-800 truncate">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-2 items-center">
                    {item.stack?.map((tech) => (
                      <span key={tech} title={tech}>
                        {getTechIcon(tech) ?? (
                          <span className="text-xs  text-gray-500">{tech}</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-1">
                  {item.githubLink && (
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center bg-[#D8FC68] border border-gray-400 rounded-full transition hover:bg-[#c6eb59] hover:-translate-y-1"
                      title="Github"
                      aria-label="Open Github"
                    >
                      <FiGithub className="text-xl" />
                    </a>
                  )}
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-[#D8FC68] border border-gray-400 rounded-full transition hover:bg-[#c6eb59] hover:-translate-y-1"
                    title="Live Preview"
                    aria-label="Open Live Preview"
                  >
                    <FiExternalLink className="text-xl" />
                  </a>
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
