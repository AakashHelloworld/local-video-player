"use client";
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from "@/provider/state-manager";
import DirectoryTree from './_componenets/DirectoryTree';
import { useRouter } from 'next/navigation';
import Navbar from './_componenets/Navbar';
type Context = {
  state?: any;
  dispatch?: any;
};
import NoteKeeper from './_componenets/NoteKeeper';
import ControlVid from './_componenets/ControlVid';
import VidPlayer from './_componenets/VidPlayer';


const HomePage = () => {

  const router = useRouter()
  const { state, dispatch }: Context = useGlobalContext();
  const FILE_SELECTED = state.file || [];
  const VIDEOLIST = state.videosList || [];
  const subtitles = state.subtitle || [];
  const directory = state.directory
  const [arrowUp, setArrowUp] = useState(false);

    useEffect(()=>{
          if(FILE_SELECTED?.length == 0) router.push("/")
    }, [FILE_SELECTED])

  const [selectedVideo, setSelectedVideo] = useState(FILE_SELECTED.length ? {
    name : FILE_SELECTED[0].name,
    url:FILE_SELECTED[0].url} : null);
  const [autoNext, setAutoNext] = useState(true);
  const [autoPlay , setAutoPlay] = useState(false);;
  const [light, setLight] = useState(false);


  // const handleEnded = async() => {
  //   if (autoNext) {

  //     const currentIndex = VIDEOLIST.findIndex((video: any) => video.name === selectedVideo?.name);
  //     let filterVideo = VIDEOLIST.filter((video:any)=> video.name == selectedVideo?.name)
  //     const AllvideoAccept = VIDEOLIST.filter((video:any)=> video.name != selectedVideo?.name)
  //     filterVideo[0].completion = "Yes"
  //     const AllVideoNow =[...AllvideoAccept, ...filterVideo]
  //     console.log(AllVideoNow)
  //     dispatch({ type: 'VIDEO_ENDED_COMPLETION', payload: AllVideoNow });
  //     const totalFiles = {
  //       files: FILE_SELECTED,
  //       subTitles: subtitles,
  //       videosList: AllVideoNow
  //     }
  //    // Write the updated videos list to video.json
  //   if (directory) {
  //     try {
  //       const videoFileHandle = await directory.getFileHandle('video.json');
  //       const writableStream = await videoFileHandle.createWritable();
  //       await writableStream.write(JSON.stringify(totalFiles, null, 2));
  //       await writableStream.close();
  //     } catch (error) {
  //       console.error('Failed to write to video.json:', error);
  //     }
  //   }

      
  //     if (currentIndex >= 0 && currentIndex < VIDEOLIST.length - 1) {
  //       setSelectedVideo({
  //         name:VIDEOLIST[currentIndex + 1].name,
  //         url:VIDEOLIST[currentIndex + 1].url});
  //     }
  //   }
  // };

  const handleEnded = async () => {
    if (autoNext) {
      // Find the current video index in the original VIDEOLIST
      const currentIndex = VIDEOLIST.findIndex((video: any) => video.name === selectedVideo?.name);
      
      // Mark the current video as completed
      const updatedVideosList = VIDEOLIST.map((video: any) => {
        if (video.name === selectedVideo?.name) {
          return { ...video, completion: 'Yes' };
        }
        return video;
      });
  
      // Update the state with the new videos list
      dispatch({ type: 'VIDEO_ENDED_COMPLETION', payload: updatedVideosList });
  
      // Create the totalFiles object to be written to video.json
      const totalFiles = {
        files: FILE_SELECTED,
        subTitles: subtitles,
        videosList: updatedVideosList,
      };
  
      // Write the updated videos list to video.json
      if (directory) {
        try {
          const videoFileHandle = await directory.getFileHandle('video.json');
          const writableStream = await videoFileHandle.createWritable();
          await writableStream.write(JSON.stringify(totalFiles, null, 2));
          await writableStream.close();
        } catch (error) {
          console.error('Failed to write to video.json:', error);
        }
      }
  
      // Determine the next video to play
      if (currentIndex >= 0 && currentIndex < updatedVideosList.length - 1) {
        const nextVideoIndex = updatedVideosList.findIndex((video: any) => video.name === VIDEOLIST[currentIndex + 1].name);
        if (nextVideoIndex >= 0) {
          setSelectedVideo({
            name: updatedVideosList[nextVideoIndex].name,
            url: updatedVideosList[nextVideoIndex].url,
          });
        }
      }
    }
  };
  



  return (
    < >
      <Navbar />
      <div className="min-h-screen flex ">

        {/* Sidebar */}
        <div className="w-[300px] shadow-lg  overflow-x-hidden overflow-y-auto ">
          <h2 className="text-xl font-bold mb-6 ml-[1rem] dark:text-white">Local Directory Viewer</h2>
          <DirectoryTree files={FILE_SELECTED} onVideoSelect={(url :any)=>{
            setSelectedVideo({
              name : VIDEOLIST.find((video: any) => video.url === url)?.name,
              url:url
            })}} selectedVideo={selectedVideo} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4  ">
          {
            !arrowUp &&
            <>
          <VidPlayer selectedVideo={selectedVideo} handleEnded={handleEnded} autoPlay={autoPlay}/>
            
          <ControlVid light={light} autoPlay={autoPlay} autoNext={autoNext} toggleAutoNext={()=>{
            setAutoNext(!autoNext)
          }} toggleAutoPlay={()=>{setAutoPlay(!autoPlay)}} toggleLight={()=>{setLight(!light)}} />
          </>
          }

          <NoteKeeper arrowUp={arrowUp} setArrowUp={setArrowUp} selectedVideo={selectedVideo as any} />
            
        </div>


      </div>
      {
        light &&
      <div className='fixed bottom-0 left-0 right-0 w-full h-screen bg-[black] opacity-95 z-8' onClick={()=>{setLight(false)}}>
      </div>
      }
    </>
  );
};

export default HomePage;
