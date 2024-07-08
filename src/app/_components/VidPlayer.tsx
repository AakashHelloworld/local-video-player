"use client";
import { useGlobalContext } from "@/provider/state-manager";
import Video from "next-video";

type Context = {
  state?: any;
  dispatch?: any;
};

export default function VidPlayer({ selectedVideo, autoPlay, handleEnded, color }: any) {
  const { state }: Context = useGlobalContext();
  const Subtitles = state.subtitle || [];
  const VIDEOLIST = state.videosList || [];

  return (
    <div className="bg-black overflow-hidden shadow-lg relative z-[2] rounded-tl-lg rounded-tr-lg sm:mt-1 video ">
      {

    selectedVideo?.url &&
        <Video 
          accentColor={color}
          className="w-full h-[300px] sm:h-[500px]"
          src={selectedVideo?.url}
          onEnded={handleEnded}
          autoPlay={autoPlay}
        >
          {!!Subtitles?.length && Subtitles?.filter((data: any) => selectedVideo?.name?.split(".")[0] === data?.name?.split(".")[0]).map((data: any, i: number) => {
            console.log(data);
            if(i == 0) return (
              <track
                key={data.name}
                src={data?.url}
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            );
          })
        }
          </Video>
      }
    </div>
  );
}
