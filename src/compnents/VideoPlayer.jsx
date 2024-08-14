import React, { useState } from 'react';
import kids from '../assets/kids.mp4'
import vid2 from '../assets/vid2.mp4'
import vid3 from '../assets/vid3.mp4'
import vid4 from '../assets/vid4.mp4'
import rohit from '../assets/rohit.mp4'
import champ from '../assets/champ.mp4'


const VideoPlayer = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-50 p-4  bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mt-32">
      {!showVideo && (
        <button
          onClick={handleButtonClick}
          className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          More ✨
        </button>
      )}
      {showVideo && (
        <div className=' flex flex-col md:flex-row justify-center items-center space-x-4 gap-2'> 
            <div className="mt-8">
             <video
                controls
                className=" w-[100%] h-[50%] max-w-3xl rounded-lg shadow-lg"
             >
                <source src={kids} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

            <div className="mt-8">
             <video
                controls
                className=" w-[100%] h-[40%] rounded-lg shadow-lg"
             >
                <source src={vid3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

            <div className="mt-8">
             <video
                controls
                className=" w-[100%] h-[50%] max-w-3xl rounded-lg shadow-lg"
             >
                <source src={vid4} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

            <div className="mt-8">
             <video
                controls
                className=" w-[100%] h-[50%] max-w-3xl rounded-lg shadow-lg"
             >
                <source src={champ} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

            <div className="mt-8">
             <video
                controls
                className=" w-[100%] h-[50%] max-w-3xl rounded-lg shadow-lg"
             >
                <source src={rohit} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        
      </div>
      )}
    </div>
  );
};

export default VideoPlayer;
