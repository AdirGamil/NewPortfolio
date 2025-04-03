import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'


const portfolio = [
  {
    id: 1,
    title: 'Worksapce Landing',
    image:
      'https://res.cloudinary.com/drejchdwh/image/upload/v1742561995/8e14459fb3fdde9b3e0eff279161e77d.webp',
    description: 'Description of project 1',
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

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="flex relative flex-col gap-3 w-[335px] h-[335px] items-center justify-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[270px] rounded-lg border border-black bg-white px-4 py-3 flex items-center justify-between shadow-md">
              {/* טקסט */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-800 truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* כפתור חץ */}
              <button
                className="w-10 h-10 flex items-center bg-[#D8FC68] justify-center border border-gray-400 rounded-full ml-4 hover:bg-gray-100 transition"
                aria-label="Open"
              >
                  <FiExternalLink className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestWorks
