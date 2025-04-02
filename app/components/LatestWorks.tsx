import Image from "next/image"

const portfolio = [
  {
    id: 1,
    title: 'Worksapce Landing',
    image:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1743488502/nextjs_qhmbei.png',
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
            className="flex relative flex-col gap-3 items-center justify-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-[335px] h-[335px] object-cover"
            />
            <div className="absolute bg-white w-[270px] rounded-lg border border-black flex items-center justify-center">
              <div>
                <h1 className="text-lg">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestWorks
