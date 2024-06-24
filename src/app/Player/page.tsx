"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from "@/provider/state-manager";
import DirectoryTree from '../_components/DirectoryTree';
import {SkipForward, SkipBack} from "lucide-react"
type Context = {
  state?: any;
  dispatch?: any;
};
import Video from 'next-video';

const HomePage = () => {
  const { state }: Context = useGlobalContext();
  const FILE_SELECTED = state.file || [];
  const [selectedVideo, setSelectedVideo] = useState(FILE_SELECTED.length ? FILE_SELECTED[0].url : null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [speed, setSpeed] = useState(1);
  const [autoSkip, setAutoSkip] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.playbackRate = speed;
      videoRef.current.play();

    }
  }, [selectedVideo, speed]);

  const filterVideoOnly = (files:any) => {
    let filteredFiles:any = [];
  
    files.forEach((item:any) => {
      if (item.kind === 'file') {
        filteredFiles.push(item);
      } else if (item.kind === 'directory' && item.files) {
        const nestedFilteredFiles = filterVideoOnly(item.files);
        filteredFiles = filteredFiles.concat(nestedFilteredFiles);
      }
    });
  
    return filteredFiles;
  };

  const handleEnded = () => {
    if (autoSkip) {
      const filteredVideos = filterVideoOnly(FILE_SELECTED);
      const currentIndex = filteredVideos.findIndex((video: any) => video.url === selectedVideo);
      
      if (currentIndex >= 0 && currentIndex < filteredVideos.length - 1) {
        setSelectedVideo(filteredVideos[currentIndex + 1].url);
        
      }
    }
  };

  const handleFastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // Fast forward 10 seconds
    }
  };

  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10; // Rewind 10 seconds
    }
  };

  const handleSpeedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpeed(parseFloat(event.target.value));
  };

  const toggleAutoSkip = () => {
    setAutoSkip(!autoSkip);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6 overflow-y-auto bg-gray-200">
        <h2 className="text-xl font-bold mb-6">Course Content</h2>
        <DirectoryTree files={FILE_SELECTED} onVideoSelect={setSelectedVideo} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-black rounded-lg overflow-hidden shadow-lg relative">
          {selectedVideo ? (
            <>
            {/* <video
              ref={videoRef}
              className="w-full h-96"
              controls
              onEnded={handleEnded}
              >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
              < Video className="w-full h-[500px]" src={selectedVideo} />
              </>


          ) : (
            <p>Please select a video from the course content.</p>
          )}



        </div>
          {/* Custom Controls */}
          <div className="p-4 w-full flex justify-between bg-black mt-1 rounded">
            <div className='flex gap-4'>
            <button
              className="text-white"
              onClick={handleRewind}
            >
                <SkipBack size={24} />
            </button>
            <button
              className="text-white"
              onClick={handleFastForward}
            >
                <SkipForward size={24} />
            </button>
            </div>
            <div>
            <select
              className="bg-black text-white"
              value={speed}
              onChange={handleSpeedChange}
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
            <button
              className={`text-white ${autoSkip ? 'bg-green-500' : 'bg-red-500'} py-2 px-4 rounded`}
              onClick={toggleAutoSkip}
            >
              {autoSkip ? 'Auto Play: ON' : 'Auto Play: OFF'}
            </button>
            </div>
          </div>



      </div>
    </div>
  );
};

export default HomePage;
