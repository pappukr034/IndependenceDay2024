import React, { useState } from 'react';
import Flag from './Flag'; // Assuming you have a Flag component
import Confetti from 'react-confetti';
import flag from '../assets/flag.mp4'

const HomePage = () => {
  const [magic, setMagic] = useState(false);

  const handleMagicClick = () => {
    setMagic(true);
    setTimeout(() => setMagic(false), 5000); // Magic lasts for 5 seconds
  };

  return (
    <div className="flex py-4 overflow-x-auto px-3 flex-col items-center justify-center  bg-blue-50 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
      <h1 className="text-4xl md:text-6xl mt-5 text-gray-800 mb-8  text-center font-bold  ">
      ❤️ Welcome to the Independence Day Celebration! 🇮🇳
      </h1>

      <div className="mt-8 flex justify-center items-center">
        <video
        controls
        autoPlay
        loop
        className="w-[40%] h-[50%]  rounded-lg shadow-lg"
        >
        <source src={flag} type="video/mp4" />
        Your browser does not support the video tag.
       </video>
    </div>

      <button
        onClick={handleMagicClick}
        className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-5"
      >
        Click for Magic ✨
      </button>

      {/* Magic effect */}
      {magic && (
        <div className="absolute inset-0 flex items-center justify-center z-50 px-4 top-16 ">
          <div className='flex flex-col justify-center items-center'>
          <Flag />
          <h1 className=' text-4xl md:text-6xl font-bold text-center p-4 bg-green-400 rounded-lg  '>❤️ Happy Independence Day 2024 ✨</h1>
          </div>
          <Confetti width={window.innerWidth} height={window.innerHeight} colors={['#FF9933', '#FFFFFF', '#138808']} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
