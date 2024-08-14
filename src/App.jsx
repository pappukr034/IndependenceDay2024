import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flag from './compnents/Flag'
import Footer from './compnents/Footer'
import HomePage from './compnents/HomePage'
import Navbar from './compnents/NavBar'
import VideoPlayer from './compnents/VideoPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] overflow-x-auto'> 
      <Navbar />
      <div className=' w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]'> 
        <HomePage />
        <VideoPlayer />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
