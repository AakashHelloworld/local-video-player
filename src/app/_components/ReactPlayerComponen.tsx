"use client";
import { useGlobalContext } from "@/provider/state-manager";
import Video from "next-video";
import ReactPlayer from 'react-player'
type Context = {
  state?: any;
  dispatch?: any;
};


export default function ReactPlayerComponents({ selectedVideo, autoPlay, handleEnded, color }: any) {
  const { state }: Context = useGlobalContext();
  const Subtitles = state.subtitle || [];
  const VIDEOLIST = state.videosList || [];

  return (
    <div className="bg-black overflow-hidden shadow-lg relative z-[2] rounded-tl-lg rounded-tr-lg sm:mt-1 video ">
      {(VIDEOLIST?.length && selectedVideo )&& (
        VIDEOLIST?.map((video: any) => {
          if (video?.name === selectedVideo?.name && video.name?.split(".")[0] == Subtitles?.map((data: any) => data.name?.split(".")[0]).toString()) {
            let a: any =[]
            const s = Subtitles?.filter((data: any) =>
               {
                if( data.name?.split(".")[0] == video.name?.split(".")[0]){
                    const subtitle ={
                        kind:"subtitles",
                        src:data?.url,
                        srcLang:"en",
                        default:true
                    }
                    a.push(subtitle)
                    console.log(subtitle)
                    return subtitle
                }
               }
            )[0];
            console.log(a);
            return (
                    <ReactPlayer
                      className="w-full h-[300px] sm:h-[500px]"
                      url={video?.url}
                      onEnded={handleEnded}
                      config={{
                        file: {
                          tracks: [a],
                        },
                      }}
                      controls={true} />
                  )
             
            }else if(video?.name === selectedVideo?.name) {
              console.log(video);
              return (
                <ReactPlayer
                className="w-full h-[300px] sm:h-[500px]"
                url={video?.url}
                onEnded={handleEnded}
                controls={true} />
              )
                
                }
        })       )} 

    </div>
  );
}
