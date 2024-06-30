import { useGlobalContext } from "@/provider/state-manager";

type Context = {
  state?: any;
  dispatch?: any;
};

import Video  from "next-video"
export default function VidPlayer({selectedVideo, autoPlay, handleEnded}:any) {
  const { state }: Context = useGlobalContext();
  const Subtitles:[any] = state.subtitle || []
  const VIDEOLIST = state.videosList || []


        return ( 
            <div className="bg-black overflow-hidden shadow-lg relative z-[2] rounded-tl-lg rounded-tr-lg mt-1 ">
                  { (VIDEOLIST?.length && selectedVideo) ?
                    VIDEOLIST?.map((video :any)=>{
                        if(video?.name == selectedVideo?.name){
                          return (
                          < Video key={video.name} className="w-full h-[500px]" src={video?.url} onEnded={handleEnded} autoPlay={autoPlay}  >

                          { !!Subtitles?.length &&
                            Subtitles?.map((data)=>{
                              console.log(data)
        
                              console.log(selectedVideo)
                              if(selectedVideo?.name?.split('.')[0] == data?.name?.split('.')[0]){
                              return (
                                <track
                                key={data.name}
                                src={data?.url}
                                kind="subtitles"
                                srcLang="en"
                                label="English">
                              </track>
                              )
                            }
                            })
        
        
                          }
                        </Video>)
                          
                        }
                    })
:         <div className='w-full h-[500px] flex justify-center items-center border border-gray-200 rounded '>
            <p className="text-gray-500 text-md">Please select a video from the sidebar.</p>
          </div>

                  }

          </div>
           )
    }