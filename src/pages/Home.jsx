import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Page2 from '../components/Page2'
import About from './About'
import LatestVideos from '../components/LatestVideo'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='w-screen h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-br from-pink-500/60 to-pink-700/75'> 
      <Navbar />    
      <Hero />
      <Page2 /> 
      <About />
      <LatestVideos />
      <Footer />

    </div>
  )
}

export default Home