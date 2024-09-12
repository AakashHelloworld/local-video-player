"use client";
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import { useGlobalContext } from "@/provider/state-manager";

let videosrc = "/videos/man.mp4";
let sub = "/videos/man.vtt";

type Context = {
    state?: any;
    dispatch?: any;
  };

export default function Myvideo({ selectedVideo, autoPlay, handleEnded, color }: any) {
  const [isClient, setIsClient] = useState(false);
  const { state }: Context = useGlobalContext();
  const Subtitles = state.subtitle || [];
  let readySubtitles : any = []
  Subtitles.map((data: any) => {
    let videoName = selectedVideo?.name?.split(".").slice(0, -1).join(".")
    let subName = data?.name?.split(".").slice(0, -1).join(".")
      if(videoName === subName){

        readySubtitles.push({ kind:"subtitles", src: data?.url, srcLang: "en", label: "English" ,default: true });
            }  }
  );


  // Ensure the component only renders after it is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <div className="bg-black overflow-hidden shadow-lg relative z-[2] rounded-tl-lg rounded-tr-lg sm:mt-1 video ">
          <div className='w-full h-[300px] sm:h-[500px]'>
        {(isClient ) && 
        (
            (selectedVideo?.url && readySubtitles.length > 0) 
            &&
            (
                <ReactPlayer
                width="100%"
                height="100%"
                onEnded={handleEnded}
                muted={false}
                volume={0.5}
                progressInterval={100}
                playbackRate={1.0}
                playing={autoPlay}
                controls={true}
                url={selectedVideo?.url}
                config={{
                  file: {
                    attributes: {
                      crossOrigin: "anonymous", // Allows loading cross-origin subtitles
                    },
                    tracks: [
                        readySubtitles[0]
                    ],
                  },
                }}
              />

            )

            

        )
        }
        {(isClient ) && 
                    (
                        (selectedVideo?.url && readySubtitles.length === 0) &&
                        (
                            <ReactPlayer
                            width="100%"
                            height="100%"
                            onEnded={handleEnded}
                            muted={false}
                            volume={0.5}
                            progressInterval={100}
                            playbackRate={1.0}
                            playing={autoPlay}
                            controls={true}
                            url={selectedVideo?.url}
                          />
            
                        )
                    )
        }
        </div>
    </div>
  );
}
