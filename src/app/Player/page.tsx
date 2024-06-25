"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from "@/provider/state-manager";
import DirectoryTree from '../_components/DirectoryTree';
import { useRouter } from 'next/navigation';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {FlashlightOff, Flashlight} from "lucide-react";
type Context = {
  state?: any;
  dispatch?: any;
};
import Video from 'next-video';
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"


const HomePage = () => {
  const router = useRouter()
  const { state }: Context = useGlobalContext();
  const FILE_SELECTED = state.file || [];

    useEffect(()=>{
          if(FILE_SELECTED?.length == 0) router.push("/")
    }, [FILE_SELECTED])

  const [selectedVideo, setSelectedVideo] = useState(FILE_SELECTED.length ? FILE_SELECTED[0].url : null);
  // const videoRef = useRef<HTMLVideoElement | null>(null);
  const [autoNext, setAutoNext] = useState(true);
  const [autoPlay , setAutoPlay] = useState(true);
  const [light, setLight] = useState(true);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.load();
  //     videoRef.current.playbackRate = speed;
  //     videoRef.current.play();

  //   }
  // }, [selectedVideo, speed]);

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
    if (autoNext) {
      const filteredVideos = filterVideoOnly(FILE_SELECTED);
      const currentIndex = filteredVideos.findIndex((video: any) => video.url === selectedVideo);
      
      if (currentIndex >= 0 && currentIndex < filteredVideos.length - 1) {
        setSelectedVideo(filteredVideos[currentIndex + 1].url);
      }
    }
  };

  // const handleFastForward = () => {
  //   if (videoRef.current) {
  //     videoRef.current.currentTime += 10; // Fast forward 10 seconds
  //   }
  // };

  // const handleRewind = () => {
  //   if (videoRef.current) {
  //     videoRef.current.currentTime -= 10; // Rewind 10 seconds
  //   }
  // };

  // const handleSpeedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSpeed(parseFloat(event.target.value));
  // };

  const toggleAutoNext = () => {
    setAutoNext(!autoNext);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };
  const toggleLight = () => {
    setLight(!light);
  };

  return (
    <div className={` `}>
    <nav className='flex h-[50px] bg-white  border-b border-gray-200 justify-end px-4'>
      {/* <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" checked={darkMode} onCheckedChange={toggleDarkMode} />
        <Label htmlFor="airplane-mode" className='dark:text-white'>Dark Mode</Label>
      </div> */}
    </nav>
    <div className="min-h-screen flex ">
      {/* Sidebar */}
      <div className="w-[300px] shadow-lg  overflow-x-hidden overflow-y-auto ">
        <h2 className="text-xl font-bold mb-6 ml-[1rem] dark:text-white">Video Content</h2>
        <DirectoryTree files={FILE_SELECTED} onVideoSelect={setSelectedVideo} selectedVideo={selectedVideo} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 relative z-10 ">
        <div className="bg-black overflow-hidden shadow-lg relative rounded-tl-lg rounded-tr-lg mt-1 ">
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
              < Video className="w-full h-[500px]" src={selectedVideo} onEnded={handleEnded} autoPlay={autoPlay} />
              </>


          ) : (
            <p>Please select a video from the course content.</p>
          )}



        </div>
          {/* Custom Controls */}
          <div className="p-6 w-full flex justify-between bg-[black] rounded-bl-lg rounded-br-lg border-t  border-gray-200 " >
            <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms"  checked={autoPlay} onCheckedChange={toggleAutoPlay} className='bg-[white]' />
              <Label htmlFor="terms" className='text-[white]'>Auto Play</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms"  checked={autoNext} onCheckedChange={toggleAutoNext} className='bg-[white]' />
              <Label htmlFor="terms" className='text-[white]'>Auto Next</Label>
            </div>     
            </div>

            <div>
            <div className="flex items-center space-x-2" >
              <Button className='bg-black hover:bg-[black]  flex items-center space-x-2' onClick={toggleLight}>
                {
                  light ?  <Flashlight color='orange' className='w-5 h-5' /> :<FlashlightOff color='white' className='w-5 h-5' />
                } 
                              <Label htmlFor="terms" className='text-[white]'>Light</Label>

              </Button>
            </div>  
            </div>


            </div>
          </div>
    </div>
    {
      light &&
    <div className='fixed bottom-0 left-0 right-0 w-full h-screen bg-[black] opacity-95 z-8' onClick={toggleLight}>
    </div>
    }

    </div>
  );
};

export default HomePage;
