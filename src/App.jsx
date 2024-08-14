import { useState } from 'react'
import './App.css'
import Footer from './compnents/Footer.jsx'
import HomePage from './compnents/HomePage.jsx'
import VideoPlayer from './compnents/VideoPlayer.jsx'
import PatrioticNavBar from './compnents/PatrioticNavBar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] overflow-x-auto'> 
      <PatrioticNavBar />
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
