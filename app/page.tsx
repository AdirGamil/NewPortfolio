'use client'

import About from "./components/About"
import Contactme from "./components/Contactme"
import Header from "./components/Header"
import LatestWorks from "./components/LatestWorks"


const Home = () => {
  return (
    <>
    <Header />
    <About />
    <LatestWorks />
    <Contactme />
    
    </>
  )
}

export default Home