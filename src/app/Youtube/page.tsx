"use client"
import React, { useEffect, useState } from 'react';
import Navbar from "../Player/_componenets/Navbar";
import { useGlobalContext } from "@/provider/state-manager";
import { useRouter } from 'next/navigation';
import YoutubeList from './_componenets/YoutubeList';
import ControlVid from '../_components/ControlVid';
import VidPlayer from '../_components/VidPlayer';
import Myvideo from '../_components/Myvideo';
type Context = {
    state?: any;
    dispatch?: any;
  };

export const runtime = "edge";
export default function Home () {

    const router = useRouter()
    const { state, dispatch }: Context = useGlobalContext();
    const FILE_SELECTED = state.file || [];
    const VIDEOLIST = state.videosList || [];
    const subtitles = state.subtitle || [];
    const directory = state.directory
    const [selectedVideo, setSelectedVideo] = useState(VIDEOLIST.length ? {
        name : VIDEOLIST[0].name,
        url:VIDEOLIST[0].url} : null);

    useEffect(()=>{
            if(FILE_SELECTED?.length == 0) router.push("/")
      }, [FILE_SELECTED])
    const [autoNext, setAutoNext] = useState(true);
    const [autoPlay , setAutoPlay] = useState(false);;

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

        return(
           <>
            <Navbar need_pdf={false}/>
            <div className="h-[95vh] flex flex-col sm:flex-row ">

            {/* <Youtube /> */}
            {/* sidebar */}
            <div className='w-full sm:w-[65%]  p-4'>
               <Myvideo selectedVideo={selectedVideo} autoPlay={autoPlay} handleEnded={handleEnded} />
              <ControlVid  autoPlay={autoPlay} autoNext={autoNext} toggleAutoNext={()=>{
            setAutoNext(!autoNext)
          }} toggleAutoPlay={()=>{setAutoPlay(!autoPlay)}} />
            </div>
            <div className='w-full sm:w-[35%] sm:overflow-scroll sm:h-full'>
                <YoutubeList selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} VIDEOLIST={VIDEOLIST} />
            </div>
            </div>

           </>
        )
}